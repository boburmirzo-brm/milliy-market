import React, { memo } from "react";
import AboutStory from "../../components/story/AboutStory";
import Creators from "../../components/creators/Creators";
import Static from "../../components/statistika/Static";
import Deliver from "../../components/deliver/Deliver";

const About = () => {
  return (
    <div>
      <AboutStory />
      <Static />
      <Creators />
      <Deliver />
    </div>
  );
};

export default memo(About);
