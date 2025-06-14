export interface User {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  email: string;
  password: string;
}

export interface Userlogin {
  email: string;
  password: string;
}

export interface LoggedInUser {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
}

export interface LoginToken {
  token: string;
  expiresInSeconds: number;
  user: LoggedInUser;
}
