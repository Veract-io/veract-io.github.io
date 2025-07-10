"use client";
import React, { useEffect, useState } from "react";

export default function AgentRobot({ agent }: { agent: any }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div className="relative w-[9.881REM] h-[9.881rem] drop-shadow-[0px_0px_15.7px_#4285F4] bg-[#1C1C1C] rounded-full flex items-center justify-center">
        <div className="absolute top-[85%] left-[50%] translate-x-[-50%] w-0 h-0 border-l-[1.294rem] border-r-[1.294rem] border-t-[2.188rem] border-l-transparent border-r-transparent border-t-[#1C1C1C] rounded-[0.203rem]"></div>
        <div className="absolute w-[8.313rem] h-[8.313rem] shadow-[inset_0_0_18.19px_-1.33px_rgba(66,133,244,0.95)] rounded-full bg-[rgba(66,133,244,0.05)] box-shadow-[0px_0px_18.193px_-1.334px_rgba(66,133,244,0.96)_inset]"></div>
        <img src={agent.image} alt={agent.name} className="absolute" />
        <div className="absolute top-[120%] left-[50%] translate-x-[-50%] text-[#DDD] text-center dmSansFont text-[1rem] font-medium leading-normal w-max">{agent.name}</div>
      </div>
    )
  );
}
