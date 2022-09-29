import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ btnText, handleSubmitData }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const { username, email } = user;

  const handleChange = (e) => {
    const selectedField = e.target.name;
    const selectedValue = e.target.value;

    setUser((prevState) => {
      return { ...prevState, [selectedField]: [selectedValue] };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handeleSubmitData কে পাঠানো হয়েছে user কে app.jsেএ নেওয়ার জন্য
    handleSubmitData(user);
    setUser({
      username: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          value={username}
          name="username"
          id="username"
          onChange={handleChange}
          required
        />
      </div>
      <div className="field-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          email
          name="email"
          id="email"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{btnText}</button>
    </form>
  );
};

UserForm.propTypes = {};

export default UserForm;
