"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I embarked on my web development journey fueled by a blend of curiosity for the digital world and a commitment to learning. Initially attracted to the field by its blend of{" "}
      <span className="italic">creativity and logic</span>, I&apos;ve since dedicated myself to mastering the fundamentals of both{" "}<span className="font-medium">front-end</span> and{" "}<span className="font-medium">back-end</span>.</p>
      <p className="mb-3">
      With a solid foundation in{" "}<span className="font-medium">React, Redux, Express.js</span>, and a keen interest in developing single-page applications{" "}<span className="font-medium">(SPAs)</span>, I focus on creating responsive and user-friendly interfaces. My experience also extends to designing{" "}<span className="font-medium">RESTful APIs</span> and understanding the basics of{" "}<span className="underline">web architecture</span> and {" "}<span className="underline">security principles</span>, ensuring a comprehensive approach to web development.
      </p>
      <p>
      As a junior developer, I&apos;m eager to apply my skills in a {" "}
      <span className="italic">dynamic environment</span>, continuously{" "}<span className="font-medium">grow</span> through new challenges, and contribute to meaningful projects. My{" "}<span className="font-medium">goal</span> is to not just develop applications, but to craft experiences that{" "}<span className="underline">make a positive impact</span>.
      </p>
    </motion.section>
  );
}