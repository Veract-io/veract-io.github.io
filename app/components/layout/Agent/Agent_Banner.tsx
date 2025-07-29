"use client";
import { AgentPageData, LandingPageData } from "@/lib/custom_data";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function AgentBanner() {

  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="w-full h-max overflow-scroll flex flex-col items-center justify-start pt-0 lg:pt-[6.688rem] md:pt-[6.688rem] pb-[6.25rem]">
        <div className="flex flex-col items-center justify-center relative">
          <div
            className="w-[25rem] md:w-[50rem] lg:w-[50rem] h-[18.75rem] md:h-[43.75rem] lg:h-[43.75rem] absolute z-0 left-1/2 top-0 translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 md:translate-y-0 lg:-translate-x-1/2 lg:translate-y-0 animate-spin [animation-duration:6s] [animation-timing-function:linear] blur-[12px] md:blur-none lg:blur-none"
            style={{
              backgroundImage: `url(${"/Images/agent/Banner/radar_component_banner.png"})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
          <div className="w-[25rem] md:w-[50rem] lg:w-[50rem] h-[18.75rem] md:h-[31.25rem] lg:h-[31.25rem] absolute bottom-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[#0d0d0d]/50 backdrop-blur-md [mask-image:linear-gradient(to_top,black_85%,transparent_100%)]"></div>
          </div>
          <div className="interFont text-white w-[100%] flex flex-col items-center justify-center mt-[6.688rem] z-5 pl-[1.125rem] pr-[1.125rem] md:pl-0 md:pr-0 lg:pl-0 lg:pr-0">
            <div className="p-[2px] rounded-[1.625rem] bg-[linear-gradient(105deg,_rgb(41,52,255)_-2%,_rgba(36,65,212,0)_50%)]">
              <div className="pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] bg-black rounded-[1.625rem] text-[#8AA5FF] font-semibold">
                {AgentPageData.banner.about}
              </div>
            </div>
            <div className="interFont text-[1.625rem] md:text-[2.25rem] lg:text-[3.125rem] text-wrap w-[100%] md:w-[60%] lg:w-[45%] text-center font-medium tracking-[-0.01em] leading-[1.2em] md:mt-[0.75rem] lg:mt-[0.75rem] mt-[2.063rem]">
              {AgentPageData.banner.title}
            </div>
            <div className="text-[0.875rem] md:text-[1rem] lg:text-[1rem] text-wrap w-[100%] md:w-[50%] lg:w-[30%] text-center text-white/70 font-normal tracking-[-0.02em] leading-[1.6em] md:mt-[0.75rem] lg:mt-[0.75rem] mt-[2.063rem]">
              {AgentPageData.banner.subtitle}
            </div>
            <div className="flex items-center justify-center md:mt-[0.875rem] lg:mt-[0.875rem] mt-[2.125rem] gap-[0.938rem]">
              <div
                onClick={() => {
                  router.push("/contact-us");
                }}
                className="relative overflow-hidden w-[9.75rem] md:w-[10.625rem] lg:[10.625rem] h-[2.25rem] text-nowrap text-white rounded-[6px] cursor-pointer flex items-center justify-center bg-[#4285F4] group"
              >
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <div className="flex items-center justify-center h-[2.25rem] w-full font-medium text-[0.875rem] md:text-[0.875rem] lg:text-[1rem]">
                    {AgentPageData.banner.book_demo}
                    <img loading="lazy"
                      src={LandingPageData.banner.get_in_touch_arrow}
                      alt="arrow_icon"
                      className="w-[1rem] h-[1rem] object-contain ml-[0.25rem]"
                    />
                  </div>
                  <div className="flex items-center justify-center h-[2.25rem] w-full font-medium">
                    {AgentPageData.banner.book_demo}
                    <img loading="lazy"
                      src={LandingPageData.banner.get_in_touch_arrow}
                      alt="arrow_icon"
                      className="w-[1rem] h-[1rem] object-contain ml-[0.25rem] rotate-45"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden relative overflow-hidden w-[9.75rem] md:w-[10.625rem] lg:[10.625rem] h-[2.25rem] text-nowrap text-white rounded-[6px] cursor-pointer flex items-center justify-center bg-[#0d0d0d]/80 group border border-[#FFFFFF]/10">
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
                  <div className="flex items-center justify-center h-[2.25rem] w-full font-medium mt-[-0.15rem] text-[0.875rem] md:text-[0.875rem] lg:text-[1rem]">
                    {AgentPageData.banner.view_case_study}
                  </div>
                  <div className="flex items-center justify-center h-[2.25rem] w-full font-medium mt-[-0.1rem]">
                    {AgentPageData.banner.view_case_study}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] md:w-[90%] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] pl-[1.125rem] md:pl-[2.5rem] md:pr-[2.5rem] pr-[1.125rem] lg:pl-[2.5rem] lg:pr-[2.5rem] mt-[2.875rem] z-5">
            {AgentPageData.banner.banner_features.map((feature, index) => (
              <div
                key={index}
                className={`interFont bg-[radial-gradient(96%_96%_at_50%_7.5%,_#121426_0%,_#000000_100%)] 
                          w-full rounded-[1rem] p-[2rem] border-[#222222] 
                          shadow-[0px_1px_2px_0px_#000000] border border-t-[#8AA5FF]/70 
                          ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <img loading="lazy" src={feature.features_icon} alt={feature.features_title} />
                <div className="text-[1.375rem] mt-[1.5rem] tracking-[-0.02em] leading-[1.75rem] text-white font-bold">
                  {feature.features_title}
                </div>
                <div className="text-[1rem] mt-[1rem] tracking-[-0.02em] leading-[1.6em] text-white/70 font-medium">
                  {feature.features_subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
