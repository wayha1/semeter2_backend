import React from "react";
import video1 from "../../asset/video/video1.mp4";
import video2 from "../../asset/video/video2.mp4";
import video3 from "../../asset/video/video3.mp4";
function Video() {
  return (
    <>
      <div>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3  items-center justify-center gap-y-20 gap-x-14 pt-10 pb-5 text-center">
          <div className="rounded-lg max-w-sm">
            <a href="#!">
              <video
                width="320"
                height="240"
                controls
                className="w-full rounded-t-lg"
              >
                <source src={video1} type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-center text-sm font-medium mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h5>
            </div>
          </div>
          <div className="rounded-lg max-w-sm">
            <a href="#!">
              <video
                width="320"
                height="240"
                controls
                className="w-full rounded-t-lg"
              >
                <source src={video2} type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-center text-sm font-medium mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h5>
            </div>
          </div>
          <div className="rounded-lg max-w-sm">
            <a href="#!">
              <video
                width="320"
                height="240"
                controls
                className="w-full rounded-t-lg"
              >
                <source src={video3} type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-center text-sm font-medium mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
