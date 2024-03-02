import { useState } from "react";
import Input from "../shared/Input";
import { TYPESOFDISABILITY } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegistForm = () => {
  const BASE_URL = "http://localhost:5000";
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    age: 0,
    profileType: "",
    typeOfDisability: "", // Only applicable for profileType === 'buyer'
    companyName: "", // Only applicable for profileType === 'employer'
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle radio inputs separately
    if (type === "radio" && checked) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  // Handle and calculate the age
  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  };
  // Handle dateOfBirth change
  const handleDateOfBirthChange = (e) => {
    const newDateOfBirth = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: newDateOfBirth,
      age: calculateAge(newDateOfBirth),
    }));
  };
  // Handle profileType change
  const handleProfileTypeChange = (e) => {
    const newProfileType = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      profileType: newProfileType,
      disabilityType: newProfileType === "buyer" ? "" : prevData.disabilityType,
      companyName: newProfileType === "employer" ? "" : prevData.companyName,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("User registered successfully");
        toast.success("User registered successfully", {
          theme: "colored",
        });
        console.log(formData);
        setFormData({
          name: "",
          email: "",
          username: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          gender: "",
          dateOfBirth: "",
          profileType: "",
          typeOfDisability: "",
          companyName: "",
        });
        // Optionally: Redirect to a success page or perform additional actions
      } else {
        console.error("Failed to register user");
        toast.error("Failed to register user", {
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Error during registration", {
        theme: "colored",
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
      method="POST"
      aria-labelledby="Register Form"
    >
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {/* basic info */}
      <div className="flex flex-col gap-2">
        <select
          className="w-full h-10 p-2 outline-none rounded-xl border border-primary-600 capitalize text-base text-neutral-700 font-medium"
          name="profileType"
          id="profileType"
          required
          defaultValue="select profile type"
          onChange={handleProfileTypeChange}
        >
          <option
            className="capitalize text-base font-medium text-neutral-500 "
            value="select profile type"
            disabled
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
        {formData.profileType === "buyer" && (
          <select
            name="typeOfDisability"
            id="typeOfDisability"
            className="w-full h-10 p-2 outline-none rounded-xl border border-primary-600 capitalize text-base text-neutral-700 font-medium"
            defaultValue="select disability type"
            onChange={(e) =>
              setFormData({ ...formData, disabilityType: e.target.value })
            }
          >
            <option
              value="select disability type"
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
        )}
        {formData.profileType === "employer" && (
          <Input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
          />
        )}
      </div>
      {/* ptofile-type */}
      <div className="w-full flex gap-1 max-md:flex-col md:items-center md:gap-3">
        <label className="text-lg capitalize text-neutral-600" htmlFor="gender">
          select your gender
        </label>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="gender"
            id="male"
            required
            checked={formData.gender === "male"}
            value="male"
            onChange={handleChange}
          />
          <label
            className="text-base font-medium capitalize text-slate-700"
            htmlFor="male"
          >
            male
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="gender"
            id="female"
            required
            checked={formData.gender === "female"}
            value="female"
            onChange={handleChange}
          />
          <label
            className="text-base capitalize font-medium text-slate-700"
            htmlFor="female"
          >
            female
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="gender"
            id="other"
            required
            checked={formData.gender === "other"}
            value="other"
            onChange={handleChange}
          />
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
          htmlFor="dateOfBirth"
        >
          enter your birth date
        </label>
        <Input
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleDateOfBirthChange}
        />
      </div>
      {/* birthdate */}
      <button
        type="submit"
        className="w-full h-14 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-2xl capitalize font-bold text-white"
      >
        register now
      </button>
      <ToastContainer />
    </form>
  );
};

export default RegistForm;
