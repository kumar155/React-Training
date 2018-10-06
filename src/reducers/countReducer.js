import * as countActions from '../actions/ComponentActions';

export const CountReducer = (state = 0, action) => {
    switch(action.type){
        case countActions.INCREMENT_COUNT:
            return state + 1;
        default:
            return state;
    }
}

export default CountReducer;