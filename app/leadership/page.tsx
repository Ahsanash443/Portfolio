import { Layers, GitMerge, BarChart2, TreePine, 
         Clock, BookText, Sparkles, Handshake, 
         Compass, CircleDashed, Flag, Globe } from "lucide-react"
import Link from "next/link"

export default function LegacyLeadershipPage() {
  const sections = [
    {
      title: "The Mindset of Legacy",
      icon: <TreePine className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Legacy leadership begins with a fundamental shift—from measuring success in quarters to evaluating impact across generations. My approach blends three temporal perspectives:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                dimension: "Foundational Work",
                timeframe: "(Years 0-5)",
                focus: "Building systems that outlast you",
                icon: <Layers className="w-5 h-5" />,
                insight: "Instituted cultural rituals still practiced 15 years later"
              },
              {
                dimension: "Catalytic Impact",
                timeframe: "(Years 5-15)",
                focus: "Creating conditions for others to thrive",
                icon: <Sparkles className="w-5 h-5" />,
                insight: "Mentored 12 leaders who now run their own organizations"
              },
              {
                dimension: "Ripple Effects",
                timeframe: "(15+ Years)",
                focus: "Ideas that reshape industries",
                icon: <Globe className="w-5 h-5" />,
                insight: "Open-source framework adopted by 200+ companies"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-green-600 dark:text-green-400">{item.dimension}</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{item.timeframe}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.focus}</p>
                <p className="text-xs text-green-600 dark:text-green-400 italic">{item.insight}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500 mb-6">
            <p className="italic text-green-700 dark:text-green-300">
              "Early in my career, I planted annual flowers—quick results but no permanence. Now I plant oaks, knowing I may never sit in their shade."
            </p>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Legacy Audit Questions:</h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2" />
              <span>What currently depends on my direct involvement that shouldn't?</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2" />
              <span>Which of our practices would survive my departure unchanged?</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2" />
              <span>What seeds am I planting today that others might harvest in 20 years?</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "Architecting Institutional Memory",
      icon: <BookText className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Wisdom evaporates without systems to preserve it. I've developed these mechanisms to institutionalize knowledge beyond any individual:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-green-400"></div>
            {[
              { 
                system: "Decision Archaeology", 
                method: "Documenting the 'why' behind major choices",
                example: "Created annotated decision logs with context future leaders would need",
                icon: <Compass className="w-4 h-4" />
              },
              { 
                system: "Culture Codification", 
                method: "Articulating tacit norms explicitly",
                example: 'Produced living "Culture Genome" updated by each leadership cohort',
                icon: <GitMerge className="w-4 h-4" />
              },
              { 
                system: "Failure Fossils", 
                method: "Preserving lessons from setbacks",
                example: 'Quarterly "Lessons Unlearned" sessions analyzing past mistakes',
                icon: <CircleDashed className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{item.system}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.method}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Institutional Memory Paradox:</h3>
            <p className="text-blue-700 dark:text-blue-300">
              "The stronger your institutional memory, the less you need the original architects. This is the ultimate test of effective legacy building."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Succession as Innovation",
      icon: <GitMerge className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Most succession planning focuses on continuity. I approach it as an opportunity for reinvention—what I call "evolutionary handoffs":
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                principle: "The 30% Rule",
                explanation: "Successors should change about 30% of your work",
                rationale: "Enough continuity for stability, enough change for progress",
                icon: <BarChart2 className="w-5 h-5" />
              },
              {
                principle: "Shadow Periods",
                explanation: 'Prospective leaders "edit" your decisions in parallel',
                rationale: "Reveals thinking patterns before authority transfer",
                icon: <Clock className="w-5 h-5" />
              },
              {
                principle: "Legacy Vaccines",
                explanation: "Intentional exposure to your mistakes",
                rationale: "Prevents repeating your errors without understanding why",
                icon: <Flag className="w-5 h-5" />
              },
              {
                principle: "Reverse Mentorship",
                explanation: "Successors mentor you on emerging perspectives",
                rationale: "Creates two-way wisdom transfer",
                icon: <Handshake className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.principle}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.explanation}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 italic">{item.rationale}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Handoff Insight:</h3>
            <p className="text-purple-700 dark:text-purple-300">
              "The best succession feels simultaneously surprising and inevitable—like the next chapter of a great book that couldn't have gone any other way."
            </p>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Succession Timeline Framework:</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-left text-slate-700 dark:text-slate-300">
              <thead className="text-xs text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-2">Phase</th>
                  <th className="px-4 py-2">Activities</th>
                  <th className="px-4 py-2">Duration</th>
                  <th className="px-4 py-2">Success Metric</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    phase: "Legacy Discovery",
                    activities: "Articulate unwritten knowledge",
                    duration: "6-12 months",
                    metric: 'Documented "invisible curriculum"'
                  },
                  {
                    phase: "Parallel Leadership",
                    activities: "Joint decision-making",
                    duration: "1-2 years",
                    metric: "Team seeks successor's input unprompted"
                  },
                  {
                    phase: "Shadow Transition",
                    activities: "Successor leads while you advise",
                    duration: "6 months",
                    metric: "Your involvement becomes optional"
                  }
                ].map((item, i) => (
                  <tr key={i} className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3 font-medium">{item.phase}</td>
                    <td className="px-4 py-3">{item.activities}</td>
                    <td className="px-4 py-3 text-purple-600 dark:text-purple-400">{item.duration}</td>
                    <td className="px-4 py-3 italic">{item.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )
    },
    {
      title: "Measuring the Immeasurable",
      icon: <BarChart2 className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Legacy resists traditional metrics. These alternative indicators help assess long-term impact:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                metric: "Conceptual Children",
                definition: "Ideas that spawn independent initiatives",
                example: "Your framework adapted by others in unexpected ways",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                metric: "Cultural Osmosis",
                definition: "Your practices adopted without attribution",
                example: "Hearing your phrases used by people who never met you",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                metric: "Negative Space Impact",
                definition: "Problems that no longer exist because of your work",
                example: "Industry-wide issues your solutions made obsolete",
                icon: <CircleDashed className="w-5 h-5" />
              },
              {
                metric: "Multiplier Effect",
                definition: "Your mentees' collective impact",
                example: "Your protégés' organizations' total reach",
                icon: <Globe className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.metric}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.definition}</p>
                <p className="text-xs text-amber-600 dark:text-amber-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border-l-4 border-amber-400 mt-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Legacy Measurement Insight:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "We measure footsteps by their depth, not their number. The metrics that matter are those that reveal enduring influence beyond formal recognition."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "The Final Leadership Act",
      icon: <Flag className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            How you exit matters as much as how you lead. My framework for graceful departure:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-amber-400"></div>
            {[
              { 
                stage: "1. Intentional Distance", 
                action: "Gradually reduce presence",
                purpose: "Allow new leadership space to emerge",
                duration: "6-18 months",
                icon: <Compass className="w-4 h-4" />
              },
              { 
                stage: "2. Symbolic Closure", 
                action: "Ritualize the transition",
                purpose: "Mark psychological shift for organization",
                duration: "1-3 events",
                icon: <Handshake className="w-4 h-4" />
              },
              { 
                stage: "3. Strategic Silence", 
                action: "Publicly support without intervening",
                purpose: 'Prevent "ghost leadership"',
                duration: "1-2 years",
                icon: <CircleDashed className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{item.stage}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1"><strong>Action:</strong> {item.action}</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1"><strong>Purpose:</strong> {item.purpose}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic">Duration: {item.duration}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-amber-50 dark:from-purple-900/20 dark:to-amber-900/20 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Final Leadership Paradox:</h3>
            <p className="text-purple-700 dark:text-purple-300">
              "Your legacy becomes truly secure only when the organization can thrive without remembering you. This is leadership's last and greatest gift."
            </p>
          </div>
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
            Legacy Leadership Planning
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Building organizations that thrive beyond your tenure
          </p>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-100 to-green-100 dark:from-purple-900/20 dark:to-green-900/20 p-2 rounded-lg mr-3">
              <TreePine className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Frameworks for enduring impact</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 via-green-400 to-amber-400 mt-6"></div>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Leader's Ultimate Test</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              After decades of building organizations, I've come to see legacy not as what we leave behind, but as what keeps growing:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mt-2 mr-2" />
                <span><strong>Institutional DNA</strong> - The replicable patterns you encode</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mt-2 mr-2" />
                <span><strong>Leadership Multiplication</strong> - The leaders who emerge because of you</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mt-2 mr-2" />
                <span><strong>Adaptive Principles</strong> - The ideas that evolve beyond their origin</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "The organizations I'm proudest of are those where newcomers can't tell which ideas were originally mine. That seamless integration—where individual contribution becomes collective capability—is the mark of true legacy."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}