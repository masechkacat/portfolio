"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "motion/react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-180 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a <span className="font-medium">full-stack engineer</span> based in France, working remotely. I write{" "}
        <span className="font-medium">TypeScript on both sides</span> of the stack: Node.js services with{" "}
        <span className="font-medium">NestJS, Express or Fastify</span> on the back end,{" "}
        <span className="font-medium">React and Next.js</span> on the front, PostgreSQL underneath. Before TypeScript there was{" "}
        <span className="italic">Ruby on Rails</span>, and I&apos;m comfortable picking up whatever the product needs next.
      </p>
      <p className="mb-3">
        At <span className="font-medium">Ideal Soft</span>, a B2B SaaS for French property-management agencies, I build and run the services around the core product: an{" "}
        <span className="underline">AI proxy</span>, a Jira proxy, a chat assistant, an{" "}
        <span className="underline">OCR pipeline</span> for invoices and quotes, and now a mail gateway with an agent on top. Earlier I built the backend of{" "}
        <span className="font-medium">Locavelow</span>, a peer-to-peer bike-rental marketplace with bookings, Stripe payments and messaging.
      </p>
      <p>
        I work <span className="italic">AI-native</span>: I design and maintain my own{" "}
        <span className="font-medium">Claude Code harness</span>, from PRD to research, plan and issues, with an autonomous build loop and review gates, and I{" "}
        <span className="underline">review everything it produces</span>. In practice that means one engineer carrying the delivery of a small team. Open to{" "}
        <span className="font-medium">freelance and employment</span>.
      </p>
    </motion.section>
  );
}