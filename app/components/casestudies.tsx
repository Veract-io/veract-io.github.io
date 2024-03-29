'use client';
import Link from 'next/link';
// import '../styles/styles.css';
// import '../styles/mediaQuery.css';
import { useEffect, useRef, useState } from 'react';
import { link } from 'fs';
import { useRouter } from 'next/router';
// import RotatingCircle from './rotatingCases'

export default function Casestudies() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          
        }
      };
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const triggerPoint = window.innerHeight * 2.0; // Adjust this value as needed
            setIsVisible(scrollTop > triggerPoint);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const button1Ref = useRef<HTMLButtonElement | null>(null);
  const button2Ref = useRef<HTMLButtonElement | null>(null);

  const handleScrollToButton = (buttonId: string) => {
    let buttonRef: React.RefObject<HTMLButtonElement> | null = null;

    if (buttonId === 'button1') {
      buttonRef = button1Ref;
    } else if (buttonId === 'button2') {
      buttonRef = button2Ref;
    }

    if (buttonRef && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const portfolio=[
    
    {
        id:'content4',
        img: "/portfolio/manufacturingOrange.png",
        heading: "MANUFACTURING",
        desc:"Digitizing manufacturing process in low tech adoption workforce in high dust & temp environment."       
    },
    {
        id:'content1',
        img: "/portfolio/wellnessOrange.png",
        heading: "WELLNESS",
        desc:"New age startup looking to launch mental health and wellness app."       
    },
    {
        id:'content2',
        img: "/portfolio/salesOrange.png",
        heading: "SALES",
        desc:"Sales resource attrition leads to lost opportunities. Improved key metrics in a multi product, location sales environment."       
    },
    {
        id:'content5',
        img: "/portfolio/agriOrange.png",
        heading: "AGRI TECH",
        desc:"End  to end solution in the exciting area of farmer supply chain."       
    },
    {
        id:'content3',
        img: "/portfolio/manufacturingOrange.png",
        heading: "MACHINE VISION",
        desc:"AI driven defect detection in manufacturing environment."       
    },
    {
        id:'content6',
        img: "/portfolio/fintechOrange.png",
        heading: "FIN TECH",
        desc:"Implementation with well established finance and micro lending company."       
    },

  ]
   

    return (
        <div  className="pt-12 pb-12 ">
            <div className="flex flex-col  case-studies portfolioFonts ">
                <div className="flex flex-col case-studies-content   ">
                    <div className={`scroll-animationPortfolio ${isVisible ? 'visiblesectionName' : ''}`}>
                        <div className=" case-studies-content-top items-center justify-center flex flex-row md:gap-6 ">
                            <hr className="separator"></hr>
                            <div className='section-title mobilePaddingHeader'>
                                CUSTOMER <span className='section-title-highlight'> SUCCESS</span>
                            </div>
                            <hr className="separator"></hr>
                        </div>
                        {/* <div className='section-desc'>
                            We simply want to make sure your brand is getting the nourishment it needs and that our service is providing the best bang for your buck.
                        </div> */}
                    </div>

                </div>
                <div className='desktopPortfolio'>
                <div className='items-list flex  flex-wrap pt-1 pb-4   '>
                {/* manufacturingHover */}
                <div className="flex flex-row flex-wrap">
                {portfolio.map((item)=>(
                <div key={item.id} className='item flex flex-col contentWidth navbarCursor manufacturingHover md:w-1/3 p-4'>
                <Link rel="preload" href={{
                            pathname: 'CaseStudyPage',
                            query: { id: item.id },
                        }}>
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src={item.img} /></div>
                                <div className='item-title flex textColorLogo pl-4 '>{item.heading}</div>
                                </div>
                                <div className=''>
                                <img src="/images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                                {item.desc}
                            </div>        
                        </div>
                        </Link>                        
                        {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                </div>
                // </div>
                ))}
                </div>
                    {/* <div className='item flex flex-col contentWidth navbarCursor manufacturingHover md:w-1/3 p-4'>
                        <Link href="/CaseStudyPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}>

                            
                     
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/manufacturingOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>MANUFACTURING</div>
                                </div>
                                <div className=''>
                                <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                                Digitizing manufacturing process in low tech adoption workforce in high dust & temp environment.</div>        
                        </div>
                        </Link>                          
                    </div> */}
                    {/* wellnessHover */}
                    {/* <div className='item flex flex-col contentWidth navbarCursor manufacturingHover  md:w-1/3 p-4' >
                        <Link href="/CaseStudyPage">
                            <div className={`scroll-animationPortfolio ${isVisible ? 'visibleSales' : ''}`}>
                                <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/wellnessOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>WELLNESS</div>
                                </div>
                                <div className=''>
                                <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                            New age startup looking to launch mental health and wellness app.</div>        
                            </div>
                        </Link>
                    </div> */}
                    {/* salesHover */}
                    {/* <div className='item flex flex-col contentWidth navbarCursor salesHover md:w-1/3 p-4' >
                        <Link href="/CaseStudyPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleSales' : ''}`}>
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/salesOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>SALES</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc salesDesc'>
                                Sales resource attrition leads to lost opportunities. Improved key metrics in a multi product, location sales environment.</div>
                        </div>
                        </Link>
                      
                    </div> */}
                    {/* agriHover */}
                    {/* <div className='item flex flex-col contentWidth navbarCursor agriHover md:w-1/3 p-4'>
                        <Link href="/CaseStudyPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleAgri' : ''}`}>
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/agriOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4' >AGRI TECH</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc agriDesc'>
                                End  to end solution in the exciting area of farmer supply chain.</div>
                        </div>
                        </Link>
                    </div> */}
                    {/* hrHover */}
                    {/* <div className='item flex flex-col contentWidth navbarCursor machinevisionHover md:w-1/3 p-4'>
                        <Link href="/CaseStudyPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleMachinevision' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className="flex flex-row">
                                <div  className='w-8 '><img src="portfolio/manufacturingOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>MACHINE VISION</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc machinevisionDesc'>
                            Digitizing manufacturing process in low tech adoption workforce in high dust & temp environment.
                                </div>
                        </div>
                        </Link>
                       
                    </div> */}
                    {/* fintechHover */}
                    {/* <div className='item flex flex-col contentWidth navbarCursor fintechHover md:w-1/3 p-4 '>
                        <Link href="/CaseStudyPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleFintech' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 ' ><img src="portfolio/fintechOrange.png"/></div>
                                <div className='item-title flex textColorLogo pl-4'>FINTECH</div>
                                </div>
                                <div className=''>
                                 <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc fintechDesc'>
                                Implementation with well established finance and micro lending company.</div>
                               
                        </div>
                        </Link>
                 
                    </div> */}
                </div>
               
                </div>
                {/* <div className='desktopPortfolio' id="Testimonials"></div> */}
                <div className='mobilePortfolio'>
                <div className='items-list flex  flex-wrap pt-1 pb-4   '>
                {/* manufacturingHover */}
                
                    <div className='item flex flex-col contentWidth manufacturingHover md:w-1/3 p-4'>
                        {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}> */}
                            
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8'><img src="/portfolio/manufacturingOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>MANUFACTURING</div>
                                </div>
                                <div className='infoIconMobile '>
                                <Link rel="preload" href="/MobileCaseStudy/manufacturing">
                                        <img src="/images/info.png" className='flex items-center justify-center  w-4 h-4'></img>
                                </Link>
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                                Digitizing manufacturing process in low tech adoption workforce in high dust & temp environment.</div>        
                            {/* </div> */}
                           
                        {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>  
                    {/* wellnessHover */}
                    <div className='item flex flex-col contentWidth manufacturingHover md:w-1/3 p-4'>
                        
                        {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}> */}
                            
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="/portfolio/wellnessOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>WELLNESS</div>
                                </div>
                                <div className='infoIconMobile '>
                                    <Link rel="preload" href="/MobileCaseStudy/health">
                                        <img src="/images/info.png" className='flex items-center justify-center  w-4 h-4'></img>
                                    </Link> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                                New age startup looking to launch mental health and wellness app.</div>        
                            {/* </div> */}
                           
                        {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* <div className='item flex flex-col contentWidth wellnessHover  md:w-1/3 p-4' >
                       
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleWellness' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/wellnessOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>WELLNESS</div>
                                </div>
                                <div className='infoIconMobile'>
                                    <Link href="/MobileCaseStudy/health">
                                    <img src="images/info.png" className='flex items-center justify-center  w-4 h-4'></img>
                                    </Link>
                                  
                                </div>
                            </div>
                            <div className='flex flex-row item-desc wellnessDesc'>
                                New age startup looking to launch mental health and wellness app.
                            </div>
                        </div>
                    </div> */}
                    {/* salesHover */}
                    <div className='item flex flex-col contentWidth salesHover md:w-1/3 p-4'>
                      
                        {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleSales' : ''}`}> */}
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="/portfolio/salesOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>SALES</div>
                                </div>
                                <div className='infoIconMobile'>
                                    <Link rel="preload" href="/MobileCaseStudy/sales">
                                    <img src="/images/info.png" className='w-4 h-4'></img> 
                                    </Link>
                                 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc salesDesc'>
                                Sales resource attrition leads to lost opportunities. Improved key metrics in a multi product, location sales environment.                    </div>
                        {/* </div> */}
                      
                        {/* <div className='salesArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* agriHover */}
                    <div className='item flex flex-col contentWidth agriHover md:w-1/3 p-4'>
                      
                        {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleAgri' : ''}`}> */}
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="/portfolio/agriOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4' >AGRI TECH</div>
                                </div>
                                <div className='infoIconMobile'>
                                    <Link rel="preload" href="/MobileCaseStudy/agritech">
                                    <img src="/images/info.png" className='w-4 h-4'></img>
                                    </Link>
                                 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc agriDesc'>
                                End  to end solution in the exicting area of farmer supply chain.</div>
                        {/* </div> */}
                        
                        {/* <div className='agriArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    {/* hrHover */}
                    {/* <div className='item flex flex-col contentWidth hrHover md:w-1/3 p-4'>
                        
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleHr' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className="flex flex-row">
                                <div  className='w-8 '><img src="portfolio/hrOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>HR TECH</div>
                                </div>
                                <div className='infoIconMobile'>
                                    <Link href="/hrtech">
                                    <img src="images/info.png" className='w-4 h-4'></img>
                                    </Link>
                                   
                                </div>
                            </div>
                            <div className='flex flex-row item-desc hrDesc'>
                                Seamless integration of recruitment process.</div>
                        </div>
                    </div> */}
                    {/* fintechHover */}
                    <div className='item flex flex-col contentWidth fintechHover md:w-1/3 p-4 '>
                        
                        {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleFintech' : ''}`}> */}
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 ' ><img src="/portfolio/fintechOrange.png"/></div>
                                <div className='item-title flex textColorLogo pl-4'>FINTECH</div>
                                </div>
                                <div className='infoIconMobile'>
                                    <Link rel="preload" href="/MobileCaseStudy/fintech">
                                    <img src="/images/info.png" className='w-4 h-4'></img> 
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-row item-desc fintechDesc'>
                                Implementation with well established finance and micro lending company.</div>
                               
                        {/* </div> */}
                      
                        {/* <div className='fintechArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div>
                    <div className='item flex flex-col contentWidth manufacturingHover md:w-1/3 p-4'>
                        {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleMachinevision' : ''}`}> */}
                            
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8'><img src="/portfolio/manufacturingOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>MACHINE VISION</div>
                                </div>
                                <div className='infoIconMobile '>
                                    <Link rel="preload" href="/MobileCaseStudy/machinevision">
                                        <img src="/images/info.png" className='flex items-center justify-center  w-4 h-4'></img>
                                    </Link> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                                AI driven defect detection in manufacturing environment.
                            </div>        
                            {/* </div> */}
                           
                        {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                    </div> 
                </div>
                </div>
                
            </div>
            <div className='' id="Testimonials"></div>

        </div>
    )
}

