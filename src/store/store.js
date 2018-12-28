import { createStore, combineReducers, applyMiddleware } from 'redux';
import taskReducer from '../reducers/taskReducer';
import moduleName from 'module';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer()

const rootReducer = combineReducers({
    nav: navReducer,
    tasks: taskReducer
})

const middleWare = createReactNavigationReduxMiddleware("root", state => state.nav);

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(middleWare)
    );
}

export default configureStore;