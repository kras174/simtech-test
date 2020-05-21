import React, { useReducer } from "react";
import { UsersContext } from "./usersContext";
import { usersReducer } from "./usersReducer";

import { SHOW_LOADER, FETCH_USERS, REMOVE_USER } from "../types";

export const UsersState = ({ children }) => {
  const initialState = {
    users: [
      {
        id: 1,
        avatar: "",
        name: "Valeriy Ivanov",
        email: "vivanov@simtech.ru",
        phone: 123456,
        department: "it",
      },
      {
        id: 2,
        avatar: "",
        name: "Vasiliy Pupkin",
        email: "vpupkin@simtech.ru",
        phone: 123456,
        department: "it",
      },
      {
        id: 3,
        avatar: "",
        name: "Alexey Petrov",
        email: "apterov@simtech.ru",
        phone: 123456,
        department: "it",
      },
    ],
    loading: false,
  };
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchUsers = () => {
    showLoader();
    // add load users from API here
    dispatch({ type: FETCH_USERS });
  };

  const removeUser = (id) => {
    // add delete user from API here
    dispatch({ type: REMOVE_USER, payload: id });
  };

  return (
    <UsersContext.Provider
      value={{
        fetchUsers,
        removeUser,
        loading: state.loading,
        users: state.users,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
