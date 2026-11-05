import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuBox } from "react-icons/lu";
import { SiNestjs, SiRuby } from "react-icons/si";
import monSinistreImg from "@/public/monSinistreImg.webp";
import htmlNormalizerImg from "@/public/htmlNormalizerImg.webp";
import locavelowImg from "@/public/locavelowImg.webp";

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
    title: "Front-End Developer (internship)",
    location: "League A",
    description:
      "Shipped features and UI fixes on a React front end backed by MongoDB (Typegoose). Took part in implementation decisions.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Freelance Backend Developer",
    location: "Locavelow",
    description:
      "Built the backend of a peer-to-peer bike-rental marketplace, live across France: listings with map search, booking requests and owner approval, Stripe payments with automatic deposit holds, in-app messaging, reviews. Ruby on Rails, PostgreSQL.",
    icon: React.createElement(SiRuby),
    date: "2023",
  },
  {
    title: "Full-Stack JavaScript",
    location: "HTML Academy",
    description:
      "18 months of JavaScript and TypeScript with React, Node.js and Express: OOP, SOLID, DRY, Webpack, Docker, Git.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Développeur Web et Web Mobile",
    location: "The Hacking Project · RNCP n°34779",
    description:
      "State-recognised French diploma in web development: HTML, CSS, JavaScript, Ruby, Ruby on Rails, SQL, deployment on Heroku, file storage on AWS S3 and Google Cloud.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "ARGO (augmented reality)",
    description:
      "Developed a no-code HTML editor in TypeScript (Angular) and a file-library module in Vue.js. First 3D work with Three.js and Babylon.js for AR scenes, plus custom client features.",
    icon: React.createElement(LuBox),
    date: "2024",
  },
  {
    title: "Full-Stack Engineer (TypeScript)",
    location: "Ideal Soft · remote",
    description:
      "B2B SaaS for French property-management agencies. I build and run the Node.js/NestJS services around the core product (AI proxy, Jira proxy, chat assistant, OCR + LLM extraction of invoices and quotes, mail gateway with an agent on top), built the contractor-facing Next.js app, and set up CI/CD on GitLab Runner with Docker.",
    icon: React.createElement(SiNestjs),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Mon Sinistre",
    description:
      "Guides homeowners in France through a natural-disaster insurance claim: watches the Journal Officiel for new decrees, then tracks deadlines and damage. In development.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Monorepo"],
    imageUrl: monSinistreImg,
    projectUrl: "https://github.com/masechkacat/mon-sinistre",
  },
  {
    title: "html-normalizer",
    description:
      "Isomorphic library that turns HTML pasted from Word, Google Docs and email clients into clean, semantic and safe HTML5 without losing the look.",
    tags: ["TypeScript", "unified", "rehype", "Vitest"],
    imageUrl: htmlNormalizerImg,
    projectUrl: "https://github.com/masechkacat/html-normalizer",
  },
  {
    title: "Locavelow",
    description:
      "Peer-to-peer bike-rental marketplace, live across France. I built the backend: map search, bookings with owner approval, Stripe payments, messaging.",
    tags: ["Ruby on Rails", "PostgreSQL", "Stripe", "Devise", "Heroku"],
    imageUrl: locavelowImg,
    projectUrl: "https://www.locavelow.fr/",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "NestJS",
  "Express",
  "Fastify",
  "React",
  "Next.js",
  "TanStack Query",
  "Tailwind CSS",
  "shadcn/ui",
  "PostgreSQL",
  "Prisma",
  "TypeORM",
  "MongoDB",
  "REST / OpenAPI",
  "WebSocket",
  "RabbitMQ",
  "Docker",
  "CI/CD",
  "Jest",
  "Playwright",
  "Ruby on Rails",
  "Angular",
  "Three.js / Babylon.js",
  "Claude Code / LLM APIs",
] as const;
