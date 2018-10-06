import { combineReducers } from 'redux';
import simpleReducer, {incrementCountReducer, decrementCountReducer} from './simpleReducer';
import CountReducer from './countReducer';

export default combineReducers({
    simpleReducer,
    incrementCountReducer,
    decrementCountReducer,
    CountReducer,
});