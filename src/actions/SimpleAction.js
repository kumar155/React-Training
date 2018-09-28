export const SIMPLE_ACTION = 'actions/SimpleAction/SIMPLE_ACTION';

export const INCREMENT_NUMBER = 'actions/simpleAction/INCREMENT_NUMBER';

export const simpleAction = () => ({
     type: SIMPLE_ACTION,
     payload: 'result_of_simple_action'
});

export const incrementCountAction = (prevCount) => ({
    type: INCREMENT_NUMBER,
    payload: prevCount,
});
