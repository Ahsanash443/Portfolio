import { Scale, BrainCircuit, Cpu, Zap, Eye, BookOpen, 
         GitMerge, Users, Shield, Clock, Globe, Sparkles, Flag,
         BarChart2, Compass, CircleDashed } from "lucide-react"
import Link from "next/link"

export default function FutureEthicsPage() {
  const sections = [
    {
      title: "The Acceleration of Ethical Dilemmas",
      icon: <Zap className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            As technology outpaces moral frameworks, leaders face unprecedented ethical challenges. My work at the intersection of AI and human rights revealed these emerging tension points:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                dilemma: "Algorithmic Accountability",
                dimension: "Who answers for AI decisions?",
                leadershipAction: "Created cross-functional ethics review boards",
                icon: <Cpu className="w-5 h-5" />
              },
              {
                dilemma: "Neuroprivacy",
                dimension: "Cognitive data as personal property?",
                leadershipAction: "Pioneered neural data consent frameworks",
                icon: <BrainCircuit className="w-5 h-5" />
              },
              {
                dilemma: "Digital Afterlives",
                dimension: "Posthumous AI personas' rights?",
                leadershipAction: "Established digital legacy protocols",
                icon: <Eye className="w-5 h-5" />
              },
              {
                dilemma: "Automated Inequality",
                dimension: "When efficiency violates equity?",
                leadershipAction: "Implemented algorithmic bias stress tests",
                icon: <Scale className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.dilemma}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2 italic">{item.dimension}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400">Leadership response: {item.leadershipAction}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
            <p className="italic text-purple-700 dark:text-purple-300">
              "The most dangerous ethical failures aren't malicious acts—they're thoughtful decisions made with incomplete moral frameworks. Leaders must expand their ethical imagination."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Anticipatory Ethics Framework",
      icon: <Compass className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Reactive ethics leaves organizations vulnerable. I developed this proactive framework to navigate emerging moral landscapes:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            {[
              { 
                step: "Horizon Scanning", 
                method: "Systematically tracking weak ethical signals",
                tool: "Ethical early warning radar",
                icon: <Globe className="w-4 h-4" />
              },
              { 
                step: "Pre-Mortem Analysis", 
                method: "Imagining future ethical failures",
                tool: "Reverse stress testing",
                icon: <CircleDashed className="w-4 h-4" />
              },
              { 
                step: "Moral Prototyping", 
                method: "Testing ethical boundaries safely",
                tool: "Controlled ethics sandboxes",
                icon: <GitMerge className="w-4 h-4" />
              },
              { 
                step: "Governance Scaffolding", 
                method: "Building adaptive oversight structures",
                tool: "Modular ethics frameworks",
                icon: <BarChart2 className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{item.step}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.method}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Tool: {item.tool}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Framework Insight:</h3>
            <p className="text-blue-700 dark:text-blue-300">
              "Ethical leadership isn't about having all the answers—it's about creating the conditions where the right questions get asked consistently."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "The Leader as Moral Translator",
      icon: <GitMerge className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Bridging technical possibilities with human values requires translating between domains. These practices help leaders navigate ethical debates:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                role: "Ethical Storyteller",
                practice: "Framing abstract issues in human narratives",
                example: "Used sci-fi scenarios to illustrate AI risks",
                icon: <BookOpen className="w-5 h-5" />
              },
              {
                role: "Values Archaeologist",
                practice: "Unearthing implicit assumptions",
                example: 'Revealed hidden biases in "neutral" algorithms',
                icon: <Eye className="w-5 h-5" />
              },
              {
                role: "Moral Reframer",
                practice: "Restating positions to find common ground",
                example: 'Converted "privacy vs security" to "trust architecture"',
                icon: <Sparkles className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.role}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.practice}</p>
                <p className="text-xs text-green-600 dark:text-green-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Translation Challenge:</h3>
            <p className="text-green-700 dark:text-green-300">
              "The most heated ethical debates often stem from participants using the same words with different moral dictionaries. Leaders must become lexicographers of values."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Ethical Stress Testing",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Like financial stress tests, ethical systems need deliberate pressure. My team developed these challenging exercises:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                test: "The Generations Audit",
                method: "Evaluate decisions through 22nd-century eyes",
                question: "How might future generations condemn this?",
                icon: <Clock className="w-5 h-5" />
              },
              {
                test: "The Inverse Golden Rule",
                method: "Experience your decisions from receiving end",
                question: "Would I accept this if roles were reversed?",
                icon: <Users className="w-5 h-5" />
              },
              {
                test: "The Marginalized Lens",
                method: "View choices through most vulnerable stakeholders",
                question: "Who bears hidden costs of this benefit?",
                icon: <Scale className="w-5 h-5" />
              },
              {
                test: "The Disclosure Standard",
                method: "Imagine full transparency of decision process",
                question: "Would I stand by this if all communications became public?",
                icon: <Eye className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.test}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.method}</p>
                <p className="text-xs text-red-600 dark:text-red-400 italic">Key question: {item.question}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-400 mt-6">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Stress Test Insight:</h3>
            <p className="text-red-700 dark:text-red-300">
              "Ethical systems are like immune systems—they strengthen through controlled exposure to threats, not sterile isolation from them."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Building Ethical Resilience",
      icon: <BrainCircuit className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Moral fatigue plagues modern leaders. These practices sustain ethical energy over long-term challenges:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-amber-400 to-purple-400"></div>
            {[
              { 
                practice: "Moral Replenishment", 
                method: "Regular immersion in positive impact stories",
                frequency: 'Monthly "ethical inspiration" sessions',
                icon: <Sparkles className="w-4 h-4" />
              },
              { 
                practice: "Cognitive Counterweights", 
                method: "Balancing heavy decisions with uplifting work",
                frequency: "Alternate difficult choices with creative projects",
                icon: <Scale className="w-4 h-4" />
              },
              { 
                practice: "Ethical Waypoints", 
                method: "Small, clear wins during long moral journeys",
                frequency: "Weekly measurable integrity milestones",
                icon: <Flag className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-amber-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-amber-100 dark:bg-amber-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-amber-600 dark:text-amber-400">{item.practice}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.method}</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 italic">Frequency: {item.frequency}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-purple-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "Sustaining ethical leadership requires treating morality as a renewable resource—continuously replenished through practice, community, and visible impact."
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
            Debating Future Ethics
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Leadership frameworks for navigating moral frontiers
          </p>
          <div className="flex items-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
              <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Anticipating and resolving emerging moral dilemmas</p>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Ethical Leader's Compass</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              After navigating dozens of moral crises, these principles guide my ethical leadership:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Moral humility beats false certainty</strong> - Comfort with ambiguity prevents ethical blindness</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Process over pronouncements</strong> - Sustainable ethics live in systems, not speeches</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Future-back moral reasoning</strong> - How will history judge today's "necessary" compromises?</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "The defining ethical challenge of our era isn't choosing between right and wrong—it's discerning between competing rights. Leaders must build capacity for moral complexity."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}