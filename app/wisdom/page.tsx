import { BookOpen, BrainCircuit, LampDesk, Scale, HeartPulse, Users, Clock,Compass,
         Eye, Scroll, GitCommit, Sparkles, BarChart, 
         Telescope, Leaf, CandlestickChart } from "lucide-react"
import Link from "next/link"

export default function WisdomLeadershipPage() {
  const sections = [
    {
      title: "The Alchemy of Experience",
      icon: <BookOpen className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            True leadership wisdom emerges not from mere experience, but from the deliberate distillation of lessons across decades. My journey has taught me that wisdom comes from three transformative practices:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                process: "Reflection",
                method: "Daily journaling of key decisions and outcomes",
                icon: <Eye className="w-5 h-5" />,
                insight: "Created 'decision autopsies' for major choices"
              },
              {
                process: "Synthesis",
                method: "Finding patterns across disparate experiences",
                icon: <GitCommit className="w-5 h-5" />,
                insight: "Developed cross-domain mental models"
              },
              {
                process: "Application",
                method: "Consciously applying past lessons to new contexts",
                icon: <Sparkles className="w-5 h-5" />,
                insight: "Maintained 'wisdom experiments' portfolio"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400">{item.process}</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.method}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 italic">{item.insight}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
            <p className="italic text-purple-700 dark:text-purple-300">
              "Early in my career, I collected achievements. In mid-career, I collected knowledge. Now I collect wisdom—the subtle understandings that transform good leaders into wise ones."
            </p>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Wisdom Cultivation Framework:</h3>
          <ol className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300">
            <li><strong>Document</strong> - Capture raw experiences in real-time</li>
            <li><strong>Distill</strong> - Extract principles from specific events</li>
            <li><strong>Detach</strong> - Examine lessons without ego attachment</li>
            <li><strong>Deploy</strong> - Apply insights to novel situations</li>
          </ol>
        </>
      )
    },
    {
      title: "The Paradoxes of Wise Leadership",
      icon: <Scale className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Wisdom often resides in embracing apparent contradictions. The most effective leaders I've mentored learn to hold competing truths simultaneously:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-amber-400 to-purple-400"></div>
            {[
              { 
                paradox: "Confidence ↔ Humility", 
                resolution: "Unshakable in values, flexible in methods",
                example: "Changed entire product strategy based on junior team member's insight",
                icon: <BarChart className="w-4 h-4" />
              },
              { 
                paradox: "Speed ↔ Patience", 
                resolution: "Urgent execution with long-term perspective",
                example: "Simultaneously delivered quarterly results while building 10-year capability",
                icon: <Clock className="w-4 h-4" />
              },
              { 
                paradox: "Tradition ↔ Innovation", 
                resolution: "Honor legacy while inventing future",
                example: "Modernized century-old company by reviving its founder's original disruptive spirit",
                icon: <CandlestickChart className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-amber-100 dark:bg-amber-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-amber-600 dark:text-amber-400">{item.paradox}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-2 italic text-sm">{item.resolution}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Wisdom Note:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "The test of leadership wisdom isn't solving problems—it's recognizing which problems are worth solving, which must be endured, and which will solve themselves with patience."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Temporal Intelligence",
      icon: <Clock className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Wise leaders develop sophisticated relationships with time—understanding rhythms, cycles, and the appropriate pace for different challenges. My framework for temporal intelligence:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                dimension: "Pace",
                definition: "Matching speed to context",
                practice: "Vary decision velocity based on consequence horizon",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                dimension: "Rhythm",
                definition: "Understanding natural cycles",
                practice: "Align initiatives with organizational seasons",
                icon: <HeartPulse className="w-5 h-5" />
              },
              {
                dimension: "Horizon",
                definition: "Balancing timeframes",
                practice: "Simultaneously track daily ops and decade trends",
                icon: <Telescope className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.dimension}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.definition}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 italic">{item.practice}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Temporal Wisdom in Action:</h3>
            <p className="text-blue-700 dark:text-blue-300">
              "When facing a crisis, I ask: 'Does this require minutes, months, or years to resolve properly?' This simple question prevents short-term reactions to long-term challenges."
            </p>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mt-6 mb-3">Time Horizon Framework:</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-700 dark:text-slate-300">
              <thead className="text-xs text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-2">Horizon</th>
                  <th className="px-4 py-2">Focus</th>
                  <th className="px-4 py-2">Questions</th>
                  <th className="px-4 py-2">Tools</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    horizon: "Tactical (0-3mo)",
                    focus: "Execution",
                    questions: "Are we delivering? What's blocking us?",
                    tools: "OKRs, daily standups"
                  },
                  {
                    horizon: "Strategic (1-3yr)",
                    focus: "Adaptation",
                    questions: "Are we relevant? What's changing?",
                    tools: "Scenario planning"
                  },
                  {
                    horizon: "Evolutionary (5-10yr)",
                    focus: "Transformation",
                    questions: "What should we become? What seeds to plant?",
                    tools: "Future backcasting"
                  }
                ].map((item, i) => (
                  <tr key={i} className="border-b border-slate-200 dark:border-slate-700">
                    <td className="px-4 py-3 font-medium">{item.horizon}</td>
                    <td className="px-4 py-3">{item.focus}</td>
                    <td className="px-4 py-3 italic">{item.questions}</td>
                    <td className="px-4 py-3 text-blue-600 dark:text-blue-400">{item.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "Wisdom in Crisis Leadership",
      icon: <HeartPulse className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            True wisdom reveals itself in moments of crisis. Through economic collapses, industry disruptions, and personal trials, I've identified patterns in how wise leaders navigate turbulence:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                principle: "The Stillness Paradox",
                explanation: "Increasing calm as chaos grows",
                example: "During the 2030 market crash, we held silent minutes before each decision",
                icon: <Eye className="w-5 h-5" />
              },
              {
                principle: "Values as Compass",
                explanation: "Using core principles as decision filters",
                example: "Turned down lucrative deal that conflicted with sustainability values",
                icon: <Compass className="w-5 h-5" />
              },
              {
                principle: "Intelligent Sacrifice",
                explanation: "Knowing what to temporarily let go",
                example: "Paused R&D to preserve culture during restructuring",
                icon: <Scale className="w-5 h-5" />
              },
              {
                principle: "Legacy Consciousness",
                explanation: "Making choices you'll want to have made",
                example: "Chose employee retention over short-term profits",
                icon: <Scroll className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.principle}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.explanation}</p>
                <p className="text-xs text-red-600 dark:text-red-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-400 mb-6">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Crisis Wisdom:</h3>
            <p className="text-red-700 dark:text-red-300">
              "In my first crisis, I sought perfect solutions. Now I understand wisdom means finding the least worst option with clarity, then adapting as circumstances evolve."
            </p>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Crisis Decision Checklist:</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2" />
              <span><strong>Clarify non-negotiables</strong> - What absolutely must be preserved?</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2" />
              <span><strong>Assess time horizons</strong> - Is this a permanent or temporary change?</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2" />
              <span><strong>Preserve optionality</strong> - What doors are we closing unnecessarily?</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "The Wisdom of Letting Go",
      icon: <Leaf className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Perhaps the most counterintuitive wisdom: knowing what to release. My journey through leadership roles taught me the profound power of strategic relinquishment:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-green-400 to-purple-400"></div>
            {[
              { 
                stage: "Early Career", 
                focus: "Letting go of perfection",
                lesson: "Progress beats perfection every time",
                icon: <Sparkles className="w-4 h-4" />
              },
              { 
                stage: "Mid-Career", 
                focus: "Letting go of control",
                lesson: "Teams outperform individuals when empowered",
                icon: <Users className="w-4 h-4" />
              },
              { 
                stage: "Senior Leadership", 
                focus: "Letting go of legacy",
                lesson: "Organizations must evolve beyond founders",
                icon: <LampDesk className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-green-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-green-600 dark:text-green-400">{item.stage}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-1"><strong>Release:</strong> {item.focus}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 italic">{item.lesson}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Letting Go Framework:</h3>
            <ol className="list-decimal list-inside space-y-2 text-green-700 dark:text-green-300">
              <li><strong>Identify</strong> - What's no longer serving the mission?</li>
              <li><strong>Grieve</strong> - Acknowledge emotional attachments</li>
              <li><strong>Celebrate</strong> - Honor what was learned</li>
              <li><strong>Release</strong> - Create intentional closure</li>
              <li><strong>Refill</strong> - Channel energy into new growth</li>
            </ol>
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
            Wisdom in Leadership
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            The collected insights from decades of intentional leadership practice
          </p>
          <div className="flex items-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
              <LampDesk className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Timeless principles for modern leadership</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-green-400 mt-6"></div>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Wisdom Journey</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Looking back across my leadership journey, true wisdom emerged from:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Moments of failure</strong> that humbled my assumptions</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Pattern recognition</strong> across different contexts</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Mentorship received</strong> and given across generations</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-50 to-green-50 dark:from-purple-900/20 dark:to-green-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "Wisdom isn't a destination but a manner of traveling. The wisest leaders I know remain perpetual students—curious, humble, and always willing to question their own assumptions."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}