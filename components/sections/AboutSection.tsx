"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { SkillBadge } from "../ui/SkillBadge";

export function AboutSection() {
  return (
    <section id="about" className="px-8 md:px-16 max-w-screen-2xl mx-auto py-32 border-t border-outline-variant bg-surface relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-12 gap-6"
      >
        <div className="col-span-12 md:col-span-2">
          <span className="font-label text-[10px] font-bold uppercase tracking-editorial text-secondary">01. BIOGRAPHY</span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-7">
          <h2 className="font-headline font-medium text-4xl mb-12 tracking-tight text-primary">
            I build and experiment with AI/ML systems focused on real-world problem solving.
          </h2>
          <div className="space-y-8 font-body text-on-surface-variant text-lg leading-relaxed">
            <p>I continuously improve my skills through hands-on work, exploring areas like deep learning, data analysis, and intelligent system design.</p>
            <p>I actively work on personal and academic projects to develop skills in machine learning, deep learning, and data-driven systems, with a focus on real-world applications.</p>
          </div>
          
          <div className="mt-24 space-y-12">
            {skillsData.map((category, index) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                key={category.label} 
                className="space-y-6"
              >
                <h3 className="font-headline font-bold text-sm tracking-editorial uppercase text-primary border-b border-outline-variant pb-2 inline-block">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.items.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
