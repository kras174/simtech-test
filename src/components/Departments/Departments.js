import React, { useContext } from "react";
import "./Departments.scss";
import { UsersContext } from "../../context/users/usersContext";
import { Users } from "../Users/Users";

export const Departments = () => {
  const { departments } = useContext(UsersContext);
  console.log("Render Departments!!!");
  return (
    <div className="departmets-grid">
      {departments.map((department, index) => (
        <div key={index}>
          <h2>{department}</h2>
          <hr />
          <Users department={department} />
        </div>
      ))}
    </div>
  );
};
