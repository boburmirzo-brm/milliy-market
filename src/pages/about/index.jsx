import React, { memo } from "react";
import AboutStory from "../../components/story/AboutStory";
import Creators from "../../components/creators/Creators";

const About = () => {
  return (
    <div>
      <AboutStory />
      <Creators />
    </div>
  );
};

export default memo(About);
