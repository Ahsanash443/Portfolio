"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Briefcase, ChevronRight, GraduationCap, Cpu, Zap } from "lucide-react"

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"education" | "work">("education")

  const education = [
    {
      id: 1,
      degree: "Masters of Engineering Practice",
      institution: "Murdoch University",
      location: "Perth, Western Australia",
      period: "Feb 2024 - Present",
      icon: <GraduationCap className="w-5 h-5" />,
      highlights: [
        "Smart Industrial Control specialization",
        "IoT integration & machine learning",
        "Industrial automation & robotics"
      ]
    },
    {
      id: 2,
      degree: "B.Sc. Electrical Engineering",
      institution: "Girne American University",
      location: "Northern Cyprus",
      period: "2017 - 2023",
      icon: <BookOpen className="w-5 h-5" />,
      highlights: [
        "Circuit analysis & power systems",
        "CAD software & programming",
        "Multiple engineering projects"
      ]
    }
  ]

  const work = [
    {
      id: 1,
      position: "Electrical Engineer",
      company: "Al-Barakah Group",
      location: "Karachi, Pakistan",
      period: "Sep 2023 - Feb 2024",
      icon: <Zap className="w-5 h-5" />,
      highlights: [
        "Designed electrical systems for buildings",
        "Managed team of technicians",
        "Quality control implementation"
      ]
    },
    {
      id: 2,
      position: "Trainee Engineer",
      company: "Makkah Engineering",
      location: "Karachi, Pakistan",
      period: "Mar 2023 - Jul 2023",
      icon: <Cpu className="w-5 h-5" />,
      highlights: [
        "PLC systems & solar panels",
        "HVAC control development",
        "Practical project experience"
      ]
    }
  ]

  return (
    <section id="carrer" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            My Professional Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Combining academic excellence with practical industry experience
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Navigation */}
          <div className="md:w-1/4">
            <div className="sticky top-28 space-y-2">
              <button
                onClick={() => setActiveTab("education")}
                className={`w-full text-left px-6 py-3 rounded-lg flex items-center transition-all ${
                  activeTab === "education" 
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <GraduationCap className="w-5 h-5 mr-3" />
                Education
              </button>
              <button
                onClick={() => setActiveTab("work")}
                className={`w-full text-left px-6 py-3 rounded-lg flex items-center transition-all ${
                  activeTab === "work" 
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <Briefcase className="w-5 h-5 mr-3" />
                Work Experience
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-3/4">
            {activeTab === "education" ? (
              <motion.div
                key="education"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {education.map((item) => (
                  <div key={item.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.degree}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">
                          {item.institution} • {item.location} • {item.period}
                        </p>
                        <ul className="space-y-2 mt-4">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                              <ChevronRight className="w-4 h-4 mt-1 mr-2 text-blue-500 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="work"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {work.map((item) => (
                  <div key={item.id} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.position}</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">
                          {item.company} • {item.location} • {item.period}
                        </p>
                        <ul className="space-y-2 mt-4">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                              <ChevronRight className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}