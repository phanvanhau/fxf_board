import React from 'react';
import ReactDOM from 'react-dom';
import BoxComponent from './box-component';
import {cleanup, fireEvent, render} from '@testing-library/react';

var elem;
const dragStartMock = jest.fn();
const dropMock = jest.fn();

afterEach(cleanup);

beforeEach(() => {
  const boxPros = {color: 'rgb(100, 150, 200)', text: '5'};
  const div = document.createElement('div');
  const { getByText, getByTestId } = render(<BoxComponent box={boxPros} dragStart={dragStartMock} drop={dropMock}/>, div);
  elem = getByTestId('boxItem5');
})

it('renders with correct props', () => {
  expect(elem.textContent).toBe('5');
  expect(elem.style.backgroundColor).toBe('rgb(100, 150, 200)');
});

it('user action drag ', () => {
  fireEvent.dragStart(elem);
  expect(dragStartMock).toHaveBeenCalled();
});
