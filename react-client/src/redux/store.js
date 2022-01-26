import { createStore, combineReducers } from 'redux';
import reduser from './reducer';

const reducers = combineReducers({
    counter: reduser
})

let store = createStore(reducers);

export default store;