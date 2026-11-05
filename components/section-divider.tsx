"use client";

import React from "react";
import { motion } from "motion/react";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-slate-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-slate-200/20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}