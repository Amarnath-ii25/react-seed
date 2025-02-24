import { useState } from "react";
import { Mic, MicOff, Video, VideoOff, MessageSquare, Phone, PhoneOff } from "lucide-react";

const VideoCall = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isHangingOn, setIsHangingOn] = useState(true); 

  
  const randomVideoURL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div className="lg:w-1/2 w-full lg:mt-0 mt-[-20%] h-screen flex flex-col justify-center items-center bg-gray-900 p-2">
   
      <div className="w-full h-[70%] bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center">
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
          className={`p-2 rounded-full text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
            isHangingOn ? "bg-red-600 hover:bg-red-700" : "bg-red-600 hover:bg-red-700"
          }`}
          onClick={() => setIsHangingOn(!isHangingOn)}
        >
          {isHangingOn ? <Phone size={20} /> : <PhoneOff size={20} />}
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
