import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  // javascript
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    // code
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert("Confirm Password is not match!");
    }
    console.log(form);
    try {
      const res = await axios.post("http://localhost:5000/api/register", form);
      console.log(res.data);
      toast.success(res.data);
    } catch (err) {
      const errMsg = err.response?.data?.message;
      toast.error(errMsg);
      console.log(err);
    }
  };

  return (
    <div>
      Register
      <form onSubmit={handleSubmit}>
        Email
        <input
          className="border"
          onChange={handleOnChange}
          name="email"
          type="email"
        />
        Password
        <input
          className="border"
          onChange={handleOnChange}
          name="password"
          type="password"
        />
        Confirm Password
        <input
          className="border"
          onChange={handleOnChange}
          name="confirmPassword"
          type="password"
        />
        <button className="bg-blue-500 rounded-md">Register</button>
      </form>
    </div>
  );
};

export default Register;
