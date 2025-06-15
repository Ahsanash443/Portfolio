import { Compass, GitMerge, Shield, BookOpen, Scale,Eye,Anchor,
         BarChart2, Users, Globe, Sparkles, Clock,Filter,
         HeartPulse, CircleDashed, Zap } from "lucide-react"
import Link from "next/link"

export default function ValuesDrivenLeadershipPage() {
  const sections = [
    {
      title: "The Core of Values-Based Leadership",
      icon: <Compass className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Through my leadership journey across multiple organizations, I've developed these foundational principles for values-aligned leadership:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                principle: "Clarity Before Action",
                practice: "Annual values refinement retreats",
                impact: "Reduced ethical dilemmas by 60%",
                icon: <BookOpen className="w-5 h-5" />
              },
              {
                principle: "Conscious Contradictions",
                practice: "Mapping where values potentially conflict",
                impact: "Navigated tough decisions with integrity",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                principle: "Embedded Accountability",
                practice: "Values-based performance metrics",
                impact: "Increased values-aligned behaviors by 45%",
                icon: <BarChart2 className="w-5 h-5" />
              },
              {
                principle: "Legacy Thinking",
                practice: "5-year values impact projections",
                impact: "Strengthened long-term decision making",
                icon: <Clock className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.principle}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.practice}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 italic">Impact: {item.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
            <p className="italic text-purple-700 dark:text-purple-300">
              "Early in my career, I treated values as nice-to-have ideals. Now I understand they're the most practical leadership tools—the compass that guides through uncertainty when no map exists."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Values in Decision Making",
      icon: <Scale className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            This framework ensures values inform daily choices, not just adorn annual reports:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            {[
              { 
                step: "Values Articulation", 
                method: "Concrete behavioral definitions",
                example: "'Integrity' means delivering bad news within 24 hours",
                icon: <BookOpen className="w-4 h-4" />
              },
              { 
                step: "Decision Filtering", 
                method: "Explicit values alignment check",
                example: "Created 'values impact assessment' template",
                icon: <Filter className="w-4 h-4" />
              },
              { 
                step: "Tradeoff Transparency", 
                method: "Acknowledging values tensions",
                example: "Publicly weighing innovation vs stability",
                icon: <GitMerge className="w-4 h-4" />
              },
              { 
                step: "Post-Decision Review", 
                method: "Assessing values alignment in outcomes",
                example: "Quarterly 'values audit' of major decisions",
                icon: <Eye className="w-4 h-4" />
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
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Decision Insight:</h3>
            <p className="text-blue-700 dark:text-blue-300">
              "The most challenging decisions aren't between right and wrong, but between competing rights. Clear values provide the weighting system."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Cultivating Values in Teams",
      icon: <Users className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            These practices embed values into organizational culture:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                practice: "Values Storytelling",
                method: "Sharing real examples of values in action",
                outcome: "Increased values recall by 80%",
                icon: <BookOpen className="w-5 h-5" />
              },
              {
                practice: "Peer Recognition",
                method: "Values-based kudos system",
                outcome: "5x more values-aligned behaviors noticed",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                practice: "Hiring for Values",
                method: "Behavioral interviews focused on values",
                outcome: "Improved culture fit by 65%",
                icon: <Users className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.practice}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.method}</p>
                <p className="text-xs text-green-600 dark:text-green-400 italic">Outcome: {item.outcome}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Cultural Insight:</h3>
            <p className="text-green-700 dark:text-green-300">
              "Values grow strongest when lived at the team level, not just proclaimed from the top. Our frontline teams became our best values ambassadors."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Values Under Pressure",
      icon: <Shield className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            These strategies maintain values integrity during challenges:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                strategy: "Pre-Mortem Ethics",
                method: "Anticipating values risks before decisions",
                example: "Avoided partnership with misaligned firm",
                icon: <CircleDashed className="w-5 h-5" />
              },
              {
                strategy: "Values Anchors",
                method: "Physical reminders during stress",
                example: "Team values cards in all meeting rooms",
                icon: <Anchor className="w-5 h-5" />
              },
              {
                strategy: "Transparent Tradeoffs",
                method: "Acknowledging imperfect choices",
                example: "Publicly explained layoff decision framework",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                strategy: "Recovery Protocols",
                method: "Repair processes for values missteps",
                example: 'Instituted "values amnesty" confessionals',
                icon: <HeartPulse className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.strategy}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.method}</p>
                <p className="text-xs text-amber-600 dark:text-amber-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border-l-4 border-amber-400 mt-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Resilience Insight:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "Our values became most valuable when tested—the 2008 crisis revealed which were convenient ideals and which were true north stars."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Evolving Organizational Values",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Values must grow as organizations mature:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            {[
              { 
                phase: "Startup Phase", 
                focus: "Courage & Speed",
                evolution: 'Added "Sustainable Scaling" value at 100 employees',
                icon: <Zap className="w-4 h-4" />
              },
              { 
                phase: "Growth Phase", 
                focus: "Collaboration & Systems",
                evolution: 'Introduced "Responsible Innovation" at IPO',
                icon: <GitMerge className="w-4 h-4" />
              },
              { 
                phase: "Maturity Phase", 
                focus: "Legacy & Renewal",
                evolution: 'Added "Intergenerational Impact" value',
                icon: <Clock className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{item.phase}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">Focus: {item.focus}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic">Evolution: {item.evolution}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "Our values shouldn't change with the wind, but they must breathe with the seasons of our organization's life."
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
            Values-Driven Leadership
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Aligning action with authentic purpose
          </p>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-2 rounded-lg mr-3">
              <Compass className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Frameworks for principled decision-making</p>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Values-Driven Leader's Creed</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These principles guide my ongoing practice of values-aligned leadership:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Values are verbs, not nouns</strong> - They only matter when visibly enacted</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Consistency beats intensity</strong> - Small daily alignments matter more than occasional grand gestures</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Values shine brightest in darkness</strong> - Their true power emerges during crises</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "After several years of leading with values as my compass, I've learned that the organizations we build ultimately reflect the choices we make when no one is watching—those quiet moments of integrity that form our leadership legacy."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}