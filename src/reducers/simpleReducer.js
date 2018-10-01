import * as actionConstants from '../actions/actionTypes';

export const simpleReducer = (state = {}, action) => {
    switch (action.type) {
     case actionConstants.SIMPLE_ACTION:
      return action.payload;
    case actionConstants.INCREMENT_NUMBER:
      return 'Increment Number button has been clicked..!' + action.payload;
    case actionConstants.DECREMENT_COUNT:
      return 'Decrement Count Button has been clicked...!';
     default:
      return state;
    }
};

export const incrementCountReducer = (state = 0, action) => {
    switch (action.type) {
     case actionConstants.INCREMENT_NUMBER:
      return state + 1;
     default:
      return state;
    }
};

export const decrementCountReducer = (state=10, action) => {
    switch(action.type) {
        case actionConstants.DECREMENT_COUNT:
            return state -1;
        default:
            return state;
    }
}

export default simpleReducer;