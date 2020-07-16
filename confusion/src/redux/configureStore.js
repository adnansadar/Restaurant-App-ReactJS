import { createStore } from "redux";
// used for creating a react store
import { Reducer, initialState } from "./reducer";

// Creating the react store in a seperate file and exporting it
export const ConfigureStore = () => {
  const store = createStore(
    Reducer, // reducer
    initialState // our initialState
  );

  return store;
};
