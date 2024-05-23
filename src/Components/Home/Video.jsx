import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "../api/axios";

function Video() {
  const [videoData, setVideoData] = useState([]);

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");

      const response = await axios.request({
        url: "/video",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Fetching data...", response);
      setVideoData(response.data.data);
    } catch (error) {
      console.error("Error fetching video data:", error);
      setVideoData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-y-20 gap-x-14 pt-10 pb-5 text-center">
        {videoData.map((video, index) => (
          <div key={index} className="rounded-lg max-w-sm">
            <a href={video.video_link}>
              <video
                src={video.video_link}
                width="320"
                height="240"
                controls
                className="w-full rounded-t-lg">
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-center text-sm font-medium mb-2">{video.video_title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
