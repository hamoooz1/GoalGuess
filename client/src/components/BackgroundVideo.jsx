import React from "react";
import videoBg from "../field.mp4";
import "../styles/homepage.scss";

const BackgroundVideo = () => {
  return (
    <div className="homepage__video">
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        className="video"
        src={videoBg}
        type="video/mp4"
      ></video>
    </div>
  );
};
export default BackgroundVideo;
