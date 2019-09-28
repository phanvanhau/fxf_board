import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import ReactTestUtils from 'react-dom/test-utils';
import Board from './board-component';

let container;
const boxes = [{
  color: 'rgb(0, 0, 0)',
  text: 'box 1',
  id: 1
}, {
  color: 'rgb(100, 100, 100)',
  text: 'box 2',
  id: 2
}, {
  color: 'rgb(255, 255, 255)',
  text: 'box 3',
  id: 3
}];

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders with exact number and order of items', () => {
  act(() => {
    ReactDOM.render(<Board boxes={boxes}/>, container);
  });
  const renderedBoxes = container.querySelectorAll('.board-box div[draggable="true"]');
  expect(renderedBoxes).toHaveLength(3);
  expect(renderedBoxes[0].textContent).toEqual('box 1');
  expect(renderedBoxes[1].textContent).toEqual('box 2');
  expect(renderedBoxes[2].textContent).toEqual('box 3');
});

it('start dragging on one box', () => {
  act(() => {
    ReactDOM.render(<Board boxes={boxes}/>, container);
  });
  const renderedBoxes = container.querySelectorAll('.board-box div[draggable="true"]');
  const mockDataTransfer = {setData: jest.fn()};
  ReactTestUtils.Simulate.dragStart(renderedBoxes[0], {dataTransfer: mockDataTransfer});
  expect(mockDataTransfer.setData).toHaveBeenCalledWith('text', 0);
});

it('dropping the dragged box onto another box', () => {
  const swapMock = jest.fn();
  act(() => {
    ReactDOM.render(<Board boxes={boxes} swap={swapMock}/>, container);
  });
  const renderedBoxes = container.querySelectorAll('.board-box div[draggable="true"]');
  const mockDataTransfer = {getData: jest.fn().mockReturnValue(0)};
  ReactTestUtils.Simulate.drop(renderedBoxes[2], {dataTransfer: mockDataTransfer});
  expect(swapMock).toHaveBeenCalledWith(0, 2);
});
