import { desktop, growth, innovation } from "./Icons";
import { Londrina_Outline } from "next/font/google";

const bungee = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
});

interface IService {
  title: string;
  icon: any;
  description: string;
  bulletPoints: string[];
}

export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "FAQs",
    url: "/faqs",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const services: IService[] = [
  {
    title: "Digital Strategy & Consulting",
    icon: growth,
    description:
      "Develop a robust digital strategy that aligns with your business goals. Our expert consultants will guide you through the process, ensuring your brand stays ahead in the digital landscape.",
    bulletPoints: [
      "Tailored digital strategies for your brand",
      "In-depth market and competitor analysis",
      "Expert guidance on emerging trends",
      "Alignment of digital initiatives with business goals",
    ],
  },
  {
    title: "UX/UI Design & Web Development",
    icon: desktop,
    description:
      "Create a seamless user experience with our expert UX/UI design and web development services. We craft visually stunning and highly functional websites that engage users and drive conversions.",
    bulletPoints: [
      "User-centered UX/UI design",
      "Responsive and accessible web development",
      "Custom website and application solutions",
      "Optimization for performance and speed",
    ],
  },
  {
    title: "Innovative Product Development",
    icon: innovation,
    description:
      "Transform your ideas into market-ready products. Our team specializes in creating innovative solutions that drive growth and give you a competitive edge.",
    bulletPoints: [
      "End-to-end product design and development",
      "Rapid prototyping and iteration",
      "Integration of cutting-edge technologies",
      "Focus on user needs and market demands",
    ],
  },
];

export const aboutStats = [
  {
    title: "Happy Customers",
    count: 100,
    ff: bungee.className,
  },
  {
    title: "Projects Completed",
    count: 200,
  },
  {
    title: "Years in Business",
    count: 10,
    ff: bungee.className,
  },
  {
    title: "Team Members",
    count: 50,
  },
];

export const baseText = [
  {
    text: "Web Development",
  },
  { text: "Digital Marketing", outline: bungee.className },
  { text: "UI/UX Design" },
  { text: "SEO Optimization", outline: bungee.className },
];

export const awards = [
  {
    date: "January 2024",
    companyLogo: "/images/logos/logo--behance.png",
    category: "Best UX",
    link: "https://www.behance.net/",
  },
  {
    date: "June 2021",
    companyLogo: "/images/logos/logo--awwwards.png",
    category: "Site of the Day",
    link: "https://www.awwwards.com/",
  },
  {
    date: "March 2022",
    companyLogo: "/images/logos/logo--dribble.png",
    category: "Best Design",
    link: "https://dribbble.com/",
  },
  {
    date: "June 2021",
    companyLogo: "/images/logos/logo--awwwards.png",
    category: "Site of the Day",
    link: "https://www.awwwards.com/",
  },
];
