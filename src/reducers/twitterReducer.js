/**
 * Twitter Reducer
 */

const initialState = {
  data: null,
  error: null,
};

export default function reducer(state= initialState, action) {
  switch (action.type) {
    case 'GET_DATA_LOADED': {
      return {...state,
        data: action.data,
      };
    }
    case 'GET_DATA_ERROR': {
      return {...state,
        error: action.error,
      };
    }
    default:
      // do nothing
  }
  return state;
}
