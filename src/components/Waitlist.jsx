import React, { useRef } from "react";
import shivamframe3 from "../assets/shivamframe3.png";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Waitlist = () => {
  const navigate = useNavigate();
  const form = useRef();

  const notify = () => {
    toast.success("Your email has been added to the waitlist", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vv77eqh", "template_4pv8rlf", form.current, {
        publicKey: "W-FilvNidP-yJpNC9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("Your message has been sent.");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <ToastContainer />
      {/* Image Section */}
      <img
        src={shivamframe3}
        className="w-full lg:w-1/2 h-[300px] lg:h-screen object-cover"
        alt="img"
      />
      {/* Form Section */}
      <div className="flex flex-1 justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md p-6 sm:p-8 rounded-lg bg-white shadow-lg">
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white py-2 px-4 rounded mb-4 hover:bg-slate-800"
          >
            Back to HomePage
          </button>
          <h1 className="text-2xl font-bold">EmailAgent</h1>
          <p className="text-lg font-semibold mt-2 flex items-center gap-1">
            Hi, Welcome! <span>👋</span>
          </p>
          <form ref={form} className="mt-6" onSubmit={sendEmail}>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              required
              name="from_name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label className="block text-sm font-medium text-gray-700 mt-4">
              Email
            </label>
            <input
              type="email"
              required
              name="from_email"
              placeholder="Email address"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <button
              onClick={notify}
              type="submit"
              className="mt-6 w-full bg-teal-500 text-white font-semibold py-2 rounded-lg border border-teal-700 hover:bg-teal-600 transition-all"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;