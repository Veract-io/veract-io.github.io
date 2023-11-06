"use client"
// import { clearData } from '@/services/dataService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ReactElement } from 'react'
import TopnavBar from '../components/topnavbar';
import Tabs from '../components/tab';
import { usePathname } from 'next/navigation'
import { send } from 'process';
import Footer from '../components/footer';
import { useRef } from 'react';


export default function MobileCaseStudy_Layout({

    children,
}: {
    children: React.ReactNode;
}) {
    const scrollableDivRef = useRef(null);
    

    const id = '1';
    let temp;
    const router = useRouter()
    const pathname = usePathname()
    const firstBtnRef = useRef<HTMLButtonElement | null>(null);

    function sendToRoute(path: string): void {
        router.push(path);
    }
    function scrollToCenter(ref:any){
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });      
    }
   

    return (
        <div className="fontFamily">
            <div className='w-full h-full '>
                <TopnavBar />
                {/* horizontal-scrollable-container n */}
            <div ref={scrollableDivRef} className="pt-16 pb-2">
                {/* <div className="buttons"> */}
                    <div className="mx-auto md:mx-0">
                    <div className="flex flex-col pl-2 pr-1">
                        <div className="flex flex-row pb-4 justify-around">
                    <button id="3"
                    onClick={() => sendToRoute("/MobileCaseStudy/machinevision")}
                    className={`custom_button ${
                        pathname === '/MobileCaseStudy/machinevision' ? 'bg-orange' : 'bg-white'
                    } ${
                        pathname === '/MobileCaseStudy/machinevision' ? 'text-white' : 'text-black underline decoration-orange underline-offset-8 '
                    } cursor-pointer`}
                    >
                    Machine Vision
                    </button>
                        
                        <button id="2"
                    onClick={()=> sendToRoute("/MobileCaseStudy/sales")}
                    className={`custom_button  ${
                        pathname === '/MobileCaseStudy/sales' ? 'bg-orange' : 'bg-white'
                    } ${
                        pathname === '/MobileCaseStudy/sales' ? 'text-white' : 'text-black underline decoration-orange underline-offset-8 '
                    } cursor-pointer`}
                    >
                    Sales
                    </button>
                    <div id="1" onClick={() => sendToRoute('/MobileCaseStudy/health')} 
                            className={`custom_button ${
                                pathname === '/MobileCaseStudy/health' ? 'bg-orange' : 'bg-white'
                            } ${
                                pathname === '/MobileCaseStudy/health' ? 'text-white' : 'text-black underline decoration-orange underline-offset-8 '
                            } cursor-pointer`}>
                            Wellness
                        </div>
                        </div>
                        <div className="flex flex-row justify-around">
                        <button id="4"
                    onClick={() => sendToRoute("/MobileCaseStudy/manufacturing")}
                    className={`custom_button ${
                        pathname === '/MobileCaseStudy/manufacturing' ? 'bg-orange' : 'bg-white'
                    } ${
                        pathname === '/MobileCaseStudy/manufacturing' ? 'text-white' : 'text-black underline decoration-orange underline-offset-8 '
                    } cursor-pointer`}
                    >
                    Manufacturing
                    </button>
                    <button id="5"
                    onClick={() => sendToRoute("/MobileCaseStudy/agritech")}
                    className={`custom_button ${
                        pathname === '/MobileCaseStudy/agritech' ? 'bg-orange' : 'bg-white'
                    } ${
                        pathname === '/MobileCaseStudy/agritech' ? 'text-white' : 'text-black underline decoration-orange underline-offset-8 '
                    } cursor-pointer`}
                    >
                    Agri Tech
                    </button>
                    <button id="6"
                    onClick={() => sendToRoute("/MobileCaseStudy/fintech")}
                    className={`custom_button ${
                        pathname === '/MobileCaseStudy/fintech' ? 'bg-orange' : 'bg-white'
                    } ${
                        pathname === '/MobileCaseStudy/fintech' ? 'text-white' : 'text-black underline decoration-orange underline-offset-8 '
                    } cursor-pointer`}
                    >
                    Fin Tech
                    </button>
                        </div>
                    </div>
                    {/* <button id="1"
                    onClick={() => sendToRoute('/MobileCaseStudy/health')}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/MobileCaseStudy/health' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/MobileCaseStudy/health' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Wellness  
                    </button>
                    <button id="2"
                    onClick={()=> sendToRoute("/MobileCaseStudy/machinevision")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/MobileCaseStudy/sales' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/MobileCaseStudy/sales' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Sales
                    </button>
                    <button id="3"
                    onClick={() => sendToRoute("/MobileCaseStudy/machinevision")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/MobileCaseStudy/machinevision' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/MobileCaseStudy/machinevision' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Machine Vision
                    </button>
                    <button id="4"
                    onClick={() => sendToRoute("/MobileCaseStudy/manufacturing")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/MobileCaseStudy/manufacturing' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/MobileCaseStudy/manufacturing' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Manufacturing
                    </button>
                    <button id="5"
                    onClick={() => sendToRoute("/MobileCaseStudy/agritech")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/MobileCaseStudy/agritech' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/MobileCaseStudy/agritech' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Agri Tech
                    </button>
                    <button id="6"
                    onClick={() => sendToRoute("/MobileCaseStudy/fintech")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/MobileCaseStudy/fintech' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/MobileCaseStudy/fintech' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Fin Tech
                    </button> */}
                    </div>
                {/* </div> */}
                
        </div>
        <div className="pt-0">
            {children}
        </div>
        
            <Footer />
                {/* <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ml-3 ">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { sendToRoute("/admin/home/blogs/list") }} className="flex active:text-indigo-600  items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Blogs
                                    </span>
                                </a>
                            </li>


                            <li>
                                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap" onClick={logout}>Logout</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </aside > */}

                {/* <div className="p-4 sm:ml-64 m-11 ">
                    {children}


                </div> */}

            </div >
        </div>
    )
}
