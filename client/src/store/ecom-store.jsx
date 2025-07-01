import axios from "axios";
import { create } from "zustand";

const ecomStore = (set) => ({
  user: null,
  token: null,
  actionLogin: (form) => {
    const res = axios.post("http://localhost:5000/api/login", form);
    return res;
  },
});

const useEcomStore = create(ecomStore);

export default useEcomStore;
