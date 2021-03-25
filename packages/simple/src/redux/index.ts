import { combineReducers, createStore } from 'redux';
import { counterReducer } from './counter/reducer';

const appReducer = combineReducers({
    counter: counterReducer
});

export const store = createStore(appReducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
