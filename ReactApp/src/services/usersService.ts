import { z } from "zod";
import {
  UserViewModel,
  UserViewModelSchema,
} from "../viewModels/userViewModel";

export class UsersService {
  private apiEndpoint: string;

  constructor() {
    this.apiEndpoint = "https://localhost:7131/Users";
  }

  getAllUsers = async (): Promise<UserViewModel[]> => {
    const url = `${this.apiEndpoint}/AllUsers`;
    const response = await fetch(url);
    const usersJson = await response.json();
    const users = z.array(UserViewModelSchema).parse(usersJson);
    return users;
  };
}
