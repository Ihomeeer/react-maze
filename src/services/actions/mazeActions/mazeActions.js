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


export const chgStartingPointAction = (payload) => {
  return {
    type: CHANGE_STARTING_POINT,
    payload: payload
  }
};

export const clrStartingPointAction = () => {
  return {
    type: CLEAR_STARTING_POINT
  }
};

export const chgFinalPointAction = (payload) => {
  return {
    type: CHANGE_FINAL_POINT,
    payload: payload
  }
};

export const clrFinalPointAction = () => {
  return {
    type: CLEAR_FINAL_POINT
  }
};

export const getAllPointsAction = (payload) => {
  return {
    type: GET_ALL_POINTS,
    payload: payload
  }
};

export const clearAllPointsAction = () => {
  return {
    type: CLEAR_ALL_POINTS
  }
};

export const getAllArrowsAction = (payload) => {
  return {
    type: GET_ALL_ARROWS,
    payload: payload
  }
};

export const clearAllArrowsAction = () => {
  return {
    type: CLEAR_ALL_ARROWS
  }
};
