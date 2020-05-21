import React, { useState, useContext } from "react";
import { UsersContext } from "../../context/users/usersContext";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const { addUser } = useContext(UsersContext);

  const submitHandler = (event) => {
    event.preventDefault();
    addUser(name, email, phone, department);
    setName("");
    setEmail("");
    setPhone("");
    setDepartment("");
  };

  return (
    <form onSubmit={submitHandler} className="addUserForm">
      <div className="form-group">
        <label htmlFor="InputName">User name</label>
        <input
          type="text"
          id="InputName"
          className="form-control"
          placeholder="Enter user name"
          aria-describedby="addName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="InputEmail">User email</label>
        <input
          type="email"
          id="InputEmail"
          className="form-control"
          placeholder="Enter user email"
          aria-describedby="addEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="InputPhone">User phone number</label>
        <input
          type="tel"
          id="InputPhone"
          className="form-control"
          placeholder="Enter user phone namber"
          aria-describedby="addPhone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="InputDepartment">User department</label>
        <input
          type="text"
          id="InputDepartment"
          className="form-control"
          placeholder="Enter user department"
          aria-describedby="addDepartment"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add user
      </button>
    </form>
  );
};
