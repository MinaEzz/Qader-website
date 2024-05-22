export const NAVLINKS = [
  {
    title: "home",
    path: "/",
  },
  {
    title: "products",
    path: "/products",
  },
  {
    title: "about",
    path: "/about-us",
  },
  {
    title: "contact us",
    path: "contact-us",
  },
  {
    title: "jobs",
    path: "/jobs",
  },
  {
    title: "login/Register",
    path: "/authentication",
  },
];
// Services Constants
import { FaRegFaceSmileBeam, FaFaceGrinStars } from "react-icons/fa6";
import { FaDollarSign, FaShippingFast } from "react-icons/fa";
export const SERVICES = [
  { title: "100% satisfaction", icon: <FaRegFaceSmileBeam size={38} /> },
  { title: "valuable products", icon: <FaDollarSign size={38} /> },
  { title: "fast shipping", icon: <FaShippingFast size={38} /> },
  { title: "job opportunities", icon: <FaFaceGrinStars size={38} /> },
];
// home constants
export const CATEGORIES = [
  {
    id: 1,
    title: "home healthcare",
    url: "/home_healthcare",
  },
  {
    id: 2,
    title: "hearing & deaf",
    url: "/hearing_and_deaf",
  },
  {
    id: 3,
    title: "household",
    url: "/household",
  },
  {
    id: 4,
    title: "mobility",
    url: "/mobility",
  },
  {
    id: 5,
    title: "vision & blind",
    url: "/vision_and_blind",
  },
  {
    id: 6,
    title: "technology",
    url: "/technology",
  },
];
export const RECCOMENDED_PRODUCTS = [
  {
    name: "Bagel Blade with Suction Cup Base",
    image: "https://www10.0zz0.com/2024/02/21/16/713820805.jpg",
    price: 36.99,
    url: "",
  },
  {
    name: "Arthritis Gloves- Small- One Pair",
    image: "https://www10.0zz0.com/2024/02/21/16/256196285.jpg",
    price: 21.95,
    url: "",
  },
  {
    name: "FootMate Complete Foot Care System",
    image: "https://www10.0zz0.com/2024/02/21/16/484845597.jpg",
    price: 39.95,
    url: "",
  },
  {
    name: "Dr. Josephs Foot Brush",
    image: "https://www12.0zz0.com/2024/02/21/17/391721747.jpg",
    price: 25.95,
    url: "",
  },
  {
    name: "Drive Folding Universal Sliding Transfer Bench",
    image: "https://www12.0zz0.com/2024/02/21/17/391721747.jpg",
    price: 249,
    url: "",
  },
  {
    name: "Aluminum Rehab Shower Commode Chair with 24 inch Rear Wheels",
    image: "https://www12.0zz0.com/2024/02/21/17/391721747.jpg",
    price: 1085,
    url: "",
  },
  {
    name: "Childrens Chaise with Headrest and Straps",
    image: "https://www12.0zz0.com/2024/02/21/17/204890346.jpg",
    price: 269,
    url: "",
  },
  {
    name: "Bath Bench with Back and Arms",
    image: "https://www12.0zz0.com/2024/02/21/17/391721747.jpg",
    price: 89.95,
    url: "",
  },
];
// About page Constants
export const VISION =
  "Create an inclusive and empowering online space where individuals with disabilities can access a diverse range of specialized equipment and explore meaningful job opportunities. We envision a world where everyone, regardless of ability, has the tools and opportunities to lead a fulfilling and independent life.";

export const MISSION = `Offer a curated selection of high-quality equipment designed to enhance the daily lives of individuals with disabilities, promoting accessibility and independence.
  Cultivate an inclusive online community that celebrates diversity and fosters a sense of belonging, ensuring that our users feel seen, heard, and valued.
  Connect individuals with disabilities to meaningful job opportunities, partnering with organizations that prioritize diversity and inclusivity in the workplace.
  Raise awareness about the challenges faced by individuals with disabilities and advocate for a more inclusive society. Support initiatives that promote accessibility and equal opportunities.
  Deliver exceptional customer service to ensure a positive and supportive experience for every user, from product selection to employment connections.
  we strive to revolutionize the shopping experience for people with disabilities.
  `;

// Footer Constants
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";
export const SOCIALMEDIA = [
  {
    icon: <FaFacebook size={20} className="text-primary-600" />,
    title: "facebook",
    ref: "",
  },
  {
    icon: <FaTwitter size={20} className="text-primary-600" />,
    title: "twitter",
    ref: "",
  },
  {
    icon: <FaInstagram size={20} className="text-primary-600" />,
    title: "instagram",
    ref: "",
  },
  {
    icon: <FaLinkedin size={20} className="text-primary-600" />,
    title: "linkedin",
    ref: "",
  },
  {
    icon: <FaEnvelope size={20} className="text-primary-600" />,
    title: "email",
    ref: "mailto:qader2024bis@gmail.com",
  },
];
import { googlePlayIcon, appleIcon } from "../assets/images";
export const MOBILEAPP = [
  { title: "google play store", icon: googlePlayIcon },
  { title: "apple store", icon: appleIcon },
];
export const PAGES = [
  { title: "home", url: "/" },
  { title: "about us", url: "/about-us" },
  { title: "contact us", url: "/contact-us" },
  { title: "jobs", url: "/jobs" },
];
export const FOOTER_CATEGORIES = [
  {
    title: "all",
    url: "products/",
  },
  {
    title: "home healthcare",
    url: "products/1/home healthcare",
  },
  {
    title: "hearing & deaf",
    url: "products/2/hearing & deaf",
  },
  {
    title: "household",
    url: "products/3/household",
  },
  {
    title: "mobility",
    url: "products/4/mobility",
  },
  {
    title: "vision & blind",
    url: "products/5/vision & blind",
  },
  {
    title: "technology",
    url: "products/6/technology",
  },
];
export const FOR_USERS = [
  {
    title: "login",
    url: "/login",
  },
  {
    title: "regist",
    url: "regist",
  },
  {
    title: "profile",
    url: "/profile",
  },
];
// regist form constants
export const TYPESOFDISABILITY = [
  "Mobility Impairments",
  "Chronic Illnesses",
  "Recovery from Surgery or Injury",
  "Deafness or Hearing Impairments",
  "Blindness or Vision Impairments",
  "Cognitive Disabilities",
  "Various Disabilities",
  "other",
];
// jobs constants
export const JOBS = [
  {
    id: 1,
    title: "Job Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 1",
  },
  {
    id: 2,
    title: "Job Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 2",
  },
  {
    id: 3,
    title: "Job Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 3",
  },
  {
    id: 4,
    title: "Job Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 4",
  },
  {
    id: 5,
    title: "Job Title 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat veniam earum vel, possimus ducimus modi? Illo iure obcaecati quibusdam quaerat, nostrum reiciendis? Sint, totam eaque fugit amet quae aliquam. 5",
  },
];
