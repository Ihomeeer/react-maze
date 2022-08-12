import {
  CHANGE_STARTING_POINT,
  CLEAR_STARTING_POINT,
  CHANGE_FINAL_POINT,
  CLEAR_FINAL_POINT,
  GET_ALL_POINTS,
  CLEAR_ALL_POINTS,
  GET_ALL_ARROWS,
  CLEAR_ALL_ARROWS
} from '../../../utils/constants';

export const initialMazeState = {
  startingPoint: {},
  finalPoint: {},
  allPoints: [],
  allArrows: []
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
      }
    case GET_ALL_POINTS:
      return {
        ...state,
        allPoints: action.payload
      }
    case CLEAR_ALL_POINTS:
      return {
        ...state,
        allPoints: []
      }
    case GET_ALL_ARROWS:
      return {
        ...state,
        allArrows: action.payload
      }
    case CLEAR_ALL_ARROWS:
      return {
        ...state,
        allArrows: []
      }
    default:
      return state;
  }
};
