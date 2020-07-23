import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({
        // createForms creates and manages the reducer and action creater and fills in all the details on its own as its a part of react-redux-form
        feedback: InitialFeedback,
      }),
    }),
    // being supplied as enhancers to our store
    applyMiddleware(thunk, logger)
  );

  return store;
};
