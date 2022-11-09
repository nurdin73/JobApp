import {TEST_SAGA} from './actions';

const initialState = {
  test: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_SAGA:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
