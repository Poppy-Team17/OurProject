import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import animationData from "../lottie/lot.json";

export default function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={660} width={400} />
      <Link to="/ExplorePage">
        <div>
          <button className="bt">Clickme</button>
        </div>
      </Link>
    </div>
  );
}