import Navigation from "./components/navigation"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Footer from "./components/footer"

import type { ExperienceType, ProjectType, SkillType, ContactType } from "@/types"
import { getExperience, getProjects, getSkills, getContactInfo } from "@/sanity/sanity.query";

const projects: ProjectType[] = await getProjects();
const experiences: ExperienceType[] = await getExperience();
const skills: SkillType[] = await getSkills();
const contactInfo: ContactType[] = await getContactInfo();


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <Contact contactInfo={contactInfo} />
      <Footer />
    </main>
  )
}
