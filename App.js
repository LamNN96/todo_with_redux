import React, { Component } from 'react';
import {
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import { Provider, connect } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from 'react-navigation-redux-helpers';
import TodoList from './src/components/TodoList';
import TaskDetail from './src/components/TaskDetail';
import EditTask from './src/components/EditTask';
import AddTask from './src/components/AddTask';
import taskReducer from './src/reducers/taskReducer';


const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TodoList,
    },
    Detail: {
      screen: TaskDetail
    },
    EditTask: {
      screen: EditTask
    },
    AddTask : {
      screen : AddTask
    }
  },
  {
    initialRouteName: 'Home',
  }
)

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
  tasks: taskReducer
})

const middleWare = createReactNavigationReduxMiddleware("root", state => state.nav);

const store = createStore(
  rootReducer,
  applyMiddleware(middleWare)
)

const AppReduxify = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(AppReduxify);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


const AppContainer = createAppContainer(AppNavigator)
