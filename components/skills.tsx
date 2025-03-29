"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cpu, Zap, Code, Wrench, Layers, GitMerge } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Group skills by category
  const skillCategories = [
    {
      name: "Hardware & Design",
      icon: <Cpu className="w-5 h-5" />,
      skills: [
        "PLC Ladder Logic",
        "AutoCAD Electrical",
        "PCB Design (Altium/KiCad)",
        "PROTEUS Schematic",
        "Control Systems"
      ]
    },
    {
      name: "Power Systems",
      icon: <Zap className="w-5 h-5" />,
      skills: [
        "High Voltage Techniques",
        "Power Transmission",
        "SCADA Systems",
        "Energy Management",
        "Electrical Measurements"
      ]
    },
    {
      name: "Programming",
      icon: <Code className="w-5 h-5" />,
      skills: [
        "C/C++ (Embedded Systems)",
        "MATLAB/Simulink",
        "Python (Data Analysis)",
        "Ladder Logic",
        "VHDL/Verilog"
      ]
    },
    {
      name: "Tools & Software",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        "Microsoft 365",
        "LabVIEW",
        "ETAP",
        "LTspice",
        "Siemens TIA Portal"
      ]
    },
    {
      name: "Professional Skills",
      icon: <GitMerge className="w-5 h-5" />,
      skills: [
        "Technical Documentation",
        "Project Management",
        "Team Collaboration",
        "Problem Solving",
        "Technical Presentations"
      ]
    }
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-lg">
            My core competencies in electrical engineering and related technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                  {category.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="flex items-center text-slate-600 dark:text-slate-300"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}