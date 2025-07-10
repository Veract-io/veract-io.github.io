"use client";
import { LandingPageData } from "@/lib/custom_data";
import React, { useEffect, useState } from "react";

export default function About_Us() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="w-full h-max bg-[#0D0D0D] flex items-center justify-center pb-[6.188rem] relative z-20">
        <div className="w-full h-[24.5rem] bg-[#030810] relative rounded-[2.25rem] overflow-hidden">
          <img
            src="/Images/LandingPage/AboutUs/about_us_bg.png"
            alt="placeholder image"
            className="absolute top-0 object-center object-cover w-full h-full rounded-[2.25rem]"
          />

          {/* Roaming Balls */}
          <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
            <div className="animated-orb orb-path-client" />
            <div className="animated-orb orb-path-industry" />
            <div className="animated-orb orb-path-project" />
            <div className="animated-orb orb-path-found" />
          </div>

          {/* Grid Content Centered */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="syneFont grid text-white gap-y-10 gap-x-22 grid-cols-2 md:grid-cols-4 place-items-center px-4 sm:px-8">
              {LandingPageData.aboutUs.achievementsList.map(
                (category, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:gap-[1.25rem] md:gap-[1.25rem] items-center"
                  >
                    <div className="md:text-[3.375rem] lg:text-[3.375rem] text-[2rem] sm:text-[0.625rem] tracking-[-0.119rem] lg:leading-[3.125rem] md:leading-[3.125rem] text-center">
                      {category.numbers}
                    </div>
                    <div className="lg:text-[2rem] md:text-[2rem] text-[1.625rem] tracking-[-0.119rem] leading-[2rem] lg:leading-[3.125rem] md:leading-[3.125rem] text-center text-wrap">
                      {category.description}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
