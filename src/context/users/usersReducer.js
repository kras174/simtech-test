import { SHOW_LOADER, FETCH_USERS, REMOVE_USER } from "../types";

export const usersReducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case FETCH_USERS:
      return { ...state, loading: false };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
