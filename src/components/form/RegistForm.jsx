import { useState } from "react";

const RegistForm = () => {
  const [profileType, setProfileType] = useState(null);
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
        className="w-full h-10 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
        className="w-full h-10 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        className="w-full h-10 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full h-10 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
      />
      <input
        type="password"
        name="confirmpassword"
        placeholder="Confirm Password"
        required
        className="w-full h-10 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
      />
      {/* basic info */}
      <div className="flex flex-col gap-2">
        <select
          className="w-full h-10 p-2 outline-none rounded-xl border border-primary-600 capitalize text-base text-neutral-700 font-medium"
          name="profile type"
          id="profile-type"
          required
          onChange={(e) => setProfileType(e.target.value)}
        >
          <option
            className="capitalize text-base font-medium text-neutral-500 "
            value="select profile type"
            disabled
            selected
          >
            select profile type
          </option>
          <option
            className="capitalize text-base font-medium text-slate-700"
            value="buyer"
          >
            buyer
          </option>
          <option
            className="capitalize text-base font-medium text-slate-700"
            value="employer"
          >
            employer
          </option>
        </select>
        {profileType &&
          (profileType === "buyer" ? (
            <textarea
              className=" w-full outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
              rows="4"
              placeholder="Disability Details"
            />
          ) : (
            <input
              type="text"
              name="company name"
              placeholder="Company Name"
              required
              className="w-full h-10 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
            />
          ))}
      </div>
      {/* ptofile-type */}
      <div className="w-full flex items-center gap-3">
        <div className="flex items-center gap-1">
          <input type="radio" name="gender" id="male" required />
          <label
            className="text-lg font-medium capitalize text-slate-700"
            htmlFor="male"
          >
            male
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="gender" id="female" required />
          <label
            className="text-lg capitalize font-medium text-slate-700"
            htmlFor="female"
          >
            female
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="gender" id="other" required />
          <label
            className="text-lg capitalize font-medium text-slate-700"
            htmlFor="other"
          >
            other
          </label>
        </div>
      </div>
      {/* gender */}
      <div className="w-full flex justify-between gap-1 max-md:flex-col md:items-center md:gap-4">
        <label
          className="capitalize font-medium text-slate-700"
          htmlFor="birth-date"
        >
          enter your birth date
        </label>
        <input
          className="w-full flex-1 h-10 p-2 outline-none rounded-lg border border-primary-600 capitalize text-base font-medium text-neutral-700"
          type="date"
          name="birth-date"
          id="birth-date"
        />
      </div>
      {/* birthdate */}
      <button
        type="submit"
        className="w-full h-14 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-2xl capitalize font-bold text-white"
      >
        register now
      </button>
    </form>
  );
};

export default RegistForm;
