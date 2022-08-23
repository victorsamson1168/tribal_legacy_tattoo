import React from "react";
import logo from "../assets/logoImg.jpg";
import styles from "./hero.module.css";
function HeroTop() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-sm	 lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            // class="object-cover object-center rounded "
            alt="logo"
            src={logo}
            // className={styles.windmill}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Who we are
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 leading-relaxed">
            <b>Tribal Legacy Tattoo</b> is established in 2021 in Ranchi,
            Jharkhand and been run by one of the professional tribal tattoo
            artist <b>Sanjay Bob</b>. The main key role of Tribal Legacy is to
            help you get a perfect creative/custom tattoo that represent your
            ideas, beliefs and memories.
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

export default HeroTop;
