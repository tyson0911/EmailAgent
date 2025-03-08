import React from "react";
import shivamframe2 from "../assets/shivamframw2.png";
import { useNavigate } from "react-router-dom";

const EmailAgentLanding = () => {
  const navigate = useNavigate();
  // 20230802544@dypiu.ac.in
  //shivamsingh.09xyz@gmai.com
  const popup = () => {
    
    navigate("/waitlist");
  };

  return (
    <div className="">
      <div className="flex h-[100px] items-center justify-between">
        <div className="ml-[83px] font-extrabold text-2xl">EmailAgent</div>
        <div className="bg-[#2A4E5A] hover:bg-[#112023] text-white h-[40px] text-center font-extrabold text-[18px] mr-[83px] p-[5px] border w-[180px] border-black rounded-md">
          <button onClick={popup}>Join Waitlist</button>
        </div>
      </div>
      <div
        className="bg-center bg-cover  h-[629px]"
        style={{ backgroundImage: `url(${shivamframe2})` }}
      >
        <div className="font-bold text-5xl text-center pt-[68.18px] text-white">
          Email Chaos ? We Got You!
        </div>
        <div className="pt-[21.93px]  text-2xl text-center text-white">
          "Drowning in emails? Missing important ones? Struggling with cold
          emails? Our <br />
          AI assistant has you covered—so you can focus on life, not your
          inbox!" 🚀
        </div>
        <div className="pt-[35.88px] text-bold text-5xl text-center text-white">
          Your <span className="text-[#112023]">smart</span> AI{" "}
          <span className="text-[#264651]">assistant</span> for a stress-free
          inbox!
        </div>
        
        <div className="ml-[500px] mt-[240px] w-[500px] pt-[7px] h-[50px] rounded-lg text-2xl text-center text-white border border-[#03DDFF] font-bold transition-all duration-300 hover:shadow-[0_0_15px_#03DDFF]">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDKo54IuEnlpFNrTv5j9caBEe2BlH7AKvBm1onYsAfEKamLg/viewform?usp=dialog">
    Got Email struggles? Tell us what sucks!
  </a>
</div>

        
      </div>
    </div>
  );
};

export default EmailAgentLanding;
