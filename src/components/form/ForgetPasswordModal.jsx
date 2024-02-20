import { IoClose } from "react-icons/io5";

const ForgetPasswordModal = ({ open, close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!open) return null;
  return (
    <section className="w-full h-full" onClick={close}>
      <div className="layer flex justify-center items-center z-40">
        <div
          className="bg-white h-[250px] flex flex-col p-2"
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
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="w-full flex-1 h-10 outline-none text-sm text-neutral-600 font-bold placeholder:text-neutral-500 p-2 placeholder:text-sm placeholder:font-bold border border-primary rounded-xl"
              />
              <button
                type="submit"
                className="w-[70px] h-10 rounded-xl bg-primary text-base capitalize font-bold text-white"
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
    </section>
  );
};

export default ForgetPasswordModal;
