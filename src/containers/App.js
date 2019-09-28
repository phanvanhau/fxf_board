import { connect } from 'react-redux'
import { swapBoxes } from '../actions'
import Board from '../board-component'

const mapStateToProps = state => ({
  boxes: state.boxes
});

const mapDispatchToProps = dispatch => ({
  swap: (fromBoxIndex, toBoxIndex) => dispatch(swapBoxes(fromBoxIndex, toBoxIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
