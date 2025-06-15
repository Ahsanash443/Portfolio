import { Cpu, BookOpen, BrainCircuit, Activity, Cloud, ShieldHalf, Clock, 
         FlaskConical, Globe as GlobeIcon, Building2, Users, Network, 
         Lock, Smartphone, Code, Zap, Target, Lamp } from "lucide-react"
import Link from "next/link"

export default function NeuroWeavePage() {
  // Leadership insights integrated with technical content
  const sections = [
    {
      title: "Visionary Leadership in Cognitive Technology",
      icon: <Target className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            As I envisioned NeuroWeave in 2025, I recognized that true innovation leadership requires balancing technological ambition with human-centric design. The cognitive crisis emerging by 2050 demanded more than technical solutions—it required a fundamental rethinking of human-machine interaction.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="italic text-blue-700 dark:text-blue-300">
              "Leading this project taught me that breakthrough innovations emerge at the intersection of technical excellence and deep empathy for human needs."
            </p>
          </div>
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Key Leadership Insights:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
              <span><strong>Future-back thinking:</strong> Starting from 2050's projected needs rather than today's limitations</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
              <span><strong>Ethical foresight:</strong> Building privacy and consent into the technology's DNA</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "Building the Neural Ecosystem",
      icon: <Cpu className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Leading the NeuroWeave initiative required assembling interdisciplinary teams of neuroscientists, AI researchers, and ethicists. My role evolved from technical architect to ecosystem conductor, ensuring all components harmonized with our human-first philosophy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              {
                title: "Collaborative Leadership",
                icon: <Users className="w-5 h-5" />,
                desc: "Facilitating knowledge exchange between traditionally siloed disciplines",
                insight: "Created 'neural hackathons' to break down academic barriers"
              },
              {
                title: "Technical Stewardship",
                icon: <Code className="w-5 h-5" />,
                desc: "Maintaining technical rigor while ensuring accessibility",
                insight: "Established open API standards to democratize development"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.desc}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 italic">{item.insight}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: "Ethical Leadership Framework",
      icon: <ShieldHalf className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Developing the Ethical Oversight Consortium (EOC) became my most challenging leadership test. We needed to establish guardrails without stifling innovation—a balance requiring constant dialogue with stakeholders worldwide.
          </p>
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg mb-6 border-l-4 border-amber-400">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Leadership Lesson:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "True ethical leadership means making difficult decisions before they become crises. We established neural data rights frameworks years before regulations required them."
            </p>
          </div>
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Implementation Strategy:</h3>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Formed global ethics advisory board with diverse perspectives</li>
            <li>Implemented 'privacy by design' development protocols</li>
            <li>Created transparent neural data governance policies</li>
          </ol>
        </>
      )
    },
    {
      title: "Technical Vision Execution",
      icon: <BrainCircuit className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Translating the NeuroWeave vision into reality required adaptive leadership at each technical milestone:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            {[
              { 
                year: "2025-2030", 
                achievement: "Established core neural interface protocols",
                challenge: "Overcoming scientific skepticism about non-invasive methods",
                leadership: "Funded high-risk research while maintaining investor confidence"
              },
              { 
                year: "2035", 
                achievement: "First successful human trials",
                challenge: "Addressing ethical concerns about cognitive enhancement",
                leadership: "Pioneered participatory design with diverse test groups"
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <p className="font-bold text-purple-600 dark:text-purple-400">{item.year}</p>
                  <p className="text-slate-700 dark:text-slate-300 mb-2"><strong>Achievement:</strong> {item.achievement}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2"><strong>Challenge:</strong> {item.challenge}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic"><strong>Leadership Approach:</strong> {item.leadership}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Sustainable Leadership Legacy",
      icon: <Lamp className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            My leadership philosophy for NeuroWeave centered on creating systems that would outlast any individual contributor, ensuring the technology's benefits would scale responsibly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              {
                principle: "Open Ecosystem",
                implementation: "Established NeuroWeave Foundation to steward open standards",
                icon: <Network className="w-5 h-5" />
              },
              {
                principle: "Intergenerational Impact",
                implementation: "Created NeuroWeave Fellowship program for young researchers",
                icon: <Users className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.principle}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.implementation}</p>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-purple-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "The true measure of leadership isn't what you build, but what keeps growing after you step away. NeuroWeave's governance model ensures ethical evolution beyond any single leader."
            </p>
          </blockquote>
        </>
      )
    }
  ]

  return (
    <article className="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back button */}
        <nav className="mb-8">
          <Link href="/#reflections" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm">
            ← Back to Leadership Reflections
          </Link>
        </nav>

        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2">
            NeuroWeave: A Leadership Journey
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            How visionary leadership shaped the future of human-AI collaboration
          </p>
          <div className="flex items-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
              <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Personal reflection on leading breakthrough innovation</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mt-6"></div>
        </header>

        {/* Article content */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={index} className="scroll-mt-20" id={`section-${index}`}>
              <div className="flex items-start mb-6">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg mr-4 shadow-sm mt-1">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white pt-1">
                  {section.title}
                </h2>
              </div>
              <div className="ml-12">
                {section.content}
              </div>
            </section>
          ))}

          {/* Closing reflection */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Leadership in the Age of Neural Integration</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Leading the NeuroWeave initiative fundamentally transformed my understanding of technology leadership. The project demanded not just technical expertise, but the ability to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span>Navigate uncharted ethical territories</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span>Maintain long-term vision amid short-term pressures</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span>Build consensus across scientific, business, and policy domains</span>
              </li>
            </ul>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "The greatest lesson? True innovation leadership means being equally comfortable in the laboratory, the boardroom, and the ethics committee—translating between these worlds to create solutions that are both groundbreaking and responsible."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}