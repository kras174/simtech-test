import { SHOW_LOADER, FETCH_USERS, ADD_USER, REMOVE_USER } from "../types";

export const usersReducer = (state, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case FETCH_USERS:
      return { ...state, loading: false };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        departments:
          state.departments.indexOf(action.payload.department) !== -1
            ? [...state.departments]
            : [...state.departments, action.payload.department],
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
