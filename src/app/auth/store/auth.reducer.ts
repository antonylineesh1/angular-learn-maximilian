import { User } from "./../user.model";
import * as fromAuth from "../store/auth.actions";

export interface State {
  user: User;
}

export const initialState: State = {
  user: null,
};

export function authReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case fromAuth.LOGIN:
      const { email, userId, token, expirationDate } = action.payload;
      return {
        ...state,
        user: new User(email, userId, token, expirationDate),
      };
      
    case fromAuth.LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
