import React from "react";
import { useNavigate } from "react-router-dom";

function GallaryNavigator() {
  const navigate = useNavigate();

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1
            class="flex-grow sm:pr-16 text-3xl font-medium title-font text-white"
            // import logo from "../assets/logo.png"
          >
            Indulge yourself in the wonderfull Gallary full of Tattoo's
          </h1>
          <button
            class="flex-shrink-0 text-white bg-green-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0"
            onClick={() => {
              navigate("/gallary");
            }}
          >
            Gallary
          </button>
        </div>
      </div>
    </section>
  );
}

export default GallaryNavigator;
