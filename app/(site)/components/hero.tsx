"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Code2 } from "lucide-react"
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 py-16 overflow-hidden bg-gradient-to-b from-background via-background/90 to-background/60">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 transition-colors"
        >
          <Code2 size={16} />
          <span>Crafting meaningful digital experiences</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight font-space-grotesk">
              Hi, I’m &nbsp;
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                Jaylord
              </span>
            </h1>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/30 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground font-medium">Available for work</span>
            </div>
          </div>

          <div className="text-xl sm:text-2xl font-medium text-muted-foreground h-10">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "React & Django Enthusiast",
                  "Building Scalable Web Solutions",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 50,
              }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          I design and build performant, accessible, and beautiful web applications using modern tools like React,
          Next.js, and TypeScript — turning ideas into seamless digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
        >
          <Button
            size="lg"
            className="gap-2 group transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 hover:scale-105 transition-transform duration-300 bg-transparent"
          >
            <Mail size={20} />
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex gap-3 justify-center pt-10"
        >
          <a
            href="#"
            className="p-3 rounded-lg border border-border bg-background/50 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg border border-border bg-background/50 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center pt-16"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm animate-bounce">
            <span>Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
