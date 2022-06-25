import { UserViewModel } from "../viewModels/userViewModel";

export class UsersService {
  private apiEndpoint: string;

  constructor() {
    this.apiEndpoint = "https://localhost:7131/Users";
  }

  getAllUsers = async (): Promise<UserViewModel[]> => {
    const url = `${this.apiEndpoint}/AllUsers`;
    const response = await fetch(url);
    const users = (await response.json()) as UserViewModel[];
    return users;
  };
}
