import { IoClose } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../shared/Input";

const ForgetPasswordModal = ({ open, close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been successfully sent", {
      theme: "colored",
    });
  };

  if (!open) return null;
  return (
    <section className="w-full h-full" onClick={close}>
      <div className="layer flex justify-center items-center z-40">
        <div
          className="bg-white lg:w-1/2 w-full h-[250px] flex flex-col p-2 fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="w-fit h-fit ml-auto" onClick={close}>
            <IoClose className="text-slate-700" fontSize={30} />
          </button>
          <form
            className=" bg-slate-00 w-full my-auto flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div className="w-full flex gap-2 items-center">
              <Input type="email" name="email" placeholder="Enter Your Email" />

              <button
                type="submit"
                className="w-[70px] h-10 rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-base capitalize font-bold text-white"
              >
                submit
              </button>
            </div>
            <p className="text-base text-slate-700 capitalize">
              you will receive an email with a link that direct you to reset
              your password in a few minutes
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ForgetPasswordModal;
