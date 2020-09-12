import * as ACTIONS from '../actions/pokemon.action';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_SELECTDATA:
      return [...state, { ...payload }];
    case ACTIONS.DELETE_SELECTDATA:
      return state.filter((item) => {
        return item.id !== payload;
      });
    default:
      return state;
  }
};
