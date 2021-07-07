import { User } from "./../user.model";
import * as fromAuth from "../store/auth.actions";

export interface State {
  user: User;
  authError:string,
  isLoading:boolean
}

export const initialState: State = {
  user: null,
  authError:null,
  isLoading:false
};

export function authReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case fromAuth.LOGIN:
      const { email, userId, token, expirationDate } = action.payload;
      return {
        ...state,
        user: new User(email, userId, token, expirationDate),
        authError:null,
        isLoading:false
      };
      
    case fromAuth.LOGOUT:
      return {
        ...state,
        user: null,
      };

    case fromAuth.LOGIN_START:
      return {
        ...state,
        authError:null,
        isLoading:true
      }
    case fromAuth.LOGIN_FAIL:
      console.log('..............inside auth reducer..............');
      return {
        ...state,
        authError:action.payload,
        isLoading:false
      }
    default:
      return state;
  }
}
