import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

// Actions are payloads of information that send data from your application to your store. They are the only source of information for the store

// This is an action object which always contains a type
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  // Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants.
  // data that is going to be carried to the reducer function is stored in payload
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

// fetchDishes is a thunk that dispatches several actions
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  // creating a delay of 2000ms
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
  // errmess is a string
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});
