import React from "react";

import LeftView from "app/views/Home/LeftView";
import RightView from "app/views/Home/RightView";

const Home = props => {
  return (
    <div className="Home">
      <LeftView />
      <RightView {...props} />
    </div>
  );
};

export default Home;
