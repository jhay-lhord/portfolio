"use client"

import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { getExperience } from "@/sanity/sanity.query";
import type { ExperienceType } from "@/types";


const experiences: ExperienceType[] = await getExperience();

const timelineData = experiences.map((exp) => ({
  title: exp.period,
  content: (
    <div className="space-y-3">
      <h3 className="text-xl font-bold">{exp.title}</h3>
      <p className="text-lg text-primary font-semibold">{exp.company}</p>
      <p className="text-muted-foreground">{exp.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {exp.skills.map((skill, i) => (
          <Badge key={i} variant="outline" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  ),
}))

export default async function Experience() {
  
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and companies
          </p>
        </div>

        <Timeline data={timelineData} />
      </div>
    </section>
  )
}
