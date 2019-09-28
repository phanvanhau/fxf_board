import boardReducer from './index';
import { swapBoxes } from '../actions/index';

let boxes;

beforeEach(() => {
  boxes = [{
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
})

describe('reducer test', () => {
  it('state inchanges if swapping out of bound index items', () => {
    [[-1,1], [3, 1], [0, -1], [0, 3]].forEach(pairIdx => {
      expect(boardReducer({ boxes }, swapBoxes(pairIdx[0], pairIdx[1])).boxes).toBe(boxes);
    });
  })
  it('state in changes if swapping into the same item itself', () => {
    expect(boardReducer({ boxes }, swapBoxes(1, 1)).boxes).toBe(boxes);
  })
  it('swapping two items does NOT affect the other ones', () => {
    const newState = boardReducer({ boxes }, swapBoxes(0, 2));
    expect(newState.boxes[0]).toBe(boxes[2]);
    expect(newState.boxes[1]).toBe(boxes[1]);
    expect(newState.boxes[2]).toBe(boxes[0]);
  })
});
