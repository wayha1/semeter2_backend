import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import AddVideo from "./AddVideo";
import ShowVideo from "./ShowVideo";

function VideoInformation() {
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [showShowVideo, setShowShowVideo] = useState(true);
  const [activeButton, setActiveButton] = useState(null);

  const toggleAddVideo = () => {
    setShowAddVideo(true); // Always set to true when clicked
    setShowShowVideo(false); // Ensure only one page is shown at a time
    setActiveButton("add");
  };

  const toggleShowVideo = () => {
    setShowAddVideo(false);
    setShowShowVideo(true); // Ensure only one page is shown at a time
    setActiveButton("show");
  };

  return (
    <div className="  flex justify-center w-full h-auto pt-10 p-2">
      <div className="mr-5 mb-10" style={{ width: "400px" }}>
        <Button
          onClick={toggleAddVideo}
          className={`w-full ${activeButton === "add" ? "bg-green-600" : "bg-green-400"}`}
        >
          Add Video
        </Button>
        {/* Conditionally render the Add Category page */}
        {showAddVideo && (
          <div className="relative w-full" style={{ transform: "translateX(-10%)" }}>
            <AddVideo />
          </div>
        )}
      </div>
      <div className="mb-10 w-fit items-center" style={{ width: "400px" }}>
        <Button
          onClick={toggleShowVideo}
          className={`w-full ${activeButton === "show" ? "bg-red-500" : "bg-red-400"}`}
        >
          Show Video
        </Button>
        {/* Conditionally render the Show Category page */}
        {showShowVideo && (
          <div className="mt-10" style={{ position: "relative", transform: "translateX(-120%) " }}>
            <ShowVideo />
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoInformation;
