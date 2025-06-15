"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { 
  Heart, Brain, Users, Shield, Leaf, 
  Clock, Star, Eye, Globe, Target, Compass,
  Lamp, Cpu, ChevronRight, Download, X,Zap,Telescope,HeartPulse,
  Activity, CpuIcon, BrainCircuit, Cloud, ShieldHalf, Lock, Network, LeafIcon,TreePine,Scale,
  BookOpen, Smartphone, Code, FlaskConical, GlobeIcon, Building2,LampDesk
} from "lucide-react"
import Link from "next/link"

export default function Reflections() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const journalEntries = [
    {
      title: "Values-Driven Leadership",
      icon: <Compass className="w-5 h-5" />,
      content: "Aligning action with authentic purpose",
      isSpecial: true,
      href: "/values-leadership"
    },
    {
      title: "Leading from Within",
      icon: <HeartPulse className="w-5 h-5" />,
      content: "The inner foundations of transformational leadership",
      isSpecial: true,
      href: "/leading-from-within"
    },
    {
      title: "Future-Focused Thinking",
      icon: <Telescope className="w-5 h-5" />,
      content: "Developing strategic foresight for visionary leadership",
      isSpecial: true,
      href: "/future-thinking"
    },
    {
      title: "Empowered Leadership",
      icon: <Zap className="w-5 h-5" />,
      content: "Cultivating ownership and agency at every level",
      isSpecial: true,
      href: "/empowered-leadership"
    },
    {
      title: "Cultivating Collaboration",
      icon: <Users className="w-5 h-5" />,
      content: "Leadership strategies for unleashing collective intelligence",
      isSpecial: true,
      href: "/collaboration"
    },
    {
      title: "Ethical Decision-Making",
      icon: <Scale className="w-5 h-5" />,
      content: "Frameworks for moral clarity in complex leadership",
      isSpecial: true,
      href: "/ethical-decisions"
    },
    {
      title: "Debating Future Ethics",
      icon: <Scale className="w-5 h-5" />,
      content: "Leadership frameworks for navigating moral frontiers",
      isSpecial: true,
      href: "/future-ethics"
    },
    {
      title: "Eco-Systemic Leadership",
      icon: <Globe className="w-5 h-5" />,
      content: "Leading in interconnected networks and complex adaptive systems",
      isSpecial: true,
      href: "/ecosystem"
    },
    {
      title: "Legacy Leadership Planning",
      icon: <TreePine className="w-5 h-5" />,
      content: "Building organizations that thrive beyond your tenure",
      isSpecial: true,
      href: "/leadership"
    },
    {
      title: "Wisdom in Leadership",
      icon: <LampDesk className="w-5 h-5" />,
      content: "Timeless principles and hard-won insights from decades of leadership",
      isSpecial: true,
      href: "/wisdom"
    },
    {
      title: "Imagining Future Worlds",
      icon: <GlobeIcon className="w-5 h-5" />,
      content: "Leadership frameworks for shaping alternative futures responsibly.",
      isSpecial: true,
      href: "/futureworld"
    },
    {
        title: "NeuroWeave: A Leadership Journey",
        icon: <Cpu className="w-5 h-5" />,
        content: "Exploring neural interfaces that merge human cognition with AI systems.",
        isSpecial: true,
        href: "/neuroweave"
    }
  ]

  return (
  <section id="reflections" ref={ref} className="py-20 bg-slate-50 dark:bg-slate-800/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
          Leadership Reflections
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6" />
        <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
          Personal insights and growth through self-reflection and leadership experiences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {journalEntries.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.4,
              delay: index * 0.08,
              ease: "easeOut"
            }}
            className="w-full" // Ensure full width within column
          >
            <div className={`
              h-full flex flex-col rounded-xl p-6
              bg-white dark:bg-slate-800 
              border border-slate-200 dark:border-slate-700
              ${entry.isSpecial ? 
                "border-purple-500 dark:border-purple-400" : 
                ""}
              shadow-sm hover:shadow-md transition-all
            `}>
              <div className="flex items-center mb-4">
                <div className={`
                  p-2 rounded-lg mr-3
                  ${entry.isSpecial ? 
                    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300" : 
                    "bg-indigo-100 dark:bg-indigo-900/30"}
                `}>
                  {entry.icon}
                </div>
                <h3 className={`
                  text-xl font-semibold
                  ${entry.isSpecial ? 
                    "text-purple-700 dark:text-purple-300" : 
                    "text-slate-800 dark:text-white"}
                `}>
                  {entry.title}
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                {entry.content}
              </p>
              
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                <Link 
                  href={entry.href || "#"}
                  className="text-sm font-medium flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                >
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}