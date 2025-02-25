import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Progress from "../components/Progress";
import VideoCall from "../components/VideoCall";

const Dashboard = () => {

  const [isProgressVisible, setIsProgressVisible] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHangingOn, setIsHangingOn] = useState(true);

  return (
    <div className="flex w-full h-screen">
      <Sidebar />

      <div className="w-full h-screen bg-gray-900 flex justify-center items-center p-1">
     
      {isProgressVisible && (
        <div
          className={`transition-all duration-300 ${
            isFullScreen || !isHangingOn ? "w-full" : "lg:w-[55%] w-full"
          }`}
        >
          <Progress setIsProgressVisible={setIsProgressVisible} setIsFullScreen={setIsFullScreen} />
        </div>
      )}

   
      {isHangingOn && (
        <div
          className={`transition-all duration-300 ${
            isFullScreen ? "w-full" : isProgressVisible ? "lg:w-[45%] w-full" : "w-full"
          }`}
        >
          <VideoCall isProgressVisible={isProgressVisible} setIsHangingOn={setIsHangingOn} />
        </div>
      )}
    </div>
    </div>
  );
};

export default Dashboard;
