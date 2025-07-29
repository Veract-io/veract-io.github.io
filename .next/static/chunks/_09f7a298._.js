(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/custom_data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AgentPageData": (()=>AgentPageData),
    "LandingPageData": (()=>LandingPageData),
    "baseUrl": (()=>baseUrl),
    "caseStudiesHomePageData": (()=>caseStudiesHomePageData),
    "caseStudyData": (()=>caseStudyData),
    "metadata": (()=>metadata),
    "navItems": (()=>navItems)
});
const baseUrl = 'https://veract-website-assets.s3.ap-south-1.amazonaws.com';
const navItems = [
    {
        id: 1,
        name: "Home",
        link: "/",
        status: "active"
    },
    {
        id: 2,
        name: "Services",
        link: "",
        status: "inactive"
    },
    {
        id: 3,
        name: "Agentic AI",
        icon: `/Images/LandingPage/Banner/Join.svg`,
        link: "/agentic-ai",
        status: "active"
    },
    {
        id: 4,
        name: "Case Studies",
        link: "/case-studies",
        status: "active"
    },
    {
        id: 5,
        name: "Blogs",
        link: "",
        status: "inactive"
    }
];
const caseStudyData = {
    "infrared-thermography": {
        id: 1,
        banner: {
            title: "Enhancing Animal Health with Thermography",
            description: "A reliable, stress-free method for monitoring livestock health and preventing disease outbreaks.",
            image: `${baseUrl}/Images/case-studies/thermal/Hero bg img.png`
        },
        showReel: {
            title: "SHOWREEL",
            video: [
                `${baseUrl}/Images/case-studies/thermal/ShowReel/web view-thermal showwreel.mp4`,
                `${baseUrl}/Images/case-studies/thermal/ShowReel/tab view-thermal showreel.mp4`,
                `${baseUrl}/Images/case-studies/thermal/ShowReel/mobile view-thermal showreel.mp4`
            ],
            youtube_url: 'https://www.youtube.com/embed/SI8GxhQg_oA?si=zzuciOt549NiVPer'
        },
        description: {
            title: "A small glimpse",
            description: `
                  <div class="interFont w-full text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem] text-primary-text-50 font-extralight leading-[1.2em] tracking-[-0.04em]">
                  A thermal imaging system for
                  <span class="text-primary-text"> monitoring buffalo udder health</span> using
                  <span class="text-orange"> infrared thermography</span>
                  <span class="text-primary-text"> —</span>
                  <span class="text-primary-text-70">
                      enabling early mastitis detection, temperature analysis, and session-based tracking
                  </span>
                  with offline support and seamless integration into veterinary workflows.
                  </div>
              `
        },
        challenges: {
            title: "Challenges & Goals",
            indication_icon: "/Images/case-studies/challenges and goals-icon.svg",
            video: [
                `${baseUrl}/Images/case-studies/thermal/bottleneck video- web view.mp4`,
                `${baseUrl}/Images/case-studies/thermal/bottleneck-tab view video.mp4`,
                `${baseUrl}/Images/case-studies/thermal/bottleneck video-mobile view.mp4`
            ],
            // "",
            challenge_description: "BOTTLENECK",
            challenge_solution: "Designing an integrated system that connects thermal cameras and IoT devices to monitor",
            challenge_solution_highlighted: "livestock health with accuracy, reliability, and real-time insights.",
            solution_list: [
                {
                    id: 1,
                    title: "Capture Data Accurately"
                },
                {
                    id: 2,
                    title: "Support Timely Decisions"
                },
                {
                    id: 3,
                    title: "Improve Veterinary Efficiency"
                },
                {
                    id: 4,
                    title: "Visualize Udder Health"
                },
                {
                    id: 5,
                    title: "Ensure System Stability"
                },
                {
                    id: 6,
                    title: "Enable Seamless Communication"
                }
            ]
        },
        services: {
            title: "How we helped",
            description: `
                  <div class="lg:text-[1.875rem] md:text-[1.75rem] text-[1.5rem] text-white leading-[1.2em] lg:w-[34.375rem] md:w-[22.25rem] w-full text-center md:mb-[2.5rem] mb-[0.625rem] tracking-[-0.05em] font-semibold">
                  We built a <span class="text-primary-blue">focused solution</span> to
                  transform livestock health monitoring.
                  </div>
              `,
            service_list: [
                {
                    title: "Health Issue Detection",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/Group_35986.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Enhance your brand's impact with our corporate video expertise. We create engaging content for businesses, from promotions to training materials.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[8rem]"
                },
                {
                    title: "Seamless Integration",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/seamless_integration.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Ensured smooth interaction between thermal cameras, IoT devices, and software components.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[8rem]"
                },
                {
                    title: "Health Monitoring System",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/health_and_monitoring.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Built a comprehensive desktop-based platform tailored for monitoring animal health efficiently.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                },
                {
                    title: "Actionable Insights",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/Actionable_insights.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Facilitated timely, data-backed decisions to improve overall animal well-being.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                },
                {
                    title: "User Experience Focus",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/thermal/Services/Group_35985.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Delivered an intuitive interface that simplifies usage for veterinary and research teams.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                }
            ]
        },
        key_features: {
            title: "Key Features",
            indication_color: "#FF7A3B",
            key_features_list: [
                {
                    number: "[01]",
                    title: "Thermal Imaging Integration",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Customizable Interface.webp`,
                    desc: "Enables precise monitoring of temperature variations to identify early signs of health issues."
                },
                {
                    number: "[02]",
                    title: "Real-Time Data Processing",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Seamless Web Integration.webp`,
                    desc: "Supports instant analysis and visualization of thermal data for quick decision-making."
                },
                {
                    number: "[03]",
                    title: "Camera & IoT Synchronization",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Lightweight & Optimized Performance.webp`,
                    desc: "Seamless hardware-software integration with camera and IoT synchronization ensures consistent and accurate data flow."
                },
                {
                    number: "[04]",
                    title: "Low-Latency Data Transfer",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Real-Time Accessibility Controls.webp`,
                    desc: "Uses reliable protocols and low-latency data transfer to ensure smooth and timely communication between components."
                },
                {
                    number: "[05]",
                    title: "User-Friendly Desktop Interface",
                    img: `${baseUrl}/Images/case-studies/thermal/KeyFeatures/Cross-Platform Compatibility.webp`,
                    desc: "A user-friendly desktop interface offers intuitive control over camera functions and thermal data visualization."
                }
            ]
        },
        testimonials: {
            testimonial: "",
            name: "",
            image: "https://picsum.photos/200/300",
            quote_image: `/Images/testimonial_quotes.svg`,
            shadow: "-1.875rem -1.25rem 62.5rem rgba(255,122,59,0.5)",
            profession: "",
            profession_at: ""
        },
        faq: {
            title: "Curious? Check our FAQs",
            faq_list: [
                {
                    id: 1,
                    title: 'What is the purpose of the thermal imaging system for buffalo udders?',
                    content: 'The system uses infrared thermography to non-invasively monitor buffalo udder health, enabling early detection of mastitis by identifying abnormal temperature patterns.'
                },
                {
                    id: 2,
                    title: 'How does infrared thermography help in mastitis detection?',
                    content: 'Mastitis causes inflammation, which increases local udder temperature. Infrared cameras detect these temperature changes early, often before visible symptoms appear.'
                },
                {
                    id: 3,
                    title: 'Is infrared thermography system safe for the animals?',
                    content: 'Yes, infrared thermography is a non-contact, radiation-free method, making it completely safe and stress-free for buffaloes.'
                },
                {
                    id: 4,
                    title: 'Can the system track udder health over time?',
                    content: 'Absolutely. The system supports session-based tracking, allowing farmers and veterinarians to monitor temperature trends and detect issues early.'
                },
                {
                    id: 5,
                    title: 'Does the system require an internet connection to work?',
                    content: 'The system supports offline functionality, enabling temperature analysis and data storage without a continuous internet connection.'
                },
                {
                    id: 6,
                    title: 'How easy is it to integrate this system into existing veterinary workflows?',
                    content: 'The system is designed for seamless integration with veterinary workflows, supporting data export and compatibility with common veterinary software.'
                },
                {
                    id: 7,
                    title: 'What kind of temperature analysis does the system provide?',
                    content: 'It offers detailed temperature mapping, highlighting hotspots and comparing readings to baseline healthy udder temperatures.'
                },
                {
                    id: 8,
                    title: 'Can this system reduce losses caused by mastitis?',
                    content: 'Yes, by enabling early detection and treatment, it helps reduce mastitis-related production losses and improves overall herd health.'
                },
                {
                    id: 9,
                    title: 'Is special training required to operate the thermal imaging system?',
                    content: 'The system is user-friendly with guided instructions, but basic training helps maximize accurate image capture and interpretation.'
                },
                {
                    id: 10,
                    title: 'What equipment is needed for this system?',
                    content: 'The primary equipment includes an infrared thermal camera and software for image analysis and session tracking.'
                }
            ]
        }
    },
    "accessible-web-widget": {
        id: 2,
        banner: {
            title: "Empowering Inclusive Web Experiences through Accessibility",
            description: "A seamless, customizable solution to ensure digital accessibility for users with diverse abilities.",
            image: `${baseUrl}/Images/case-studies/incluway/Incluway_hero_black patch.png`
        },
        showReel: {
            title: "SHOWREEL",
            video: [
                `${baseUrl}/Images/case-studies/incluway/ShowReel/Incluway showreel- web view.mp4`,
                `${baseUrl}/Images/case-studies/incluway/Challenges/TAblet.mp4`,
                `${baseUrl}/Images/case-studies/incluway/Challenges/Mobile.mp4`
            ],
            youtube_url: 'https://www.youtube.com/embed/p22KMPdGIv0?si=yTUz-9F6k9d7gNMs'
        },
        description: {
            title: "A small glimpse",
            description: `
                  <div class="interFont w-full text-[1.5rem] md:text-[1.75rem] lg:text-[2.25rem] text-primary-text-50 font-extralight leading-[1.2em] tracking-[-0.04em]">
                  A lightweight, plug-and-play
                  <span class="text-[#009DCC]">accessibility widget</span>
                  designed to
                  <span class="text-primary-text">enhance digital experiences for users with visual, motor, and cognitive impairments.</span> Fully compliant with
                  <span class="text-primary-text">WCAG standards,</span>
                  <span class="text-primary-text-50">
                      it offers real-time personalization, cross-browser support, and performance optimization—seamlessly integrating into any website or platform with minimal setup.
                  </span>
                  </div>
              `
        },
        challenges: {
            title: "Challenges & Goals",
            indication_icon: `/Images/case-studies/incluway/Challenges/icon.svg`,
            video: [
                `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`,
                `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`,
                `${baseUrl}/Images/case-studies/incluway/Challenges/Incluway case study challenge video.mp4`
            ],
            // "",
            challenge_description: "BOTTLENECK",
            challenge_solution: "Designing an accessibility system that integrates with websites to support users—",
            challenge_solution_highlighted: "while maintaining performance, compliance, and customization.",
            solution_list: [
                {
                    id: 1,
                    title: "Ensure WCAG Compliance"
                },
                {
                    id: 2,
                    title: "Support User Personalization"
                },
                {
                    id: 3,
                    title: "Optimize for Cross-Device Compatibility"
                },
                {
                    id: 4,
                    title: "Enable Easy Integration"
                },
                {
                    id: 5,
                    title: "Maintain High Performance"
                },
                {
                    id: 6,
                    title: "Improve Web Accessibility Awareness"
                }
            ]
        },
        services: {
            title: "How we helped",
            description: `
                  <div class="lg:text-[1.875rem] md:text-[1.75rem] text-[1.5rem] text-white leading-[1.2em] lg:w-[34.375rem] md:w-[22.25rem] w-full text-center md:mb-[2.5rem] mb-[0.625rem] tracking-[-0.05em] font-semibold">
                  We built a focused solution to enhance 
                  <span class="text-primary-blue">digital accessibility</span>
                  </div>
              `,
            service_list: [
                {
                    title: "Inclusive Accessibility Features",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Inclusive_Accessibility_Features.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Offered real-time controls like text resizing, contrast modes, screen reader compatibility, and animation toggles to serve users with varied accessibility needs.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[8rem]"
                },
                {
                    title: "Seamless Integration",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Seamless_Integration.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Developed a plug-and-play widget that can be embedded on any website with minimal code—supporting fast adoption and cross-platform reliability.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[8rem]"
                },
                {
                    title: "Widget Management System",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Widget_Management_System.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Built a modular, customizable web-based widget with admin control for managing display, placement, and feature toggling without code changes.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                },
                {
                    title: "Actionable Accessibility Data",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/Actionable_Accessibility_Data.png')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Enabled tracking of widget usage and accessibility feature adoption to help website owners improve their inclusivity efforts.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                },
                {
                    title: "User-Centered Design",
                    bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/case-studies/incluway/Services/markus-spiske-i_dT4tseXD8-unsplash.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                    description: "Focused on clarity, simplicity, and intuitiveness to deliver an accessible experience for end-users.",
                    gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                    blobWidth: "w-[10rem]"
                }
            ]
        },
        key_features: {
            title: "Key Features",
            indication_color: "#1F8BFF",
            key_features_list: [
                {
                    number: "[01]",
                    title: "Seamless Web Integration",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Seamless Web Integration.webp`,
                    desc: "Effortlessly integrates into any website with a single line of code, ensuring rapid deployment and minimal development effort."
                },
                {
                    number: "[02]",
                    title: "Real-Time Accessibility Controls",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Real-Time Accessibility Controls.webp`,
                    desc: "Offers live adjustments for text size, contrast, animation toggles, and more—empowering users to personalize their browsing experience instantly."
                },
                {
                    number: "[03]",
                    title: "Cross-Platform Compatibility",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Cross-Platform Compatibility.webp`,
                    desc: "Ensures consistent performance across all major browsers and devices, maintaining accessibility regardless of user environment."
                },
                {
                    number: "[04]",
                    title: "Lightweight & Optimized Performance",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Lightweight & Optimized Performance.webp`,
                    desc: "Built with performance in mind, the widget loads quickly, consumes minimal resources, and doesn’t interfere with site speed or SEO."
                },
                {
                    number: "[05]",
                    title: "Customizable Interface",
                    img: `${baseUrl}/Images/case-studies/incluway/KeyFeatures/Customizable Interface.webp`,
                    desc: "Designed with modularity, allowing brands to style, position, and configure the widget to match their visual identity and user needs."
                }
            ]
        },
        testimonials: {
            testimonial: "",
            name: "",
            image: "https://picsum.photos/200/300",
            quote_image: `/Images/case-studies/incluway/Testimonials/quote.svg`,
            shadow: "-1.875rem -1.25rem 62.5rem rgba(66,133,244,1)",
            profession: "",
            profession_at: ""
        },
        faq: {
            title: "Curious? Check our FAQs",
            faq_list: [
                {
                    id: 1,
                    title: 'What is the Accessibility Widget?',
                    content: 'It is a lightweight, plug-and-play tool designed to enhance digital experiences for users with visual, motor, and cognitive impairments by providing real-time accessibility personalization.'
                },
                {
                    id: 2,
                    title: 'Is the widget compliant with accessibility standards?',
                    content: 'Yes, the widget is fully compliant with WCAG 2.1 standards to ensure inclusive and accessible digital content.'
                },
                {
                    id: 3,
                    title: 'How easy is it to integrate the widget into my website?',
                    content: 'Integration is simple and requires minimal setup. The widget is plug-and-play, compatible with all major browsers and platforms.'
                },
                {
                    id: 4,
                    title: 'Does the widget support users with motor impairments?',
                    content: 'Absolutely. It offers keyboard navigation support and customizable UI controls to assist users with motor disabilities.'
                },
                {
                    id: 5,
                    title: 'Can the widget personalize accessibility features in real-time?',
                    content: 'Yes, it allows real-time personalization to adapt the website interface based on individual user needs.'
                },
                {
                    id: 6,
                    title: 'Is the widget optimized for performance?',
                    content: 'Yes, it is lightweight and designed to minimize impact on website loading times and performance.'
                },
                {
                    id: 7,
                    title: 'Which browsers does the widget support?',
                    content: 'The widget supports all major browsers including Chrome, Firefox, Safari, Edge, and Opera.'
                },
                {
                    id: 8,
                    title: 'Can this widget help my website meet ADA compliance?',
                    content: 'While the widget aids in improving accessibility and aligns with WCAG standards, full ADA compliance depends on overall website practices; this widget is a key tool in your accessibility strategy.'
                },
                {
                    id: 9,
                    title: 'Is the widget customizable?',
                    content: 'Yes, it offers options to customize accessibility settings to fit the unique needs of your user base and branding.'
                },
                {
                    id: 10,
                    title: 'Does the widget require an internet connection to work?',
                    content: 'The widget can operate offline once installed, ensuring accessibility features remain functional without constant internet access.'
                }
            ]
        }
    }
};
const LandingPageData = {
    banner: {
        title_primary: "Driving Digital Transformation",
        title_secondary: "with",
        title_tertiary: "custom",
        typwriting_animation_list: [
            {
                id: 1,
                word: "Mobile Application"
            },
            {
                id: 2,
                word: "Industrial IoT Solutions"
            },
            {
                id: 3,
                word: "Web Application"
            },
            {
                id: 4,
                word: "AI Agentic Workflows"
            }
        ],
        description_primary: "Delivering scalable technology that powers modern digital experiences, AI",
        description_secondary: "systems, and connected IoT solutions.",
        get_in_touch: "Get in touch",
        get_in_touch_arrow: `${baseUrl}/Images/LandingPage/Banner/arrowIconUp.png`,
        view_services_text: "View services",
        banner_CTA_status: 'active',
        banner_image_list: [
            {
                id: 1,
                image: `/Images/LandingPage/Banner/BNI.svg`
            },
            {
                id: 2,
                image: `/Images/LandingPage/Banner/clutch.svg`
            },
            {
                id: 3,
                image: `/Images/LandingPage/Banner/5 stars.svg`
            },
            {
                id: 4,
                image: `/Images/LandingPage/Banner/Ethercat_logo_.svg`
            }
        ],
        banner_carousel_list: [
            {
                id: 1,
                img: `/Images/LandingPage/Banner/carousel_images/ibits_logo.svg`
            },
            {
                id: 2,
                img: `/Images/LandingPage/Banner/carousel_images/evo11ve_logo.svg`
            },
            {
                id: 3,
                img: `/Images/LandingPage/Banner/carousel_images/mako-logo (1) 1.svg`
            },
            {
                id: 4,
                img: `/Images/LandingPage/Banner/carousel_images/suyash-logo.svg`
            },
            {
                id: 5,
                img: `/Images/LandingPage/Banner/carousel_images/anyo-logo (1) 1.svg`
            }
        ]
    },
    showReel: {
        title: "SHOWREEL",
        video: [
            `${baseUrl}/Images/LandingPage/showReel/homepage showreel web view.mp4`,
            `${baseUrl}/Images/LandingPage/showReel/tab view home showreel.mp4`,
            `${baseUrl}/Images/LandingPage/showReel/mobile view home page showreel.mp4`
        ],
        youtube_url: 'https://www.youtube.com/embed/pFtxR-O78sY?si=t_x_0UF65Q1YaHFw'
    },
    aboutUs: {
        achievementsList: [
            {
                id: 1,
                category: "clients",
                numbers: "50+",
                description: "Amazing Clients"
            },
            {
                id: 2,
                category: "Industries",
                numbers: "5+",
                description: "Industries"
            },
            {
                id: 3,
                category: "Projects",
                numbers: "70+",
                description: "Successful Projects"
            },
            {
                id: 4,
                category: "Founded",
                numbers: "2016",
                description: "Founded"
            }
        ]
    },
    advantages: {
        advantages_list: [
            {
                title: "Bespoke Software, Tailored to Your Business Needs",
                // /Images/LandingPage/Advantages/Bespoke_Software_Tailored_to_Your_Business_Needs.jpg
                bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img1.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                description: "Custom software solutions designed around your workflows — not off-the-shelf",
                gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                blobWidth: "w-[8rem]"
            },
            {
                title: "Digital Transformation Strategy with the Right Technologies",
                // /Images/LandingPage/Advantages/Digital_Transformation_Strategy_with_the_Right_Technologies.jpg
                bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img2.jpg')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                description: "Modernize operations with digital tools that serve real business goals",
                gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                blobWidth: "w-[8rem]"
            },
            {
                title: "Flexible Engagement Models for Agile Development",
                // /Images/LandingPage/Advantages/Flexible_Engagement_Models_for_Agile_Development.jpg
                bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img3.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                description: "Start small, scale fast, or pause — flexibility built into the process",
                gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                blobWidth: "w-[10rem]"
            },
            {
                title: "Measurable Outcomes Through AI, IoT, and Machine Vision",
                // /Images/LandingPage/Advantages/Measurable_Outcomes_Through_AI_IoT_and_Machine_Vision.jpg
                bg: `bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Advantages/img4.webp')] bg-cover bg-center object-center group-hover:bg-[url('https://veract-website-assets.s3.ap-south-1.amazonaws.com/Images/LandingPage/Hover.png')]`,
                description: "Drive impact with intelligent systems and real-time performance insights",
                gradient: "bg-[linear-gradient(93deg,_rgb(31,139,255)_42.49%,_rgb(255,255,255)_100%)]",
                blobWidth: "w-[10rem]"
            }
        ],
        featuredWorks_list: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Learning Platform.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Learning Platform.webp`,
                title: "ed tech",
                description: "education platform",
                status: "inactive",
                route: 'edtech'
            },
            {
                id: 2,
                image: `${baseUrl}/Images/case-studies/List/Infrared Health Scan.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Infrared Thermography.webp`,
                title: "infrared thermography",
                description: "thermal imaging detects mastitis in dairy cattle",
                status: "active",
                route: 'infrared-thermography'
            },
            {
                id: 3,
                image: `${baseUrl}/Images/case-studies/List/Seasonal E-Commerce.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Seasonal E-Commerce.webp`,
                title: "e-commerce",
                description: "payment enabled e-commerce web application",
                status: "inactive",
                route: 'ecommerce'
            },
            {
                id: 4,
                image: `${baseUrl}/Images/case-studies/List/Accessible Web Widget.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Accessible Web Widget.webp`,
                title: "accessibility",
                description: "accessibility project",
                status: "active",
                route: 'accessible-web-widget'
            }
        ]
    },
    services: {
        title: "Our Service",
        description: "Take a look at our handpicked case studies showcasing real-world tech solutions.A quick glimpse into the impact we create.",
        service_list: [
            {
                number: "[01]",
                title: "Digital Transformation Strategy for Modern Businesses",
                desc: [
                    'Modernize operations using proven digital transformation tools and workflows.',
                    'Web, mobile, or desktop applications — your stack is fully covered.'
                ],
                highlighted_desc: [
                    'Modernize operations using proven <span class="text-primary-blue">digital transformation</span> tools and workflows.',
                    '<span class="text-primary-blue">Web, mobile, or desktop</span> applications — your stack is fully covered.'
                ]
            },
            {
                number: "[02]",
                title: "Development Services for Startup Founders",
                desc: [
                    'Build faster, smarter, and with clarity.',
                    'Our research-backed approach helps founders make informed product decisions.'
                ],
                highlighted_desc: [
                    'Build <span class="text-primary-blue">faster, smarter</span>, and with clarity.',
                    'Our <span class="text-primary-blue">research-backed approach</span> helps founders make informed product decisions.'
                ]
            },
            {
                number: "[03]",
                title: "Industrial IoT for Smarter Operations",
                desc: [
                    'Connect IoT devices to monitor, analyze, and automate in real time.',
                    'Improve efficiency, reduce downtime, and act on actionable insights.'
                ],
                highlighted_desc: [
                    'Connect <span class="text-primary-blue">IoT devices</span> to monitor, analyze, and automate in real time.',
                    'Improve <span class="text-primary-blue">efficiency</span>, reduce <span class="text-primary-blue">downtime</span>, and act on actionable insights.'
                ]
            },
            {
                number: "[04]",
                title: "AI & Agentic AI for Intelligent Decision-Making",
                desc: [
                    'Leverage AI for smarter decisions and data-driven growth.',
                    'Deploy agentic AI to automate tasks and adapt intelligently.'
                ],
                highlighted_desc: [
                    'Leverage <span class="text-primary-blue">AI</span> for smarter decisions and data-driven growth.',
                    'Deploy <span class="text-primary-blue">agentic AI</span> to automate tasks and adapt intelligently.'
                ]
            },
            {
                number: "[05]",
                title: "Machine Vision for Quality Control and Inspection",
                desc: [
                    'Automated defect detection, inspection, and classification at industrial scale.',
                    'Boost precision, reduce errors, and scale with confidence.'
                ],
                highlighted_desc: [
                    '<span class="text-primary-blue">Automated defect detection</span>, inspection, and classification at industrial scale.',
                    'Boost precision, reduce errors, and scale with confidence.'
                ]
            }
        ]
    },
    we_work_with: {
        title: "We Work With",
        sub_title: "brands in",
        carouselData: [
            {
                id: 1,
                name: "Accessibility",
                image: `${baseUrl}/Images/LandingPage/industries/accessibility.png`
            },
            {
                id: 2,
                name: "Agri Tech",
                image: `${baseUrl}/Images/LandingPage/industries/agri-tech.png`
            },
            {
                id: 3,
                name: "Audit",
                image: `${baseUrl}/Images/LandingPage/industries/Audit.png`
            },
            {
                id: 4,
                name: "E-commerce",
                image: `${baseUrl}/Images/LandingPage/industries/e-commerce.png`
            },
            {
                id: 5,
                name: "Ed-Tech",
                image: `${baseUrl}/Images/LandingPage/industries/Ed-Tech.png`
            },
            {
                id: 6,
                name: "FinTech",
                image: `${baseUrl}/Images/LandingPage/industries/fintech.png`
            },
            {
                id: 7,
                name: "Machine Vision",
                image: `${baseUrl}/Images/LandingPage/industries/machine vision.png`
            },
            {
                id: 8,
                name: "Manufacturing",
                image: `${baseUrl}/Images/LandingPage/industries/manufacturing.png`
            },
            {
                id: 9,
                name: "Sales",
                image: `${baseUrl}/Images/LandingPage/industries/sales.png`
            },
            {
                id: 10,
                name: "Thermal Vision",
                image: `${baseUrl}/Images/LandingPage/industries/thermal vision.png`
            },
            {
                id: 11,
                name: "Wellness",
                image: `${baseUrl}/Images/LandingPage/industries/wellness.png`
            }
        ]
    },
    testimonials: {
        testimonial_list: [
            {
                name: "Hare Priyaa Rajendran",
                quote: "I am amazed the way Veract took the initial discussion of our HRMS product MyTrackie. They swiftly got into the details and educated me wherever required. Really thrilled to work with Veract for the software upgrades of our product. I would certainly recommend Veract for product development and technical consulting.",
                image: `${baseUrl}/Images/LandingPage/Testimonial/harepriyaa.jpeg`,
                company: "Geeraj Business Solutions",
                role: "Founder"
            },
            {
                name: "Mahendra Vadivelu",
                quote: "We engaged Veract for an Angular project which required custom printing domain knowledge and involved high level of complexity of the legacy system. Veract team took complete ownership of client coordination, project management and project delivery as well. Focus on the deliverables and technical expertise stood out during our engagement. Thank you Veract for all your splendid work in this engagement. I will assure you that you will be our first go to team for any outsourcing need.",
                image: `${baseUrl}/Images/LandingPage/Testimonial/mahendra.jpg`,
                company: "Mako IT Lab",
                role: "CEO"
            },
            {
                name: "Salil Nair",
                quote: "We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work. The team at Veract developed software like their own product! We continue to engage with Veract for our technical development requirements.",
                image: `${baseUrl}/Images/LandingPage/Testimonial/salil.png`,
                company: "Agrosperity Tech Solutions",
                role: ""
            },
            {
                name: "Anand Shah",
                quote: "Excellent prompt support in spite of remote location. ",
                image: `${baseUrl}/Images/LandingPage/Testimonial/AnanadShah.png`,
                company: "Rajdeep Industrial Products",
                role: ""
            },
            {
                name: "Bijoy KT",
                quote: "Our engagement with veract for Datacenter Mart project has been a fantastic experience. The team was very prompt and supportive throughout the project. We are very happy with the outcome and we expect to start the second phase soon. This is a very complex project because we did not have an exact comparison to show them but they grasped the requirements well and was able to deliver what we expected.",
                image: `${baseUrl}/Images/LandingPage/Testimonial/Bijoy.jpg`,
                company: "Data Center Mart",
                role: ""
            }
        ]
    },
    faq: {
        title: 'Curious? Check our FAQs',
        faq_list: [
            {
                id: 1,
                title: "What does Veract.co do?",
                content: "Veract.co helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
            },
            {
                id: 2,
                title: "What does Veract.co do?",
                content: "Veract.co helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
            },
            {
                id: 3,
                title: "What does Veract.co do?",
                content: "Veract.co helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
            },
            {
                id: 4,
                title: "What does Veract.co do?",
                content: "Veract.co helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
            },
            {
                id: 5,
                title: "What does Veract.co do?",
                content: "Veract.co helps businesses modernize and automate operations using AI, machine vision, IoT systems, and custom software solutions."
            }
        ]
    },
    footer: {
        description: "At Veract, we craft custom software with precision and innovation—driving business success through web, mobile, and AI excellence.",
        footer_logo_list: [
            {
                id: 1,
                image: `/Images/LandingPage/Banner/BNI.svg`
            },
            {
                id: 2,
                image: `/Images/LandingPage/Banner/clutch.svg`
            },
            {
                id: 3,
                image: `/Images/LandingPage/Banner/5 stars.svg`
            },
            {
                id: 4,
                image: `/Images/LandingPage/Banner/Ethercat_logo_.svg`
            }
        ],
        socialMediaIcons: [
            {
                id: 1,
                image: `/Images/LandingPage/Footer/linkedin.svg`,
                link: "https://www.linkedin.com/company/veract-consultancy-private-limited/"
            },
            {
                id: 2,
                image: `/Images/LandingPage/Footer/youtube.svg`,
                link: "https://youtube.com/@veract-consultancy?si=tGt9K1cCpnNgzFkJ"
            },
            {
                id: 3,
                image: `/Images/LandingPage/Footer/whatsapp.svg`,
                link: "https://www.whatsapp.com/channel/0029VahNUEB90x31HeDatt2o"
            },
            {
                id: 4,
                image: `/Images/LandingPage/Footer/insta.svg`,
                link: "https://www.instagram.com/veractconsultancy/"
            }
        ],
        quickLinks: {
            company: {
                title: "Company",
                links: [
                    {
                        id: 1,
                        title: "Agentic AI",
                        link: "/agentic-ai",
                        status: "active"
                    },
                    {
                        id: 2,
                        title: "Services",
                        link: "scroll-to-section",
                        status: "active"
                    },
                    {
                        id: 3,
                        title: "Case Studies",
                        link: "/case-studies",
                        status: "active"
                    },
                    {
                        id: 4,
                        title: "Contact Us",
                        link: "/contact-us",
                        status: "active"
                    },
                    {
                        id: 5,
                        title: "Blogs",
                        link: "",
                        status: "inactive"
                    }
                ]
            },
            services: {
                title: "Services",
                links: [
                    {
                        id: 1,
                        title: "Digital Transformation",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 2,
                        title: "Development Services",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 3,
                        title: "Internet of things - IoT",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 4,
                        title: "Machine Vision",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 5,
                        title: "Infrared Thermography",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 6,
                        title: "Workflow Automation",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 7,
                        title: "Agentic AI",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 8,
                        title: "Custom Mobile Application",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 9,
                        title: "Custom Web Application",
                        link: "",
                        status: "inactive"
                    },
                    {
                        id: 10
                    }
                ]
            },
            contact: {
                title: "Contact Us",
                links: [
                    {
                        id: 1,
                        type: "phone",
                        title: "+91 97899 91565"
                    },
                    {
                        id: 2,
                        type: "phone",
                        title: "+91 99628 37650"
                    },
                    {
                        id: 3,
                        type: "phone",
                        title: "+1 7377101523"
                    },
                    {
                        id: 4,
                        type: "email",
                        title: "info@veract.io"
                    }
                ]
            },
            address: {
                title: "Location",
                address: "37, Aspace, Brindavan Street, Srinivasa Nagar, Madipakkam, Chennai - 600 091"
            }
        }
    }
};
const AgentPageData = {
    banner: {
        about: "AI-DRIVEN EFFICIENCY",
        title: "Optimize Your Business Operations with AI Agents",
        subtitle: "Unlock productivity like never before. Get a free consultation, see our AI agents in action, and deploy 1 intelligent agent in your workflow-at no cost",
        book_demo: "Book a free demo",
        view_case_study: "View case studies",
        banner_features: [
            {
                features_icon: `/Images/agent/Banner/Free business consultation.svg`,
                features_title: "Free Business consultation",
                features_subtitle: "Get expert insights into where AI can deliver the most value in your operations."
            },
            {
                features_icon: `/Images/agent/Banner/Live Product Demo.svg`,
                features_title: "Live Product Demo",
                features_subtitle: "Watch how our AI agents automate real tasks across your tools — customized to your case."
            },
            {
                features_icon: `/Images/agent/Banner/Deploy 1 agent.svg`,
                features_title: "Deploy 1 AI Agent Free",
                features_subtitle: "Test, drive one fully trained AI agent for your business — no commitment, no cost."
            }
        ]
    },
    ourprocess: {
        pageTitle: "Our Process",
        title: "Our Simple, Smart, and Scalable Process",
        description: "We design, develop, and implement automation tools that help you work smarter, not harder",
        cards: [
            {
                id: 1,
                header: "Smart Analyzing",
                subHeader: "We assess your business goals, challenges, and processes to identify where custom AI agents deliver maximum impact.",
                video: "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
            },
            {
                id: 2,
                header: "AI Agent Development",
                subHeader: "Our team designs and develops intelligent AI agents, trained and fine-tuned to adapt to your specific workflows and use cases.",
                video: "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
            },
            {
                id: 3,
                header: "Seamless Integration",
                subHeader: "We embed your custom AI agent into your systems, tools, and processes, ensuring seamless interaction with minimal disruption.",
                video: "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
            },
            {
                id: 4,
                header: "Continuous Optimization",
                subHeader: "We continuously monitor your AI agent’s performance, enhance its capabilities, and retrain it to improve outcomes over time.",
                video: "https://evo11ve-prod.s3.amazonaws.com/uploads/help-video/Explore.mp4"
            }
        ]
    }
};
const caseStudiesHomePageData = {
    header: "Our Projects",
    subHeader: "From designing intelligent concepts to delivering scalable solutions, we're your agile, expert-driven team making technology work for you!",
    caseStudiesTitleList: [
        {
            id: 1,
            name: "Thermal Vision"
        },
        {
            id: 2,
            name: "Accessibility"
        },
        {
            id: 3,
            name: "Chat bot"
        },
        {
            id: 4,
            name: "Ed Tech"
        },
        {
            id: 5,
            name: "Machine Vision"
        },
        {
            id: 6,
            name: "Wellness"
        },
        {
            id: 7,
            name: "Industry Platform"
        },
        {
            id: 8,
            name: "Ecommerce"
        },
        {
            id: 9,
            name: "Sales"
        },
        {
            id: 10,
            name: "Audio video"
        }
    ],
    caseStudiesList: {
        thermalvision: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Infrared Health Scan.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Infrared Thermography.webp`,
                header: "Infrared Thermography",
                subHeader: "Infrared Imaging for Animal Health",
                routeTo: "/case-studies/infrared-thermography"
            }
        ],
        accessibility: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Accessible Web Widget.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Accessible Web Widget.webp`,
                header: "Accessible Web Widget",
                subHeader: "Smart Widget for Enhanced Digital Access",
                routeTo: "/case-studies/accessible-web-widget"
            }
        ],
        chatbot: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/AI Chat Assistant.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/AI Chat Assistant.webp`,
                header: "AI Chat Assistant",
                subHeader: "Conversational AI for Real-Time Support",
                routeTo: ""
            }
        ],
        edtech: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Learning Platform.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Learning Platform.webp`,
                header: "Learning Platform",
                subHeader: "AI-Based Learning and Course Portal",
                routeTo: ""
            }
        ],
        machinevision: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Visual Inspection AI.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Visual Inspection AI.webp`,
                header: "Visual Inspection AI",
                subHeader: "AI Visual QC for Industrial Inspection",
                routeTo: ""
            }
        ],
        wellness: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Digital Wellness App.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Digital Wellness.webp`,
                header: "Digital Wellness",
                subHeader: "Health & Wellness App for Daily Tracking",
                routeTo: ""
            }
        ],
        industryplatform: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Smart Industry Portal.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Smart Industry Portal.webp`,
                header: "Smart Industry Portal",
                subHeader: "Innovative Data Center Platform",
                routeTo: ""
            }
        ],
        ecommerce: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Seasonal E-Commerce.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Seasonal E-Commerce.webp`,
                header: "Seasonal E-Commerce",
                subHeader: "Online Store for Seasonal Organic Goods",
                routeTo: ""
            }
        ],
        sales: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/Sales Dashboard.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Sales Dashboard.webp`,
                header: "Sales Dashboard",
                subHeader: "Quote & Enquiry Management Dashboard",
                routeTo: ""
            }
        ],
        audiovideo: [
            {
                id: 1,
                image: `${baseUrl}/Images/case-studies/List/AV Room Designer.webp`,
                hover_image: `${baseUrl}/Images/case-studies/List/Hover/Audio Visual Interior.webp`,
                header: "Audio Visual Interior",
                subHeader: "Immersive AV Conference Room Planner",
                routeTo: ""
            }
        ]
    }
};
const metadata = [
    {
        slug: 'infrared-thermography',
        title: 'Infrared Thermography',
        description: 'Thermal Imaging System for Buffalo Udder Health Monitoring',
        openGraph: {
            title: 'Thermal Imaging System for Buffalo Udder Health Monitoring',
            description: 'Monitor buffalo udder health with infrared thermography...',
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Thermal Imaging System for Buffalo Udder Health Monitoring',
            description: 'Smart infrared system for mastitis detection in buffaloes.'
        },
        keywords: [
            'buffalo udder health',
            'mastitis detection',
            'thermal imaging',
            'infrared thermography',
            'veterinary technology',
            'livestock health monitoring',
            'dairy farm management',
            'non-invasive diagnosis',
            'animal health AI',
            'smart veterinary system'
        ],
        author: 'Veract.co',
        language: 'en',
        subject: 'Thermal Imaging System for Buffalo Udder Health Monitoring',
        industry: 'Infrared Thermography',
        image: `${baseUrl}/Images/infrared-thermography.jpg`,
        url: 'https://veract.co/case-studies/infrared-thermography',
        geo: {
            region: 'IN-TN',
            placename: 'Velachery, Chennai',
            position: "12.9784;80.2214",
            icbm: '12.9784, 80.2214'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Infrared Thermography",
            "alternateName": "Thermal Imaging System for Buffalo Udder Health Monitoring",
            "url": "https://veract.co/case-studies/infrared-thermography",
            "author": {
                "@type": "Organization",
                "name": "Veract.co",
                "url": "https://veract.co"
            }
        }
    },
    {
        slug: 'accessible-web-widget',
        title: 'Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play',
        description: 'Enhance website accessibility for users with visual, motor, and cognitive impairments. Our lightweight, WCAG-compliant widget offers real-time personalization, cross-browser support, and easy integration.',
        openGraph: {
            title: 'Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play',
            description: "Boost your website's inclusivity with our easy-to-integrate accessibility widget supporting visual, motor, and cognitive impairments. Fully WCAG-compliant and optimized for performance.",
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play',
            description: 'Enhance website accessibility with our lightweight widget designed for all users. Real-time personalization and seamless integration.'
        },
        keywords: [
            'accessibility widget',
            'WCAG compliance',
            'digital accessibility',
            'accessibility plugin',
            'visual impairment support',
            'motor impairment accessibility',
            'cognitive accessibility tool',
            'ADA compliance',
            'inclusive web design',
            'accessibility software'
        ],
        author: 'Veract.co',
        language: 'en',
        subject: 'Lightweight Accessibility Widget | WCAG-Compliant & Plug-and-Play',
        industry: 'Accessibility, Web Development',
        image: `${baseUrl}/Images/accessibility-widget-preview.png`,
        url: 'https://veract.co/case-studies/accessible-web-widget',
        geo: {
            region: 'IN-TN',
            placename: 'Velachery, Chennai',
            position: "12.9784;80.2214",
            icbm: '12.9784, 80.2214'
        },
        schema: {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Lightweight Accessibility Widget",
            "alternateName": "WCAG-Compliant & Plug-and-Play Accessibility Tool",
            "url": "https://veract.co/case-studies/accessible-web-widget",
            "applicationCategory": "AccessibilityTool",
            "operatingSystem": "All"
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/globalState.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCaseStudyState": (()=>getCaseStudyState),
    "getNavbarState": (()=>getNavbarState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const getNavbarState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        navbarState: null,
        setNavbarState: (navbarState)=>set({
                navbarState
            })
    }));
const getCaseStudyState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set)=>({
        caseStudyState: null,
        setCaseStudyState: (caseStudyState)=>set({
                caseStudyState
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "isMobile": (()=>isMobile),
    "isTablet": (()=>isTablet),
    "isValidSlug": (()=>isValidSlug)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function isMobile() {
    // if (typeof window === 'undefined') return false;
    // return window.innerWidth < 768;
    if (!window) return false;
    if (window && "object" !== undefined) {
        return window.innerWidth < 768;
    }
}
function isTablet() {
    // if (typeof window === 'undefined') return false;
    // return window.innerWidth >= 768 && window.innerWidth <= 1024;
    if (!window) return false;
    if (window && "object" !== undefined) {
        return window.innerWidth >= 768 && window.innerWidth <= 1024;
    }
}
function isValidSlug(slug) {
    const validSlugs = [
        "infrared-thermography",
        "accessible-web-widget"
    ];
    return validSlugs.includes(slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Navbar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$globalState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/globalState.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Navbar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isHamburgerMenu, setIsHamburgerMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { navbarState, setNavbarState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$globalState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavbarState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setLoaded(true);
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (!pathname) return;
            if (pathname === "/") {
                setNavbarState(1);
            } else if (pathname === "/case-studies" || Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caseStudyData"]).some({
                "Navbar.useEffect": (key)=>pathname === `/case-studies/${key}`
            }["Navbar.useEffect"])) {
                setNavbarState(4);
            } else if (pathname === "/agentic-ai") {
                setNavbarState(3);
            } else if (pathname === "/contact-us") {
                setNavbarState(6);
            } else {
                setNavbarState(0); // default/fallback
            }
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleResize = {
                "Navbar.useEffect.handleResize": ()=>{
                    if (window && "object" !== "undefined") {
                        if (window.innerWidth >= 1024) {
                            setIsHamburgerMenu(false);
                        }
                    }
                }
            }["Navbar.useEffect.handleResize"];
            // Initial check
            handleResize();
            // Add resize listener
            window.addEventListener("resize", handleResize);
            // Cleanup
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // outside click handler to close the hamburger menu
    // and scroll handler to close the hamburger menu on scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleClickOutside = {
                "Navbar.useEffect.handleClickOutside": (event)=>{
                    if (menuRef.current && !menuRef.current.contains(event.target)) {
                        setIsHamburgerMenu(false);
                    }
                }
            }["Navbar.useEffect.handleClickOutside"];
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsHamburgerMenu(false);
                }
            }["Navbar.useEffect.handleScroll"];
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    window.removeEventListener("scroll", handleScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex fixed top-0 z-[999] items-center justify-center select-none ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? "py-[0.625rem_0.375rem]" : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? "py-[0.625rem_0.375rem]" : "py-[1.875rem_0.375rem]"}`}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: menuRef,
                className: `lg:w-[56.25rem] md:w-[40.813rem] w-[21.875rem] ${isHamburgerMenu ? "h-max" : "h-[3.5rem]"} rounded-[2.75rem] flex ${isHamburgerMenu ? "flex-col" : "flex-row"} items-center lg:justify-between bg-background backdrop-blur-[0.563rem] ${isHamburgerMenu ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? "py-[6.5rem_1.25rem]" : "py-[4.125rem_1.25rem]"}` : "p-[0.375rem_0.438rem_0.375rem_1.25rem]"} backdrop-blur-[0.563rem] transform transform-gpu transition-all duration-300 ease-in`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        loading: "lazy",
                        src: `/Images/LandingPage/Navbar/veract-logo-white-font.svg`,
                        alt: "veract-logo",
                        className: `
                                absolute left-[1.25rem] w-[9.5rem] h-[2.75rem] object-contain cursor-pointer 
                                transition-all duration-500 ease-in 
                                ${isHamburgerMenu ? "top-[1.875rem]" : "top-[0.25rem]"}
                                lg:static lg:top-auto lg:left-auto
                            `,
                        onClick: ()=>{
                            router.push("/");
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Navbar.tsx",
                        lineNumber: 106,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex ${isHamburgerMenu ? "flex-col" : "flex-row"} items-center justify-center ${isHamburgerMenu && "opacity-0 animate-fade-in"}`,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navItems"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isHamburgerMenu ? "" : " max-sm:hidden max-md:hidden max-lg:hidden"} relative flex items-center justify-center group`,
                                    onClick: ()=>{
                                        setNavbarState(item.id);
                                        if (item.status == 'active') {
                                            router.push(item.link);
                                        }
                                    },
                                    children: [
                                        item.id === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `/Images/LandingPage/Banner/Join.svg`,
                                            alt: "star icon",
                                            className: `absolute top-[7px] ${navbarState !== item.id ? 'group-hover:top-[5px]' : ''} right-[9px] transition-all duration-300 ease-in-out`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Navbar.tsx",
                                            lineNumber: 141,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `syneFont ${item.id === 3 ? 'p-[0.875rem_1.75rem_0.875rem_1rem] ' : 'p-[0.875rem_1rem] '} text-[1rem] leading-[1em] 
                                            ${item.status == 'active' && navbarState !== item.id ? `${item.id == 3 ? 'group-hover:p-[11px_1.75rem_15px_16px]' : 'group-hover:p-[11px_16px_15px_16px]'}` : ''}
                                            tracking-[-0.05em] text-nowrap ${navbarState === item.id && item.status == 'active' ? "text-primary-blue" : "text-white"} font-semibold ${item.status == 'inactive' ? "opacity-50 pointer-events-none" : "cursor-pointer group-hover:bg-[#FFFFFF1A] group-hover:text-primary-blue"}  
                                            transition-all duration-300 ease-in-out rounded-[1.625rem] 
                                            `,
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Navbar.tsx",
                                            lineNumber: 143,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute bottom-0 h-[0.125rem] rounded-[0.688rem] w-0 ${navbarState === item.id && item.status == 'active' ? "w-[calc(100%-3.563rem)]" : "w-0"} group-hover:w-[calc(100%-3.563rem)] ${item.status == 'active' ? 'bg-primary-blue' : ''} transition-all duration-300`
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Navbar.tsx",
                                            lineNumber: 155,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/components/layout/Navbar.tsx",
                                    lineNumber: 127,
                                    columnNumber: 33
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    router.push("/contact-us");
                                },
                                className: `${isHamburgerMenu ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? "mt-[3.875rem]" : "mt-[3.125rem]"}` : "max-sm:hidden max-md:hidden max-lg:hidden"} syneFont hover:bg-orange hover:text-white ${navbarState === 6 ? "bg-orange text-white" : "bg-[#FFFFFF] text-black"} font-bold leading-[1.2em] tracking-[0em] p-[0.563rem_2.063rem] rounded-[1.875rem] cursor-pointer transition-all duration-300 ease-in-out ${!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? "ml-[.625rem]" : ""} text-nowrap`,
                                children: "Talk to us"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Navbar.tsx",
                                lineNumber: 163,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Navbar.tsx",
                        lineNumber: 123,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `min-lg:hidden fixed ${isHamburgerMenu ? "top-[1.875rem] right-[.625rem]" : "right-[.438rem]"} w-[2.75rem] h-[2.75rem] rounded-full ${isHamburgerMenu ? "bg-transparent" : "bg-[#FFFFFF1A]"} flex items-center justify-center transform transition-all duration-500 ease-in`,
                        onClick: ()=>{
                            setIsHamburgerMenu(!isHamburgerMenu);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col gap-[0.438rem] ${isHamburgerMenu ? "items-center" : "items-end"} justify-center transition-all duration-300 ease-in`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-[1.375rem] h-[0.125rem] bg-[#FFFFFF] transition-all duration-300 ease-in ${isHamburgerMenu ? "absolute rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Navbar.tsx",
                                    lineNumber: 190,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${isHamburgerMenu ? "hidden" : ""} w-[.75rem] h-[0.125rem] bg-[#FFFFFF]`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Navbar.tsx",
                                    lineNumber: 194,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-[1.375rem] h-[0.125rem] bg-[#FFFFFF] transition-all duration-300 ease-in ${isHamburgerMenu ? "absolute -rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Navbar.tsx",
                                    lineNumber: 198,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Navbar.tsx",
                            lineNumber: 186,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Navbar.tsx",
                        lineNumber: 176,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Navbar.tsx",
                lineNumber: 96,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/layout/Navbar.tsx",
            lineNumber: 87,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/layout/Navbar.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(Navbar, "IgBTyBimzwasL6/ryyKEy9XcgT4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/not-found.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotFound)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function NotFound() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotFound.useEffect": ()=>{
            setLoaded(true);
        }
    }["NotFound.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-[100vh] relative overflow-auto flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                controls: false,
                playsInline: true,
                loop: true,
                muted: true,
                className: "absolute top-0 left-0 w-full h-full object-cover z-[-1]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Agent/Footer/footer-video.mp4`,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/app/not-found.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/not-found.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-max flex flex-col items-center pb-[10rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/not-found.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-[0.75rem] items-center justify-center shadow-[0px_0px_0px_1px_#FFFFFF0D_inset] rounded-[0.625rem] backdrop-blur-[0.625rem] pl-[0.375rem] pb-[0.375rem] pr-[0.375rem] pt-[12.5rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uppercase bg-[#0055FE] rounded-[0.375rem] shadow-[0px_0px_0px_2px_#FFFFFF26_inset] dmSansFont text-[0.75rem] text-white font-bold leading-[0.625rem] -tracking-[0.031rem] pl-[0.625rem] pt-[0.563rem] pr-[0.625rem] pb-[0.625rem]",
                                children: "oops"
                            }, void 0, false, {
                                fileName: "[project]/app/not-found.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dmSansFont text-[1rem] text-white font-normal leading-[1.625rem] -tracking-[0.031rem]",
                                children: "Page Not Found"
                            }, void 0, false, {
                                fileName: "[project]/app/not-found.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/not-found.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center dmSansFont text-[3.5rem] md:text-[5.375rem] lg:text-[5.375rem] text-white font-normal leading-[3.438rem] md:leading-[5.625rem] lg:leading-[5.625rem] -tracking-[0.238rem] text-center mt-[2.125rem] pl-[1.875rem] pr-[1.875rem] lg:pl-0 lg:pr-0 md:pl-0 md:pr-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "404 - Oops Page"
                            }, void 0, false, {
                                fileName: "[project]/app/not-found.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Not Found in Data."
                            }, void 0, false, {
                                fileName: "[project]/app/not-found.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/not-found.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dmSansFont text-[1rem] text-[#FFFFFF]/60 font-normal leading-[1.625rem] -tracking-[0.013rem] text-center mt-[1.625rem] w-[80%] lg:w-[40%] md:w-[60%]",
                        children: "Oops! The web page you’re looking for doesn’t exist. Please click the below button to get back to the home."
                    }, void 0, false, {
                        fileName: "[project]/app/not-found.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>{
                            router.push("/");
                        },
                        className: "bg-primary-blue rounded-[0.625rem] page-not-found-CTA-boxShadow dmSansFont text-[1rem] text-white font-medium leading-[1.625rem] -tracking-[0.031rem] mt-[2.375rem] cursor-pointer pl-[1.125rem] pt-[0.625rem] pb-[0.625rem] pr-[1.125rem]",
                        children: "Back To Homepage"
                    }, void 0, false, {
                        fileName: "[project]/app/not-found.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/not-found.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/not-found.tsx",
        lineNumber: 17,
        columnNumber: 7
    }, this);
}
_s(NotFound, "qr8feAtBH6YL9kZ5N1x+KXznK1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NotFound;
var _c;
__turbopack_context__.k.register(_c, "NotFound");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_09f7a298._.js.map