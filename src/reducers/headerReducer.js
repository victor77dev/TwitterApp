/**
 * Header Reducer
 */

const initialState = {
  menuClicked: false,
};

export default function reducer(state= initialState, action) {
  switch (action.type) {
    case 'CLICK_MENU': {
      return {...state,
        menuClicked: true,
      };
    }
    case 'TOGGLED_MENU': {
      return {...state,
      	menuClicked: false,
      };
    }
    default:
      // do nothing
  }
  return state;
}
