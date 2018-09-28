import * as actions from '../actions/SimpleAction';

export const simpleReducer = (state = {}, action) => {
    switch (action.type) {
     case actions.SIMPLE_ACTION:
      return action.payload;
     default:
      return state;
    }
};

export const incrementCountReducer = (state = 0, action) => {
    switch (action.type) {
     case actions.INCREMENT_NUMBER:
      return action.payload + 1;
     default:
      return state;
    }
};

export default simpleReducer;