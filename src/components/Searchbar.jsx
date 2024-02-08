import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaRegStopCircle } from "react-icons/fa";
import { useState } from "react";
// speech to text recognition:
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  const recordingToggler = () => {
    setIsRecording(!isRecording);
  };
  const startListen = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });
  };
  const stopListen = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
    setSearchTerm(transcript);
  };

  const buttonHandler = () => {
    if (!browserSupportsSpeechRecognition) {
      setError(true);
      setErrorMsg("This browser does not support speech recognition.");
    }
    if (!isMicrophoneAvailable) {
      setError(true);
      setErrorMsg("Unable to access microphone, please check system settings");
    }
    if (error) {
      toast.error(errorMsg, {
        theme: "colored",
      });
    } else {
      recordingToggler();
    }
    !isRecording ? startListen() : stopListen();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
  };

  return (
    <div className="relative flex items-center flex-1 bg-gray-100">
      <IoSearchOutline
        className="absolute top-1/2 -translate-y-1/2 left-2  text-neutral-500"
        fontSize={18}
        style={{ pointerEvents: "none" }}
      />
      <form className="w-full " onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search something..."
          className="w-full h-10 outline-none text-sm text-neutral-600  placeholder:text-neutral-500 py-2 pl-8 pr-10 rounded-3xl placeholder:text-sm"
        />
      </form>
      <button
        className={`absolute right-3 border-l border-neutral-500 pl-1 ${
          isRecording ? " text-red" : "text-neutral-500"
        }`}
        onClick={buttonHandler}
      >
        {isRecording ? (
          <FaRegStopCircle fontSize={20} />
        ) : (
          <FaMicrophone fontSize={20} />
        )}
      </button>
      {error && <ToastContainer />}
    </div>
  );
};

export default Searchbar;
