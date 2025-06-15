import { Telescope, Cpu, Globe, GitMerge, Sparkles, 
         BrainCircuit, Clock, BookOpen, BarChart2, Users, Scale,Eye,
         Compass, CircleDashed, Zap } from "lucide-react"
import Link from "next/link"

export default function FutureFocusedThinkingPage() {
  const sections = [
    {
      title: "The Future-Back Mindset",
      icon: <Telescope className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Traditional planning extrapolates from today. Future-back thinking inverts the process, starting from compelling visions of what could be. These mental shifts transformed my strategic approach:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                shift: "From predicting → creating",
                practice: "Treating the future as a design space",
                impact: "Unlocked 3 breakthrough innovations",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                shift: "From risk-averse → opportunity-obsessed",
                practice: "Measuring cost of inaction alongside action",
                impact: "Increased strategic initiatives by 40%",
                icon: <Zap className="w-5 h-5" />
              },
              {
                shift: "From data-driven → imagination-powered",
                practice: "Balancing analytics with speculative thinking",
                impact: "Identified 2 major market shifts early",
                icon: <BrainCircuit className="w-5 h-5" />
              },
              {
                shift: "From incremental → transformational",
                practice: 'Setting "impossible" horizon goals',
                impact: "Achieved 5x growth in new markets",
                icon: <GitMerge className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-through">{item.shift.split('→')[0]}</p>
                    <p className="font-semibold text-purple-600 dark:text-purple-400">→ {item.shift.split('→')[1]}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.practice}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 italic">Impact: {item.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
            <p className="italic text-purple-700 dark:text-purple-300">
              "Future-back thinking revealed that my most 'unrealistic' visions were often the most practical—they simply required longer time horizons to manifest."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Horizon Scanning Framework",
      icon: <Compass className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Systematic future awareness requires structured looking. This framework surfaces emerging opportunities and risks:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            {[
              { 
                lens: "Technology Signals", 
                method: "Tracking innovation convergence points",
                example: "Noticed AI/biotech crossover potential early",
                icon: <Cpu className="w-4 h-4" />
              },
              { 
                lens: "Social Fringes", 
                method: "Studying emerging subcultures",
                example: "Spotted creator economy trends in 2015",
                icon: <Users className="w-4 h-4" />
              },
              { 
                lens: "Regulatory Shifts", 
                method: "Monitoring policy experimentation",
                example: "Anticipated data privacy regulations",
                icon: <Scale className="w-4 h-4" />
              },
              { 
                lens: "Environmental Pressures", 
                method: "Mapping resource constraints",
                example: "Prepared for water scarcity impacts",
                icon: <Globe className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{item.lens}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.method}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Scanning Insight:</h3>
            <p className="text-blue-700 dark:text-blue-300">
              "The most important signals often appear insignificant at first—like noticing smartphone adoption in 2007 wasn't about better phones, but about new human behaviors."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Strategic Foresight Tools",
      icon: <BrainCircuit className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            These practical tools make future thinking actionable in present decisions:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                tool: "Three Horizons Model",
                use: "Balancing present needs with future building",
                outcome: "Maintained core business while seeding innovations",
                icon: <BarChart2 className="w-5 h-5" />
              },
              {
                tool: "Scenario Planning",
                use: "Stress-testing strategies against alternatives",
                outcome: "Navigated pandemic disruptions effectively",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                tool: "Backcasting",
                use: "Working backward from desired futures",
                outcome: "Achieved 10-year sustainability goals in 7 years",
                icon: <Clock className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.tool}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.use}</p>
                <p className="text-xs text-green-600 dark:text-green-400 italic">Outcome: {item.outcome}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Tool Principle:</h3>
            <p className="text-green-700 dark:text-green-300">
              "Future tools aren't about predicting correctly—they're about preparing thoughtfully. The value is in the thinking they provoke, not the answers they provide."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Building Future-Ready Teams",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Future-focused thinking must become organizational capability. These practices develop collective foresight:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                practice: "Future Role-Playing",
                method: "Simulating decision-making in future scenarios",
                example: "2025 board meeting simulation in 2022",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                practice: "Weak Signal Workshops",
                method: "Collective interpretation of emerging trends",
                example: 'Monthly "strange news" discussion forums',
                icon: <Eye className="w-5 h-5" />
              },
              {
                practice: "Horizon Talent Mix",
                method: "Balancing near-term and long-term thinkers",
                example: 'Hiring "futurist" roles alongside operators',
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                practice: "Temporal Stretching",
                method: "Alternating sprint cycles with long-term projects",
                example: 'Quarterly "slow thinking" retreats',
                icon: <Clock className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.practice}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.method}</p>
                <p className="text-xs text-amber-600 dark:text-amber-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border-l-4 border-amber-400 mt-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Team Insight:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "Future-ready teams don't just adapt to change—they metabolize uncertainty, turning ambiguity into strategic advantage."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Personal Future-Focused Habits",
      icon: <BookOpen className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Sustaining a long-term perspective requires personal discipline. These rituals keep me future-oriented:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            {[
              { 
                habit: "Future Self Journaling", 
                practice: "Correspondence with my 10-year-older self",
                benefit: "Revealed blindspots in current priorities",
                icon: <BookOpen className="w-4 h-4" />
              },
              { 
                habit: "Discontinuity Mapping", 
                practice: "Tracking assumptions that may become false",
                benefit: "Spotted 3 major industry shifts early",
                icon: <CircleDashed className="w-4 h-4" />
              },
              { 
                habit: "Learning from the Future", 
                practice: "Imagining what future knowledge we'll wish we had",
                benefit: "Accelerated R&D directions by 2 years",
                icon: <Telescope className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{item.habit}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.practice}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic">Benefit: {item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "The future isn't a destination we arrive at—it's a lens through which we make better decisions today. Future-focused thinking is ultimately about present-moment leadership."
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
            Future-Focused Thinking
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Developing strategic foresight for visionary leadership
          </p>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-2 rounded-lg mr-3">
              <Telescope className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Frameworks for anticipating and shaping what's next</p>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Future-Focused Leader</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              After helping organizations navigate multiple disruptions, these principles guide my approach:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Peripheral vision matters most</strong> - The biggest opportunities/threats rarely come head-on</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>The future is already here</strong> - Just unevenly distributed in weak signals</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Time horizons are strategic choices</strong> - Different futures require different pacing</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "Future-focused leadership isn't about being right about tomorrow—it's about being resilient across multiple possible tomorrows while making a difference today."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}