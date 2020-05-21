import React, { useContext, useEffect, Fragment } from "react";
import "./UsersList.scss";

import { Loader } from "../UI/Loader/Loader";
import { UsersContext } from "../../context/users/usersContext";
import { CSSTransition } from "react-transition-group";

export const UsersList = () => {
  const { loading, users, fetchUsers, removeUser } = useContext(UsersContext);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <ul className="list-group">
          {users.map((user, id) => (
            <CSSTransition key={id} classNames={user} timeout={800}>
              <li className="list-group-item user">
                <div>
                  <strong>{user.name}</strong>
                  <small>{user.email}</small>
                </div>
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
            </CSSTransition>
          ))}
        </ul>
      )}
    </Fragment>
  );
};
