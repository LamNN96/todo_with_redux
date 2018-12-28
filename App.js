import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import TaskDetail from "./src/components/TaskDetail";
import TaskReducer from "./src/reducers/TaskReducer";
import AddTaskContainer from "./src/containers/AddTaskContainer";
import TodoListContainer from "./src/containers/TodoListContainer";
import EditTaskContainer from "./src/containers/EditTaskContainer";
import configureStore from "./src/store/store";
import AppWithNavigationState from "./src/navigation/AppWithNavigationState";
// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: TodoListContainer
//     },
//     Detail: {
//       screen: TaskDetail
//     },
//     EditTask: {
//       screen: EditTaskContainer
//     },
//     AddTask: {
//       screen: AddTaskContainer
//     }
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

// const navReducer = createNavigationReducer(AppNavigator);

// const rootReducer = combineReducers({
//   nav: navReducer,
//   tasks: TaskReducer
// });

// const middleWare = createReactNavigationReduxMiddleware(
//   "root",
//   state => state.nav
// );

// const store = createStore(rootReducer, applyMiddleware(middleWare));

// const AppReduxify = reduxifyNavigator(AppNavigator, "root");
// const mapStateToProps = state => ({
//   state: state.nav
// });

const store = configureStore();

// const AppWithNavigationState = connect(mapStateToProps)(AppReduxify);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
