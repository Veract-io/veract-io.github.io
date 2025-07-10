'use client'
import React, { useEffect, useState } from "react";

export default function AgentTitle({ title, title_description, description }: { title: string, title_description: string, description: string }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div className="w-full h-max flex flex-col items-center justify-center gap-[2.813rem] px-[4.375rem] pt-[4.313rem]">
          {/* <AgentTitle title="Agentic Layer" /> */}
          <div className="flex flex-row items-center justify-center gap-[0.625rem] rounded-[0.625rem] bg-[linear-gradient(181deg,rgba(0,85,254,0.08)_0.51%,rgba(153,153,153,0.10)_99.49%)] relative px-[0.875rem] py-[0.375rem]">
            <div className="absolute top-[0.125rem] w-[3.813rem] h-[0.063rem] bg-[linear-gradient(90deg,rgba(66,133,244,0)_0%,#4285F4_50%,rgba(66,133,244,0)_100%)]"></div>
            <div className="w-[0.625rem] h-[0.625rem] bg-[#FAFAFA] rounded-full"></div>
            <div className="text-white text-center dmSansFont text-[1.625rem] font-normal leading-normal">{title}</div>
        </div>
          <div className="text-[#FAFAFA] text-center syneFont text-[3.375rem] font-semibold leading-normal max-w-[71.188rem]">
            {title_description}
          </div>
          <div className="text-[#CECECE] text-center dmSansFont text-[1.625rem] font-normal leading-normal pb-[8.5rem] max-w-[40.75rem]">
            {description}
          </div>
        </div>
    )
  );
}


