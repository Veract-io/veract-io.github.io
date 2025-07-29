'use client'
import { LandingPageData } from '@/lib/custom_data';
import { isMobile, isTablet } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Advantages() {

  const router = useRouter();
  const cardCount = 4;
  const [loaded, setLoaded] = useState(false)
  const [openedArr, setOpenedArr] = useState(Array(cardCount).fill(false));
  const [scaledArr, setScaledArr] = useState(Array(cardCount).fill(false));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  useEffect(() => {
    if (loaded) {
      if (typeof window === 'undefined') return;
      if (!isMobile() && !isTablet()) {
        const cards = document.querySelectorAll(".services-group");
        const blobs = document.querySelectorAll(".blob-placeholder");

        let lastActiveIndex: number | null = null;

        const handleMouseOver = (idx: number) => {
          // Reverse previous
          if (lastActiveIndex !== null && lastActiveIndex !== idx) {
            blobs[lastActiveIndex]?.classList.remove("animate-blob-move");
            blobs[lastActiveIndex]?.classList.add("animate-blob-reverse");
          }

          // Animate current
          blobs[idx]?.classList.remove("animate-blob-reverse");
          blobs[idx]?.classList.add("animate-blob-move");

          lastActiveIndex = idx;
        };

        const handleMouseLeave = (idx: number) => {
          blobs[idx]?.classList.remove("animate-blob-move");
          blobs[idx]?.classList.add("animate-blob-reverse");

          lastActiveIndex = null;
        };

        cards.forEach((card, idx) => {
          const cardEl = card as HTMLElement;

          const mouseOverHandler = () => handleMouseOver(idx);
          const mouseLeaveHandler = () => handleMouseLeave(idx);

          cardEl.addEventListener("mouseenter", mouseOverHandler);
          cardEl.addEventListener("mouseleave", mouseLeaveHandler);

          // Save both for cleanup
          (cardEl as HTMLElement & { _mouseOverHandler?: () => void; _mouseLeaveHandler?: () => void })._mouseOverHandler = mouseOverHandler;
          (cardEl as HTMLElement & { _mouseOverHandler?: () => void; _mouseLeaveHandler?: () => void })._mouseLeaveHandler = mouseLeaveHandler;
        });

        return () => {
          cards.forEach((card) => {
            const cardEl = card as HTMLElement & { _mouseOverHandler?: () => void; _mouseLeaveHandler?: () => void };
            if (cardEl._mouseOverHandler) {
              cardEl.removeEventListener("mouseenter", cardEl._mouseOverHandler);
            }
            if (cardEl._mouseLeaveHandler) {
              cardEl.removeEventListener("mouseleave", cardEl._mouseLeaveHandler);
            }
          });
        };
      }
    }
  }, [loaded]);

  // Handle card click for open/close with delayed bg swap
  const handleCardClick = (idx: number) => {
    if ((isMobile() || isTablet())) {
      if (openedArr[idx]) {
        // Close: reset both immediately
        setScaledArr(arr => {
          const newArr = [...arr];
          newArr[idx] = false;
          return newArr;
        });
        setOpenedArr(arr => {
          const newArr = [...arr];
          newArr[idx] = false;
          return newArr;
        });
      } else {
        // Open: scale first, then fade out
        setOpenedArr(arr => {
          const newArr = [...arr];
          newArr[idx] = true;
          return newArr;
        });
        setTimeout(() => {
          setScaledArr(arr => {
            const newArr = [...arr];
            newArr[idx] = true;
            return newArr;
          });
        }, 300);
      }
    }
  };

  return (
    loaded && (
      <div className='w-full h-max flex flex-col items-center justify-center relative z-[20] bg-primary-text'>
        <div className='static lg:sticky top-[calc(100%-934px)] w-full h-max flex flex-col gap-[2.5rem] items-center justify-center p-[0_1.5rem_6.25rem_1.5rem] md:p-[0_3.125rem_6.25rem_3.125rem]'>
          <div className='flex flex-col items-center justify-center gap-[0.625rem]'>
            <div className='uppercase syneFont text-[2.5rem] font-bold -tracking-[0.05rem] md:-tracking-[0.05rem] leading-[3.125rem] text-white text-center'>veract<span className='text-primary-blue'>{' '}advantage</span></div>
            <div className='uppercase interFont text-[1.125rem] text-secondary-gray font-normal leading-[2.125rem] text-center'>Collaborating with us is a smart move for growth</div>
          </div>
          <div className='w-full h-max flex flex-col items-center justify-center'>
            <div className="flex flex-col lg:gap-[0.625rem] gap-[0.625rem] lg:w-[100%] w-full">
              {/* First row */}
              <div className="flex lg:w-full lg:flex-row flex-col lg:gap-[0.625rem] gap-[0.625rem] justify-center items-center">
                {LandingPageData.advantages.advantages_list.slice(0, 2).map((card, idx) => (
                  <div
                    key={card.title}
                    className={`syneFont group services-group relative transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[idx] ? 'h-[11.938rem]' : (idx === 0 ? 'lg:h-[23.5rem] lg:w-[66%]' : 'lg:h-[23.5rem] lg:w-[33%]')
                      } md:w-full md:h-[23.5rem] w-full h-[23.5rem] overflow-clip rounded-[1.875rem]`}
                    onClick={() => handleCardClick(idx)}
                  >
                    {/* Animated background for mobile click */}
                    <div
                      className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[idx] ? 'scale-200' : 'scale-100'
                        } ${(isMobile() || isTablet()) && scaledArr[idx] ? 'opacity-30' : 'opacity-100'} ${card.bg}`}
                      style={{ borderRadius: '1.875rem' }}
                    ></div>
                    {/* Overlay image or black with 50% opacity when opened on mobile */}
                    {(isMobile() || isTablet()) && openedArr[idx] && (
                      <div className="absolute inset-0 bg-black/50 z-10" style={{ borderRadius: '1.875rem' }}></div>
                    )}
                    {/* Overlay for text clarity */}
                    <div className="absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"></div>
                    <div className={`opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] ${card.blobWidth} rotate-[18deg] overflow-hidden bg-white-5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-201`}></div>
                    <div
                      className={
                        `absolute lg:top-[0.75rem] md:top-[0.75rem] top-[1.25rem] left-[1.25rem] lg:text-[1.625rem] md:text-[1.625rem] leading-[1.5em] text-[1.375rem] font-semibold md:tracking-[-0.05em] tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${card.gradient} bg-clip-text text-transparent transition-all duration-300 ease-in  ` +
                        ((isMobile() || isTablet()) && openedArr[idx]
                          ? `${card.gradient} bg-clip-text text-transparent md:top-[2.5rem] md:left-[2.5rem] ease-in duration-300 transition-all  `
                          : `text-white lg:group-hover:top-[2.5rem] lg:group-hover:left-[2.5rem] lg:group-hover:${card.gradient} lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:w-[50%]`)
                      }
                      style={{ zIndex: 30 }}
                    >
                      {card.title}
                    </div>
                    {(isMobile() || isTablet()) && openedArr[idx] ? (
                      <div className="absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] mr-[1.25rem] interFont text-white text-[0.875rem] font-light tracking-[-0.04em] leading-[1.5em] z-30">
                        {card.description}
                      </div>
                    ) : (
                      <div className="lg:opacity-0 absolute  md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] interFont text-white md:text-[1.125rem] text-[0.875rem] tracking-[-0.04em] leading-[1.5em] cursor-pointer z-30">
                        Learn More →
                      </div>
                    )}
                    <div className="absolute interFont lg:bottom-[2.5rem] md:bottom-[2.5rem] bottom-[1.25rem] left-[1rem] text-[0.938rem] font-light leading-[1.5em] text-white-80 opacity-0 transition-all duration-700 ease-in lg:group-hover:opacity-100 lg:group-hover:left-[2.5rem] lg:right-[2.5rem] z-30">
                      {card.description}
                    </div>
                  </div>
                ))}
              </div>
              {/* Second row */}
              <div className="flex lg:w-full lg:flex-row flex-col lg:gap-[0.625rem] gap-[0.625rem] items-center justify-center">
                {LandingPageData.advantages.advantages_list.slice(2, 4).map((card, idx) => (
                  <div
                    key={card.title}
                    className={`syneFont group services-group relative transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[idx + 2] ? 'h-[11.938rem]' : (idx === 1 ? 'lg:h-[23.5rem] lg:w-[66%]' : 'lg:h-[23.5rem] lg:w-[33%]')
                      } md:w-full md:h-[23.5rem] w-full h-[23.5rem] overflow-clip rounded-[1.875rem]`}
                    onClick={() => handleCardClick(idx + 2)}
                  >
                    {/* Animated background for mobile click */}
                    <div
                      className={`absolute inset-0 z-0 transition-all duration-700 ease-in-out ${(isMobile() || isTablet()) && openedArr[idx + 2] ? 'scale-200' : 'scale-100'
                        } ${(isMobile() || isTablet()) && scaledArr[idx + 2] ? 'opacity-30' : 'opacity-100'} ${card.bg}`}
                      style={{ borderRadius: '1.875rem' }}
                    ></div>
                    {/* Overlay image or black with 50% opacity when opened on mobile */}
                    {(isMobile() || isTablet()) && openedArr[idx + 2] && (
                      <div className="absolute inset-0 bg-black/50 z-10" style={{ borderRadius: '1.875rem' }}></div>
                    )}
                    {/* Overlay for text clarity */}
                    <div className="absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"></div>
                    <div className={`opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] ${card.blobWidth} rotate-[18deg] overflow-hidden bg-white-5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-20`}></div>
                    <div
                      className={
                        `absolute lg:top-[0.75rem] md:top-[0.75rem] top-[1.25rem] left-[1.25rem] lg:text-[1.625rem] md:text-[1.625rem]  text-[1.375rem] font-semibold tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${card.gradient} bg-clip-text text-transparent transition-all duration-300 ease-in  ` +
                        ((isMobile() || isTablet()) && openedArr[idx + 2]
                          ? `${card.gradient} bg-clip-text text-transparent md:top-[2.5rem] md:left-[2.5rem] ease-in duration-300 transition-all  `
                          : `text-white lg:group-hover:top-[2.5rem] lg:group-hover:left-[2.5rem] lg:group-hover:${card.gradient} lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:w-[50%] md:w-[60%]`)
                      }
                      style={{ zIndex: 30 }}
                    >
                      {card.title}
                    </div>
                    {(isMobile() || isTablet()) && openedArr[idx + 2] ? (
                      <div className="absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] mr-[1.25rem] interFont text-white md:text-[0.938rem] font-light text-[0.875rem] tracking-[-0.04em] leading-[1.5em] z-30">
                        {card.description}
                      </div>
                    ) : (
                      <div className="lg:opacity-0 absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] interFont text-white md:text-[1.125rem]  text-[0.875rem] tracking-[-0.04em] leading-[1.5em] cursor-pointer z-30">
                        Learn More →
                      </div>
                    )}
                    <div className="absolute interFont lg:bottom-[2.5rem] md:bottom-[2.5rem] bottom-[1.25rem] left-[1rem] text-[0.938rem] font-light leading-[1.5em] text-white-80 opacity-0 transition-all duration-700 ease-in lg:group-hover:opacity-100 lg:group-hover:left-[2.5rem] lg:right-[2.5rem] z-30">
                      {card.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='relative z-20 w-full h-max bg-white flex flex-col items-center justify-center gap-[2.5rem] p-[6.25rem_1.5rem] md:p-[6.25rem_3.125rem]'>
          <div className='flex flex-col items-center justify-center gap-[.625rem] w-[calc(100%+1px)] md:w-full'>
            <div className='uppercase syneFont text-[2.5rem] font-bold tracking-0 lg:-tracking-[0.05rem] leading-[1.2em] lg:leading-[3.125rem] text-primary-text text-center'>Featured<span className='text-primary-blue'>{' '}Projects</span></div>
            <div className='interFont text-[1.125rem] text-primary-text-50 font-normal leading-[1.8em] px-0 lg:px-[12.5rem] text-center'>Take a look at our handpicked case studies showcasing real-world tech solutions.A quick glimpse into the impact we create.</div>
          </div>
          <div className='w-full lg:w-max flex flex-col items-center justify-center gap-[2.5rem] px-0 lg:px-[6.25rem]'>
            <div className='w-full lg:w-max flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[2.5rem] md:gap-[2.75rem]'>
              {LandingPageData.advantages.featuredWorks_list.slice(0, 2).map((item, index) => (
                <div key={index} className='w-full flex flex-col items-center justify-center gap-[1.25rem] py-0 lg:py-[2.5rem] pb-[1.25rem] lg:pb-0'>
                  <div
                    onClick={() => {
                      if (item.status === 'active') {
                        router.push(`/case-studies/${item.route}`);
                      }
                      else {
                        router.push('/contact-us/');
                      }
                    }}
                    className={`relative w-full lg:w-[25rem] md:h-[33.25rem] h-[14.75rem] lg:h-[14.75rem] rounded-[0.75rem] flex items-center justify-center overflow-hidden group cursor-pointer`}
                  >
                    {/* <div className='w-[100%] h-[100%] bg-primary-blue'></div> */}
                    <img loading="lazy" src={item.image} alt={item.title} className='absolute w-[100%] h-[100%] object-cover opacity-100 lg:group-hover:opacity-0 transition-all duration-300 ease-in-out' />
                    <img loading='lazy' src={item.hover_image} alt={item.title} className='absolute w-[100%] h-[100%] object-cover opacity-0 lg:group-hover:opacity-100 lg:group-hover:z-50 lg:group-hover:scale-105 transition-all duration-300 ease-in-out' />
                  </div>
                  <div className='w-full flex flex-col items-start justify-center gap-[0.625rem]'>
                    <div className='uppercase syneFont text-[1.5rem] text-primary-text font-bold md:tracking-[-0.02em] leading-[1.2em]'>{item.title}</div>
                    <div className='uppercase interFont text-[0.875rem] text-[#71717A] font-normal leading-[1.4em] tracking-[0.05em]'>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className='w-full lg:w-max flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[2.5rem] md:gap-[2.75rem]'>
              {LandingPageData.advantages.featuredWorks_list.slice(2, 4).map((item, index) => (
                <div key={index} className='w-full flex flex-col items-center justify-center gap-[1.25rem] py-0 lg:py-[2.5rem] pb-[1.25rem] lg:pb-0'>
                  <div
                    onClick={() => {
                      if (item.status === 'active') {
                        router.push(`/case-studies/${item.route}`);
                      }
                      else {
                        router.push('/contact-us/');
                      }
                    }}
                    className={`relative w-full lg:w-[25rem] md:h-[33.25rem] h-[14.75rem] lg:h-[14.75rem] rounded-[0.75rem] flex items-center justify-center overflow-hidden group cursor-pointer`}
                  >
                    {/* <div className='w-[100%] h-[100%] bg-primary-blue'></div> */}
                    <img loading="lazy" src={item.image} alt={item.title} className='absolute w-[100%] h-[100%] object-cover opacity-100 lg:group-hover:opacity-0 transition-all duration-300 ease-in-out' />
                    <img loading='lazy' src={item.hover_image} alt={item.title} className='absolute w-[100%] h-[100%] object-cover opacity-0 lg:group-hover:opacity-100 lg:group-hover:z-50 lg:group-hover:scale-105 transition-all duration-300 ease-in-out' />                  </div>
                  <div className='w-full flex flex-col items-start justify-center gap-[0.625rem]'>
                    <div className='uppercase syneFont text-[1.5rem] text-primary-text font-bold md:tracking-[-0.02em] leading-[1.2em]'>{item.title}</div>
                    <div className='uppercase interFont text-[0.875rem] text-[#71717A] font-normal leading-[1.4em] tracking-[0.05em]'>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            onMouseOver={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            onClick={() => {
              router.push('/case-studies');
            }}
            className='w-[8.688rem] h-[2.75rem] relative flex flex-row items-center justify-center rounded-[2.5rem] bg-primary-blue lg:bg-transparent hover:bg-primary-blue transition-all duration-300 easeTransition cursor-pointer group'
          >
            <div
              className={`absolute ${isHovered || isMobile() || isTablet() ? 'left-[1rem]' : 'left-[1.75rem] md:left-[1.5rem]'} poppinsFont text-[1rem] text-white lg:text-black font-normal leading-[1.8em] text-center lg:group-hover:text-white transition-all duration-300 easeTransition`}

            >
              more projects
            </div>
            <img loading="lazy" src="/Icons/arrow-right.png" alt="arrow-right" className={`absolute ${isHovered || isMobile() || isTablet() ? 'left-[calc(100%-1.65rem)] opacity-100' : 'left-[calc(100%-3rem)] opacity-0'} transition-all duration-300 easeTransition`} />
          </div>
        </div>
      </div >
    )
  )
}
