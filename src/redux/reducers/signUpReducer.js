import { ActionTypes } from "../contants/action-types";

const initialState = {
  signUp: [],
};

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_SIGNUP:
      return { ...state, signUp: [...state.signUp, action.payload] };

    default:
      return state;
  }
};
