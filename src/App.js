import React from "react";
import { UsersList } from "./components/UsersList/UsersList";
import { UsersState } from "./context/users/UsersState";

function App() {
  return (
    <UsersState>
      <div className="container text-center pt-4">
        <h1>Simtech test work</h1>
        <UsersList />
      </div>
    </UsersState>
  );
}

export default App;
