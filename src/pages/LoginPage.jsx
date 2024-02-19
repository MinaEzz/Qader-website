import { useEffect } from "react";
import { formVector } from "../assets/images";
import { LoginForm } from "../components";
import { Button } from "../components";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Sign In";
  }, []);
  return (
    <section className="min-h-[100dvh] pd-y bg-white">
      <div className="container flex justify-between items-center gap-5 max-lg:flex-col-reverse">
        <div className="w-full lg:flex-1 h-[500px] bg-red-">
          <img src={formVector} alt="Login Vector" />
        </div>
        <div className="flex flex-col gap-8 flex-1 w-full">
          <h2 className="text-4xl font-bold uppercase text-primary">login</h2>
          <LoginForm />
          <p className="text-slate-700 text-xl text-center capitalize">
            don't have an account?
          </p>
          <Button
            label="sign up"
            url="/regist"
            backgroundColor="bg-slate-700"
          />
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
