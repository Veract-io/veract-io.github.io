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
"[project]/app/components/layout/Landing_Page/Banner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Banner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Banner() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [translateY2, setTranslateY2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [displayText, setDisplayText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [charIndex, setCharIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typing, setTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hoveredTouch, setHoveredTouch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredServices, setHoveredServices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Typing Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Banner.useEffect": ()=>{
            const currentWord = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.typwriting_animation_list[wordIndex];
            let timeout;
            if (typing) {
                if (charIndex < currentWord.word.length) {
                    timeout = setTimeout({
                        "Banner.useEffect": ()=>{
                            setDisplayText({
                                "Banner.useEffect": (prev)=>prev + currentWord.word[charIndex]
                            }["Banner.useEffect"]);
                            setCharIndex({
                                "Banner.useEffect": (prev)=>prev + 1
                            }["Banner.useEffect"]);
                        }
                    }["Banner.useEffect"], 120);
                } else {
                    // Wait 3 seconds before starting to delete
                    timeout = setTimeout({
                        "Banner.useEffect": ()=>{
                            setTyping(false);
                        }
                    }["Banner.useEffect"], 3000);
                }
            } else {
                if (charIndex > 0) {
                    timeout = setTimeout({
                        "Banner.useEffect": ()=>{
                            setDisplayText({
                                "Banner.useEffect": (prev)=>prev.slice(0, -1)
                            }["Banner.useEffect"]);
                            setCharIndex({
                                "Banner.useEffect": (prev)=>prev - 1
                            }["Banner.useEffect"]);
                        }
                    }["Banner.useEffect"], 80);
                } else {
                    setWordIndex({
                        "Banner.useEffect": (prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.typwriting_animation_list.length
                    }["Banner.useEffect"]);
                    setTyping(true); // Start typing next word
                }
            }
            return ({
                "Banner.useEffect": ()=>clearTimeout(timeout)
            })["Banner.useEffect"];
        }
    }["Banner.useEffect"], [
        charIndex,
        typing,
        wordIndex
    ]);
    // Background Effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Banner.useEffect": ()=>{
            const handleScroll = {
                "Banner.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY;
                    setTranslateY2(scrollY / 6);
                    setScale(Math.max(0.88, 1 - scrollY / 300 / 2));
                    setOpacity(Math.max(0.65, 1 - scrollY / 600 / 2));
                }
            }["Banner.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Banner.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Banner.useEffect"];
        }
    }["Banner.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 select-none  w-full h-[100vh] overflow-hidden perspective-[75rem] flex items-center justify-center bg-black",
        style: {
            transformStyle: 'preserve-3d'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "absolute w-full h-full object-cover",
                autoPlay: true,
                muted: true,
                playsInline: true,
                loop: true,
                controls: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Banner/hero banner video.mp4`,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " w-[calc(100%-2.5rem)]  lg:w-auto relative z-10 text-center text-white flex flex-col items-center justify-center gap-[2.188rem] md:gap-[0.625rem] lg:gap-[3.125rem]",
                style: {
                    opacity: opacity,
                    transform: `scale(${scale}) translateY(${translateY2}px)`,
                    transition: 'transform 0.1s ease'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "z-10 text-center px-[1rem] ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " text-[2.5rem] lg:text-[3rem] md:text-[3rem]  font-semibold lg:w-[55.938rem] syneFont mx-auto pb-[2rem] md:pb-[0.625rem] lg:pb-[0.625rem] leading-[1.1em] tracking-[0rem] lg:tracking-[-0.179rem] md:tracking-[-0.173rem]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    initial: {
                                        clipPath: "inset(0 60% 0 0)",
                                        opacity: 0,
                                        filter: "blur(5px)",
                                        y: 10
                                    },
                                    animate: {
                                        clipPath: "inset(0 0% 0 0)",
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        y: 0
                                    },
                                    transition: {
                                        duration: 1,
                                        ease: "easeOut",
                                        delay: 0.5
                                    },
                                    className: "lg:inline md:inline inline-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.title_primary,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white hidden lg:inline",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.title_secondary
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white md:hidden ",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.title_secondary,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.title_tertiary
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "",
                                    initial: {
                                        opacity: 0,
                                        filter: "blur(5px)",
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        filter: "blur(0px)",
                                        y: 0
                                    },
                                    transition: {
                                        duration: 1,
                                        ease: "easeOut",
                                        delay: 0.7
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-flex md:flex md:flex-col lg:inline-flex md:items-center lg:items-baseline items-baseline md:w-[40rem] lg:w-[47rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white hidden md:inline lg:hidden",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.title_secondary
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white hidden md:inline",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.title_tertiary
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-primary-blue text-center lg:text-left lg:absolute lg:left-[12rem]`,
                                                style: {
                                                    width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? `100%` : `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.typwriting_animation_list[wordIndex].word.length}ch`}`
                                                },
                                                children: [
                                                    displayText,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "animate-pulse",
                                                        children: "|"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "interFont text-[1rem] lg:text-[1.125rem] md:text-[1rem] font-medium w-[90%] md:w-[90%] lg:w-[39.188rem] leading-[1.5em] mx-auto pb-[1.75rem] md:pb-[1.75rem]  lg:pb-[1rem] tracking-[-0.02em] space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            clipPath: "inset(0 60% 0 0)",
                                            opacity: 0,
                                            filter: "blur(5px)",
                                            y: 5
                                        },
                                        animate: {
                                            clipPath: "inset(0 0% 0 0)",
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            y: 0
                                        },
                                        transition: {
                                            duration: 1,
                                            ease: "easeOut",
                                            delay: 0.9
                                        },
                                        className: "block",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.description_primary
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: {
                                            clipPath: "inset(0 60% 0 0)",
                                            opacity: 0,
                                            filter: "blur(5px)",
                                            y: 5
                                        },
                                        animate: {
                                            clipPath: "inset(0 0% 0 0)",
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            y: 0
                                        },
                                        transition: {
                                            duration: 1,
                                            ease: "easeOut",
                                            delay: 1.1
                                        },
                                        className: "block",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.description_secondary
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8,
                                delay: 1.3,
                                ease: "easeOut"
                            },
                            className: " flex items-center justify-center gap-[0.938rem]  pb-[1.75rem] lg:pb-[2.688rem] md:pb-[1.75rem] ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onMouseEnter: ()=>setHoveredTouch(true),
                                    onMouseLeave: ()=>setHoveredTouch(false),
                                    onClick: ()=>{
                                        router.push('/contact-us');
                                    },
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.banner_CTA_status === 'active' ? 'cursor-pointer' : 'cursor-not-allowed'} bg-primary-blue relative overflow-hidden w-[7.75rem] h-[2.25rem] text-white rounded-full flex items-center justify-center interFont text-[0.938rem]`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: false,
                                            animate: {
                                                y: hoveredTouch ? "-100%" : "0%",
                                                opacity: hoveredTouch ? 0 : 1
                                            },
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeInOut"
                                            },
                                            className: "bg-primary-blue absolute inset-0 flex items-center justify-center",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.get_in_touch,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    loading: "lazy",
                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Banner/arrowIconUp.png`,
                                                    alt: "arrow_icon",
                                                    className: `w-[1rem] h-[1rem] object-contain `
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: false,
                                            animate: {
                                                y: hoveredTouch ? "0%" : "100%",
                                                opacity: hoveredTouch ? 1 : 0
                                            },
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeInOut"
                                            },
                                            className: "absolute inset-0 flex items-center justify-center bg-primary-blue",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.get_in_touch,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    loading: "lazy",
                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Banner/arrowIconUp.png`,
                                                    alt: "arrow_icon",
                                                    className: `w-[1rem] h-[1rem] object-contain rotate-45`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 225,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onMouseEnter: ()=>setHoveredServices(true),
                                    onMouseLeave: ()=>setHoveredServices(false),
                                    onClick: ()=>{
                                        window.scrollTo({
                                            top: document.getElementById('services')?.offsetTop,
                                            behavior: 'instant'
                                        });
                                    },
                                    className: `cursor-pointer lg:bg-[#0D0D0D] md:bg-[#050505]/80 bg-[#050505]/80 relative overflow-hidden w-[7.75rem] h-[2.25rem] border border-gray-700 text-white rounded-full flex items-center justify-center interFont text-[0.938rem]`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: false,
                                            animate: {
                                                y: hoveredServices ? "-100%" : "0%",
                                                opacity: hoveredServices ? 0 : 1
                                            },
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeInOut"
                                            },
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.view_services_text
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: false,
                                            animate: {
                                                y: hoveredServices ? "0%" : "100%",
                                                opacity: hoveredServices ? 1 : 0
                                            },
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeInOut"
                                            },
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.view_services_text
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-center gap-[1.5rem]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.banner_image_list[0].image,
                                    alt: "logo image",
                                    className: "w-[2.563rem] object-cover",
                                    initial: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.3,
                                        delay: 1.3,
                                        ease: "easeOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center gap-[0.5rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            loading: "lazy",
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.banner_image_list[1].image,
                                            alt: "logo image",
                                            className: "w-[3.938rem] object-cover",
                                            initial: {
                                                opacity: 0,
                                                y: -10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.6,
                                                delay: 1.3,
                                                ease: "easeOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            loading: "lazy",
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.3,
                                                delay: 1.5,
                                                ease: "easeOut"
                                            },
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.banner_image_list[2].image,
                                            alt: "logo image",
                                            className: "w-[3.938rem] object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.banner_image_list[3].image,
                                    alt: "logo image",
                                    className: "w-[3.563rem] object-cover",
                                    initial: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 1.6,
                                        ease: "easeOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-full absolute bottom-[5rem] md:bottom-[2rem]",
                initial: {
                    x: 100,
                    y: 15,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 1.5,
                    ease: "easeOut",
                    delay: 1.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    gradient: true,
                    autoFill: true,
                    gradientColor: "#000000CC",
                    gradientWidth: 100,
                    speed: 30,
                    direction: "left",
                    className: "flex items-center ",
                    play: true,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.banner_carousel_list.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mr-[4.125rem]",
                            children: [
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    loading: "lazy",
                                    src: src.img,
                                    alt: `brand logo`,
                                    className: "w-[6.625rem] object-cover flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                    lineNumber: 334,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Landing_Page/Banner.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(Banner, "K+atKSf9wjuSvd2Wn0ftq4/ygaw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Banner;
var _c;
__turbopack_context__.k.register(_c, "Banner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Landing_Page/ShowReel.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ShowReel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ShowReel() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVideo, setVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileView, setIsMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTabView, setTabView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: sectionRef,
        offset: [
            'start start',
            'end start'
        ]
    });
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.2
    ], [
        0.2,
        1
    ]); // full scale before scroll continues
    const textScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.5
    ], [
        1,
        0.3
    ]);
    const springScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scale, {
        stiffness: 100,
        damping: 20
    });
    const springTextScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(textScale, {
        stiffness: 500,
        damping: 50
    });
    const [isHover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowReel.useEffect": ()=>{
            if (window) {
                if (window.innerWidth < 1024) {
                    setTabView(true);
                }
                if (window.innerWidth < 768) {
                    setIsMobileView(true);
                }
            }
        }
    }["ShowReel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowReel.useEffect": ()=>{
            setLoaded(true);
        }
    }["ShowReel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowReel.useEffect": ()=>{
            const body = document.body;
            if (isVideo) {
                const scrollY = window.scrollY;
                scrollYRef.current = scrollY;
                body.style.position = 'fixed';
                body.style.top = `-${scrollY}px`;
                body.style.left = '0';
                body.style.right = '0';
                body.style.width = '100%';
                body.style.overflow = 'hidden';
                // Optional: Prevent scrollbar jump if there's vertical scrollbar
                body.style.paddingRight = '0px';
                // Stop Lenis if available
                window.lenis?.stop?.();
            } else {
                // Restore scroll position from ref
                const scrollY = scrollYRef.current;
                body.style.position = '';
                body.style.top = '';
                body.style.left = '';
                body.style.right = '';
                body.style.width = '';
                body.style.overflow = '';
                body.style.paddingRight = '';
                window.scrollTo(0, scrollY);
                // Restart Lenis
                window.lenis?.start?.();
            }
            return ({
                "ShowReel.useEffect": ()=>{
                    body.style.position = '';
                    body.style.top = '';
                    body.style.left = '';
                    body.style.right = '';
                    body.style.width = '';
                    body.style.overflow = '';
                    body.style.paddingRight = '';
                    window.lenis?.start?.();
                }
            })["ShowReel.useEffect"];
        }
    }["ShowReel.useEffect"], [
        isVideo
    ]);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: `${isMobileView ? 'h-max' : `${isTabView ? 'h-[180vh]' : 'h-[300vh]'}`} relative mt-[100vh] bg-primary-text flex flex-col pb-[6.188rem]`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    loading: "lazy",
                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/case-studies/Overlay.png`,
                    alt: "overlay",
                    className: "w-full absolute top-[-10.938rem] h-[11rem] z-[100]"
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                id: "showreel-text",
                className: `uppercase static md:sticky lg:sticky z-10 ${isTabView ? 'top-[7rem]' : 'top-0'} w-screen syneFont text-[3rem] md:text-[7.813rem] lg:text-[11.563rem] leading-[100%] tracking-[-0.05em] font-bold text-white text-center bg-primary-text`,
                style: {
                    scale: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? springTextScale : 1
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].showReel.title
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden md:flex lg:flex flex-col items-center justify-center sticky top-[0%] transform z-10 bg-transparent`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            scale: springScale,
                            transformOrigin: 'center center'
                        },
                        className: `bg-[#FFFFFF] rounded-xl w-screen h-screen relative z-11 overflow-hidden`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            className: "w-full h-full object-cover",
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            controls: false,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: `${isMobileView ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].showReel.video[2] : isTabView ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].showReel.video[1] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].showReel.video[0]}`,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                "Your browser does not support the video tag."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        onMouseOver: ()=>setHover(true),
                        onMouseLeave: ()=>setHover(false),
                        onClick: ()=>setVideo(true),
                        animate: {
                            gap: isHover ? '0.938rem' : '0rem'
                        },
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut"
                        },
                        className: "absolute z-[25] flex flex-col items-center justify-center group cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex md:hidden lg:hidden items-center justify-center w-[calc(100%-2.5rem)] h-[60vh] bg-white rounded-xl my-[3.938rem_5.563rem] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            className: "w-full h-full object-cover",
                            autoPlay: true,
                            muted: true,
                            loop: true,
                            playsInline: true,
                            controls: false,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: `${isMobileView ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].showReel.video[2] : isTabView ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].showReel.video[1] : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].showReel.video[0]}`,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                "Your browser does not support the video tag."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            onMouseOver: ()=>setHover(true),
                            onMouseLeave: ()=>setHover(false),
                            onClick: ()=>setVideo(true),
                            animate: {
                                gap: isHover ? '0.938rem' : '0rem'
                            },
                            transition: {
                                duration: 0.3,
                                ease: "easeInOut"
                            },
                            className: "absolute z-[25] flex flex-col items-center justify-center group cursor-pointer"
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this),
            isVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-[997] inset-0 bg-[#000000]/60 flex items-center justify-center",
                onClick: ()=>{
                    setVideo(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[80%] h-[80vh] bg-black",
                    onClick: (e)=>e.stopPropagation(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        ref: videoRef,
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].showReel.youtube_url,
                        className: "w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                        lineNumber: 224,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                    lineNumber: 220,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
                lineNumber: 216,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Landing_Page/ShowReel.tsx",
        lineNumber: 103,
        columnNumber: 7
    }, this);
}
_s(ShowReel, "puH0IoXdhDXfqPugG1oMOnKogv0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"]
    ];
});
_c = ShowReel;
var _c;
__turbopack_context__.k.register(_c, "ShowReel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Landing_Page/About_Us.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>About_Us)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function About_Us() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About_Us.useEffect": ()=>{
            setLoaded(true);
        }
    }["About_Us.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-max bg-[#0D0D0D] flex items-center justify-center pb-[6.188rem] relative z-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[24.5rem] bg-[#030810] relative rounded-[36px] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    loading: "lazy",
                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/AboutUs/about_us_bg.png`,
                    alt: "placeholder image",
                    className: "absolute top-0 object-center object-cover w-full h-full rounded-[36px]"
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 w-full h-full z-0 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animated-orb orb-path-client"
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animated-orb orb-path-industry"
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animated-orb orb-path-project"
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animated-orb orb-path-found"
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full h-full flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "syneFont grid text-white gap-y-10 gap-x-0 lg:gap-x-22 md:gap-x-22 grid-cols-2 md:grid-cols-4 place-items-center px-4 sm:px-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].aboutUs.achievementsList.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:gap-[20px] md:gap-[20px] items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:text-[54px] lg:text-[54px] text-[32px] sm:text-[10px ] tracking-[-1.9px] lg:leading-[50px] md:leading-[50px] text-center",
                                        children: category.numbers
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                                        lineNumber: 39,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:text-[32px] md:text-[32px] text-[26px] tracking-[-1.9px] leading-[32px] lg:leading-[50px] md:leading-[50px] text-center text-wrap",
                                        children: category.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                                        lineNumber: 42,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                                lineNumber: 35,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/layout/Landing_Page/About_Us.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this);
}
_s(About_Us, "I8RUn14npbk54TheiKdNt4wCpsU=");
_c = About_Us;
var _c;
__turbopack_context__.k.register(_c, "About_Us");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Landing_Page/Advantages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Advantages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Advantages() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const cardCount = 4;
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openedArr, setOpenedArr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(cardCount).fill(false));
    const [scaledArr, setScaledArr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(cardCount).fill(false));
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Advantages.useEffect": ()=>{
            setLoaded(true);
        }
    }["Advantages.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Advantages.useEffect": ()=>{
            if (loaded) {
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) {
                    const cards = document.querySelectorAll(".services-group");
                    const blobs = document.querySelectorAll(".blob-placeholder");
                    let lastActiveIndex = null;
                    const handleMouseOver = {
                        "Advantages.useEffect.handleMouseOver": (idx)=>{
                            // Reverse previous
                            if (lastActiveIndex !== null && lastActiveIndex !== idx) {
                                blobs[lastActiveIndex]?.classList.remove("animate-blob-move");
                                blobs[lastActiveIndex]?.classList.add("animate-blob-reverse");
                            }
                            // Animate current
                            blobs[idx]?.classList.remove("animate-blob-reverse");
                            blobs[idx]?.classList.add("animate-blob-move");
                            lastActiveIndex = idx;
                        }
                    }["Advantages.useEffect.handleMouseOver"];
                    const handleMouseLeave = {
                        "Advantages.useEffect.handleMouseLeave": (idx)=>{
                            blobs[idx]?.classList.remove("animate-blob-move");
                            blobs[idx]?.classList.add("animate-blob-reverse");
                            lastActiveIndex = null;
                        }
                    }["Advantages.useEffect.handleMouseLeave"];
                    cards.forEach({
                        "Advantages.useEffect": (card, idx)=>{
                            const cardEl = card;
                            const mouseOverHandler = {
                                "Advantages.useEffect.mouseOverHandler": ()=>handleMouseOver(idx)
                            }["Advantages.useEffect.mouseOverHandler"];
                            const mouseLeaveHandler = {
                                "Advantages.useEffect.mouseLeaveHandler": ()=>handleMouseLeave(idx)
                            }["Advantages.useEffect.mouseLeaveHandler"];
                            cardEl.addEventListener("mouseenter", mouseOverHandler);
                            cardEl.addEventListener("mouseleave", mouseLeaveHandler);
                            // Save both for cleanup
                            cardEl._mouseOverHandler = mouseOverHandler;
                            cardEl._mouseLeaveHandler = mouseLeaveHandler;
                        }
                    }["Advantages.useEffect"]);
                    return ({
                        "Advantages.useEffect": ()=>{
                            cards.forEach({
                                "Advantages.useEffect": (card)=>{
                                    const cardEl = card;
                                    if (cardEl._mouseOverHandler) {
                                        cardEl.removeEventListener("mouseenter", cardEl._mouseOverHandler);
                                    }
                                    if (cardEl._mouseLeaveHandler) {
                                        cardEl.removeEventListener("mouseleave", cardEl._mouseLeaveHandler);
                                    }
                                }
                            }["Advantages.useEffect"]);
                        }
                    })["Advantages.useEffect"];
                }
            }
        }
    }["Advantages.useEffect"], [
        loaded
    ]);
    // Handle card click for open/close with delayed bg swap
    const handleCardClick = (idx)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) {
            if (openedArr[idx]) {
                // Close: reset both immediately
                setScaledArr((arr)=>{
                    const newArr = [
                        ...arr
                    ];
                    newArr[idx] = false;
                    return newArr;
                });
                setOpenedArr((arr)=>{
                    const newArr = [
                        ...arr
                    ];
                    newArr[idx] = false;
                    return newArr;
                });
            } else {
                // Open: scale first, then fade out
                setOpenedArr((arr)=>{
                    const newArr = [
                        ...arr
                    ];
                    newArr[idx] = true;
                    return newArr;
                });
                setTimeout(()=>{
                    setScaledArr((arr)=>{
                        const newArr = [
                            ...arr
                        ];
                        newArr[idx] = true;
                        return newArr;
                    });
                }, 300);
            }
        }
    };
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-max flex flex-col items-center justify-center relative z-[20] bg-primary-text",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "static lg:sticky top-[calc(100%-934px)] w-full h-max flex flex-col gap-[2.5rem] items-center justify-center p-[0_1.5rem_6.25rem_1.5rem] md:p-[0_3.125rem_6.25rem_3.125rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-[0.625rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uppercase syneFont text-[2.5rem] font-bold -tracking-[0.05rem] md:-tracking-[0.05rem] leading-[3.125rem] text-white text-center",
                                children: [
                                    "veract",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary-blue",
                                        children: [
                                            ' ',
                                            "advantage"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                        lineNumber: 117,
                                        columnNumber: 164
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uppercase interFont text-[1.125rem] text-secondary-gray font-normal leading-[2.125rem] text-center",
                                children: "Collaborating with us is a smart move for growth"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-max flex flex-col items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:gap-[0.625rem] gap-[0.625rem] lg:w-[100%] w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex lg:w-full lg:flex-row flex-col lg:gap-[0.625rem] gap-[0.625rem] justify-center items-center",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].advantages.advantages_list.slice(0, 2).map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `syneFont group services-group relative transition-all duration-700 ease-in-out ${((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx] ? 'h-[11.938rem]' : idx === 0 ? 'lg:h-[23.5rem] lg:w-[66%]' : 'lg:h-[23.5rem] lg:w-[33%]'} md:w-full md:h-[23.5rem] w-full h-[23.5rem] overflow-clip rounded-[1.875rem]`,
                                            onClick: ()=>handleCardClick(idx),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 z-0 transition-all duration-700 ease-in-out ${((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx] ? 'scale-200' : 'scale-100'} ${((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && scaledArr[idx] ? 'opacity-30' : 'opacity-100'} ${card.bg}`,
                                                    style: {
                                                        borderRadius: '1.875rem'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this),
                                                ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/50 z-10",
                                                    style: {
                                                        borderRadius: '1.875rem'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] ${card.blobWidth} rotate-[18deg] overflow-hidden bg-white-5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-201`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute lg:top-[0.75rem] md:top-[0.75rem] top-[1.25rem] left-[1.25rem] lg:text-[1.625rem] md:text-[1.625rem] leading-[1.5em] text-[1.375rem] font-semibold md:tracking-[-0.05em] tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${card.gradient} bg-clip-text text-transparent transition-all duration-300 ease-in  ` + (((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx] ? `${card.gradient} bg-clip-text text-transparent md:top-[2.5rem] md:left-[2.5rem] ease-in duration-300 transition-all  ` : `text-white lg:group-hover:top-[2.5rem] lg:group-hover:left-[2.5rem] lg:group-hover:${card.gradient} lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:w-[50%]`),
                                                    style: {
                                                        zIndex: 30
                                                    },
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this),
                                                ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] mr-[1.25rem] interFont text-white text-[0.875rem] font-light tracking-[-0.04em] leading-[1.5em] z-30",
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:opacity-0 absolute  md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] interFont text-white md:text-[1.125rem] text-[0.875rem] tracking-[-0.04em] leading-[1.5em] cursor-pointer z-30",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute interFont lg:bottom-[2.5rem] md:bottom-[2.5rem] bottom-[1.25rem] left-[1rem] text-[0.938rem] font-light leading-[1.5em] text-white-80 opacity-0 transition-all duration-700 ease-in lg:group-hover:opacity-100 lg:group-hover:left-[2.5rem] lg:right-[2.5rem] z-30",
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, card.title, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex lg:w-full lg:flex-row flex-col lg:gap-[0.625rem] gap-[0.625rem] items-center justify-center",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].advantages.advantages_list.slice(2, 4).map((card, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `syneFont group services-group relative transition-all duration-700 ease-in-out ${((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx + 2] ? 'h-[11.938rem]' : idx === 1 ? 'lg:h-[23.5rem] lg:w-[66%]' : 'lg:h-[23.5rem] lg:w-[33%]'} md:w-full md:h-[23.5rem] w-full h-[23.5rem] overflow-clip rounded-[1.875rem]`,
                                            onClick: ()=>handleCardClick(idx + 2),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute inset-0 z-0 transition-all duration-700 ease-in-out ${((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx + 2] ? 'scale-200' : 'scale-100'} ${((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && scaledArr[idx + 2] ? 'opacity-30' : 'opacity-100'} ${card.bg}`,
                                                    style: {
                                                        borderRadius: '1.875rem'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, this),
                                                ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx + 2] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/50 z-10",
                                                    style: {
                                                        borderRadius: '1.875rem'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 left-0 w-full h-[100%] bg-[linear-gradient(165deg,_#000000_0%,_rgba(0,0,0,0)_100%)] opacity-[0.79] z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `opacity-0 blob-placeholder left-[-3rem] top-[-3rem] absolute h-[30rem] ${card.blobWidth} rotate-[18deg] overflow-hidden bg-white-5 backdrop-blur-[5rem] transition-all duration-300 ease-in z-20`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute lg:top-[0.75rem] md:top-[0.75rem] top-[1.25rem] left-[1.25rem] lg:text-[1.625rem] md:text-[1.625rem]  text-[1.375rem] font-semibold tracking-[-0.07em] lg:text-white lg:transition-all lg:duration-700 lg:ease-in ${card.gradient} bg-clip-text text-transparent transition-all duration-300 ease-in  ` + (((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx + 2] ? `${card.gradient} bg-clip-text text-transparent md:top-[2.5rem] md:left-[2.5rem] ease-in duration-300 transition-all  ` : `text-white lg:group-hover:top-[2.5rem] lg:group-hover:left-[2.5rem] lg:group-hover:${card.gradient} lg:group-hover:bg-clip-text lg:group-hover:text-transparent lg:w-[50%] md:w-[60%]`),
                                                    style: {
                                                        zIndex: 30
                                                    },
                                                    children: card.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this),
                                                ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && openedArr[idx + 2] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] mr-[1.25rem] interFont text-white md:text-[0.938rem] font-light text-[0.875rem] tracking-[-0.04em] leading-[1.5em] z-30",
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "lg:opacity-0 absolute md:bottom-[2.5rem] bottom-[1.25rem] left-[1.25rem] interFont text-white md:text-[1.125rem]  text-[0.875rem] tracking-[-0.04em] leading-[1.5em] cursor-pointer z-30",
                                                    children: "Learn More →"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute interFont lg:bottom-[2.5rem] md:bottom-[2.5rem] bottom-[1.25rem] left-[1rem] text-[0.938rem] font-light leading-[1.5em] text-white-80 opacity-0 transition-all duration-700 ease-in lg:group-hover:opacity-100 lg:group-hover:left-[2.5rem] lg:right-[2.5rem] z-30",
                                                    children: card.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, card.title, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                            lineNumber: 173,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 w-full h-max bg-white flex flex-col items-center justify-center gap-[2.5rem] p-[6.25rem_1.5rem] md:p-[6.25rem_3.125rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center gap-[.625rem] w-[calc(100%+1px)] md:w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "uppercase syneFont text-[2.5rem] font-bold tracking-0 lg:-tracking-[0.05rem] leading-[1.2em] lg:leading-[3.125rem] text-primary-text text-center",
                                children: [
                                    "Featured",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary-blue",
                                        children: [
                                            ' ',
                                            "Projects"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                        lineNumber: 223,
                                        columnNumber: 183
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "interFont text-[1.125rem] text-primary-text-50 font-normal leading-[1.8em] px-0 lg:px-[12.5rem] text-center",
                                children: "Take a look at our handpicked case studies showcasing real-world tech solutions.A quick glimpse into the impact we create."
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-max flex flex-col items-center justify-center gap-[2.5rem] px-0 lg:px-[6.25rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-max flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[2.5rem] md:gap-[2.75rem]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].advantages.featuredWorks_list.slice(0, 2).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex flex-col items-center justify-center gap-[1.25rem] py-0 lg:py-[2.5rem] pb-[1.25rem] lg:pb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    if (item.status === 'active') {
                                                        router.push(`/case-studies/${item.route}`);
                                                    } else {
                                                        router.push('/contact-us/');
                                                    }
                                                },
                                                className: `relative w-full lg:w-[25rem] md:h-[33.25rem] h-[14.75rem] lg:h-[14.75rem] rounded-[0.75rem] flex items-center justify-center overflow-hidden group cursor-pointer`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: item.image,
                                                        alt: item.title,
                                                        className: "absolute w-[100%] h-[100%] object-cover opacity-100 lg:group-hover:opacity-0 transition-all duration-300 ease-in-out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: item.hover_image,
                                                        alt: item.title,
                                                        className: "absolute w-[100%] h-[100%] object-cover opacity-0 lg:group-hover:opacity-100 lg:group-hover:z-50 lg:group-hover:scale-105 transition-all duration-300 ease-in-out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full flex flex-col items-start justify-center gap-[0.625rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "uppercase syneFont text-[1.5rem] text-primary-text font-bold md:tracking-[-0.02em] leading-[1.2em]",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "uppercase interFont text-[0.875rem] text-[#71717A] font-normal leading-[1.4em] tracking-[0.05em]",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                lineNumber: 227,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-max flex flex-col lg:flex-row items-center lg:items-start justify-center gap-[2.5rem] md:gap-[2.75rem]",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].advantages.featuredWorks_list.slice(2, 4).map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex flex-col items-center justify-center gap-[1.25rem] py-0 lg:py-[2.5rem] pb-[1.25rem] lg:pb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    if (item.status === 'active') {
                                                        router.push(`/case-studies/${item.route}`);
                                                    } else {
                                                        router.push('/contact-us/');
                                                    }
                                                },
                                                className: `relative w-full lg:w-[25rem] md:h-[33.25rem] h-[14.75rem] lg:h-[14.75rem] rounded-[0.75rem] flex items-center justify-center overflow-hidden group cursor-pointer`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: item.image,
                                                        alt: item.title,
                                                        className: "absolute w-[100%] h-[100%] object-cover opacity-100 lg:group-hover:opacity-0 transition-all duration-300 ease-in-out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: item.hover_image,
                                                        alt: item.title,
                                                        className: "absolute w-[100%] h-[100%] object-cover opacity-0 lg:group-hover:opacity-100 lg:group-hover:z-50 lg:group-hover:scale-105 transition-all duration-300 ease-in-out"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 21
                                                    }, this),
                                                    "                  "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full flex flex-col items-start justify-center gap-[0.625rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "uppercase syneFont text-[1.5rem] text-primary-text font-bold md:tracking-[-0.02em] leading-[1.2em]",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "uppercase interFont text-[0.875rem] text-[#71717A] font-normal leading-[1.4em] tracking-[0.05em]",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseOver: ()=>{
                            setIsHovered(true);
                        },
                        onMouseLeave: ()=>{
                            setIsHovered(false);
                        },
                        onClick: ()=>{
                            router.push('/case-studies');
                        },
                        className: "w-[8.688rem] h-[2.75rem] relative flex flex-row items-center justify-center rounded-[2.5rem] bg-primary-blue lg:bg-transparent hover:bg-primary-blue transition-all duration-300 easeTransition cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute ${isHovered || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? 'left-[1rem]' : 'left-[1.75rem] md:left-[1.5rem]'} poppinsFont text-[1rem] text-white lg:text-black font-normal leading-[1.8em] text-center lg:group-hover:text-white transition-all duration-300 easeTransition`,
                                children: "more projects"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                loading: "lazy",
                                src: "/Icons/arrow-right.png",
                                alt: "arrow-right",
                                className: `absolute ${isHovered || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? 'left-[calc(100%-1.65rem)] opacity-100' : 'left-[calc(100%-3rem)] opacity-0'} transition-all duration-300 easeTransition`
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
                lineNumber: 221,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Landing_Page/Advantages.tsx",
        lineNumber: 114,
        columnNumber: 7
    }, this);
}
_s(Advantages, "A3f7PmjiOV0x/SxIl/PYhk5MJWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Advantages;
var _c;
__turbopack_context__.k.register(_c, "Advantages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Landing_Page/We_Work_With.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>We_Work_With)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-fast-marquee/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function We_Work_With() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "We_Work_With.useEffect": ()=>{
            setLoaded(true);
        }
    }["We_Work_With.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-max bg-[#0D0D0D] text-white flex flex-col items-center  px-[1rem] pt-[11.25rem] pb-[10.625rem] lg:pt-[6.25rem] lg:pb-[10.687rem] md:pb-[5.125rem] relative z-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-[2.5rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uppercase syneFont text-[2.25rem] lg:text-[4.5rem] md:text-[4.5rem] tracking-[0em] leading-[1.2em] font-bold text-[#fff]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].we_work_with.title
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uppercase syneFont text-[2.25rem] lg:text-[4.5rem] md:text-[4.5rem] tracking-[0em] leading-[1.2em] font-bold text-[#4285F4]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].we_work_with.sub_title
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full [@media(min-width:1550px)]:w-[80%] [@media(min-width:1600px)]:w-[90%] py-[1.5rem] rotate-[-3deg] mt-[3.1875rem]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    gradient: true,
                    autoFill: true,
                    gradientColor: "#0D0D0D",
                    gradientWidth: 100,
                    speed: 50,
                    direction: "right",
                    className: "flex items-center gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].we_work_with.carouselData.map((brand, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative chakraPetchFont w-[18.75rem] h-[7.875rem] lg:h-[12.5rem] md:h-[12.5rem] flex items-center justify-center text-white text-[2.25rem] font-medium",
                            style: {
                                marginLeft: index !== 0 ? "0.625rem" : "-0.3125rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    loading: "lazy",
                                    src: brand.image,
                                    className: "absolute top-0 left-0 z-10 w-[18.75rem] h-[7.875rem] lg:h-[12.5rem] md:h-[12.5rem]"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 text-center",
                                    children: brand.name
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
                            lineNumber: 35,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
                    lineNumber: 25,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Landing_Page/We_Work_With.tsx",
        lineNumber: 15,
        columnNumber: 7
    }, this);
}
_s(We_Work_With, "I8RUn14npbk54TheiKdNt4wCpsU=");
_c = We_Work_With;
var _c;
__turbopack_context__.k.register(_c, "We_Work_With");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Landing_Page/Testimonials.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Testimonials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Testimonials() {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const prevIndexRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(0);
    const [visibleMiniIndex, setVisibleMiniIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSetActiveIndex = (newIndex)=>{
        if (newIndex !== activeIndex) {
            prevIndexRef.current = activeIndex;
            setVisibleMiniIndex(null);
            setActiveIndex(newIndex);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            requestAnimationFrame({
                "Testimonials.useEffect": ()=>{
                    setLoader(true);
                }
            }["Testimonials.useEffect"]);
        }
    }["Testimonials.useEffect"], []);
    return loader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-max bg-[#0D0D0D] text-white flex items-center justify-center relative z-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row w-[75rem] gap-[3.125rem] lg:gap-[2.75rem] h-full px-[1.5rem] lg:px-[6.25rem] py-[0] lg:py-[12.813rem_6.125rem] md:py-[9.938rem_6.25rem] items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex flex-col lg:flex-row items-center justify-center relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            loading: "lazy",
                            className: "absolute top-[-3.4rem] left-1/2 transform -translate-x-1/2 lg:left-[-3rem] lg:-translate-x-0 w-[6rem] lg:w-[7.438rem] h-[6rem] lg:h-[6.938rem] object-contain z-0",
                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Testimonial/TestimonialDots.png`,
                            alt: "Testimonial_Quotes"
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-max relative z-10 syneFont text-[3.125rem] md:text-[4rem] lg:text-[5rem] leading-[1.2em] font-semibold flex flex-col gap-[0.625rem]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        background: 'linear-gradient(355deg, rgb(156, 156, 161) 48%, rgba(250, 250, 250, 0) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-block'
                                    },
                                    children: "What"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        background: 'linear-gradient(0deg, rgb(184, 184, 184) 100%, rgba(250, 250, 250, 0) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-block'
                                    },
                                    children: "our"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        background: 'linear-gradient(97deg, rgb(66, 133, 244) 24%, rgba(255, 255, 255, 0.63) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-block'
                                    },
                                    children: "Clients"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#E3E3E3]",
                                    children: "Say?"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-[38.25rem] lg:w-full h-max flex flex-col items-center justify-center lg:flex-row gap-[1.125rem] md:gap-[1.25rem]",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].testimonials.testimonial_list.map((t, index)=>{
                        // Expanded card
                        if (activeIndex === index) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                        width: "5.125rem"
                                    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                        height: "5rem"
                                    } : {
                                        height: "5rem"
                                    },
                                    animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                        width: "20.125rem"
                                    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                        height: "19.938rem"
                                    } : {
                                        height: "auto"
                                    },
                                    transition: {
                                        duration: 0.7,
                                        ease: "easeInOut"
                                    },
                                    style: {
                                        boxShadow: 'rgb(66, 135, 245) 0rem 0rem 0.813rem 0rem'
                                    },
                                    className: "md:h-[19.938rem] md:w-full h-[27.5rem] lg:h-[27.5rem] rounded-[2.5rem] px-[1.563rem] py-0 lg:py-[1.675rem] text-white border-[0.25rem] border-[#4285F4] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                x: -50,
                                                y: -100,
                                                opacity: 0
                                            } : false,
                                            animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                x: 0,
                                                y: 0,
                                                opacity: 1
                                            } : false,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            },
                                            className: "flex flex-row flex-wrap items-center gap-[0.625rem] pb-[2.438rem] pt-[1.675rem] lg:pt-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                    initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                        x: -100,
                                                        y: -50,
                                                        opacity: 0
                                                    } : false,
                                                    animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                        x: 0,
                                                        y: 0,
                                                        opacity: 1
                                                    } : false,
                                                    transition: {
                                                        duration: 0.5,
                                                        delay: 0.5,
                                                        ease: "easeInOut"
                                                    },
                                                    className: "w-[2.75rem] h-[2.75rem] lg:w-[3.688rem] lg:h-[3.688rem] mx-0 my-0  rounded-full",
                                                    src: t.image,
                                                    alt: "Testimonial_Client"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                        x: -100,
                                                        y: -50,
                                                        opacity: 0
                                                    } : false,
                                                    animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                        x: 0,
                                                        y: 0,
                                                        opacity: 1
                                                    } : false,
                                                    transition: {
                                                        duration: 0.5,
                                                        delay: 0.5,
                                                        ease: "easeInOut"
                                                    },
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "interFont text-[#E3E3E3] text-[0.938rem] lg:text-[1rem] font-semibold leading-[1.2rem] whitespace-nowrap",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].testimonials.testimonial_list[activeIndex].name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 27
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].testimonials.testimonial_list[activeIndex].role && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].testimonials.testimonial_list[activeIndex].role !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "interFont text-[#E3E3E3] text-[0.938rem] lg:text-[0.875rem] font-normal leading-[1.2rem] whitespace-nowrap",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].testimonials.testimonial_list[activeIndex].role
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "interFont text-[#E3E3E3] text-[0.938rem] lg:text-[0.875rem] font-normal leading-[1.2rem] whitespace-nowrap",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].testimonials.testimonial_list[activeIndex].company
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                            lineNumber: 83,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                x: -100,
                                                y: 0,
                                                opacity: 0
                                            } : false,
                                            animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                x: 0,
                                                y: 0,
                                                opacity: 1
                                            } : false,
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.5,
                                                ease: "easeInOut"
                                            },
                                            className: "relative pl-[1.438rem] text-base leading-relaxed pb-[1.675rem] lg:pb-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-4 -left-2 text-blue-500 text-3xl font-serif",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        className: "w-[1.938rem] h-[1.438rem] object-contain",
                                                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Testimonial/quotes.png`,
                                                        alt: "Testimonial_Quotes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "interFont text-[#E3E3E3] font-normal text-[1rem] leading-[1.3rem] tracking-[0.00em]",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].testimonials.testimonial_list[activeIndex].quote
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                            lineNumber: 114,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 74,
                                    columnNumber: 21
                                }, this)
                            }, index, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                lineNumber: 73,
                                columnNumber: 19
                            }, this);
                        }
                        // Recently closed card (animate shrink)
                        if (prevIndexRef.current === index && activeIndex !== index) {
                            if (visibleMiniIndex !== index) {
                                setTimeout(()=>{
                                    setVisibleMiniIndex(index);
                                }, 500);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                    width: "20.125rem"
                                } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? {
                                    width: '100%',
                                    height: '27.5rem'
                                } : {
                                    width: '100%',
                                    height: '19.938rem'
                                },
                                animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                    width: "5.125rem"
                                } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? {
                                    width: '100%',
                                    height: '5rem'
                                } : {
                                    width: '100%',
                                    height: '5rem'
                                },
                                transition: {
                                    duration: 0.7,
                                    ease: "easeInOut"
                                },
                                onMouseEnter: ()=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() && handleSetActiveIndex(index),
                                onClick: ()=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && handleSetActiveIndex(index),
                                className: "relative lg:h-[27.5rem] flex-shrink-0 cursor-pointer flex flex-row lg:flex-col items-center justify-start lg:justify-end rounded-[2.5rem] border-[0.25rem] border-[#4285F4] overflow-hidden",
                                children: visibleMiniIndex === index ? // Mini card content (after 3s)
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-[0.625rem] lg:p-0 flex flex-row items-center justify-center gap-[2.063rem] md:gap-[10.063rem]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            },
                                            className: "w-[2.75rem] h-[2.75rem] lg:w-[3.688rem] lg:h-[3.688rem] mx-0 my-0 lg:mx-[0.75rem] lg:my-[0.50rem] rounded-full",
                                            src: t.image,
                                            alt: "Testimonial_Client"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                            lineNumber: 152,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            },
                                            className: "static lg:absolute left-2/3 bottom-[6.5rem]  transform  origin-bottom-left rotate-0 lg:rotate-[-90deg] interFont font-semibold text-[0.938rem] leading-[1.2em] lg:text-[1.25rem] text-white whitespace-nowrap text-center",
                                            children: t.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                            lineNumber: 160,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 151,
                                    columnNumber: 23
                                }, this) : // Placeholder content while waiting
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    transition: {
                                        duration: 0.4,
                                        ease: "easeInOut"
                                    },
                                    style: {},
                                    className: "h-[27.5rem] lg:h-[27.5rem] rounded-[2.5rem] px-[1.563rem] py-[1.675rem] text-white overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-[0.625rem] pb-[2.438rem]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                    initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                        x: 0,
                                                        y: 0,
                                                        opacity: 0
                                                    } : false,
                                                    animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                        x: -100,
                                                        y: -50,
                                                        opacity: 1
                                                    } : false,
                                                    transition: {
                                                        duration: 0.5,
                                                        ease: "easeInOut"
                                                    },
                                                    className: "w-[3.688rem] h-[3.688rem]  rounded-full",
                                                    src: t.image,
                                                    alt: "Testimonial_Client"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                        x: 0,
                                                        y: 0,
                                                        opacity: 0
                                                    } : false,
                                                    animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                        x: 100,
                                                        y: -50,
                                                        opacity: 1
                                                    } : false,
                                                    transition: {
                                                        duration: 0.5,
                                                        ease: "easeInOut"
                                                    },
                                                    className: "flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "interFont text-[#E3E3E3] text-[0.938rem] lg:text-[1.25rem] font-semibold leading-[1.2rem] whitespace-nowrap",
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "interFont text-[#E3E3E3] text-[0.938rem] lg:text-[1.125rem] font-normal leading-[1.2rem] whitespace-nowrap",
                                                            children: t.company
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                            lineNumber: 176,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                x: 0,
                                                y: 0,
                                                opacity: 0
                                            } : false,
                                            animate: !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() ? {
                                                x: 100,
                                                y: 100,
                                                opacity: 1
                                            } : false,
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeInOut"
                                            },
                                            className: "relative pl-[1.438rem] text-base leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-4 -left-2 text-blue-500 text-3xl font-serif",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        className: "w-[1.938rem] h-[1.438rem] object-contain",
                                                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Testimonial/quotes.png`,
                                                        alt: "Testimonial_Quotes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "interFont text-[#E3E3E3] font-normal text-[1rem] leading-[1.3rem] tracking-[0.00em] text-left",
                                                    children: t.quote
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                            lineNumber: 199,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 170,
                                    columnNumber: 23
                                }, this)
                            }, index, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                lineNumber: 140,
                                columnNumber: 19
                            }, this);
                        }
                        // All other small buttons (static)
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onMouseEnter: ()=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])() && handleSetActiveIndex(index),
                            onClick: ()=>((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTablet"])()) && handleSetActiveIndex(index),
                            className: "relative w-full p-[0.625rem] gap-[2.063rem] md:gap-[10.063rem] lg:gap-0 lg:p-0 lg:w-[5.125rem] h-max lg:h-[27.5rem] flex-shrink-0 cursor-pointer flex flex-row lg:flex-col items-center justify-start lg:justify-end rounded-[2.5rem] border-[0.25rem] border-[#4285F4]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    loading: "lazy",
                                    className: "w-[2.75rem] h-[2.75rem] lg:w-[3.688rem] lg:h-[3.688rem] mx-0 my-0 lg:mx-[0.75rem] lg:my-[0.50rem] rounded-full",
                                    src: t.image,
                                    alt: "Testimonial_Client"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 226,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "static lg:absolute left-2/3 bottom-[6.5rem]  transform  origin-bottom-left rotate-0 lg:rotate-[-90deg] interFont font-semibold text-[0.938rem] leading-[1.2em] lg:text-[1.25rem] text-[#E3E3E3] whitespace-nowrap text-center",
                                    children: t.name
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                                    lineNumber: 231,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                            lineNumber: 220,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
            lineNumber: 30,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/layout/Landing_Page/Testimonials.tsx",
        lineNumber: 29,
        columnNumber: 7
    }, this);
}
_s(Testimonials, "2B2JEzWAbjx1WAwIBjDqbiEpbSI=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Landing_Page/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Footer() {
    _s();
    const details = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].footer;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const circleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showGlow, setShowGlow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Animate using RAF to prevent stuttering
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            let animationFrame;
            const animate = {
                "Footer.useEffect.animate": ()=>{
                    const circle = circleRef.current;
                    if (circle) {
                        circle.setAttribute("cx", String(coords.current.x));
                        circle.setAttribute("cy", String(coords.current.y));
                    }
                    animationFrame = requestAnimationFrame(animate);
                }
            }["Footer.useEffect.animate"];
            animationFrame = requestAnimationFrame(animate);
            return ({
                "Footer.useEffect": ()=>cancelAnimationFrame(animationFrame)
            })["Footer.useEffect"];
        }
    }["Footer.useEffect"], []);
    const handleMouseMove = (e)=>{
        const svg = svgRef.current;
        if (!svg) return;
        const point = svg.createSVGPoint();
        point.x = e.clientX;
        point.y = e.clientY;
        const ctm = svg.getScreenCTM();
        if (!ctm) return;
        const local = point.matrixTransform(ctm.inverse());
        coords.current = {
            x: local.x,
            y: local.y
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Footer.useEffect": ()=>{
            requestAnimationFrame({
                "Footer.useEffect": ()=>{
                    setLoader(true);
                }
            }["Footer.useEffect"]);
        }
    }["Footer.useEffect"], []);
    return loader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col items-center justify-center relative bg-primary-text scrollSnap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svgRef,
                viewBox: "0 20.34 156.69 33.59",
                className: "w-[902px] h-[342px] hidden lg:block",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                id: "text-clip",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.40 53.44L0 26.15L7.79 26.15L13.06 41.70Q13.50 43.07 13.76 44.58Q14.01 46.09 14.11 47.29L14.31 47.29Q14.38 46.00 14.66 44.53Q14.94 43.07 15.41 41.70L20.65 26.15L28.44 26.15L18.04 53.44L10.40 53.44ZM43.60 25.63Q47.39 25.63 50.12 27.09Q52.86 28.54 54.35 31.30Q55.83 34.06 55.83 38.04L55.83 41.65L38.23 41.65Q38.35 44.80 40.12 46.59Q41.89 48.39 45.04 48.39Q47.66 48.39 49.83 47.85Q52.00 47.31 54.30 46.24L54.30 52.00Q52.27 53.00 50.06 53.47Q47.85 53.93 44.70 53.93Q40.60 53.93 37.44 52.42Q34.28 50.90 32.48 47.80Q30.69 44.70 30.69 39.99Q30.69 35.21 32.31 32.02Q33.94 28.83 36.84 27.23Q39.75 25.63 43.60 25.63M43.65 30.93Q41.48 30.93 40.05 32.32Q38.62 33.72 38.40 36.69L48.85 36.69Q48.83 35.03 48.25 33.74Q47.68 32.45 46.55 31.69Q45.41 30.93 43.65 30.93ZM77.12 25.63Q77.69 25.63 78.43 25.70Q79.17 25.76 79.64 25.85L79.08 32.84Q78.71 32.71 78.04 32.65Q77.37 32.59 76.88 32.59Q75.44 32.59 74.08 32.96Q72.73 33.33 71.66 34.14Q70.58 34.96 69.96 36.29Q69.34 37.62 69.34 39.55L69.34 53.44L61.89 53.44L61.89 26.15L67.53 26.15L68.63 30.74L68.99 30.74Q69.80 29.35 71.01 28.19Q72.22 27.03 73.77 26.33Q75.32 25.63 77.12 25.63ZM95.78 25.59Q101.27 25.59 104.20 27.98Q107.13 30.37 107.13 35.25L107.13 53.44L101.93 53.44L100.49 49.73L100.29 49.73Q99.12 51.20 97.90 52.12Q96.68 53.05 95.09 53.49Q93.51 53.93 91.24 53.93Q88.82 53.93 86.90 53.00Q84.99 52.08 83.89 50.16Q82.79 48.24 82.79 45.29Q82.79 40.94 85.84 38.88Q88.89 36.82 95.00 36.60L99.73 36.45L99.73 35.25Q99.73 33.11 98.61 32.10Q97.49 31.10 95.48 31.10Q93.51 31.10 91.60 31.67Q89.70 32.23 87.79 33.08L85.33 28.05Q87.50 26.90 90.20 26.25Q92.90 25.59 95.78 25.59M99.73 40.80L96.85 40.89Q93.24 40.99 91.83 42.19Q90.43 43.38 90.43 45.34Q90.43 47.05 91.43 47.77Q92.43 48.49 94.04 48.49Q96.44 48.49 98.08 47.07Q99.73 45.65 99.73 43.04L99.73 40.80ZM125.88 53.93Q121.83 53.93 118.97 52.45Q116.11 50.98 114.62 47.88Q113.13 44.78 113.13 39.94Q113.13 34.94 114.83 31.77Q116.53 28.61 119.54 27.12Q122.56 25.63 126.54 25.63Q129.37 25.63 131.43 26.18Q133.50 26.73 135.03 27.49L132.84 33.25Q131.08 32.54 129.57 32.09Q128.05 31.64 126.54 31.64Q124.58 31.64 123.29 32.56Q122.00 33.47 121.36 35.30Q120.73 37.13 120.73 39.89Q120.73 42.60 121.41 44.38Q122.09 46.17 123.39 47.03Q124.68 47.90 126.54 47.90Q128.86 47.90 130.66 47.28Q132.47 46.66 134.18 45.53L134.18 51.90Q132.47 52.98 130.60 53.45Q128.74 53.93 125.88 53.93ZM152.00 48.00Q153.22 48.00 154.38 47.75Q155.54 47.51 156.69 47.14L156.69 52.69Q155.49 53.22 153.72 53.58Q151.95 53.93 149.85 53.93Q147.41 53.93 145.47 53.14Q143.53 52.34 142.42 50.38Q141.31 48.41 141.31 44.90L141.31 31.74L137.74 31.74L137.74 28.59L141.85 26.10L143.99 20.34L148.75 20.34L148.75 26.15L156.40 26.15L156.40 31.74L148.75 31.74L148.75 44.90Q148.75 46.46 149.65 47.23Q150.54 48.00 152.00 48.00Z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "glow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        in: "SourceGraphic",
                                        stdDeviation: "500",
                                        result: "blur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "blur"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "SourceGraphic"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        fill: "#1c1c1c",
                        pointerEvents: "visiblePainted",
                        d: "M10.40 53.44L0 26.15L7.79 26.15L13.06 41.70Q13.50 43.07 13.76 44.58Q14.01 46.09 14.11 47.29L14.31 47.29Q14.38 46.00 14.66 44.53Q14.94 43.07 15.41 41.70L20.65 26.15L28.44 26.15L18.04 53.44L10.40 53.44ZM43.60 25.63Q47.39 25.63 50.12 27.09Q52.86 28.54 54.35 31.30Q55.83 34.06 55.83 38.04L55.83 41.65L38.23 41.65Q38.35 44.80 40.12 46.59Q41.89 48.39 45.04 48.39Q47.66 48.39 49.83 47.85Q52.00 47.31 54.30 46.24L54.30 52.00Q52.27 53.00 50.06 53.47Q47.85 53.93 44.70 53.93Q40.60 53.93 37.44 52.42Q34.28 50.90 32.48 47.80Q30.69 44.70 30.69 39.99Q30.69 35.21 32.31 32.02Q33.94 28.83 36.84 27.23Q39.75 25.63 43.60 25.63M43.65 30.93Q41.48 30.93 40.05 32.32Q38.62 33.72 38.40 36.69L48.85 36.69Q48.83 35.03 48.25 33.74Q47.68 32.45 46.55 31.69Q45.41 30.93 43.65 30.93ZM77.12 25.63Q77.69 25.63 78.43 25.70Q79.17 25.76 79.64 25.85L79.08 32.84Q78.71 32.71 78.04 32.65Q77.37 32.59 76.88 32.59Q75.44 32.59 74.08 32.96Q72.73 33.33 71.66 34.14Q70.58 34.96 69.96 36.29Q69.34 37.62 69.34 39.55L69.34 53.44L61.89 53.44L61.89 26.15L67.53 26.15L68.63 30.74L68.99 30.74Q69.80 29.35 71.01 28.19Q72.22 27.03 73.77 26.33Q75.32 25.63 77.12 25.63ZM95.78 25.59Q101.27 25.59 104.20 27.98Q107.13 30.37 107.13 35.25L107.13 53.44L101.93 53.44L100.49 49.73L100.29 49.73Q99.12 51.20 97.90 52.12Q96.68 53.05 95.09 53.49Q93.51 53.93 91.24 53.93Q88.82 53.93 86.90 53.00Q84.99 52.08 83.89 50.16Q82.79 48.24 82.79 45.29Q82.79 40.94 85.84 38.88Q88.89 36.82 95.00 36.60L99.73 36.45L99.73 35.25Q99.73 33.11 98.61 32.10Q97.49 31.10 95.48 31.10Q93.51 31.10 91.60 31.67Q89.70 32.23 87.79 33.08L85.33 28.05Q87.50 26.90 90.20 26.25Q92.90 25.59 95.78 25.59M99.73 40.80L96.85 40.89Q93.24 40.99 91.83 42.19Q90.43 43.38 90.43 45.34Q90.43 47.05 91.43 47.77Q92.43 48.49 94.04 48.49Q96.44 48.49 98.08 47.07Q99.73 45.65 99.73 43.04L99.73 40.80ZM125.88 53.93Q121.83 53.93 118.97 52.45Q116.11 50.98 114.62 47.88Q113.13 44.78 113.13 39.94Q113.13 34.94 114.83 31.77Q116.53 28.61 119.54 27.12Q122.56 25.63 126.54 25.63Q129.37 25.63 131.43 26.18Q133.50 26.73 135.03 27.49L132.84 33.25Q131.08 32.54 129.57 32.09Q128.05 31.64 126.54 31.64Q124.58 31.64 123.29 32.56Q122.00 33.47 121.36 35.30Q120.73 37.13 120.73 39.89Q120.73 42.60 121.41 44.38Q122.09 46.17 123.39 47.03Q124.68 47.90 126.54 47.90Q128.86 47.90 130.66 47.28Q132.47 46.66 134.18 45.53L134.18 51.90Q132.47 52.98 130.60 53.45Q128.74 53.93 125.88 53.93ZM152.00 48.00Q153.22 48.00 154.38 47.75Q155.54 47.51 156.69 47.14L156.69 52.69Q155.49 53.22 153.72 53.58Q151.95 53.93 149.85 53.93Q147.41 53.93 145.47 53.14Q143.53 52.34 142.42 50.38Q141.31 48.41 141.31 44.90L141.31 31.74L137.74 31.74L137.74 28.59L141.85 26.10L143.99 20.34L148.75 20.34L148.75 26.15L156.40 26.15L156.40 31.74L148.75 31.74L148.75 44.90Q148.75 46.46 149.65 47.23Q150.54 48.00 152.00 48.00Z",
                        onMouseEnter: ()=>setShowGlow(true),
                        onMouseLeave: ()=>setShowGlow(false),
                        onMouseMove: handleMouseMove
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    showGlow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        ref: circleRef,
                        r: 10,
                        fill: "#004FD1",
                        filter: "url(#glow)",
                        clipPath: "url(#text-clip)",
                        style: {
                            pointerEvents: "none"
                        },
                        className: "w-[80.33px] h-[119.31px] blur-[8px]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden block openSansFont text-[6.563rem] md:text-[14.875rem] text-[#1C1C1C] font-bold leading-[1.2em] tracking-[0em] mt-[7.375rem] md:mt-0 z-[10]",
                children: "veract"
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-[88px] pb-[15px] rounded-[1.375rem] bg-[#0F0E14] lg:mt-[-7.95rem] md:mt-[-6.95rem] mt-[-2.95rem] z-[100]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex z-[100] md:flex-row flex-col lg:w-[70rem] w-full h-max  gap-[77px] md:gap-[60px] lg:gap-[142px] md:pt-[79px] pt-[48px] md:px-[50px] px-[26px] md:justify-center justify-start items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-[165px] items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:w-[272px] md:w-[228px] w-full h-max flex flex-col items-start justify-center gap-[28px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "openSansFont text-[3.25rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                children: [
                                                    "ver",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary-blue",
                                                        children: "act"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "openSansFont lg:text-[1.125rem] md:text-[1rem] text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em]",
                                                children: details.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-center gap-[32px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: details.footer_logo_list[0].image,
                                                        alt: "logo image",
                                                        className: "w-[41px] object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-center justify-center gap-[0.5rem]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                loading: "lazy",
                                                                src: details.footer_logo_list[1].image,
                                                                alt: "logo image",
                                                                className: "w-[41px] object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                loading: "lazy",
                                                                src: details.footer_logo_list[2].image,
                                                                alt: "logo image",
                                                                className: "w-[41px] object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 125,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: details.footer_logo_list[3].image,
                                                        alt: "logo image",
                                                        className: "w-[41px] object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex flex-col items-center justify-center gap-[0.625rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center gap-[0.625rem]",
                                                children: details.socialMediaIcons.slice(0, 2).map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: icon.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                loading: "lazy",
                                                                src: icon.image,
                                                                alt: "social-media icon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, icon.id, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, icon.id, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center gap-[0.625rem]",
                                                children: details.socialMediaIcons.slice(2, 4).map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: icon.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                loading: "lazy",
                                                                src: icon.image,
                                                                alt: "social-media icon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, icon.id, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, icon.id, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start justify-center md:gap-[100px] gap-[44px] mt-[12px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-start justify-start lg:gap-[113px] md:gap-[44px] gap-[23px] flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-center gap-[1.25rem] md:w-[130px] w-[116px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "openSansFont text-[16px] lg:text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                        children: details.quickLinks.company.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start justify-center gap-[0.625rem]",
                                                        children: details.quickLinks.company.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] ${link.status == "active" ? "cursor-pointer" : "opacity-50 pointer-events-none"}`,
                                                                onClick: ()=>{
                                                                    if (link.status == "active" && !link.link.startsWith("scroll-to-section")) {
                                                                        router.push(link.link);
                                                                    }
                                                                    if (link.link.startsWith("scroll-to-section")) {
                                                                        window.scrollTo({
                                                                            top: document.getElementById(link.title.toLowerCase())?.offsetTop,
                                                                            behavior: "smooth"
                                                                        });
                                                                    }
                                                                },
                                                                children: link.title
                                                            }, link.id, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-center gap-[1.25rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "openSansFont text-[16px] md:text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                        children: details.quickLinks.services.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start justify-center gap-[0.625rem]",
                                                        children: details.quickLinks.services.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] ${link.status == "active" ? "cursor-pointer" : "opacity-50 pointer-events-none"}`,
                                                                onClick: ()=>{
                                                                    if (link.status == "active") {
                                                                        router.push(link.link);
                                                                    }
                                                                },
                                                                children: link.title
                                                            }, link.id, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-start md:justify-center justify-start lg:gap-[101px] md:gap-[32px] gap-[23px] flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start justify-center gap-[1.25rem] lg:w-max md:w-[130px] w-[116px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "openSansFont text-[16px] md:text-[1rem] lg:text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                        children: details.quickLinks.contact.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start justify-center gap-[0.625rem]",
                                                        children: details.quickLinks.contact.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: link.type === "phone" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `tel:${link.title.replace(/\s+/g, "")}`,
                                                                    className: "openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer",
                                                                    children: link.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 27
                                                                }, this) : link.type === "email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `mailto:${link.title}`,
                                                                    className: "openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer",
                                                                    children: link.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] cursor-pointer",
                                                                    children: link.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, link.id, false, {
                                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                                lineNumber: 254,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-start md:justify-start justify-center gap-[1.25rem] md-w-[180px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "openSansFont text-[16px] lg:text-[1.125rem] text-white font-bold leading-[1.2em] tracking-[0em]",
                                                        children: details.quickLinks.address.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "https://maps.app.goo.gl/raqAmwGuLW77jdLf8",
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "lg:w-[15.75rem] w-[184px] openSansFont text-[14px] md:text-[1rem] lg:text-[1.125rem] text-[#8F9FA3] font-normal md:leading-[1.2em] leading-[1.6em] tracking-[0em] pr-[1rem] md:pr-[0rem]",
                                                            children: details.quickLinks.address.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden flex flex-col items-center justify-center gap-[0.625rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-center justify-center gap-[0.625rem]",
                                        children: details.socialMediaIcons.slice(0, 2).map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: icon.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: icon.image,
                                                        alt: "social-media icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 25
                                                    }, this)
                                                }, icon.id, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 23
                                                }, this)
                                            }, icon.id, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 297,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 295,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-center justify-center gap-[0.625rem]",
                                        children: details.socialMediaIcons.slice(2, 4).map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: icon.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-[2.5rem] h-[2.5rem] rounded-full bg-white flex items-center justify-center cursor-pointer",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: icon.image,
                                                        alt: "social-media icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 25
                                                    }, this)
                                                }, icon.id, false, {
                                                    fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 23
                                                }, this)
                                            }, icon.id, false, {
                                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                                lineNumber: 318,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-[13.375rem] w-full text-[0.75rem] text-[#8F9FA3] font-normal leading-[1.2em] tracking-[0em] flex flex-col items-center justify-center z-20 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "© 2025 — Veract Consultancy Pvt. Ltd."
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "All Rights reserved"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Landing_Page/Footer.tsx",
        lineNumber: 55,
        columnNumber: 7
    }, this);
}
_s(Footer, "Axhu0DDfNOnq2MA6Vhr+ojbvcsM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Landing_Page/Services.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Services)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Services() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Services.useEffect": ()=>{
            setLoaded(true);
        }
    }["Services.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "services",
        className: "w-full h-max bg-black overflow-x-hidden flex flex-col items-center justify-center relative z-50 py-[0_6.25rem] xl:px-[10%]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col items-center justify-center gap-[0.625rem] py-[6.25rem_3.125rem] lg:py-[5.875rem_3.125rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "uppercase syneFont text-[2.5rem] text-white font-bold -tracking-[0.05rem] leading-[3.125rem]",
                        children: [
                            "Our ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary-blue",
                                children: "Service"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                                lineNumber: 17,
                                columnNumber: 131
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-[50rem] px-[1.5rem] md:px-[4.375rem] lg:px-0 interFont text-[1.125rem] text-white font-normal leading-[1.8em] text-center",
                        children: "Take a look at our handpicked case studies showcasing real-world tech solutions.A quick glimpse into the impact we create."
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col w-full px-[1.5rem] md:px-[4.375rem] lg:px-[3.125rem] overflow-x-hidden",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].services.service_list.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "group relative flex lg:flex-row md:flex-col flex-col lg:items-center items-start py-[1.125rem] md:py-[1.875rem] lg:py-[3.125rem] border-b-[0.063rem] border-[#282828] lg:gap-0 gap-[0.938rem]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col lg:flex-row items-start justify-start gap-[0.938rem] lg:gap-[1.25rem]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "interFont pt-0 lg:pt-[0.5rem] text-[1.125rem] text-white font-medium leading-[1.4em]",
                                        children: feature.number
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                                        lineNumber: 32,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "geistFont w-full lg:w-[30.5rem] text-[1.75rem] lg:text-[2.5rem] text-white font-medium leading-[1.2em]",
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                                        lineNumber: 33,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-[30rem] static pl-0 lg:pl-[1.25rem] lg:absolute right-0 transform lg:group-hover:delay-200 lg:translate-x-full lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all duration-300 ease-in-out interFont text-white text-[0.875rem] lg:text-[1.125rem] font-medium leading-[1.4em] flex flex-col",
                                children: feature.highlighted_desc.map((desc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: desc
                                        }
                                    }, idx, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                                        lineNumber: 37,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex flex-col absolute right-0 group-hover:opacity-0 opacity-100 w-[30rem] transition-all duration-300 ease-in-out interFont lg:w-[13.313rem] lg:pl-[1.25rem] text-white text-[0.875rem] font-medium leading-[1.4em]",
                                children: feature.desc.map((desc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: desc
                                    }, idx, false, {
                                        fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                                        lineNumber: 42,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                                lineNumber: 40,
                                columnNumber: 25
                            }, this)
                        ]
                    }, feature.number, true, {
                        fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Landing_Page/Services.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(Services, "I8RUn14npbk54TheiKdNt4wCpsU=");
_c = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/Banner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$ShowReel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/ShowReel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$About_Us$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/About_Us.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Advantages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/Advantages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$We_Work_With$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/We_Work_With.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/Testimonials.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LenisProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/LenisProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Landing_Page/Services.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    _s();
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const preloadImages = [
        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Advantages/img1.webp`,
        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Advantages/img2.jpg`,
        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Advantages/img3.webp`,
        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/LandingPage/Advantages/img4.webp`
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            requestAnimationFrame({
                "Page.useEffect": ()=>{
                    setLoader(true);
                }
            }["Page.useEffect"]);
            return ({
                "Page.useEffect": ()=>{
                    window.scrollTo(0, 0);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LenisProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: loader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center justify-center bg-primaty-text select-none  ",
            children: [
                preloadImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preload",
                        as: "image",
                        href: image
                    }, index, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$ShowReel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$About_Us$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Advantages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Services$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$We_Work_With$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Landing_Page$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Page, "XT8PpTOBN2IAFO93zi4IyiaImrw=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_c4359fa7._.js.map