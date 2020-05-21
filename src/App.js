import React from "react";
import { UsersState } from "./context/users/UsersState";
import { AddUserForm } from "./components/AddUserForm/AddUserForm";
import { Departments } from "./components/Departments/Departments";

function App() {
  return (
    <UsersState>
      <div className="container text-center pt-4">
        <h1>Simtech test work</h1>
        <AddUserForm />
        <hr />
        <Departments />
      </div>
    </UsersState>
  );
}

export default App;
