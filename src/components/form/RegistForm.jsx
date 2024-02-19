const RegistForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full h-10 outline-none text-base text-neutral-600 font-bold placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-bold border border-primary rounded-xl"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
        className="w-full h-10 outline-none text-base text-neutral-600 font-bold placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-bold border border-primary rounded-xl"
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        className="w-full h-10 outline-none text-base text-neutral-600 font-bold placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-bold border border-primary rounded-xl"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full h-10 outline-none text-base text-neutral-600 font-bold placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-bold border border-primary rounded-xl"
      />
      <input
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password"
        required
        className="w-full h-10 outline-none text-base text-neutral-600 font-bold placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-bold border border-primary rounded-xl"
      />
      <button
        type="submit"
        className="w-full h-14 rounded-xl bg-primary text-2xl capitalize font-bold text-white"
      >
        register now
      </button>
    </form>
  );
};

export default RegistForm;
