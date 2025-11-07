"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image.client"
import { ProjectType } from "@/types";

export default function Projects({projects}: {projects: ProjectType[] }) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and approach to problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={urlFor(project.image).width(1600).quality(100).url()}
                  alt={project.title}
                  width={100}
                  height={100}
                  quality={100}
                  placeholder="empty"
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.link}
                    target={"_blank"}
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target={"_blank"}
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
