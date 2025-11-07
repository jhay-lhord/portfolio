"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
      gradient: "from-blue-500 to-cyan-500",
      border: "border-blue-500/20",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
      gradient: "from-purple-500 to-blue-500",
      border: "border-purple-500/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#",
      gradient: "from-cyan-500 to-green-500",
      border: "border-cyan-500/20",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-blue-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold ">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have an exciting project or want to collaborate? I'd love to hear from you. Reach out through any of the
            channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <div
                key={method.title}
                className="group relative text-center p-8 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${method.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{method.title}</h3>
                <a
                  href={method.href}
                  className="text-muted-foreground hover:text-blue-400 transition-colors font-medium break-all"
                >
                  {method.value}
                </a>
              </div>
            )
          })}
        </div>

        {/* Form section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-10 blur-2xl" />
          <Card className="relative p-8 sm:p-12 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-blue-500/20 hover:border-blue-500/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-blue-500/20 hover:border-blue-500/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-foreground">Message</label>
                <Textarea
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 border-blue-500/20 hover:border-blue-500/40 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all min-h-40 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-6 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                <span>{submitted ? "Message Sent!" : "Send Message"}</span>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
