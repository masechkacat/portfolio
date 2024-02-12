import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
    {
    title: "Big Trip",
    description:
      "Developing a SPA 'Big Trip' — a modern service that helps plan the trip itinerary, calculate the cost, and obtain information about attractions.",
    tags: ["Vanilla JS", "OOP", "MVC", "Webpack", "Flatpickr", "Day.js"],
    imageUrl: bigtripImg,
  },
  {
    title: "Kekstagram",
    description:
    "Implementing the frontend part for image viewing service where users can upload their own photos or view photos uploaded previously by other users.",
    tags: ["Vanilla JS", "HTML", "CSS", "Lodash", "JSON", "AJAX"],
    imageUrl: kekstagramImg,
  },
  {
    title: "Locavelow",
    description:
    "Leading the team, architecting, and implementing the backend for a platform for bike rentals, where you can rent a bike from a individual or rent out your own bike to other.",
    tags: ["Ruby on Rails", "PostgreSQL", "Heroku", "Capybara", "Devise"],
    imageUrl: locavelowImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "NestJS",
  "PostgreSQL",
  "Express",
  "PostgreSQL",
  "Ruby on Rails",
  "Docker",
  "Framer Motion",
] as const;