import { Globe as GlobeIcon, BookOpen, BrainCircuit, Layers, Compass, 
         Zap, Users, Cpu, Clock, Shield, Leaf, Code, BarChart2, 
         Lightbulb, Network, Mail } from "lucide-react"
import Link from "next/link"

export default function FutureWorldsPage() {
  const sections = [
    {
      title: "The Art of Strategic Foresight",
      icon: <Compass className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Developing the capacity for strategic foresight has been my most valuable leadership skill in shaping future worlds. It's not about predicting, but about creating mental models that allow organizations to navigate uncertainty.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="italic text-blue-700 dark:text-blue-300">
              "The best leaders I've worked with don't just react to the future—they actively participate in its creation through disciplined imagination."
            </p>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Core Practices:</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              {
                title: "Horizon Scanning",
                icon: <GlobeIcon className="w-5 h-5" />,
                desc: "Systematically tracking weak signals across technology, society, and environment",
                insight: "Established monthly 'future briefings' for my team"
              },
              {
                title: "Scenario Planning",
                icon: <Layers className="w-5 h-5" />,
                desc: "Developing multiple plausible futures rather than single projections",
                insight: "Created four archetypal worlds for 2040 to stress-test strategies"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.desc}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 italic">{item.insight}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: "Architecting Alternative Futures",
      icon: <Layers className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            My work in future-casting has revealed distinct paradigms that could emerge by mid-century. Each represents not just technological possibilities, but fundamental shifts in human organization and values.
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-green-400 to-blue-400"></div>
            {[
              { 
                name: "The Symbiotic Age", 
                characteristic: "Human-AI collaboration becomes seamless",
                leadershipReq: "Managing hybrid intelligence systems",
                icon: <Cpu className="w-4 h-4" />
              },
              { 
                name: "The Climate Renaissance", 
                characteristic: "Society reorganizes around regeneration",
                leadershipReq: "Leading through resource constraints",
                icon: <Leaf className="w-4 h-4" />
              },
              { 
                name: "The Distributed Era", 
                characteristic: "Nation-states give way to network civilizations",
                leadershipReq: "Governing without central authority",
                icon: <Network className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-green-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-green-600 dark:text-green-400">{item.name}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-2">{item.characteristic}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 italic"><strong>Leadership Requirement:</strong> {item.leadershipReq}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg mb-6 border-l-4 border-amber-400">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Critical Insight:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "The most effective future architects don't choose between these paths—they build organizational muscles to thrive across multiple possible futures simultaneously."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Leadership for Exponential Times",
      icon: <Zap className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Traditional leadership models collapse under exponential change. Through trial and error, I've identified key adaptations required to steer organizations through accelerating transformation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                shift: "From Predict → Control",
                to: "Sense → Respond",
                example: "Replaced 5-year plans with dynamic opportunity mapping",
                icon: <Compass className="w-5 h-5" />
              },
              {
                shift: "From Stability Seeking",
                to: "Antifragility Building",
                example: "Designed systems that improve through disruption",
                icon: <BarChart2 className="w-5 h-5" />
              },
              {
                shift: "From Knowledge Hoarding",
                to: "Learning Velocity",
                example: "Measured and optimized organizational learning rates",
                icon: <BookOpen className="w-5 h-5" />
              },
              {
                shift: "From Risk Mitigation",
                to: "Intelligent Risk Taking",
                example: "Created 'failure budgets' for experimental projects",
                icon: <Shield className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-through">{item.shift}</p>
                    <p className="font-semibold text-purple-600 dark:text-purple-400">→ {item.to}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">{item.example}</p>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "The leaders who thrive in exponential times are those who can hold two contradictory truths: that we must act decisively today, while remaining ready to abandon our assumptions tomorrow."
            </p>
          </blockquote>
        </>
      )
    },
    {
      title: "Ethical Dilemmas of Future Building",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Imagining future worlds inevitably surfaces profound ethical questions. I've developed frameworks to navigate these challenges without stifling innovation.
          </p>
          
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg mb-6 border-l-4 border-red-400">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Hard-Won Lesson:</h3>
            <p className="text-red-700 dark:text-red-300">
              "Early in my career, I viewed ethics as constraints. Now I understand they're design parameters—the boundaries within which truly great innovation occurs."
            </p>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Decision Framework:</h3>
          <ol className="list-decimal list-inside space-y-4 mb-6 text-slate-700 dark:text-slate-300">
            <li>
              <strong>Intergenerational Impact Assessment</strong>
              <p className="text-sm text-slate-600 dark:text-slate-400 ml-6">How will this decision echo through future decades?</p>
            </li>
            <li>
              <strong>Distributed Benefit Analysis</strong>
              <p className="text-sm text-slate-600 dark:text-slate-400 ml-6">Who gains and who might be harmed across different scenarios?</p>
            </li>
            <li>
              <strong>Reversibility Evaluation</strong>
              <p className="text-sm text-slate-600 dark:text-slate-400 ml-6">Can we undo this path if unintended consequences emerge?</p>
            </li>
          </ol>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                case: "The Privacy Tradeoff",
                resolution: "Developed differential privacy protocols before they were mandated",
                icon: <Mail className="w-5 h-5" />
              },
              {
                case: "AI Consciousness Debate",
                resolution: "Established sentience review boards despite industry resistance",
                icon: <BrainCircuit className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.case}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.resolution}</p>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      title: "Cultivating Future-Ready Teams",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            The organizations that will shape future worlds aren't those with the best technology, but those with the most adaptable people. My leadership approach focuses on building future-ready capabilities at all levels.
          </p>
          
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 ml-3.5"></div>
            {[
              { 
                practice: "Cognitive Flexibility Training", 
                method: "Quarterly 'unlearning' workshops to challenge assumptions",
                outcome: "Teams became 40% faster at adopting new paradigms",
                icon: <BrainCircuit className="w-4 h-4" />
              },
              { 
                practice: "Future Role Prototyping", 
                method: "Employees spend 20% time in imagined future job roles",
                outcome: "Identified emerging skill gaps 3-5 years early",
                icon: <Code className="w-4 h-4" />
              },
              { 
                practice: "Scenario Immersion", 
                method: "Live simulations of alternative futures",
                outcome: "Improved strategic decision quality by 65%",
                icon: <GlobeIcon className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pl-10 pb-6 last:pb-0">
                <div className="absolute left-0 top-0 h-6 w-6 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="ml-2">
                  <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-1">{item.practice}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.method}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Outcome: {item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg mt-6 border-l-4 border-green-400">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Transformational Insight:</h3>
            <p className="text-green-700 dark:text-green-300">
              "The most powerful future-shaping tool isn't a technology—it's an organization's collective imagination. Leaders must become chief imagination officers."
            </p>
          </div>
        </div>
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
            Imagining Future Worlds
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Leadership frameworks for shaping what comes next
          </p>
          <div className="flex items-center">
            <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
              <GlobeIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Strategic foresight and responsible innovation</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mt-6"></div>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Leader as Worldbuilder</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              After decades of helping organizations navigate the future, I've come to see leadership as a form of responsible worldbuilding. The frameworks we choose today become the realities of tomorrow.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Foresight is a moral obligation</strong> - Those with the capacity to anticipate futures have a duty to do so</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>All futures are local</strong> - Global transformation begins with changes to daily practice</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Hope is a strategic resource</strong> - Believing better worlds are possible fuels the work to create them</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-4 rounded-lg">
              <p className="text-blue-700 dark:text-blue-300 italic">
                "The most important question I've learned to ask isn't 'What will happen?' but 'What worlds do we want to make possible?' This shift from prediction to creation is the essence of transformational leadership."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}