import React from "react";
import studio from "../assets/studio.jpg";
import styles from "./hero.module.css";
function HeroMid() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Mission
            <br class="hidden lg:inline-block" />
            {/* readymade gluten */}
          </h1>
          <p class="mb-8 leading-relaxed">
            A tattoo is a reflection of your style and who you are as a person.
            It will be with you for the rest of your life, so you'll want to be
            make sure that it means something special to you. We suggest the
            right size and the placement on the tattoo in such a way that will
            only extend the beauty of your body and personality. we care about
            your values and beliefs and turn it into a beautiful piece of art
            which is made modify as per your body.
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
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={studio}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroMid;
