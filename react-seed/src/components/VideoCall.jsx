import { useState } from "react";
import { Mic, MicOff, Video, VideoOff, MessageSquare, Phone, Maximize, Minimize } from "lucide-react";

const VideoCall = ({ isProgressVisible, setIsHangingOn }) => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const randomVideoURL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div
      className={`${
        isFullScreen ? "fixed inset-0 w-full h-full" : isProgressVisible ? "w-full" : "w-full"
      } h-screen flex flex-col justify-center items-center bg-gray-900 p-2 transition-all duration-300`}
    >
      <div className="relative w-full h-[90%] bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
        <iframe
          src={randomVideoURL}
          allow="autoplay; fullscreen"
          className={`w-full h-full rounded-lg border-none ${isVideoOn ? "block" : "hidden"}`}
        ></iframe>

        {!isVideoOn && (
          <div className="w-full h-full flex items-center justify-center bg-black text-white text-lg">
            Video Off
          </div>
        )}

        {/* Fullscreen Button */}
        <button
          className="absolute top-3 right-3 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={() => setIsFullScreen(!isFullScreen)}
        >
          {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
        </button>
      </div>

      <div className="mt-2 flex gap-4 bg-gray-800 p-3 rounded-full shadow-lg">
        <button className="p-2 text-white hover:bg-gray-600 rounded-full transition">
          <MessageSquare size={20} />
        </button>

        <button
          className={`p-2 rounded-full ${isMicOn ? "bg-gray-700 text-white" : "bg-red-600 text-white"} hover:bg-gray-600`}
          onClick={() => setIsMicOn(!isMicOn)}
        >
          {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
        </button>

        <button
          className={`p-2 rounded-full ${isVideoOn ? "bg-gray-700 text-white" : "bg-red-600 text-white"} hover:bg-gray-600`}
          onClick={() => setIsVideoOn(!isVideoOn)}
        >
          {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
        </button>

        
        <button
          className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
          onClick={() => setIsHangingOn(false)} 
        >
          <Phone size={20} />
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
