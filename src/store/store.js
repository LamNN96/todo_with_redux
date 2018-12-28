import { createStore, combineReducers, applyMiddleware } from "redux";
import TaskReducer from "../reducers/TaskReducer";
import {
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import AppNavigator from "../navigation/AppNavigator";

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
  tasks: TaskReducer
});

const middleWare = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(middleWare));
};

export default configureStore;
