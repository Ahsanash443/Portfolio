"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BatteryCharging, Cpu, Zap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Solar-Powered Wireless Mobile Charging System',
      institution: 'Girne American University',
      period: "Final Year Project",
      description: [
        'Developed complete wireless charging solution harnessing solar energy',
        'Designed power management circuitry for efficient energy conversion',
        'Implemented resonant inductive coupling for wireless power transfer',
        'Optimized system for maximum energy efficiency and charge stability'
      ],
      challenges: [
        'Solar panel integration with varying light conditions',
        'Precision tuning of resonant circuits',
        'Thermal management during charging cycles',
        'Maintaining consistent power delivery'
      ],
      detailedDescription: `During my bachelors at Girne American University, one of my key projects involved the development of a wireless mobile charging system powered by solar energy. This project allowed me to synthesize my accumulated knowledge of electronics. Given my strong foundation in electronic circuitry, the design and implementation of the core charging mechanism itself presented a manageable challenge. However, the project's true complexity lay in the iterative process of achieving each milestone. While the underlying concepts were not inherently difficult, the practical realization of a functional and efficient system demanded significant time and meticulous attention to detail. Every stage, from solar panel integration to wireless power transfer optimization, presented unique hurdles that required creative problem-solving and rigorous testing.`,
      imageUrl: 'solar-panel.jpg',
    },
    {
      title: 'Wireless Battery Charging System with Battery Monitoring',
      institution: 'Girne American University',
      period: 'Semester Project',
      description: [
        'Implemented wireless charging using transmitter/receiver coils',
        'Arduino-controlled charging with LCD battery display',
        'Designed battery voltage/current monitoring circuit',
        'Extensive research and circuit design implementation'
      ],
      challenges: [
        'Complex code implementation and debugging',
        'Fine-tuning charging current and system parameters',
        'Ensuring stable wireless power transfer',
        'Achieving real-time battery monitoring accuracy'
      ],
      detailedDescription: `I developed a wireless battery charging system that displays the battery percentage and strength using an Arduino. Although this code was not simple, I dedicated many hours to research and circuit design to complete the project. The system uses a transmitter coil to generate an electromagnetic field that induces current in a receiver coil, which then charges the battery. The Arduino controls the charging process while monitoring the battery's state of charge, displaying voltage, current, and charge percentage on an LCD screen. This challenging but rewarding experience deepened my understanding of both electronics and programming, and I'm grateful to my professor Dr. Kamil Dimililer for his guidance.`,
      imageUrl: 'wireless-charging.jpg',
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Engineering Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            Practical applications of electrical engineering principles
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden mb-12"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Updated Image component */}
                  <div className="w-full md:w-1/2">
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} prototype`}
                      layout="responsive" // Makes image responsive
                      width={500} // Adjust this value as needed
                      height={375} // Adjust this value as needed
                      className="rounded-lg object-contain" // Ensure the image keeps its aspect ratio
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                      {project.institution} • {project.period}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      {project.detailedDescription}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="flex items-center text-lg font-semibold text-slate-800 dark:text-white mb-4">
                      <Zap className="w-5 h-5 text-blue-500 mr-2" />
                      Technical Implementation
                    </h4>
                    <ul className="space-y-3">
                      {project.description.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center text-lg font-semibold text-slate-800 dark:text-white mb-4">
                      <Cpu className="w-5 h-5 text-blue-500 mr-2" />
                      Key Challenges
                    </h4>
                    <ul className="space-y-3">
                      {project.challenges.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 className="flex items-center text-lg font-semibold text-slate-800 dark:text-white mb-4">
                    <BatteryCharging className="w-5 h-5 text-blue-500 mr-2" />
                    Project Impact
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    {index === 0 ? 
                      "This project demonstrated that successful engineering requires both theoretical knowledge and persistent execution. While I had strong foundations in electronic circuitry, the practical implementation demanded meticulous attention to detail at every stage - from solar panel integration to wireless power transfer optimization. The experience reinforced that innovation emerges through creative problem-solving and rigorous testing of each component interaction." : 
                      "This challenging but rewarding experience deepened my understanding of both electronics and programming. The process of troubleshooting and optimizing the wireless power transfer system provided invaluable hands-on experience with embedded systems design, and I gained significant confidence in my ability to transform theoretical concepts into functional prototypes."}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
