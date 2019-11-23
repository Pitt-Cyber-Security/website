export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPlE_ACTION',
    payload: 'result_of_simple_action',
  });
};
