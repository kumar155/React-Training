import * as actionConstants from './actionTypes';

export const simpleAction = () => ({
     type: actionConstants.SIMPLE_ACTION,
     payload: 'result_of_simple_action'
});

export const IncrementNumberAction = (count) => ({
    type: actionConstants.INCREMENT_NUMBER,
    payload: count,
});

export const DecrementCountAction = () => ({
    type: actionConstants.DECREMENT_COUNT,
})