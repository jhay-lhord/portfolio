"use client"

import { Card } from "@/components/ui/card"
import * as LucideIcons from "lucide-react"
import { SkillType } from "@/types"


export default function Skills({skills}: {skills: SkillType[]}) {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and skills I{"'"}ve mastered and applied in real-world projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {skills.map((category, index) => {
            const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.HelpCircle

            return (
              <Card
                key={index}
                className="relative overflow-hidden p-8 bg-background/50 backdrop-blur-md border border-border/20 hover:border-primary/50 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 rounded-2xl group"
              >
                <div
                  className={`absolute -right-16 -top-16 w-40 h-40 ${category.gradient} opacity-10 rounded-full blur-3xl animate-pulse-slow`}
                />

                <div className="relative z-10 mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} p-3 mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{category.category}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-slow" />
                </div>

                <div className="relative z-10 flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm font-medium text-foreground bg-secondary/30 rounded-full border border-border/30 cursor-default hover:scale-105 hover:shadow-md transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
