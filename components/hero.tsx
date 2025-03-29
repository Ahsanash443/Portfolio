"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CircuitBoard, Cpu, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950">
      {/* Animated circuit board background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <CircuitBoard className="w-full h-full text-slate-400" />
      </div>

      {/* Floating tech elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.3 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 left-1/4"
      >
        <Cpu className="w-16 h-16 text-blue-400" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.3 : 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/3 right-1/4"
      >
        <Zap className="w-16 h-16 text-indigo-400" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
            <Zap className="w-5 h-5 mr-2" />
            <span>Electrical & Electronics Engineer</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white leading-tight">
            Innovating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Energy Systems</span> Through Engineering Excellence
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              I'm <span className="font-bold text-slate-800 dark:text-white">Muhammad Ahsan</span>, specializing in smart grid technologies, industrial automation, and sustainable energy solutions. My mission is to design electrical systems that bridge innovation with real-world reliability.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Profile image with tech border */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Muhammad Ahsan"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative tech elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-xl z-0"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/20 blur-xl z-0"></div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-slate-500 dark:bg-slate-400 rounded-full mt-1"
          ></motion.div>
        </div>
        <span className="text-sm mt-2 text-slate-500 dark:text-slate-400">Scroll down</span>
      </motion.div>
    </section>
  )
}