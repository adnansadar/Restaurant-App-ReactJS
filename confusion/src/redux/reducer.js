import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS,
};

// Reducers specify how the application's state changes in response to actions sent to the store.
// Reducer receives the current state and the action to be performed on it, state cannot be modified directly from here
// Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().
export const Reducer = (state = initialState, action) => {
  return state;
};
