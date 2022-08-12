import {
  CHANGE_STARTING_POINT,
  CLEAR_STARTING_POINT,
  CHANGE_FINAL_POINT,
  CLEAR_FINAL_POINT,
  GET_ALL_POINTS,
  CLEAR_ALL_POINTS,
  GET_ALL_ARROWS,
  CLEAR_ALL_ARROWS,
  OPEN_MODAL,
  CLOSE_MODAL,
  SELECTED_CELL,
  CLEAR_SELECTED_CELL
} from '../../../utils/constants';

export const initialMazeState = {
  startingPoint: {},
  finalPoint: {},
  allPoints: [],
  allArrows: [],
  modalVisibility: false,
  selectedCell: {}
};

export const mazeReducer = (state = initialMazeState, action) => {
  switch (action.type) {
    case CHANGE_STARTING_POINT:
      return {
        ...state,
        startingPoint: action.payload
      };
    case CLEAR_STARTING_POINT:
      return {
        ...state,
        startingPoint: {}
      };
    case CHANGE_FINAL_POINT:
      return {
        ...state,
        finalPoint: action.payload
      };
    case CLEAR_FINAL_POINT:
      return {
        ...state,
        finalPoint: {}
      };
    case GET_ALL_POINTS:
      return {
        ...state,
        allPoints: action.payload
      };
    case CLEAR_ALL_POINTS:
      return {
        ...state,
        allPoints: []
      };
    case GET_ALL_ARROWS:
      return {
        ...state,
        allArrows: action.payload
      };
    case CLEAR_ALL_ARROWS:
      return {
        ...state,
        allArrows: []
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalVisibility: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalVisibility: false
      };
    case SELECTED_CELL:
      return {
        ...state,
        selectedCell: action.payload
      };
    case CLEAR_SELECTED_CELL:
      return {
        ...state,
        selectedCell: {}
      };
    default:
      return state;
  }
};