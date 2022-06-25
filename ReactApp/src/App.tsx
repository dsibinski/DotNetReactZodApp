import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { UserViewModel } from "./viewModels/userViewModel";
import { UsersService } from "./services/usersService";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState<UserViewModel[] | null>(null);
  const usersService = new UsersService();
  return (
    <div className="App">
      <header>
        <p>Welcome to our sample React app.</p>
        <p>Use the button below to fetch the users.</p>
        <Button
          className="mb-2"
          onClick={() => {
            setUsers(null);
            usersService.getAllUsers().then(setUsers);
          }}
        >
          Fetch users
        </Button>
        {!!users && <UsersList users={users}></UsersList>}
      </header>
    </div>
  );
}

export default App;
