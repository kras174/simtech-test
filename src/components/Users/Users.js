import React, { useContext, useEffect } from "react";
import "./Users.scss";

import { Loader } from "../UI/Loader/Loader";
import { UsersContext } from "../../context/users/usersContext";

export const Users = ({ department }) => {
  const { loading, users, fetchUsers, removeUser } = useContext(UsersContext);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const renderUsers = () => (
    <ul className="list-group">
      {users.map((user, id) => {
        if (user.department !== department) {
          return null;
        }
        return (
          <li key={id} className="list-group-item user">
            <p>{user.name}</p>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                removeUser(user.id);
              }}
            >
              &times;
            </button>
          </li>
        );
      })}
    </ul>
  );

  return <>{loading ? <Loader /> : <>{renderUsers()}</>}</>;
};
