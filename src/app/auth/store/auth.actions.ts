export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_START = "LOGIN_START";
import { Action } from "@ngrx/store";

export class Login implements Action {
  type: string = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
  
}

export class Logout implements Action {
  type: string = LOGOUT;
  constructor() {}
}

export class LoginStart implements Action {
  type: string = LOGIN_START;
  constructor(public payload:{email:string,password:string}){}

}