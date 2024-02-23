import { useState } from "react";
import Input from "../shared/Input";
import { TYPESOFDISABILITY } from "../../constants";

const RegistForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [profileType, setProfileType] = useState(null);
  const [gender, setGender] = useState(null);

  console.log(name, email, username, password, confirmPassword, profileType);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {/* basic info */}
      <div className="flex flex-col gap-2">
        <select
          className="w-full h-10 p-2 outline-none rounded-xl border border-primary-600 capitalize text-base text-neutral-700 font-medium"
          name="profile type"
          id="profileType"
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
            <select
              name="type of disability"
              id="typeOfDisability"
              className="w-full h-10 p-2 outline-none rounded-xl border border-primary-600 capitalize text-base text-neutral-700 font-medium"
            >
              <option
                value="select disability type"
                selected
                disabled
                className="capitalize text-base font-medium text-neutral-500 "
              >
                select disability type
              </option>
              {TYPESOFDISABILITY.map((type) => {
                return (
                  <option
                    value={type}
                    key={type}
                    className="capitalize text-base font-medium text-slate-700"
                  >
                    {type}
                  </option>
                );
              })}
            </select>
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
      <div className="w-full flex gap-1 max-md:flex-col md:items-center md:gap-3">
        <label className="text-lg capitalize text-neutral-600" htmlFor="gender">
          select your gender
        </label>
        <div className="flex items-center gap-1">
          <input type="radio" name="gender" id="male" required />
          <label
            className="text-base font-medium capitalize text-slate-700"
            htmlFor="male"
          >
            male
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="gender" id="female" required />
          <label
            className="text-base capitalize font-medium text-slate-700"
            htmlFor="female"
          >
            female
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" name="gender" id="other" required />
          <label
            className="text-base capitalize font-medium text-slate-700"
            htmlFor="other"
          >
            other
          </label>
        </div>
      </div>
      {/* gender */}
      <div className="w-full flex justify-between gap-1 max-md:flex-col md:items-center md:gap-2">
        <label
          className="text-lg capitalize text-neutral-600"
          htmlFor="birth-date"
        >
          enter your birth date
        </label>
        <Input type="date" name="birthDate" id="birth-date" />
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
