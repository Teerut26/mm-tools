import { combineReducers } from "redux";
import { createStore } from "redux";

import { SetPage } from "./SetPage";


const reducer = combineReducers({
  SetPage
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
