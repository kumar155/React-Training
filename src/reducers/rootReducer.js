import { combineReducers } from 'redux';
import simpleReducer, {incrementCountReducer, decrementCountReducer} from './simpleReducer';

export default combineReducers({
 simpleReducer,
 incrementCountReducer,
 decrementCountReducer
});