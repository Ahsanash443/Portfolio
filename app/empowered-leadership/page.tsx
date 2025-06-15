import { Zap, Users, GitMerge, BarChart2, Sparkles, 
         Shield, Compass, CircleDashed, Cpu, Globe, 
         BookOpen, Eye, Clock } from "lucide-react"
import Link from "next/link"

export default function EmpoweredLeadershipPage() {
  const sections = [
    {
      title: "The Empowerment Mindset",
      icon: <Zap className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            True empowerment begins with fundamental shifts in leadership thinking. These paradigm changes transformed my approach to developing leaders at all levels:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                shift: "From delegation → ownership",
                practice: "Granting complete decision rights within domains",
                impact: "Increased initiative-taking by 73%",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                shift: "From permission → accountability",
                practice: "Assuming yes unless boundary violation",
                impact: "Reduced decision latency by 65%",
                icon: <Compass className="w-5 h-5" />
              },
              {
                shift: "From answers → questions",
                practice: "Coaching through inquiry not instruction",
                impact: "Developed 42% more internal leaders",
                icon: <BookOpen className="w-5 h-5" />
              },
              {
                shift: "From control → trust",
                practice: "Measuring outcomes not methods",
                impact: "Improved team engagement scores by 58%",
                icon: <Shield className="w-5 h-5" />
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
              "The moment I stopped being the smartest person in the room and became the chief enabler of others' brilliance, true organizational empowerment began."
            </p>
          </div>
        </>
      )
    },
    {
      title: "The Empowerment Architecture",
      icon: <BarChart2 className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Empowerment requires intentional structural design. These building blocks create environments where leadership flourishes at all levels:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            {[
              { 
                element: "Clear Decision Rights", 
                implementation: "Transparent authority maps",
                example: "Color-coded decision zones (green/yellow/red)",
                icon: <Compass className="w-4 h-4" />
              },
              { 
                element: "Information Equality", 
                implementation: "Radical transparency protocols",
                example: "All-hands access to strategic/financial data",
                icon: <Eye className="w-4 h-4" />
              },
              { 
                element: "Failure Immunity", 
                implementation: "Protected learning zones",
                example: 'Quarterly "intelligent failures" showcases',
                icon: <CircleDashed className="w-4 h-4" />
              },
              { 
                element: "Resource Fluidity", 
                implementation: "Dynamic allocation systems",
                example: "Internal talent marketplace for projects",
                icon: <Users className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{item.element}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.implementation}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Design Insight:</h3>
            <p className="text-blue-700 dark:text-blue-300">
              "Empowerment structures must be both sturdy and flexible—clear enough to prevent chaos, adaptable enough to enable initiative."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Empowerment in Action",
      icon: <Sparkles className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            These proven practices translate empowerment theory into daily leadership:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                practice: "The 70% Rule",
                method: "Promoting when 70% ready, not 100%",
                outcome: "Accelerated leadership pipeline by 2x",
                icon: <Zap className="w-5 h-5" />
              },
              {
                practice: "Reverse Delegation",
                method: "Returning problems with questions, not answers",
                outcome: "Developed stronger problem-solving muscles",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                practice: "Autonomy Audits",
                method: "Quarterly checks on real decision-making power",
                outcome: "Identified and removed 83 bureaucratic barriers",
                icon: <Shield className="w-5 h-5" />
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
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Practice Principle:</h3>
            <p className="text-green-700 dark:text-green-300">
              "Empowerment isn't given—it's claimed. The leader's job is to remove barriers to that claiming, not to bestow permission."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Measuring True Empowerment",
      icon: <Cpu className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Traditional engagement metrics miss empowerment's essence. These indicators reveal real distributed leadership:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                metric: "Initiative Velocity",
                definition: "Time from idea to action without approval",
                tool: "Idea implementation tracking",
                icon: <Clock className="w-5 h-5" />
              },
              {
                metric: "Decision Diversity",
                definition: "Spread of decision-makers across levels",
                tool: "Decision origin heat maps",
                icon: <Users className="w-5 h-5" />
              },
              {
                metric: "Vertical Mentoring",
                definition: "Upward/downward learning exchanges",
                tool: "Cross-level coaching logs",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                metric: "Autonomy Index",
                definition: "Perceived vs actual decision power",
                tool: "Empowerment reality checks",
                icon: <Compass className="w-5 h-5" />
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
                <p className="text-xs text-amber-600 dark:text-amber-400 italic">Tool: {item.tool}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border-l-4 border-amber-400 mt-6">
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Measurement Insight:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "If your metrics show uniform empowerment across all teams, you're not measuring deeply enough. True empowerment is uneven by design."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Scaling Empowerment",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            These strategies maintain empowerment as organizations grow:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            {[
              { 
                strategy: "Subsidiary Principle", 
                method: "Pushing decisions to lowest capable level",
                example: "Frontline teams approving vendor contracts",
                icon: <CircleDashed className="w-4 h-4" />
              },
              { 
                strategy: "Empowerment Champions", 
                method: "Identifying and amplifying natural leaders",
                example: "Peer-nominated autonomy ambassadors",
                icon: <Users className="w-4 h-4" />
              },
              { 
                strategy: "Permissionless Innovation", 
                method: 'Clear "no-go" zones with open play elsewhere',
                example: "Only 3 forbidden actions, all else allowed",
                icon: <Zap className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{item.strategy}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.method}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "Empowerment at scale looks less like a spreading light and more like kindling thousands of small, interconnected fires—each self-sustaining yet part of a greater warmth."
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
            Empowered Leadership
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Cultivating ownership and agency at every organizational level
          </p>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-2 rounded-lg mr-3">
              <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Frameworks for distributing power and initiative</p>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Empowerment Paradox</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These counterintuitive truths guide my ongoing empowerment practice:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>More structure enables more freedom</strong> - Clear boundaries create safe spaces for initiative</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Empowerment requires occasional intervention</strong> - Non-interference isn't the same as support</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>The most empowered teams choose constraints</strong> - Self-imposed limits focus creative energy</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "For transforming organizations through empowerment, I've learned the ultimate leadership act is making yourself progressively less necessary—while becoming ever more valuable as an enabler of others' potential."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}