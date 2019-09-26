import React from 'react';
import BoxComponent from './box-component';
import {cleanup, fireEvent, render} from '@testing-library/react';

describe('box component test', () => {
  const dragStartMock = jest.fn();
  const dropMock = jest.fn();

  afterEach(cleanup);

  it('renders with correct props', () => {
    const boxPros = {color: 'rgb(100, 150, 200)', text: 'box 5', id: 5};
    const div = document.createElement('div');
    const { getByTestId } = render(<BoxComponent box={boxPros} dragStart={dragStartMock} drop={dropMock}/>, div);
    const elem = getByTestId('boxItem5');
    expect(elem.textContent).toBe('box 5');
    expect(elem.style.backgroundColor).toBe('rgb(100, 150, 200)');
  });

  it('user action dragging one box and dropping onto another one', () => {
    const boxPros1 = {color: 'rgb(100, 150, 200)', text: 'box 1', id: 1};
    const boxPros2 = {color: 'rgb(100, 100, 100)', text: 'box 2', id: 2};
    const div = document.createElement('div');
    const { getByTestId } = render(
      <div>
        <BoxComponent box={boxPros1} dragStart={dragStartMock} drop={dropMock}/>
        <BoxComponent box={boxPros2} dragStart={dragStartMock} drop={dropMock}/>
      </div>, div);
    const elem1 = getByTestId('boxItem1');
    const elem2 = getByTestId('boxItem2');
    fireEvent.dragStart(elem1);
    expect(dragStartMock).toHaveBeenCalled();
    expect(dragStartMock.mock.calls.length).toEqual(1);
    expect(dragStartMock.mock.calls[0][1]).toEqual(boxPros1);
    fireEvent.drop(elem2);
    expect(dropMock).toHaveBeenCalled();
    expect(dropMock.mock.calls.length).toEqual(1);
    expect(dropMock.mock.calls[0][1]).toEqual(boxPros2);
  });
});
