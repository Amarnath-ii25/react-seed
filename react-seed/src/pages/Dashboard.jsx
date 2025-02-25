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

      <div className="flex w-full h-screen bg-gray-900">
      {!isFullScreen && isProgressVisible && (
        <Progress setIsProgressVisible={setIsProgressVisible} setIsFullScreen={setIsFullScreen} />
      )}
      <VideoCall isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
    </div>
    </div>
  );
};

export default Dashboard;
