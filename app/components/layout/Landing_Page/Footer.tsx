"use client"
import React, { useEffect, useRef, useState } from "react";
import { LandingPageData } from "@/lib/custom_data";

export default function Footer() {
  const details = LandingPageData.footer;

  const svgRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const [showGlow, setShowGlow] = useState(false);
  const coords = useRef({ x: 0, y: 0 });
  const [loader, setLoader] = useState(false);

  // Animate using RAF to prevent stuttering
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      const circle = circleRef.current;
      if (circle) {
        circle.setAttribute("cx", String(coords.current.x));
        circle.setAttribute("cy", String(coords.current.y));
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
    const svg = svgRef.current;
    if (!svg) return;

    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;

    const ctm = svg.getScreenCTM();
    if (!ctm) return;

    const local = point.matrixTransform(ctm.inverse());
    coords.current = { x: local.x, y: local.y };
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoader(true);
    });
  }, []);

  return (
    loader && (
      <div className='w-full flex flex-col items-center justify-center relative bg-primary-text'>
        <svg
          ref={svgRef}
          viewBox="0 20.34 156.69 33.59"
          className="w-[56.375rem] h-[21.375rem] hidden lg:block"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="text-clip">
              <path
                d="M10.40 53.44L0 26.15L7.79 26.15L13.06 41.70Q13.50 43.07 13.76 44.58Q14.01 46.09 14.11 47.29L14.31 47.29Q14.38 46.00 14.66 44.53Q14.94 43.07 15.41 41.70L20.65 26.15L28.44 26.15L18.04 53.44L10.40 53.44ZM43.60 25.63Q47.39 25.63 50.12 27.09Q52.86 28.54 54.35 31.30Q55.83 34.06 55.83 38.04L55.83 41.65L38.23 41.65Q38.35 44.80 40.12 46.59Q41.89 48.39 45.04 48.39Q47.66 48.39 49.83 47.85Q52.00 47.31 54.30 46.24L54.30 52.00Q52.27 53.00 50.06 53.47Q47.85 53.93 44.70 53.93Q40.60 53.93 37.44 52.42Q34.28 50.90 32.48 47.80Q30.69 44.70 30.69 39.99Q30.69 35.21 32.31 32.02Q33.94 28.83 36.84 27.23Q39.75 25.63 43.60 25.63M43.65 30.93Q41.48 30.93 40.05 32.32Q38.62 33.72 38.40 36.69L48.85 36.69Q48.83 35.03 48.25 33.74Q47.68 32.45 46.55 31.69Q45.41 30.93 43.65 30.93ZM77.12 25.63Q77.69 25.63 78.43 25.70Q79.17 25.76 79.64 25.85L79.08 32.84Q78.71 32.71 78.04 32.65Q77.37 32.59 76.88 32.59Q75.44 32.59 74.08 32.96Q72.73 33.33 71.66 34.14Q70.58 34.96 69.96 36.29Q69.34 37.62 69.34 39.55L69.34 53.44L61.89 53.44L61.89 26.15L67.53 26.15L68.63 30.74L68.99 30.74Q69.80 29.35 71.01 28.19Q72.22 27.03 73.77 26.33Q75.32 25.63 77.12 25.63ZM95.78 25.59Q101.27 25.59 104.20 27.98Q107.13 30.37 107.13 35.25L107.13 53.44L101.93 53.44L100.49 49.73L100.29 49.73Q99.12 51.20 97.90 52.12Q96.68 53.05 95.09 53.49Q93.51 53.93 91.24 53.93Q88.82 53.93 86.90 53.00Q84.99 52.08 83.89 50.16Q82.79 48.24 82.79 45.29Q82.79 40.94 85.84 38.88Q88.89 36.82 95.00 36.60L99.73 36.45L99.73 35.25Q99.73 33.11 98.61 32.10Q97.49 31.10 95.48 31.10Q93.51 31.10 91.60 31.67Q89.70 32.23 87.79 33.08L85.33 28.05Q87.50 26.90 90.20 26.25Q92.90 25.59 95.78 25.59M99.73 40.80L96.85 40.89Q93.24 40.99 91.83 42.19Q90.43 43.38 90.43 45.34Q90.43 47.05 91.43 47.77Q92.43 48.49 94.04 48.49Q96.44 48.49 98.08 47.07Q99.73 45.65 99.73 43.04L99.73 40.80ZM125.88 53.93Q121.83 53.93 118.97 52.45Q116.11 50.98 114.62 47.88Q113.13 44.78 113.13 39.94Q113.13 34.94 114.83 31.77Q116.53 28.61 119.54 27.12Q122.56 25.63 126.54 25.63Q129.37 25.63 131.43 26.18Q133.50 26.73 135.03 27.49L132.84 33.25Q131.08 32.54 129.57 32.09Q128.05 31.64 126.54 31.64Q124.58 31.64 123.29 32.56Q122.00 33.47 121.36 35.30Q120.73 37.13 120.73 39.89Q120.73 42.60 121.41 44.38Q122.09 46.17 123.39 47.03Q124.68 47.90 126.54 47.90Q128.86 47.90 130.66 47.28Q132.47 46.66 134.18 45.53L134.18 51.90Q132.47 52.98 130.60 53.45Q128.74 53.93 125.88 53.93ZM152.00 48.00Q153.22 48.00 154.38 47.75Q155.54 47.51 156.69 47.14L156.69 52.69Q155.49 53.22 153.72 53.58Q151.95 53.93 149.85 53.93Q147.41 53.93 145.47 53.14Q143.53 52.34 142.42 50.38Q141.31 48.41 141.31 44.90L141.31 31.74L137.74 31.74L137.74 28.59L141.85 26.10L143.99 20.34L148.75 20.34L148.75 26.15L156.40 26.15L156.40 31.74L148.75 31.74L148.75 44.90Q148.75 46.46 149.65 47.23Q150.54 48.00 152.00 48.00Z"
              />
            </clipPath>
            <filter id="glow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="500" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* The actual text path */}
          <path
            fill="#1c1c1c"
            pointerEvents="visiblePainted"
            d="M10.40 53.44L0 26.15L7.79 26.15L13.06 41.70Q13.50 43.07 13.76 44.58Q14.01 46.09 14.11 47.29L14.31 47.29Q14.38 46.00 14.66 44.53Q14.94 43.07 15.41 41.70L20.65 26.15L28.44 26.15L18.04 53.44L10.40 53.44ZM43.60 25.63Q47.39 25.63 50.12 27.09Q52.86 28.54 54.35 31.30Q55.83 34.06 55.83 38.04L55.83 41.65L38.23 41.65Q38.35 44.80 40.12 46.59Q41.89 48.39 45.04 48.39Q47.66 48.39 49.83 47.85Q52.00 47.31 54.30 46.24L54.30 52.00Q52.27 53.00 50.06 53.47Q47.85 53.93 44.70 53.93Q40.60 53.93 37.44 52.42Q34.28 50.90 32.48 47.80Q30.69 44.70 30.69 39.99Q30.69 35.21 32.31 32.02Q33.94 28.83 36.84 27.23Q39.75 25.63 43.60 25.63M43.65 30.93Q41.48 30.93 40.05 32.32Q38.62 33.72 38.40 36.69L48.85 36.69Q48.83 35.03 48.25 33.74Q47.68 32.45 46.55 31.69Q45.41 30.93 43.65 30.93ZM77.12 25.63Q77.69 25.63 78.43 25.70Q79.17 25.76 79.64 25.85L79.08 32.84Q78.71 32.71 78.04 32.65Q77.37 32.59 76.88 32.59Q75.44 32.59 74.08 32.96Q72.73 33.33 71.66 34.14Q70.58 34.96 69.96 36.29Q69.34 37.62 69.34 39.55L69.34 53.44L61.89 53.44L61.89 26.15L67.53 26.15L68.63 30.74L68.99 30.74Q69.80 29.35 71.01 28.19Q72.22 27.03 73.77 26.33Q75.32 25.63 77.12 25.63ZM95.78 25.59Q101.27 25.59 104.20 27.98Q107.13 30.37 107.13 35.25L107.13 53.44L101.93 53.44L100.49 49.73L100.29 49.73Q99.12 51.20 97.90 52.12Q96.68 53.05 95.09 53.49Q93.51 53.93 91.24 53.93Q88.82 53.93 86.90 53.00Q84.99 52.08 83.89 50.16Q82.79 48.24 82.79 45.29Q82.79 40.94 85.84 38.88Q88.89 36.82 95.00 36.60L99.73 36.45L99.73 35.25Q99.73 33.11 98.61 32.10Q97.49 31.10 95.48 31.10Q93.51 31.10 91.60 31.67Q89.70 32.23 87.79 33.08L85.33 28.05Q87.50 26.90 90.20 26.25Q92.90 25.59 95.78 25.59M99.73 40.80L96.85 40.89Q93.24 40.99 91.83 42.19Q90.43 43.38 90.43 45.34Q90.43 47.05 91.43 47.77Q92.43 48.49 94.04 48.49Q96.44 48.49 98.08 47.07Q99.73 45.65 99.73 43.04L99.73 40.80ZM125.88 53.93Q121.83 53.93 118.97 52.45Q116.11 50.98 114.62 47.88Q113.13 44.78 113.13 39.94Q113.13 34.94 114.83 31.77Q116.53 28.61 119.54 27.12Q122.56 25.63 126.54 25.63Q129.37 25.63 131.43 26.18Q133.50 26.73 135.03 27.49L132.84 33.25Q131.08 32.54 129.57 32.09Q128.05 31.64 126.54 31.64Q124.58 31.64 123.29 32.56Q122.00 33.47 121.36 35.30Q120.73 37.13 120.73 39.89Q120.73 42.60 121.41 44.38Q122.09 46.17 123.39 47.03Q124.68 47.90 126.54 47.90Q128.86 47.90 130.66 47.28Q132.47 46.66 134.18 45.53L134.18 51.90Q132.47 52.98 130.60 53.45Q128.74 53.93 125.88 53.93ZM152.00 48.00Q153.22 48.00 154.38 47.75Q155.54 47.51 156.69 47.14L156.69 52.69Q155.49 53.22 153.72 53.58Q151.95 53.93 149.85 53.93Q147.41 53.93 145.47 53.14Q143.53 52.34 142.42 50.38Q141.31 48.41 141.31 44.90L141.31 31.74L137.74 31.74L137.74 28.59L141.85 26.10L143.99 20.34L148.75 20.34L148.75 26.15L156.40 26.15L156.40 31.74L148.75 31.74L148.75 44.90Q148.75 46.46 149.65 47.23Q150.54 48.00 152.00 48.00Z"
            onMouseEnter={() => setShowGlow(true)}
            onMouseLeave={() => setShowGlow(false)}
            onMouseMove={handleMouseMove}
          />
          {/* Glow circle (clipped to text path) */}
          {showGlow && (
            <circle
              ref={circleRef}
              r={10}
              fill="#004FD1"
              filter="url(#glow)"
              clipPath="url(#text-clip)"
              style={{ pointerEvents: "none" }}
              className="w-[5.021rem] h-[7.457rem] blur-[0.5rem]"
            />
          )}
        </svg>
        <div className='hidden lg:block w-[70rem] h-[41.813rem] rounded-[1.375rem] bg-[#0F0E14] relative z-20 -mt-[7.95rem]'>
          <div className='absolute top-[4.938rem] left-[3.75rem] w-[28.125rem] h-max flex flex-col items-start justify-center gap-[1.563rem] z-20'>
            <div className='openSansFont text-[3.25rem] text-white font-bold leading-[1.2em] tracking-[0em]'>ver<span className='text-primary-blue'>act</span></div>
            <div className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em]'>At Veract, we craft custom software with precision and innovation—driving business success through web, mobile, and AI excellence.</div>
          </div>
          <div className='absolute top-[21.438rem] left-[3.75rem] flex flex-col items-center justify-center gap-[0.625rem] z-20'>
            <div className='flex flex-row items-center justify-center gap-[0.625rem]'>
              {details.socialMediaIcons.slice(0, 2).map((icon) => (
                <a key={icon.id} href={icon.link} target='_blank' rel='noopener noreferrer'>
                  <div key={icon.id} className='w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                    <img src={icon.image} alt="social-media icon" />
                  </div>
                </a>
              ))}
            </div>
            <div className='flex flex-row items-center justify-center gap-[0.625rem]'>
              {details.socialMediaIcons.slice(2, 4).map((icon) => (
                <a key={icon.id} href={icon.link} target='_blank' rel='noopener noreferrer'>
                  <div key={icon.id} className='w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                    <img src={icon.image} alt="social-media icon" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className='absolute top-[5.688rem] right-0 w-[55%] flex flex-row items-center justify-center gap-[5rem] z-20'>
            <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
              <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.company.title}</div>
              <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
                {details.quickLinks.company.links.map((link) => (
                  <div key={link.id} className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{link.title}</div>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
              <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.services.title}</div>
              <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
                {details.quickLinks.services.links.map((link) => (
                  <div key={link.id} className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{link.title}</div>
                ))}
              </div>
            </div>
          </div>
          <div className='absolute top-[21.438rem] right-0 w-[51%] flex flex-row items-center justify-center gap-[2.875rem] z-20'>
            <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
              <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.contact.title}</div>
              <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
                {details.quickLinks.contact.links.map((link) => (
                  <div key={link.id}>
                    {link.type === 'phone' ? (
                      <a
                        href={`tel:${link.title.replace(/\s+/g, '')}`}
                        className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'
                      >
                        {link.title}
                      </a>
                    ) : link.type === 'email' ? (
                      <a
                        href={`mailto:${link.title}`}
                        className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'
                      >
                        {link.title}
                      </a>
                    ) : (
                      <div className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>
                        {link.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
              <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.address.title}</div>
              <div className='w-[15.75rem] openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{details.quickLinks.address.address}</div>
            </div>
          </div>
          <div className='absolute bottom-[1.5rem] left-1/2 transform -translate-x-1/2 w-[13.375rem] text-[0.75rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] flex flex-col items-center justify-center z-20'>
            <div>© 2025 — Veract Consultancy Pvt. Ltd.</div>
            <div>All Rights reserved</div>
          </div>
        </div>
        <div className='lg:hidden block openSansFont text-[6.563rem] md:text-[14.875rem] text-[#1C1C1C] font-bold leading-[1.2em] tracking-[0em] mt-[7.375rem] md:mt-0'>veract</div>
        <div className="w-[calc(100%-0.625rem)] lg:hidden flex flex-col items-center mx-[0.625rem] md:mx-[1.125rem] md:rounded-none px-[0.875rem] md:px-0 md:pl-[1.875rem] rounded-[1.375rem] bg-[#0F0E14] z-20 -mt-[2.85rem] md:-mt-[5.25rem]">
          <div className='pt-[4.938rem] w-full text-left openSansFont text-[3.25rem] text-white font-bold leading-[1.2em] tracking-[0em]'>ver<span className='text-primary-blue'>act</span></div>
          <div className='py-[3.125rem_6.25rem] openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em]'>At Veract, we craft custom software with precision and innovation—driving business success through web, mobile, and AI excellence.</div>
          <div className='md:w-full flex flex-row items-start justify-center md:justify-start gap-[3.063rem] md:gap-[8.125rem] z-20'>
            <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
              <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.company.title}</div>
              <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
                {details.quickLinks.company.links.map((link) => (
                  <div key={link.id} className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{link.title}</div>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
              <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.services.title}</div>
              <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
                {details.quickLinks.services.links.map((link) => (
                  <div key={link.id} className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{link.title}</div>
                ))}
              </div>
            </div>
          </div>
          <div className='w-full py-[3.125rem] flex flex-row items-center justify-start gap-[4.125rem] md:gap-[8.125rem]'>
            <div className='flex flex-col items-center justify-center gap-[0.625rem] z-20'>
              <div className='flex flex-row items-center justify-center gap-[0.625rem]'>
                {details.socialMediaIcons.slice(0, 2).map((icon) => (
                  <a key={icon.id} href={icon.link} target='_blank' rel='noopener noreferrer'>
                    <div key={icon.id} className='w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                      <img src={icon.image} alt="social-media icon" />
                    </div>
                  </a>
                ))}
              </div>
              <div className='flex flex-row items-center justify-center gap-[0.625rem]'>
                {details.socialMediaIcons.slice(2, 4).map((icon) => (
                  <a key={icon.id} href={icon.link} target='_blank' rel='noopener noreferrer'>
                    <div key={icon.id} className='w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer'>
                      <img src={icon.image} alt="social-media icon" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-start justify-center gap-[1.25rem]'>
              <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.contact.title}</div>
              <div className='flex flex-col items-start justify-center gap-[0.625rem]'>
                {details.quickLinks.contact.links.map((link) => (
                  <div key={link.id}>
                    {link.type === 'phone' ? (
                      <a
                        href={`tel:${link.title.replace(/\s+/g, '')}`}
                        className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'
                      >
                        {link.title}
                      </a>
                    ) : link.type === 'email' ? (
                      <a
                        href={`mailto:${link.title}`}
                        className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'
                      >
                        {link.title}
                      </a>
                    ) : (
                      <div className='openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>
                        {link.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='pb-[5rem] md:pb-[3.125rem] w-full flex flex-col items-start justify-center gap-[1.25rem]'>
            <div className='openSansFont text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]'>{details.quickLinks.address.title}</div>
            <div className='w-[15.75rem] openSansFont text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer'>{details.quickLinks.address.address}</div>
          </div>
          <div className='pb-[0.75rem] md:pb-[1rem] openSansFont text-[0.75rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] flex flex-col items-center justify-center z-20'>
            <div>© 2025 — Veract Consultancy Pvt. Ltd.</div>
            <div>All Rights reserved</div>
          </div>
        </div>
      </div>
    )
  )
}