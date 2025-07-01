import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
import useEcomStore from "../../store/ecom-store";

const Login = () => {
  // javascript
  const actionLogin = useEcomStore((state) => state.actionLogin);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    // code
    // console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await actionLogin(form);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      Login
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
        <button className="bg-blue-500 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
