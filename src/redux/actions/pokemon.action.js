export const ADD_SELECTDATA = 'ADD_SELECTDATA';
export const DELETE_SELECTDATA = 'DELETE_SELECTDATA';

export const addData = (payload) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SELECTDATA,
      payload,
    });
  };
};

export const deleteData = (payload) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_SELECTDATA,
      payload,
    });
  };
};
