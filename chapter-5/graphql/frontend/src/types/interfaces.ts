import { User } from "./types";

//User
export interface IUser extends User {
  id?: string;
  token?: string;
  createdAt?: string;
  updatedAt?: string;
}
