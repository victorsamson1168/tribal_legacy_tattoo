import React, { useRef, useEffect } from "react";
import { create } from "@lottiefiles/lottie-interactivity";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import log from "../assets/sanjay.jpg";

function CustomScoller() {
  const imRef = useRef();
  useEffect(() => {
    create({
      mode: "scroll",
      player: "#firstLottie",
      actions: [
        {
          visibility: [0, 1],
          type: "seek",
          frames: [0, 100],
        },
      ],
    });
  }, []);

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `${log}`,
        height: "100vh",
        marginTop: "-70px",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="text-gray-400 bg-gray-600 body-font"
    >
      <lottie-player
        id="firstLottie"
        src="https://assets6.lottiefiles.com/private_files/lf30_p2dfxlv0.json"
        style={{ width: "700px", marginLeft: "200px" }}
        // className="text-gray-400 bg-gray-400 body-font"
      ></lottie-player>
    </section>
  );
}

export default CustomScoller;
