import React from "react";
import Sidebar from "../components/Sidebar";
import Progress from "../components/Progress";
import VideoCall from "../components/VideoCall";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />

      <div className="lg:flex flex-row w-full h-screen">
        <Progress/>
        <VideoCall  />
      </div>
    </div>
  );
};

export default Dashboard;
