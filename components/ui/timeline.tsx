"use client"
import type React from "react"
import { motion } from "framer-motion"

interface TimelineEntry {
  title: string
  content: React.ReactNode
}

interface TimelineProps {
  data: TimelineEntry[]
}

export function Timeline({ data }: TimelineProps) {
  return (
    <div className="w-full relative">
      {data.map((item, index) => (
        <div key={index} className="flex gap-6 group">
          <div className="relative flex flex-col items-center">
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute h-10 w-10 rounded-full bg-primary/20 blur-md animate-pulse" />
              <div className="relative h-6 w-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/40" />
            </motion.div>

            {index !== data.length - 1 && (
              <div className="h-64 w-[3px] bg-gradient-to-b from-primary/70 to-transparent" />
            )}
          </div>

          <motion.div
            className="pb-20 pt-3 flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-primary tracking-tight group-hover:text-primary/80 transition-colors">
              {item.title}
            </h3>
            <div className="text-foreground/80 leading-relaxed">{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}
