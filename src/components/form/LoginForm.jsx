import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";

const LoginForm = ({ setOpenModal }) => {
  const BASE_URL = "http://localhost:5000";
  const [loginData, setLoginData] = useState({
    identifier: "", // This can be username, email, or phone number
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users`, { method: "GET" });
      if (!response.ok) {
        console.error("Failed to fetch user data");
        return;
      }
      const userData = await response.json();
      const user = userData.find(
        (u) =>
          u.username === loginData.identifier ||
          u.email === loginData.identifier ||
          u.phoneNumber === loginData.identifier
      );
      if (!user || user.password !== loginData.password) {
        console.error("Invalid credentials");
        return;
      }
      console.log("Login successful");
      // Optionally: Redirect to the user's dashboard or perform additional actions
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} method="POST">
      <div className="relative border border-primary-600 rounded-xl">
        <FaUser
          className="absolute top-1/2 -translate-y-1/2 left-2  text-neutral-700"
          fontSize={18}
          style={{ pointerEvents: "none" }}
        />
        <input
          type="text"
          name="identifier"
          placeholder="Username"
          required
          onChange={handleChange}
          value={loginData.identifier}
          className="w-full h-10 outline-none text-base font-medium text-neutral-700 rounded-xl placeholder:text-neutral-500 py-2 pl-8 pr-10 placeholder:text-base placeholder:font-medium"
        />
      </div>
      <div className="relative border border-primary-600 rounded-xl">
        <FaLock
          className="absolute top-1/2 -translate-y-1/2 left-2  text-neutral-700"
          fontSize={18}
          style={{ pointerEvents: "none" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={loginData.password}
          className="w-full h-10 outline-none text-base font-medium text-neutral-700 rounded-xl placeholder:text-neutral-500 py-2 pl-8 pr-10 placeholder:text-base placeholder:font-medium"
        />
      </div>
      <label
        className="text-neutral-700 capitalize font-medium text-lg cursor-pointer w-fit"
        onClick={() => setOpenModal(true)}
      >
        forget password?
      </label>
      <button
        type="submit"
        className="w-full h-14 flex items-center justify-center gap-1 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-2xl capitalize font-bold text-white"
      >
        login <LuLogIn fontSize={28} color="white" />
      </button>
    </form>
  );
};

export default LoginForm;
