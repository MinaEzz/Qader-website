import { FaUser, FaLock } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";

const LoginForm = ({ setOpenModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="relative border border-primary rounded-xl">
        <FaUser
          className="absolute top-1/2 -translate-y-1/2 left-2  text-neutral-600"
          fontSize={18}
          style={{ pointerEvents: "none" }}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="w-full h-10 outline-none text-base font-bold text-neutral-600 rounded-xl placeholder:text-neutral-500 py-2 pl-8 pr-10 placeholder:text-base placeholder:font-bold"
        />
      </div>
      <div className="relative border border-primary rounded-xl">
        <FaLock
          className="absolute top-1/2 -translate-y-1/2 left-2  text-neutral-600"
          fontSize={18}
          style={{ pointerEvents: "none" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full h-10 outline-none text-base font-bold text-neutral-600 rounded-xl placeholder:text-neutral-500 py-2 pl-8 pr-10 placeholder:text-base placeholder:font-bold"
        />
      </div>
      <strong
        className="text-slate-700 capitalize font-medium text-lg cursor-pointer w-fit"
        onClick={() => setOpenModal(true)}
      >
        forget password?
      </strong>
      <button
        type="submit"
        className="w-full h-14 flex items-center justify-center gap-1 rounded-xl bg-primary text-2xl capitalize font-bold text-white"
      >
        login <LuLogIn fontSize={28} color="white" />
      </button>
    </form>
  );
};

export default LoginForm;
