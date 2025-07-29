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
"[project]/app/components/layout/Agent/AgentTitle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AgentTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function AgentTitle({ title, title_description, description }) {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentTitle.useEffect": ()=>{
            if (!loaded || !sectionRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "AgentTitle.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(sectionRef.current, {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 0.75,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none none'
                        }
                    });
                }
            }["AgentTitle.useEffect.ctx"], sectionRef);
            // Refresh ScrollTrigger layout
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            return ({
                "AgentTitle.useEffect": ()=>ctx.revert()
            })["AgentTitle.useEffect"];
        }
    }["AgentTitle.useEffect"], [
        loaded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentTitle.useEffect": ()=>{
            setLoaded(true);
        }
    }["AgentTitle.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "w-full h-max max-h-[80vh] flex flex-col items-center justify-center gap-[45px] lg:px-[70px] px-[2.03863rem]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center justify-center gap-[10px] rounded-[10px] bg-[linear-gradient(181deg,rgba(0,85,254,0.08)_0.51%,rgba(153,153,153,0.10)_99.49%)] relative px-[14px] py-[6px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[2px] w-[61px] h-[1px] bg-[linear-gradient(90deg,rgba(66,133,244,0)_0%,#4285F4_50%,rgba(66,133,244,0)_100%)]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/AgentTitle.tsx",
                        lineNumber: 52,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[10px] h-[10px] bg-[#FAFAFA] rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/AgentTitle.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-center dmSansFont md:text-[1.625rem] text-[14px] font-normal leading-normal",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/AgentTitle.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Agent/AgentTitle.tsx",
                lineNumber: 51,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#FAFAFA] text-center syneFont lg:text-[54px] md:text-[50px] text-[1.75rem] font-semibold leading-normal max-w-[1139px] md:px-0 px-[7.5px]",
                children: title_description
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/AgentTitle.tsx",
                lineNumber: 56,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[#CECECE] text-center dmSansFont md:text-[1.625rem] text-[1.125rem] font-normal leading-normal lg:pb-[136px] pb-[6.94rem] max-w-[652px]",
                children: description
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/AgentTitle.tsx",
                lineNumber: 59,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Agent/AgentTitle.tsx",
        lineNumber: 50,
        columnNumber: 7
    }, this);
}
_s(AgentTitle, "N1MLBivYPKMhsvQDSHkj7PB2w9o=");
_c = AgentTitle;
var _c;
__turbopack_context__.k.register(_c, "AgentTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Agent/AgenticLayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AgenticLayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgentTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/AgentTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AgenticLayer() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgenticLayer.useEffect": ()=>{
            setLoaded(true);
        }
    }["AgenticLayer.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgentTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Agentic Layer",
                title_description: "Transform Your Existing Stack with Intelligent Automation",
                description: "Automation that works with what you already use — effortlessly,   intelligently, reliably."
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex md:flex-row flex-col items-center justify-center lg:pb-[13.563rem] pb-[8.5rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative lg:w-[25.063rem] lg:h-[25.063rem] md:w-[13.66906rem] md:h-[14.25881rem] w-[13.625rem] h-[13.625rem] rounded-full flex items-center justify-center overflow-visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute agenticLayerBase lg:w-[25.063rem] lg:h-[25.063rem] md:w-[13.66906rem] md:h-[14.25881rem] w-[13.625rem] h-[13.625rem] rounded-full z-0"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute z-20 lg:top-[3.188rem] lg:left-[3.188rem] md:top-[1.77rem] md-[1.87rem] top-[1.25rem] lg:w-[24.625rem] lg:h-[24.625rem] md:w-[13.66906rem] md:h-[14.25881rem] w-[13.625rem] h-[13.625rem] pointer-events-none animate-agentic-layer",
                                style: {
                                    filter: "url(#filter0_g_1_1075)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    loading: "lazy",
                                    src: `/Images/agent/AgenticLayer/agentic_layer_overlay.svg`,
                                    alt: "agenticLayer_distorted",
                                    className: "object-cover w-full h-full rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute z-30 text-[#FAFAFA] syneFont lg:text-[3.75rem] md:text-[1.875rem] text-[1.625rem] text-center font-semibold lg:leading-[3.75rem] leading-[2.03863rem] lg:top-[11rem] lg:left-[8.813rem] md:top-[6.5rem] md:left-[4.5rem] top-[6rem] lg:w-[65%] md:w-[7.935rem] w-[6.875rem] animate-agentic-layer-opacity",
                                children: "Ai Agent Layer"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute w-0 h-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: "filter0_g_1_1075",
                                    x: "-40",
                                    y: "-40",
                                    width: "481",
                                    height: "481",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                                            in: "SourceGraphic",
                                            in2: "BackgroundImageFix",
                                            mode: "normal",
                                            result: "shape"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feTurbulence", {
                                            type: "fractalNoise",
                                            baseFrequency: "0.01",
                                            numOctaves: "3",
                                            seed: "9055",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                attributeName: "baseFrequency",
                                                dur: "10s",
                                                values: "0.01;0.02;0.01",
                                                repeatCount: "indefinite"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDisplacementMap", {
                                            in2: "turbulence",
                                            in: "shape",
                                            scale: "48",
                                            xChannelSelector: "R",
                                            yChannelSelector: "G",
                                            result: "displacedImage"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                in: "displacedImage"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:top-[3.188rem] lg:left-[3.375rem] relative animate-agentic-layer-opacity",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            loading: "lazy",
                            src: `/Images/agent/agenticLayerVeins.svg`,
                            alt: "agenticLayer_2",
                            className: "md:rotate-0 lg:w-[20.111rem] lg:h-[15.642rem] md:w-[11.16331rem] md:h-[8.68256rem]  w-[8.60706rem] h-[6.69438rem] rotate-[90deg] scale-130 md:scale-170 lg:scale-190 "
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                loading: "lazy",
                                src: `/Images/agent/top-blur.svg`,
                                alt: "blurry effect",
                                className: "absolute top-[-3.188rem] left-[-3.375rem] z-10 md:animate-agentic-layer-opacity md:opacity-100 opacity-0"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                loading: "lazy",
                                src: `/Images/agent/bottom-blur.svg`,
                                alt: "blurry effect",
                                className: "absolute md:bottom-[-5.313rem] bottom-[-6.375rem] left-[-3.375rem] z-10 md:animate-agentic-layer-opacity md:opacity-100 opacity-0"
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            "our            ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-20 lg:top-[3.188rem] lg:left-[3.375rem] flex flex-col lg:w-[25.688rem] md:w-[14.25rem]  w-[18.079rem] h-max lg:pt-[3.563rem] lg:pb-[3.125rem] pb-[2.22rem] pt-[2.51rem] rounded-[1.875rem] bg-[#0D0D0D] animate-agentic-layer-shadow",
                                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"])() ? {
                                    boxShadow: '0px 0px 12px 1px #008FFF inset'
                                } : {},
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col lg:pl-[2.563rem] pl-[1.8rem] lg:pr-[4.25rem] pr-[2.99rem] lg:gap-[1.563rem] md:gap-[0.87rem]  gap-[1.1rem] lg:pb-[6.313rem] md:pb-[1.69rem] pb-[4.54rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            loading: "lazy",
                                                            src: `/Images/agent/ai-magic.svg`,
                                                            alt: "bulletin point",
                                                            className: "w-[1.5rem] h-[1.5rem]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal",
                                                        children: "Automate repetitive tasks"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            loading: "lazy",
                                                            src: `/Images/agent/ai-magic.svg`,
                                                            alt: "bulletin point",
                                                            className: "w-[1.5rem] h-[1.5rem]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal",
                                                        children: "Unify Disconnected Tools"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            loading: "lazy",
                                                            src: `/Images/agent/ai-magic.svg`,
                                                            alt: "bulletin point",
                                                            className: "w-[1.5rem] h-[1.5rem]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal",
                                                        children: "Accelerate Decision Making"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            loading: "lazy",
                                                            src: `/Images/agent/ai-magic.svg`,
                                                            alt: "bulletin point",
                                                            className: "w-[1.5rem] h-[1.5rem]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal",
                                                        children: "Boost Team Efficiency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row lg:gap-[0.813rem] md:gap-[0.45rem] gap-[0.57181rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            loading: "lazy",
                                                            src: `/Images/agent/ai-magic.svg`,
                                                            alt: "bulletin point",
                                                            className: "w-[1.5rem] h-[1.5rem]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#D9D9D9] dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal",
                                                        children: "Scale Without Hiring"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white text-center dmSansFont lg:text-[1.25rem] text-[0.875rem] font-normal leading-normal md:pl-[1.17rem] md:pr-[1.21rem] pl-[2.5rem] pr-[3.25rem] pb-[2.813rem]",
                                        children: "Your tools stay the same. The way you work changes forever!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lg:px-[3.625rem] md:px-[1.99rem] px-[2.55rem]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>{
                                                router.push("/contact-us");
                                            },
                                            className: "flex lg:px-[0.875rem] lg:py-[0.375rem] md:py-[0.21rem] md:px-[0.49rem] px-[0.62rem] py-[0.26rem] justify-center items-center gap-[0.625rem] bg-[#4285F4] lg:rounded-[10px] rounded-[0.43988rem] text-center dmSansFont lg:text-[1.25rem] md:text-[0.69388rem] text-[0.875rem] font-normal leading-normal text-white cursor-pointer",
                                            children: "Supercharge Your Tools Now"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                                lineNumber: 108,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Agent/AgenticLayer.tsx",
        lineNumber: 15,
        columnNumber: 7
    }, this);
}
_s(AgenticLayer, "Il2JQev+pM75GeMmKtIzAcTGah0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AgenticLayer;
var _c;
__turbopack_context__.k.register(_c, "AgenticLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Agent/Agent_Banner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AgentBanner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AgentBanner() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentBanner.useEffect": ()=>{
            setLoaded(true);
        }
    }["AgentBanner.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-max overflow-scroll flex flex-col items-center justify-start pt-0 lg:pt-[6.688rem] md:pt-[6.688rem] pb-[6.25rem]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[25rem] md:w-[50rem] lg:w-[50rem] h-[18.75rem] md:h-[43.75rem] lg:h-[43.75rem] absolute z-0 left-1/2 top-0 translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 md:translate-y-0 lg:-translate-x-1/2 lg:translate-y-0 animate-spin [animation-duration:6s] [animation-timing-function:linear] blur-[12px] md:blur-none lg:blur-none",
                    style: {
                        backgroundImage: `url(${"/Images/agent/Banner/radar_component_banner.png"})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "contain"
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[25rem] md:w-[50rem] lg:w-[50rem] h-[18.75rem] md:h-[31.25rem] lg:h-[31.25rem] absolute bottom-0 overflow-hidden pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#0d0d0d]/50 backdrop-blur-md [mask-image:linear-gradient(to_top,black_85%,transparent_100%)]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "interFont text-white w-[100%] flex flex-col items-center justify-center mt-[6.688rem] z-5 pl-[1.125rem] pr-[1.125rem] md:pl-0 md:pr-0 lg:pl-0 lg:pr-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-[2px] rounded-[1.625rem] bg-[linear-gradient(105deg,_rgb(41,52,255)_-2%,_rgba(36,65,212,0)_50%)]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] bg-black rounded-[1.625rem] text-[#8AA5FF] font-semibold",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].banner.about
                            }, void 0, false, {
                                fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "interFont text-[1.625rem] md:text-[2.25rem] lg:text-[3.125rem] text-wrap w-[100%] md:w-[60%] lg:w-[45%] text-center font-medium tracking-[-0.01em] leading-[1.2em] md:mt-[0.75rem] lg:mt-[0.75rem] mt-[2.063rem]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].banner.title
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[0.875rem] md:text-[1rem] lg:text-[1rem] text-wrap w-[100%] md:w-[50%] lg:w-[30%] text-center text-white/70 font-normal tracking-[-0.02em] leading-[1.6em] md:mt-[0.75rem] lg:mt-[0.75rem] mt-[2.063rem]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].banner.subtitle
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center md:mt-[0.875rem] lg:mt-[0.875rem] mt-[2.125rem] gap-[0.938rem]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>{
                                        router.push("/contact-us");
                                    },
                                    className: "relative overflow-hidden w-[9.75rem] md:w-[10.625rem] lg:[10.625rem] h-[2.25rem] text-nowrap text-white rounded-[6px] cursor-pointer flex items-center justify-center bg-[#4285F4] group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-[2.25rem] w-full font-medium text-[0.875rem] md:text-[0.875rem] lg:text-[1rem]",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].banner.book_demo,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.get_in_touch_arrow,
                                                        alt: "arrow_icon",
                                                        className: "w-[1rem] h-[1rem] object-contain ml-[0.25rem]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                                lineNumber: 51,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-[2.25rem] w-full font-medium",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].banner.book_demo,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        loading: "lazy",
                                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPageData"].banner.get_in_touch_arrow,
                                                        alt: "arrow_icon",
                                                        className: "w-[1rem] h-[1rem] object-contain ml-[0.25rem] rotate-45"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden relative overflow-hidden w-[9.75rem] md:w-[10.625rem] lg:[10.625rem] h-[2.25rem] text-nowrap text-white rounded-[6px] cursor-pointer flex items-center justify-center bg-[#0d0d0d]/80 group border border-[#FFFFFF]/10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-[2.25rem] w-full font-medium mt-[-0.15rem] text-[0.875rem] md:text-[0.875rem] lg:text-[1rem]",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].banner.view_case_study
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center h-[2.25rem] w-full font-medium mt-[-0.1rem]",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].banner.view_case_study
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-[100%] md:w-[90%] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] pl-[1.125rem] md:pl-[2.5rem] md:pr-[2.5rem] pr-[1.125rem] lg:pl-[2.5rem] lg:pr-[2.5rem] mt-[2.875rem] z-5",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].banner.banner_features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `interFont bg-[radial-gradient(96%_96%_at_50%_7.5%,_#121426_0%,_#000000_100%)] 
                          w-full rounded-[1rem] p-[2rem] border-[#222222] 
                          shadow-[0px_1px_2px_0px_#000000] border border-t-[#8AA5FF]/70 
                          ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    loading: "lazy",
                                    src: feature.features_icon,
                                    alt: feature.features_title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[1.375rem] mt-[1.5rem] tracking-[-0.02em] leading-[1.75rem] text-white font-bold",
                                    children: feature.features_title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[1rem] mt-[1rem] tracking-[-0.02em] leading-[1.6em] text-white/70 font-medium",
                                    children: feature.features_subtitle
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                            lineNumber: 83,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
            lineNumber: 18,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/layout/Agent/Agent_Banner.tsx",
        lineNumber: 17,
        columnNumber: 7
    }, this);
}
_s(AgentBanner, "qr8feAtBH6YL9kZ5N1x+KXznK1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AgentBanner;
var _c;
__turbopack_context__.k.register(_c, "AgentBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Agent/OurProcess.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OurProcess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Chat$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chat$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Chat.esm.js [app-client] (ecmascript) <export default as Chat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Gear$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gear$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Gear.esm.js [app-client] (ecmascript) <export default as Gear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Funnel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Funnel$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Funnel.esm.js [app-client] (ecmascript) <export default as Funnel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CircleNotch$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleNotch$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/CircleNotch.esm.js [app-client] (ecmascript) <export default as CircleNotch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Check$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Check.esm.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ArrowUp$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/ArrowUp.esm.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$File$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/File.esm.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$MagnifyingGlass$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlass$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/MagnifyingGlass.esm.js [app-client] (ecmascript) <export default as MagnifyingGlass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$PuzzlePiece$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PuzzlePiece$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/PuzzlePiece.esm.js [app-client] (ecmascript) <export default as PuzzlePiece>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ArrowLeft$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/ArrowLeft.esm.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ArrowRight$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/ArrowRight.esm.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Cards$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cards$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Cards.esm.js [app-client] (ecmascript) <export default as Cards>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Minus$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Minus.esm.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$X$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/X.esm.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ShieldCheck$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/ShieldCheck.esm.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Cpu$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Cpu.esm.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$FinnTheHuman$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FinnTheHuman$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/FinnTheHuman.esm.js [app-client] (ecmascript) <export default as FinnTheHuman>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Repeat$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__ = __turbopack_context__.i("[project]/node_modules/phosphor-react/dist/icons/Repeat.esm.js [app-client] (ecmascript) <export default as Repeat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function OurProcess() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurProcess.useEffect": ()=>{
            if (!loaded) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "OurProcess.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.fade-in-up').forEach({
                        "OurProcess.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
                                opacity: 0,
                                y: 50
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 0.75,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 85%',
                                    toggleActions: 'play none none none'
                                }
                            });
                        }
                    }["OurProcess.useEffect.ctx"]);
                }
            }["OurProcess.useEffect.ctx"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            return ({
                "OurProcess.useEffect": ()=>ctx.revert()
            })["OurProcess.useEffect"];
        }
    }["OurProcess.useEffect"], [
        loaded
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OurProcess.useEffect": ()=>{
            setLoaded(true);
        }
    }["OurProcess.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "w-full p-[0rem_2.75rem_4rem_2.75rem] md:p-[6.25rem_4.375rem]  flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fade-in-up w-max p-[0.5rem_0.75rem] rounded-[0.375rem] bg-primary-text border-[1px] border-[#222222] figTreeFont text-[0.875rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].ourprocess.pageTitle
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fade-in-up max-w-[43.75rem] text-center syneFont font-medium md:font-normal text-[1.75rem] md:text-[3.125rem] text-white leading-[1.1em] -tracking-[0.04em] py-[1.563rem_0.938rem]",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].ourprocess.title
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fade-in-up max-w-[37.5rem] text-center interFont font-normal md:font-medium text-[#CCCCCC] text-[0.875rem] md:text-[1.125rem] leading-[1.5em] -tracking-[0.02em]",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].ourprocess.description
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-[1.25rem] pt-[3.75rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:flex-row md:flex-row flex-col items-center justify-center gap-[1.25rem]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].ourprocess.cards.slice(0, 2).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in-up flex flex-col gap-[1.25rem] p-[0.625rem] md:p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset] items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-[0.625rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]",
                                                children: [
                                                    "Step ",
                                                    card.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-[0.625rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]",
                                                        children: card.header
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full md:w-[15.25rem] lg:w-[23.75rem] interFont text-[0.875rem] md:text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]",
                                                        children: card.subHeader
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    card.id === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex flex-col items-center gap-[0.625rem] p-[0.625rem_0.813rem_0_0.813rem] shadow-[0px_0px_0px_1px_#222222_inset]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-[107px] h-[107px] mb-[2.688rem] border-[1px] border-[#222222] rounded-full justify-center items-center duration-500 animate-spin-slow",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/agent/radar.png`,
                                                            className: "absolute w-full h-max",
                                                            alt: "Radar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute w-[calc(100%-1.25rem)] bottom-[0.563rem] left-1/2 transform -translate-x-1/2 interFont text-center text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]",
                                                        children: "Analyzing current workflow.."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-[0.625rem_0.313rem_0.938rem_0.313rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-col gap-[0.313rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ShieldCheck$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                size: 13,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "interFont md:text-[0.5rem] text-[0.75rem] lg:text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]",
                                                                children: "System Check"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Cpu$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                                                size: 13,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "interFont md:text-[0.5rem] text-[0.75rem] lg:text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]",
                                                                children: "Process check"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: `/Images/agent/speedometer.svg`,
                                                                className: "w-[13px] h-[13px]",
                                                                alt: "speedometer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "interFont md:text-[0.5rem] text-[0.75rem] lg:text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]",
                                                                children: "Speed check"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$FinnTheHuman$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FinnTheHuman$3e$__["FinnTheHuman"], {
                                                                size: 13,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "interFont md:text-[0.5rem] text-[0.75rem] lg:text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]",
                                                                children: "Manual work"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Repeat$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Repeat$3e$__["Repeat"], {
                                                                size: 13,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "interFont md:text-[0.5rem] text-[0.75rem] lg:text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]",
                                                                children: "Repetative task"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this),
                                    card.id === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col w-full h-[180px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-[22px] bg-[#FFFFFF]/5 flex flex-row justify-between items-center p-[6px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-[4px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ArrowLeft$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                size: 10,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ArrowRight$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 10,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[91px] h-[10px] bg-[#FFFFFF]/5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-[4px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Cards$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cards$3e$__["Cards"], {
                                                                size: 10,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Minus$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                size: 10,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$X$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 10,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                lineNumber: 130,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[30px] h-[100%] bg-[#FFFFFF]/5 flex flex-col gap-[9px] items-center pt-[9px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$File$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
                                                                size: 18,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$MagnifyingGlass$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MagnifyingGlass$3e$__["MagnifyingGlass"], {
                                                                size: 18,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$PuzzlePiece$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PuzzlePiece$3e$__["PuzzlePiece"], {
                                                                size: 18,
                                                                weight: "light",
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[230px] h-[128px] overflow-hidden mt-[15px] pl-[5px] ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-[230px] h-[128px] text-white text-[12px] interFont animate-coding duration-500",
                                                            children: [
                                                                "class AutomationTrigger:",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 151,
                                                                    columnNumber: 51
                                                                }, this),
                                                                "    ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary-blue",
                                                                    children: "def __init__"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 51
                                                                }, this),
                                                                "(self, threshold):",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 152,
                                                                    columnNumber: 124
                                                                }, this),
                                                                "        self.threshold = threshold",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 101
                                                                }, this),
                                                                "        self.status = 'inactive'",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 109
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 115
                                                                }, this),
                                                                "    ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary-blue",
                                                                    children: "def check_trigger"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 51
                                                                }, this),
                                                                "(self, value):",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 125
                                                                }, this),
                                                                "        if value > self.threshold:",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 104
                                                                }, this),
                                                                "            self.status = 'active'",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 131
                                                                }, this),
                                                                "            return 'Automation triggered!'",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 139
                                                                }, this),
                                                                "        else:",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 80
                                                                }, this),
                                                                "            return 'No action taken.'",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 134
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 140
                                                                }, this),
                                                                "    ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-primary-blue",
                                                                    children: "def get_status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 51
                                                                }, this),
                                                                "(self):",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 115
                                                                }, this),
                                                                "        return f'Status: ",
                                                                self.status,
                                                                "'"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                        lineNumber: 129,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, card.id, true, {
                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex lg:flex-row md:flex-row flex-col items-center justify-center gap-[1.25rem]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgentPageData"].ourprocess.cards.slice(2, 4).map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in-up flex flex-col gap-[1.25rem] p-[0.625rem] md:p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-[0.625rem]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]",
                                                children: [
                                                    "Step ",
                                                    card.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-[0.625rem]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]",
                                                        children: card.header
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full md:w-[15.25rem] lg:w-[23.75rem] interFont text-[0.875rem] md:text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]",
                                                        children: card.subHeader
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    card.id === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[11.25rem] lg:py-[40px] lg:px-[38px] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row justify-center items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex relative w-[64px] h-[64px] bg-[#0D0D0D]/80 border border-[#222222] rounded-[5px] items-center justify-center z-[200]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-[48px] h-[48px] bg-[#4285F4]/5 rounded-full animate-spin-clockwise",
                                                            style: {
                                                                background: "linear-gradient(141deg, rgb(66, 133, 244) 13%, rgba(66, 133, 244, 0) 35.0236%, rgba(66, 133, 244, 0) 64.1724%, rgb(66, 133, 244) 88%)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute w-[30px] h-[30px] rounded-full animate-spin-reverse",
                                                            style: {
                                                                background: "linear-gradient(141deg, rgb(87, 73, 92) 13%, rgba(66, 133, 244, 0) 35.0236%, rgba(66, 133, 244, 0) 64.1724%, rgb(66, 133, 244) 88%)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-[calc(100%+5px)] interFont text-[0.625rem] text-[#FFFFFFE6] font-regular leading-[1.1em] text-center",
                                                            children: "Our solution"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-[10px] z-[100]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative items-center flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/agent/process-line.png`,
                                                                    className: "w-max h-max",
                                                                    alt: "process-line"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute w-[20px] h-[2px] animate-processing-line",
                                                                    style: {
                                                                        background: "linear-gradient(90deg, rgba(66, 133, 244, 0.1) 0%, rgba(66, 133, 244, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(66, 133, 244, 0.6) 100%)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative items-center flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/agent/process-line.png`,
                                                                    className: "w-max h-max",
                                                                    alt: "process-line"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute w-[20px] h-[2px] animate-processing-line",
                                                                    style: {
                                                                        background: "linear-gradient(90deg, rgba(66, 133, 244, 0.1) 0%, rgba(66, 133, 244, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(66, 133, 244, 0.6) 100%)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative items-center flex",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/agent/process-line.png`,
                                                                    className: "w-max h-max",
                                                                    alt: "process-line"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute w-[20px] h-[2px] animate-processing-line",
                                                                    style: {
                                                                        background: "linear-gradient(90deg, rgba(66, 133, 244, 0.1) 0%, rgba(66, 133, 244, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(66, 133, 244, 0.6) 100%)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex justify-center items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[64px] h-[64px] bg-[#0D0D0D]/80 border border-[#222222] rounded-[5px] z-[200] overflow-hidden items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col gap-[1rem] items-center justify-center mt-[0.5rem] animate-processing-applications",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: `/Images/agent/Slack.svg`,
                                                                        className: "w-[80%] h-[80%]",
                                                                        alt: "Slack"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: `/Images/agent/Chatgpt.svg`,
                                                                        className: "w-[80%] h-[80%]",
                                                                        alt: "Chatgpt"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: `/Images/agent/Gmail.svg`,
                                                                        className: "w-[80%] h-[80%]",
                                                                        alt: "Gmail"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: `/Images/agent/Discord.svg`,
                                                                        className: "w-[80%] h-[80%]",
                                                                        alt: "Discord"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: `/Images/agent/Slack.svg`,
                                                                        className: "w-[80%] h-[80%]",
                                                                        alt: "Slack"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-[calc(100%+5px)] interFont text-[0.625rem] text-[#FFFFFFE6] font-regular leading-[1.1em] z-[201] text-center",
                                                            children: "Your stack"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 225,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                            lineNumber: 194,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                        lineNumber: 193,
                                        columnNumber: 19
                                    }, this),
                                    card.id === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[260px] h-[160px] border border-[#222222] px-[10px] py-[13px] flex flex-col gap-[10px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-[240px] h-[38px] flex flex-row  items-center shadow-[0px_0px_0px_1px_#222222_inset] overflow-hidden rounded-[4px] pl-[5px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[201px] flex flex-row gap-[7px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-[28px] h-[28px] rounded-[4px] bg-[#FFFFFF]/5 relative flex items-center justify-center ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Chat$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chat$3e$__["Chat"], {
                                                                        size: 18,
                                                                        weight: "bold",
                                                                        className: "text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-[4px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[12px] text-white interFont font-medium leading-[1em] -tracking-[0.04em]",
                                                                            children: "Chatbot system"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                            lineNumber: 239,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-white interFont font-regular leading-[1.1em] -tracking-[0.04em]",
                                                                            children: "Efficiency will increase by 20%"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                            lineNumber: 240,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 238,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$CircleNotch$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleNotch$3e$__["CircleNotch"], {
                                                            size: 18,
                                                            weight: "bold",
                                                            className: "text-primary-blue animate-spin-slow absolute right-[5px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-[240px] h-[38px] flex flex-row  items-center shadow-[0px_0px_0px_1px_#222222_inset] overflow-hidden rounded-[4px] pl-[5px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[201px] flex flex-row gap-[7px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-[28px] h-[28px] rounded-[4px] bg-[#FFFFFF]/5 relative flex items-center justify-center ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Gear$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gear$3e$__["Gear"], {
                                                                        size: 18,
                                                                        weight: "bold",
                                                                        className: "text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                        lineNumber: 248,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-[4px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[12px] text-white interFont font-medium leading-[1em] -tracking-[0.04em]",
                                                                            children: "Workflow system"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                            lineNumber: 251,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-white interFont font-regular leading-[1.1em] -tracking-[0.04em]",
                                                                            children: "Update available.."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center overflow-hidden w-[19px] h-[19px] bg-[#FFFFFF]/5 rounded-[4px] absolute right-[5px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$ArrowUp$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                                                size: 18,
                                                                weight: "bold",
                                                                className: "text-primary-blue animate-arrow-upwards"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-[240px] h-[38px] flex flex-row  items-center shadow-[0px_0px_0px_1px_#222222_inset] overflow-hidden rounded-[4px] pl-[5px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-[201px] flex flex-row gap-[7px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-[28px] h-[28px] rounded-[4px] bg-[#FFFFFF]/5 relative flex items-center justify-center ",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Funnel$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Funnel$3e$__["Funnel"], {
                                                                        size: 18,
                                                                        weight: "bold",
                                                                        className: "text-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                        lineNumber: 262,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col gap-[4px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[12px] text-white interFont font-medium leading-[1em] -tracking-[0.04em]",
                                                                            children: "Sales system"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-white interFont font-regular leading-[1.1em] -tracking-[0.04em]",
                                                                            children: "Up to date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                            lineNumber: 266,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$phosphor$2d$react$2f$dist$2f$icons$2f$Check$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 18,
                                                            weight: "bold",
                                                            className: "text-primary-blue absolute right-[5px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                            lineNumber: 232,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                        lineNumber: 231,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, card.id, true, {
                                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Agent/OurProcess.tsx",
        lineNumber: 49,
        columnNumber: 7
    }, this);
}
_s(OurProcess, "N1MLBivYPKMhsvQDSHkj7PB2w9o=");
_c = OurProcess;
var _c;
__turbopack_context__.k.register(_c, "OurProcess");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Agent/AgentRobot.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AgentRobot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AgentRobot({ agent }) {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentRobot.useEffect": ()=>{
            setLoaded(true);
        }
    }["AgentRobot.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                loading: "lazy",
                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Images/agent/polygon.svg`,
                alt: "polygon",
                className: "absolute lg:top-[85%] md:top-[90%] top-[85%] left-[50%] translate-x-[-50%] z-[1] lg:w-max md:w-[1.438rem] w-[0.938rem]"
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/AgentRobot.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-[100] lg:w-[9.881rem] lg:h-[9.881rem] md:w-[5.516rem] md:h-[5.516rem] w-[2.76363rem] h-[2.76363rem] bg-[#1C1C1C] rounded-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#D9D9D9] md:blur-[2.1500000953674316px] blur-[1.2px] lg:w-[1.0625rem] lg:h-[0.1875rem] md:w-[9.49px] md:h-[1.67px] w-[4.75px] h-[0.84px] absolute top-[115%] left-[50%] translate-x-[-50%] z-[10]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/AgentRobot.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-[10] lg:w-[8.313rem] lg:h-[8.313rem] md:w-[4.641rem] md:h-[4.641rem] w-[2.325rem] h-[2.325rem] lg:shadow-[inset_0_0_18.19px_-1.33px_rgba(66,133,244,0.95)] shadow-[inset_0_0_5.09px_-0.37px_rgba(66,133,244,0.95)] rounded-full bg-[rgba(66,133,244,0.05)] lg:box-shadow-[0px_0px_18.193px_-1.334px_rgba(66,133,244,0.96)_inset]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/AgentRobot.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        loading: "lazy",
                        src: agent.image,
                        alt: agent.name,
                        className: "absolute lg:w-[4.559rem] md:w-[2.545rem] w-[1.275rem]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/AgentRobot.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[120%] left-[50%] translate-x-[-50%] text-[#DDD] text-center dmSansFont lg:text-[1rem] md:text-[0.75rem] text-[0.625rem] font-medium leading-normal lg:w-max md:w-max w-[4.563rem]",
                        children: agent.name
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/AgentRobot.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Agent/AgentRobot.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Agent/AgentRobot.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, this);
}
_s(AgentRobot, "I8RUn14npbk54TheiKdNt4wCpsU=");
_c = AgentRobot;
var _c;
__turbopack_context__.k.register(_c, "AgentRobot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Agent/MultiAgent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MultiAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgentTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/AgentTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgentRobot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/AgentRobot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MultiAgent() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [agentsList, setAgentsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultiAgent.useEffect": ()=>{
            setLoaded(true);
            setAgentsList([
                {
                    id: 1,
                    name: "Client Request Intake Agent",
                    image: `/Images/agent/agent-1.svg`,
                    position: "top-[3%] left-[-3%]"
                },
                {
                    id: 2,
                    name: "Resource Allocation Agent",
                    image: `/Images/agent/agent-2.svg`,
                    position: "bottom-[35%] left-[-3%]"
                },
                {
                    id: 3,
                    name: "Time Tracking & Billing Agent",
                    image: `/Images/agent/agent-3.svg`,
                    position: "bottom-[59%] left-[23%]"
                },
                {
                    id: 4,
                    name: "Client Communication Agent",
                    image: `/Images/agent/agent-4.svg`,
                    position: "top-[6%] right-[35%]"
                },
                {
                    id: 5,
                    name: "Proposal & Documentation Agent",
                    image: `/Images/agent/agent-5.svg`,
                    position: "bottom-[17%] left-[43%]"
                },
                {
                    id: 6,
                    name: "Issue Escalation Agent",
                    image: `/Images/agent/agent-6.svg`,
                    position: "top-[5%] right-[7%]"
                },
                {
                    id: 7,
                    name: "Project Health Monitoring Agent",
                    image: `/Images/agent/agent-7.svg`,
                    position: "top-[43%] right-[12%]"
                },
                {
                    id: 8,
                    name: "Performance Reporting Agent",
                    image: `/Images/agent/agent-8.svg`,
                    position: "bottom-[2%] right-[5%]"
                }
            ]);
        }
    }["MultiAgent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultiAgent.useEffect": ()=>{
            if (!loaded) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "MultiAgent.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray('.fade-in-up').forEach({
                        "MultiAgent.useEffect.ctx": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
                                opacity: 0,
                                y: 50
                            }, {
                                opacity: 1,
                                y: 0,
                                duration: 0.75,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: el,
                                    start: 'top 85%',
                                    toggleActions: 'play none none none'
                                }
                            });
                        }
                    }["MultiAgent.useEffect.ctx"]);
                }
            }["MultiAgent.useEffect.ctx"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            return ({
                "MultiAgent.useEffect": ()=>ctx.revert()
            })["MultiAgent.useEffect"];
        }
    }["MultiAgent.useEffect"], [
        loaded
    ]);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-max flex flex-col items-center justify-center lg:pb-[260px]  pb-[159px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgentTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Multi Agent",
                title_description: "Optimize Operations Using Intelligent Collaborative Agents",
                description: "By coordinating multiple AI agents, your everyday business tasks become smoother, faster, and more efficient"
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/MultiAgent.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scale-down",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative lg:w-[1059.5px] lg:h-[891.5px] md:w-[591.46px] md:h-[497.67px] w-[296.33px] h-[249.34px] right-[-1rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            loading: "lazy",
                            src: `/Images/agent/multi-agent-layers.svg`,
                            alt: "MultiAgent",
                            className: "absolute z-[100]"
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Agent/MultiAgent.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        agentsList.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `fade-in-up absolute ${agent.position} lg:drop-shadow-[0px_0px_15.7px_#4285F4] drop-shadow-[0px_0px_4.89px_#4285F4] z-[200]`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgentRobot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    agent: agent
                                }, void 0, false, {
                                    fileName: "[project]/app/components/layout/Agent/MultiAgent.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this)
                            }, agent.id, false, {
                                fileName: "[project]/app/components/layout/Agent/MultiAgent.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/layout/Agent/MultiAgent.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/MultiAgent.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Agent/MultiAgent.tsx",
        lineNumber: 104,
        columnNumber: 7
    }, this);
}
_s(MultiAgent, "NosuMXGr5xe/M1H4se+1zsBQo/8=");
_c = MultiAgent;
var _c;
__turbopack_context__.k.register(_c, "MultiAgent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Agent/AiAgent.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AiAgent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgentTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/AgentTitle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AiAgent() {
    _s();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileView, setIsMobileView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTabView, setTabView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiAgent.useEffect": ()=>{
            if (window) {
                if (window.innerWidth < 1024) {
                    setTabView(true);
                }
                if (window.innerWidth < 768) {
                    setIsMobileView(true);
                }
            }
        }
    }["AiAgent.useEffect"], []);
    const agentVideo = [
        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Agent/AiAgent/web-ai-agent.mp4`,
        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Agent/AiAgent/tab-view-ai-agent.mp4`,
        `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Agent/AiAgent/mob_ai_agent_video.mp4`
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiAgent.useEffect": ()=>{
            setLoaded(true);
            console.log(agentVideo[0]);
        }
    }["AiAgent.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgentTitle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "AI Agent",
                title_description: "Supercharge your business with AI Agents",
                description: "Custom AI agents mimic human workflows and integrate into your tools to plan, execute, and scale work."
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/AiAgent.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex flex-col items-center justify-center mt-[-4.938rem]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    className: "w-full h-full lg:w-[820px] lg:h-[488px] object-cover background-white px-[1.25rem] pb-[124px] md:pb-0 md:px-[59px] lg:px-0",
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    controls: false,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: `${isMobileView ? agentVideo[2] : isTabView ? agentVideo[1] : agentVideo[0]}`,
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/app/components/layout/Agent/AiAgent.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        "Your browser does not support the video tag."
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/layout/Agent/AiAgent.tsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/AiAgent.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(AiAgent, "HSk9dfpf3XJtw/o23PeTZ10Y8yg=");
_c = AiAgent;
var _c;
__turbopack_context__.k.register(_c, "AiAgent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/layout/Agent/Agent_Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Agent_Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/custom_data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Agent_Footer() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Agent_Footer.useEffect": ()=>{
            setLoaded(true);
        }
    }["Agent_Footer.useEffect"], []);
    return loaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[calc(100%-3.75rem)] md:w-[41.75rem] lg:w-[60rem] h-max p-[1.875rem] md:p-[3.125rem] flex flex-col items-center justify-center gap-[1.875rem] rounded-[1.25rem] bg-transparent shadow-[0px_0px_0px_1px_#FFFFFF12_inset] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                controls: false,
                playsInline: true,
                loop: true,
                muted: true,
                className: "absolute top-0 left-0 w-[100%] h-[100%] object-cover",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$custom_data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUrl"]}/Agent/Footer/footer-video.mp4`,
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-row p-[0.375rem_0.875rem] items-center justify-center gap-[0.625rem] rounded-[0.625rem] shadow-[0px_0px_0px_1px_#FFFFFF0D_inset] backdrop-blur-[2.5] agentFooterTitle",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 w-[61px] h-[1px] bg-[linear-gradient(90deg,rgba(66,133,244,0)_0%,#4285F4_50%,rgba(66,133,244,0)_100%)]"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[0.313rem] h-[0.313rem] rounded-full bg-white"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dmSansFont text-[1rem] agentFooterTitleColor font-normal leading-[1.625rem] -tracking-[0.031rem]",
                        children: "Custom AI Agent"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 flex flex-col items-center justify-center dmSansFont text-[2.25rem] font-normal leading-[3.125rem] -tracking-[0.119rem]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white text-center",
                        children: "Is Your Business Ready"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[#FFFFFF]/60 text-center",
                        children: "for the Future of Work?"
                    }, void 0, false, {
                        fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 dmSansFont w-full md:w-[32.5rem] text-[1rem] text-[#FFFFFF]/60 font-normal leading-[1.625rem] -tracking-[0.013rem] text-center",
                children: "Step into a new era of intelligent automation. Transform operations with AI agents that grow with you."
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>{
                    router.push('/contact-us');
                },
                className: "z-10 text-center p-[0.625rem_1.125rem] bg-primary-blue rounded-[0.625rem] page-not-found-CTA-boxShadow dmSansFont text-[1rem] text-white font-medium leading-[1.625rem] -tracking-[0.031rem] cursor-pointer",
                children: "Book a Free Consultation"
            }, void 0, false, {
                fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/layout/Agent/Agent_Footer.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_s(Agent_Footer, "qr8feAtBH6YL9kZ5N1x+KXznK1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Agent_Footer;
var _c;
__turbopack_context__.k.register(_c, "Agent_Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/agentic-ai/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LenisProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/LenisProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgenticLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/AgenticLayer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$Agent_Banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/Agent_Banner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$OurProcess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/OurProcess.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$MultiAgent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/MultiAgent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AiAgent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/AiAgent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$Agent_Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/layout/Agent/Agent_Footer.tsx [app-client] (ecmascript)");
'use client';
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$LenisProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-screen flex items-center justify-center flex-col bg-[#080808] select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/agentic-ai/page.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$Agent_Banner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/agentic-ai/page.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AgenticLayer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/agentic-ai/page.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$AiAgent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/agentic-ai/page.tsx",
                    lineNumber: 19,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$OurProcess$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/agentic-ai/page.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$MultiAgent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/agentic-ai/page.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$layout$2f$Agent$2f$Agent_Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/agentic-ai/page.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/agentic-ai/page.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/agentic-ai/page.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_e36f04de._.js.map