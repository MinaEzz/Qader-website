import { useEffect, useState } from "react";
import { formVector } from "../assets/images";
import { LoginForm, ForgetPasswordModal } from "../components";
import { Button } from "../components";

const LoginPage = ({ setAuthenticationMood }) => {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  useEffect(() => {
    document.title = "Sign In";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" min-h-[100dvh] pd-y bg-white dark:bg-slate-950">
      <div className="container flex justify-between items-center gap-5 max-lg:flex-col">
        <div className="w-full lg:flex-1 h-[500px] bg-red-">
          <img src={formVector} alt="Login Vector" />
        </div>
        <div className="flex flex-col gap-8 flex-1 w-full">
          <h2 className="text-4xl font-bold uppercase text-primary-600">
            login
          </h2>
          <LoginForm setOpenModal={setOpenModal} />
          <p className="text-slate-700 dark:text-slate-400 text-xl text-center capitalize">
            don't have an account?
          </p>
          <Button
            label="sign up"
            backgroundColor="bg-slate-700"
            hoverBgColor="hover:bg-slate-800"
            activeBgColor="active:bg-slate-900"
            onClick={() => setAuthenticationMood("register")}
          />
        </div>
      </div>
      <ForgetPasswordModal open={openModal} close={closeModal} />
    </section>
  );
};

export default LoginPage;
