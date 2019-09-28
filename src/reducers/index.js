import { BoardActionTypes } from '../actions/index';
const initialState = {
  boxes: [...Array(16).keys()].map(n => ({
    id: n,
    text: n.toString(),
    color: getRandomColor()
  }))
};

const boardReducer = (state = initialState, action) => {
  switch(action.type) {
    case BoardActionTypes.SWAP_BOXES:
      const { fromBoxIndex, toBoxIndex } = action.payload;
      if ( fromBoxIndex === toBoxIndex || fromBoxIndex < 0 || fromBoxIndex >= state.boxes.length
          || toBoxIndex < 0 || toBoxIndex >= state.boxes.length) {
        return state;
      }
      const newBoxes = [ ...state.boxes];
      newBoxes[fromBoxIndex] = state.boxes[toBoxIndex];
      newBoxes[toBoxIndex] = state.boxes[fromBoxIndex];
      return { ...state, boxes: newBoxes };
    default:
      return state;
  }
}

function getRandomColor() {
  const rgb = [...Array(3).keys()]
          .map(_ => Math.floor(Math.random() * 256));
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}`;
}

export default boardReducer;