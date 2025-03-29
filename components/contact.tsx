"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "Ahsan.ash254@outlook.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+61-492-929071",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: "277 Shepperton Road East Victoria Park, Perth, Western Australia, 6101",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            Feel free to reach out to me for any questions or opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{item.details}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-md"
          >
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" className="bg-white dark:bg-slate-800" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white dark:bg-slate-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" className="bg-white dark:bg-slate-800" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[150px] bg-white dark:bg-slate-800"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

