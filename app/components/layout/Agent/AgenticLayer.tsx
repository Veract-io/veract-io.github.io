"use client";
import React, { useEffect, useState } from "react";
import AgentTitle from "./AgentTitle";

export default function AgenticLayer() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <div>
        <AgentTitle title="Agentic Layer" title_description="Transform Your Existing Stack with Intelligent Automation" description="Automation that works with what you already use — effortlessly,
            intelligently, reliably."/>
        <div className="flex flex-row items-center justify-center pb-[13.563rem]">
          <div className="relative w-[25.063rem] h-[25.063rem] rounded-full flex items-center justify-center overflow-visible">
            <div className="absolute agenticLayerBase w-[25.063rem] h-[25.063rem] rounded-full z-0"></div>
            <div
              className="absolute z-20 top-[3.188rem] left-[3.188rem] w-[24.625rem] h-[24.625rem] pointer-events-none animate-agentic-layer"
              style={{
                filter: "url(#filter0_g_1_1075)",
                mask: "url(#intersectionMask)",
                WebkitMask: "url(#intersectionMask)",
              }}
            >
              <img
                src="/Images/agent/agenticLayer.png"
                alt="agenticLayer_distorted"
                className="object-cover w-full h-full rounded-full"
              />
            </div>

            <div className="absolute z-30 text-[#FAFAFA] syneFont text-[3.75rem] text-center font-semibold leading-[3.75rem] top-[11rem] left-[8.813rem] animate-agentic-layer-opacity">
              Ai Agent Layer
            </div>

            <svg className="absolute w-0 h-0">
              <filter
                id="filter0_g_1_1075"
                x="-40"
                y="-40"
                width="481"
                height="481"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  mode="normal"
                  result="shape"
                />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.01"
                  numOctaves="3"
                  seed="9055"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="10s"
                    values="0.01;0.02;0.01"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in2="turbulence"
                  in="shape"
                  scale="48"
                  xChannelSelector="R"
                  yChannelSelector="G"
                  result="displacedImage"
                />
                <feMerge>
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>

              <mask id="intersectionMask">
                <rect width="100%" height="100%" fill="black" />
                <circle cx="197px" cy="197px" r="197px" fill="white" />
              </mask>
            </svg>
          </div>
          <div className="flex top-[3.188rem] left-[3.375rem] relative animate-agentic-layer-opacity">
            <img
              src="/Images/agent/agenticLayerVeins.svg"
              alt="agenticLayer_2"
              className="w-[20.111rem] h-[15.642rem]"
            />
          </div>
          <div className="relative">
            <img
              src="/Images/agent/top-blur.svg"
              alt="blurry effect"
              className="absolute top-[-3.188rem] left-[-3.375rem] z-10 animate-agentic-layer-opacity"
            />
            <img
              src="/Images/agent/bottom-blur.svg"
              alt="blurry effect"
              className="absolute bottom-[-6.375rem] left-[-3.375rem] z-10 animate-agentic-layer-opacity"
            />

            <div className="relative z-20 top-[3.188rem] left-[3.375rem] flex flex-col w-[25.688rem] h-max pt-[3.563rem] pb-[3.125rem] rounded-[1.875rem] bg-[#0D0D0D] animate-agentic-layer-shadow">
              <div className="flex flex-col pl-[2.563rem] pr-[4.25rem] gap-[1.563rem] pb-[6.313rem]">
                <div className="flex flex-row gap-[0.813rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont text-[1.25rem] font-normal leading-normal">
                    Automate repetitive tasks
                  </div>
                </div>
                <div className="flex flex-row gap-[0.813rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont text-[1.25rem] font-normal leading-normal">
                    Unify Disconnected Tools
                  </div>
                </div>
                <div className="flex flex-row gap-[0.813rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont text-[1.25rem] font-normal leading-normal">
                    Accelerate Decision Making
                  </div>
                </div>
                <div className="flex flex-row gap-[0.813rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont text-[1.25rem] font-normal leading-normal">
                    Boost Team Efficiency
                  </div>
                </div>
                <div className="flex flex-row gap-[0.813rem]">
                  <div>
                    <img
                      src="/Images/agent/ai-magic.svg"
                      alt="bulletin point"
                      className="w-[1.5rem] h-[1.5rem]"
                    />
                  </div>
                  <div className="text-[#D9D9D9] dmSansFont text-[1.25rem] font-normal leading-normal">
                    Scale Without Hiring
                  </div>
                </div>
              </div>
              <div className="text-white text-center dmSansFont text-[1.25rem] font-normal leading-normal pl-[2.5rem] pr-[3.25rem] pb-[2.813rem]">
                Your tools stay the same. The way you work changes forever!
              </div>
              <div className="px-[3.625rem]">
                <div className="flex w-[18.438rem] px-[0.875rem] py-[0.375rem] justify-center items-center gap-[0.625rem] bg-[#4285F4] rounded-[0.625rem] text-center dmSansFont text-[1.25rem] font-normal leading-normal text-white">
                  Supercharge Your Tools Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
