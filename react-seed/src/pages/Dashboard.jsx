import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Progress from "../components/Progress";
import VideoCall from "../components/VideoCall";

const Dashboard = () => {

  const [isProgressVisible, setIsProgressVisible] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="flex w-full h-screen">
      <Sidebar />

      <div className="flex h-screen w-full">
      {/* Progress Component */}
      {isProgressVisible && (
        <div className={`transition-all duration-300 ${isFullScreen ? "w-0" : "lg:w-[55%] w-full"}`}>
          <Progress setIsProgressVisible={setIsProgressVisible} setIsFullScreen={setIsFullScreen} />
        </div>
      )}

      {/* VideoCall Component */}
      <div
        className={`transition-all duration-300 ${
          isFullScreen ? "w-full" : isProgressVisible ? "lg:w-[45%] w-full" : "w-full"
        }`}
      >
        <VideoCall isProgressVisible={isProgressVisible} />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
