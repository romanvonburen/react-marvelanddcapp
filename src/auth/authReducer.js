import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  console.log("state:", state);
  console.log("action:", action);
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
