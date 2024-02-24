import { Card } from "../comps";
import "./Body.css";
import React from "react";

const Body = () => {
  return (
    <div className="body">
      <div className="body-containerA">
        <Card head="What is Well Being" />
      </div>

      <div className="body-containerB">
        <Card head="How to be Well" />
      </div>

      <div className="body-containerA">
        <Card head="Well Be for Future" />
      </div>

      <div className="body-containerB">
        <Card head="Well Be for Beloved ones" />
      </div>
    </div>
  );
};

export default Body;
