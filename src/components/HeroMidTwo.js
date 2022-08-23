import React from "react";
import studioTwo from "../assets/studioTwo.jpg";
import styles from "./hero.module.css";
function HeroMidTwo() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={studioTwo}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hygiene & Safety
            <br class="hidden lg:inline-block" />
            {/* readymade gluten */}
          </h1>
          <p class="mb-8 leading-relaxed">
            Tribal Legacy Tattoo believes in changing people lives through art
            and creativity. It is not only just about getting a tattoo also we
            care about your health and safety. We are equipped with high
            technology tattoo machines and maintain a high-profile hygiene for
            your skin. We also provide free consultations any time after getting
            a tattoo. Our work is completely focused on to fulfil your
            expectations. Getting a tattoo from Tribal Legacy will never be a
            regret it will be an experience you want to share.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              {/* Button */}
            </button>
            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              {/* Button */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroMidTwo;
