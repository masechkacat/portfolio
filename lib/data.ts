import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiAngularjsLine } from "react-icons/ri";
import kekstagramImg from "@/public/kekstagramImg.png";
import locavelowImg from "@/public/locavelowImg.png";
import bigtripImg from "@/public/bigtripImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Certificate Full-Stack Developer",
    location: "Html Academy",
    description:
      "Graduated after 18 months of studying web development on JS & TS with React, Node.js, and Express. Familiar with the principles of OOP, SOLID, and DRY. Also, I have experience with Docker, Webpack, and Git.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Certificate Developer Web",
    location: "The Hacking Project",
    description:
      "RNCP level 5 certification in web development. Acquired skills in HTML, CSS, JavaScript, Ruby, Ruby on Rails, and SQL.I also have experience with Heroku, Capybara, Devise & storage in AWS S3/Google Cloud.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Internship Full Stack Developer",
    location: "League A",
    description:
      "Developement new features for visual side, and backend side. Enhancing existing features based on user feedback. Participating in discussions on the architecture of the application and the choice of technologies.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Internship Frontend Developer",
    location: "Argo",
    description:
      "Developement a no-code HTML editor using a custom TypeScript framework. Responsibilities included bug fixes, product enhancement tasks, and creating custom developments for clients, such as mini-games and personalized web pages.",
    icon: React.createElement(RiAngularjsLine),
    date: "2024",
  },
] as const;

export const projectsData = [
    {
    title: "Big Trip",
    description:
      "Developing a SPA 'Big Trip' — a modern service that helps plan the trip itinerary, calculate the cost, and obtain information about attractions.",
    tags: ["Vanilla JS", "OOP", "MVC", "Webpack", "Flatpickr", "Day.js"],
    imageUrl: bigtripImg,
    projectUrl: "https://masechkacat.github.io/368613-big-trip-21/",
  },
  {
    title: "Kekstagram",
    description:
    "Implementing the frontend part for image viewing service where users can upload their own photos or view photos uploaded previously by other users.",
    tags: ["Vanilla JS", "HTML", "CSS", "Lodash", "JSON", "AJAX"],
    imageUrl: kekstagramImg,
    projectUrl: "https://masechkacat.github.io/368613-kekstagram-29/",
  },
  {
    title: "Locavelow",
    description:
    "Leading the team, architecting, and implementing the backend for a platform for bike rentals, where you can rent a bike from a individual or rent out your own bike to other.",
    tags: ["Ruby on Rails", "PostgreSQL", "Heroku", "Stripe", "Devise"],
    imageUrl: locavelowImg,
    projectUrl: "https://locavelik-115195375a5a.herokuapp.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "NestJS",
  "PostgreSQL",
  "Express.js",
  "Babylon.js",
  "Ruby on Rails",
  "Docker",
  "Framer Motion",
] as const;