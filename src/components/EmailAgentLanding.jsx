import React from "react";
import shivamframe2 from "../assets/shivamframw2.png";
import { useNavigate } from "react-router-dom";

const EmailAgentLanding = () => {
  const navigate = useNavigate();

  const popup = () => {
    navigate("/waitlist");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 sm:px-10 lg:px-[83px] h-[80px] sm:h-[100px]">
        <div className="font-extrabold text-xl sm:text-2xl">EmailAgent</div>
        <button
          className="bg-[#2A4E5A] hover:bg-[#112023] text-white h-[40px] font-extrabold text-[16px] sm:text-[18px] px-4 sm:px-[5px] border border-black rounded-md w-[140px] sm:w-[180px]"
          onClick={popup}
        >
          Join Waitlist
        </button>
      </div>

      {/* Hero Section */}
      <div
        className="bg-center bg-cover flex flex-col items-center text-center py-10 sm:py-16 px-4"
        style={{ backgroundImage: `url(${shivamframe2})` }}
      >
        <h1 className="font-bold text-3xl sm:text-5xl text-white leading-tight">
          Email Chaos? We Got You!
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-white max-w-3xl">
          "Drowning in emails? Missing important ones? Struggling with cold emails? Our <br className="hidden sm:block" />
          AI assistant has you covered—so you can focus on life, not your inbox!" 🚀
        </p>
        <h2 className="mt-6 text-3xl sm:text-5xl font-bold text-white">
          Your <span className="text-[#112023]">smart</span> AI <span className="text-[#264651]">assistant</span> for a stress-free inbox!
        </h2>

        {/* Call to Action */}
        <div className="mt-10 sm:mt-20 w-full max-w-md px-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeDKo54IuEnlpFNrTv5j9caBEe2BlH7AKvBm1onYsAfEKamLg/viewform?usp=dialog"
            className="block w-full text-center text-lg sm:text-2xl text-white font-bold border border-[#03DDFF] rounded-lg py-3 transition-all duration-300 hover:shadow-[0_0_15px_#03DDFF]"
          >
            Got Email struggles? Tell us what sucks!
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailAgentLanding;