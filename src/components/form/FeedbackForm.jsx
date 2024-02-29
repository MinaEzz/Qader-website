import Input from "../shared/Input";
const FeedbackForm = () => {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input type="text" name="name" id="name" placeholder="Name" />
      <Input type="email" name="email" id="email" placeholder="E-mail" />
      <textarea
        name="feedback"
        id="feedback"
        rows="4"
        placeholder="Leave Your Feedback..."
        className="w-full h-10 bg-transparent flex-1 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl"
      />
      <button
        type="submit"
        className=" w-36 mx-auto h-14 flex items-center justify-center rounded-xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all text-lg capitalize font-medium text-white"
      >
        submit
      </button>
    </form>
  );
};

export default FeedbackForm;
