import axios from "axios";
import React, { useState } from "react";
import { RotatingSquare } from "react-loader-spinner";

function ContactUs() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loader, setLoader] = React.useState(false);

  const onSubmit = () => {
    if (!phoneNumber || !message || !email || !name) {
      alert("please fill all the values");
    } else {
      postAPI();
    }
  };

  const postAPI = () => {
    setLoader(true);
    axios
      .post("https://tribal-legacy-tattoo.herokuapp.com/automailer", {
        name: name,
        message: message,
        email: email,
        mobile: phoneNumber,
      })
      .then((res) => {
        setLoader(false);
        alert("we'll get back to you soon");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
        setName("");
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong");
        setLoader(false);
      });
  };

  return (
    <>
      {loader && "Loading..."}
      {loader && <RotatingSquare width="100" color="green" />}
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.7717915549542!2d85.35472081480745!3d23.360280984783095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e39aeb456b0d%3A0xeb6d7dae0886be3a!2sTribal%20Legacy%20Tattoo!5e0!3m2!1sen!2sin!4v1631522517738!5m2!1sen!2sin"
              // src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.5)" }}
            ></iframe>
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Sushila Enclave Ground floor, near Aroma Restaurant, Lowadih,
                  Ranchi, Jharkhand 834010
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-400 leading-relaxed">
                triballegacytattoos@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+91 73199 55932</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Get connected
            </h2>
            <p className="leading-relaxed mb-5">
              Drop us a message. We'll get back to you
            </p>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(item) => {
                  // console.log("changes", item.target.value);
                  setName(item.target.value);
                }}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Phone
              </label>
              <input
                type="tel"
                id="tel"
                name="tel"
                onChange={(item) => {
                  // console.log("changes", item.target.value);
                  setPhoneNumber(item.target.value);
                }}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                E-Mail
              </label>
              <input
                type="e-mail"
                id="e-mail"
                name="e-mail"
                onChange={(item) => {
                  // console.log("changes", item.target.value);
                  setEmail(item.target.value);
                }}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(item) => {
                  // console.log("changes", item.target.value);
                  setMessage(item.target.value);
                }}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              onClick={() => {
                console.log("the details", name, message, phoneNumber, email);
                onSubmit();
              }}
              className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg"
            >
              Submit
            </button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">
              A wonderland full of tattoos is waiting for you
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
