'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Marquee from 'react-fast-marquee';


export default function Banner() {
  const words = ["mobile app"];

  const [translateY, setTranslateY] = useState<number>(0);
  const [translateY2, setTranslateY2] = useState<number>(0);
  const [rotateX, setRotateX] = useState<number>(0);
  const [scale, setScale] = useState<number>(1);
  const [opacity, setOpacity] = useState<number>(1);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [hoveredTouch, setHoveredTouch] = useState(false);
  const [hoveredServices, setHoveredServices] = useState(false);


  // Typing Effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    // setCurrentWord(currentWord);
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + currentWord[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 120);
      } else {
        // Wait 3 seconds before starting to delete
        timeout = setTimeout(() => {
          setTyping(false);
        }, 3000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 80);
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setTyping(true); // Start typing next word
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, wordIndex]);


  // Images
  const animateImages = ['/Images/LandingPage/Banner/IBITS.png', '/Images/LandingPage/Banner/Evo11ve.png', '/Images/LandingPage/Banner/Mako.png', '/Images/LandingPage/Banner/Suyash.png', '/Images/LandingPage/Banner/Anyo.png']

  // Background Effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setTranslateY(scrollY / 2.5);
      setTranslateY2(scrollY / 6);
      setRotateX(Math.min(scrollY / 10, 20));
      setScale(Math.max(0.88, 1 - scrollY / 300 / 2));
      setOpacity(Math.max(0.65, 1 - scrollY / 600 / 2));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 select-none px-[1rem] lg:pt-[1.5rem] md:pt-[4.5rem] pt-[4.5rem] md:pt-[4.5rem] md:px-[2.5rem] lg:pt-[5.938rem] lg:px-[5.438rem] w-full h-[100vh] overflow-hidden perspective-[75rem] flex items-start justify-center bg-black"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* background image */}
      {/* <img
      src={`${bannerBg.src}`}
      alt={`placeholder image`}
      className="absolute w-full h-full object-cover"
      style={{
        transform: `translateY(-${translateY}px) rotateX(-${rotateX}deg) scale(${scale})`,
        transformOrigin: 'center center',
        transition: 'transform 0.1s ease',
        position: 'absolute',
        top: '-12.688rem ',
        left: '-39.688rem'
      }}
    /> */}
      <img
        src={`/Images/case-studies/case_study_banner_image.png`}
        alt={`placeholder image`}
        className="absolute w-full h-full object-cover"
        style={{
          transform: `translateY(-${translateY}px) rotateX(-${rotateX}deg) scale(${scale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.1s ease',
        }}
      />
      {/* text overlays */}
      <div
        className=" w-[calc(100%-2.5rem)]  lg:w-auto relative z-10 text-center text-white flex flex-col items-center justify-center gap-[2.188rem] md:gap-[0.625rem] lg:gap-[3.125rem]"
        style={{
          opacity: opacity,
          transform: `scale(${scale}) translateY(${translateY2}px)`,
          transition: 'transform 0.1s ease',
        }}
      >
        {/* Main content */}
        <div className='z-10 text-center pt-[8.063rem] md:pt-[18.563rem] lg:pt-[8.375rem] '>
          <div className=" text-[2.5rem] lg:text-[3rem] md:text-[3rem]  font-semibold lg:w-[55.938rem] syneFont mx-auto pb-[3.5rem] md:pb-[0.625rem] lg:pb-[0.625rem] leading-[1.1em] tracking-[0rem] lg:tracking-[-0.179rem] md:tracking-[-0.173rem]">
            <motion.span
              initial={{
                clipPath: "inset(0 60% 0 0)",
                opacity: 0,
                filter: "blur(5px)",
                y: 10,
              }}
              animate={{
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="lg:inline md:inline inline-grid"
            >
              <span>Driving Digital Transformation </span>
              <span className="text-white hidden lg:inline">&nbsp;with&nbsp;</span>
              <span className="text-white md:hidden ">&nbsp;with custom&nbsp; </span>

            </motion.span>
            <motion.span
              className=""
              initial={{
                clipPath: "inset(0 60% 0 0)",
                opacity: 0,
                filter: "blur(5px)",
                y: 10,
              }}
              animate={{
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}

            >
              <span className="inline-flex flex items-baseline whitespace-nowrap">
                <span className="text-white hidden md:inline lg:hidden">with&nbsp;</span>
                <span className="text-white hidden md:inline">custom&nbsp;</span>

                <span className={`text-primary-blue text-left overflow-hidden`}
                  style={{
                    width: `${words[wordIndex].length}ch`,
                  }}
                >
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>


            </motion.span>
          </div>



          <motion.div className="interFont text-[1rem] lg:text-[1.125rem] md:text-[1rem] font-medium w-[90%] md:w-[90%] lg:w-[37.188rem] leading-[1.5em] mx-auto pb-[1.75rem] md:pb-[1.75rem]  lg:pb-[0.625rem] tracking-[-0.02em] space-y-1">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.span
                initial={{
                  clipPath: "inset(0 60% 0 0)",
                  opacity: 0,
                  filter: "blur(5px)",
                  y: 5,
                }}
                animate={{
                  clipPath: "inset(0 0% 0 0)",
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                className="block"
              >
                Delivering scalable technology that powers modern digital experiences, AI
              </motion.span>
            </div>

            {/* Line 2 */}
            <div className="overflow-hidden">
              <motion.span
                initial={{
                  clipPath: "inset(0 60% 0 0)",
                  opacity: 0,
                  filter: "blur(5px)",
                  y: 5,
                }}
                animate={{
                  clipPath: "inset(0 0% 0 0)",
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}
                className="block"
              >
                systems, and connected IoT solutions.
              </motion.span>
            </div>
          </motion.div>



          {/* <div className='interFont text-[1.125rem] font-medium text-white tracking-[-0.02em] leading-[1.5em]'> Delivering scalable technology that powers modern digital experiences, AI systems, and connected IoT solutions.</div> */}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            className=' flex items-center justify-center gap-[0.938rem]  pb-[1.75rem] lg:pb-[2.688rem] md:pb-[1.75rem] '>

            <div
              // onClick={() =>}
              onMouseEnter={() => setHoveredTouch(true)}
              onMouseLeave={() => setHoveredTouch(false)}
              className="bg-primary-blue relative overflow-hidden w-[7.75rem] h-[2.25rem] text-white rounded-full cursor-pointer flex items-center justify-center interFont text-[0.938rem]"
            >
              {/* Default Text */}
              <motion.div
                initial={false}
                animate={{
                  y: hoveredTouch ? "-100%" : "0%",
                  opacity: hoveredTouch ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-primary-blue absolute inset-0 flex items-center justify-center"
              >
                Get in touch
                <img

                  src="/Images/LandingPage/Banner/arrowIconUp.png"
                  alt="arrow_icon"
                  className={`w-[1rem] h-[1rem] object-contain `}
                />
              </motion.div>
              {/* Hover Text */}
              <motion.div
                initial={false}
                animate={{
                  y: hoveredTouch ? "0%" : "100%",
                  opacity: hoveredTouch ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center bg-primary-blue"
              >
                Get in touch
                <img

                  src="/Images/LandingPage/Banner/arrowIconUp.png"
                  alt="arrow_icon"
                  className={`w-[1rem] h-[1rem] object-contain rotate-45`}
                />
              </motion.div>
            </div>


            <div
              // onClick={() => }
              onMouseEnter={() => setHoveredServices(true)}
              onMouseLeave={() => setHoveredServices(false)}
              className="lg:bg-[#0D0D0D] md:bg-[#050505] bg-[#050505] relative overflow-hidden w-[7.75rem] h-[2.25rem] border border-gray-700 text-white rounded-full cursor-pointer flex items-center justify-center interFont text-[0.938rem]"
            >
              {/* Default Text */}
              <motion.div
                initial={false}
                animate={{
                  y: hoveredServices ? "-100%" : "0%",
                  opacity: hoveredServices ? 0 : 1,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                View services
              </motion.div>

              {/* Hover Text */}
              <motion.div
                initial={false}
                animate={{
                  y: hoveredServices ? "0%" : "100%",
                  opacity: hoveredServices ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                View services
              </motion.div>
            </div>

          </motion.div>

          {/*Actual; pb-[5.438rem] for web */}
          <div className="flex items-start justify-center gap-[1.5rem]">
            <motion.img
              src="/Images/LandingPage/Banner/BNI.png"
              alt="BNI"
              className="w-[2.563rem] object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1, ease: "easeOut" }}
            />

            <div className="flex flex-col items-center justify-center gap-[0.08rem]">
              <motion.img
                src="/Images/LandingPage/Banner/Clutch.png"
                alt="Clutch"
                className="w-[3.938rem] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
              />

              <motion.img
                src="/Images/LandingPage/Banner/Stars.png"
                alt="Stars"
                className="w-[3.938rem] object-cover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
              />
            </div>

            <motion.img
              src="/Images/LandingPage/Banner/EtherCat.png"
              alt="EtherCat"
              className="w-[3.563rem] object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
            />
          </div>

        </div>

        <motion.div
          className='lg:w-[95%]'
          initial={{ x: 100, y: 15, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1.5 }}

        >
          <Marquee
            gradient={true}
            autoFill={true}
            gradientColor="transparent"
            gradientWidth={100}
            speed={30}
            direction="left"
            className="flex items-center "
            play={true}
          >
            {animateImages.map((src, idx) => (
              <div key={idx} className="mr-[4.125rem]">
                <img
                  src={src}
                  alt={`${src.split('/').pop()?.split('.').shift()}`}
                  className="w-[6.625rem] object-cover flex-shrink-0"
                />
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </div>
  )
}
