import * as ActionTypes from "./ActionTypes";

export const Dishes = (
  // initial state
  state = { isLoading: true, errMess: null, dishes: [] },
  action
) => {
  // Handling different actions
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dishes: action.payload,
      };

    case ActionTypes.DISHES_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };

    case ActionTypes.DISHES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
