export const BoardActionTypes = {
  SWAP_BOXES: 'SWAP TWO BOXES'
};

export const swapBoxes = (fromBoxIndex, toBoxIndex) => ({
  type: BoardActionTypes.SWAP_BOXES,
  payload: { fromBoxIndex, toBoxIndex }
});
