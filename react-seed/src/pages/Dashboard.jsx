import React from "react";
import Sidebar from "../components/sidebar";
import Progress from "../components/Progress";
import VideoCall from "../components/VideoCall";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />

      <div className="lg:flex flex-row w-full h-screen">
        <Progress className="w-1/2" />
        <VideoCall className="w-1/2" />
      </div>
    </div>
  );
};

export default Dashboard;
