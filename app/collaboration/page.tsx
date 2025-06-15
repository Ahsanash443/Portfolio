import { Users, GitMerge, Network, Sparkles, BrainCircuit, 
         Handshake, Globe, Cpu, BookOpen, BarChart2, Shield,
         Compass, CircleDashed, Zap } from "lucide-react"
import Link from "next/link"

export default function CultivatingCollaborationPage() {
  const sections = [
    {
      title: "The Collaboration Mindset Shift",
      icon: <BrainCircuit className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            True collaboration requires more than tools and processes—it demands fundamental shifts in how we think about collective work. These paradigm changes transformed my leadership approach:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                shift: "From 'my ideas' → 'our ideas'",
                practice: "Practicing intellectual humility and curiosity",
                impact: "Increased innovation velocity by 40%",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                shift: "From consensus → collective intelligence",
                practice: "Harnessing diversity without forcing alignment",
                impact: "Reduced decision paralysis by 65%",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                shift: "From credit-hoarding → impact-amplifying",
                practice: "Celebrating how ideas evolve through collaboration",
                impact: "Improved cross-team trust scores by 58%",
                icon: <Handshake className="w-5 h-5" />
              },
              {
                shift: "From efficiency → creative friction",
                practice: "Designing productive disagreement into processes",
                impact: "Generated 3x more breakthrough solutions",
                icon: <Zap className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-through">{item.shift.split('→')[0]}</p>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">→ {item.shift.split('→')[1]}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.practice}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 italic">Impact: {item.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="italic text-blue-700 dark:text-blue-300">
              "The collaboration breakthroughs I'm proudest of emerged not from polished processes, but from creating spaces where unexpected connections could spark."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Architecting Collaborative Environments",
      icon: <Network className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Physical and digital spaces profoundly shape collaboration quality. These design principles transformed my teams' creative output:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            {[
              { 
                principle: "Interaction Hotspots", 
                implementation: "Designed unplanned collision spaces",
                example: "Coffee zones with problem-solving whiteboards",
                icon: <Users className="w-4 h-4" />
              },
              { 
                principle: "Idea Flow", 
                implementation: "Optimized information pathways",
                example: "Visual project walls between departments",
                icon: <GitMerge className="w-4 h-4" />
              },
              { 
                principle: "Cognitive Diversity", 
                implementation: "Structured heterogeneous teams",
                example: "Ensured each team had multiple thinking styles",
                icon: <BrainCircuit className="w-4 h-4" />
              },
              { 
                principle: "Psychological Safety", 
                implementation: "Modeled vulnerability in leadership",
                example: "Publicly praised risk-taking after failures",
                icon: <Shield className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{item.principle}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.implementation}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Design Insight:</h3>
            <p className="text-purple-700 dark:text-purple-300">
              "The most collaborative spaces feel slightly uncomfortable to everyone—that discomfort means no single culture dominates, creating space for new hybrids to emerge."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Collaboration Catalysts",
      icon: <Zap className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            These interventions consistently spark deeper collaboration across my projects:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                catalyst: "Provocative Constraints",
                method: "Imposing artificial limitations to force creativity",
                example: "48-hour cross-functional hackathons",
                icon: <Compass className="w-5 h-5" />
              },
              {
                catalyst: "Strange Connections",
                method: "Pairing unrelated concepts/problems",
                example: "Had marketers solve engineering challenges",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                catalyst: "Rotating Roles",
                method: "Temporary role swaps between teams",
                example: "Designers leading customer support for a week",
                icon: <Users className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.catalyst}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.method}</p>
                <p className="text-xs text-green-600 dark:text-green-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Catalyst Principle:</h3>
            <p className="text-green-700 dark:text-green-300">
              "Collaboration isn't something you do—it's something that happens to you when you create the right conditions. Leaders design those conditions."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Measuring Collaborative Health",
      icon: <BarChart2 className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Traditional metrics miss collaboration's essence. These indicators reveal true connective tissue:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                metric: "Idea Lineage",
                definition: "How concepts evolve across contributors",
                tool: "Collaborative genealogy mapping",
                icon: <BookOpen className="w-5 h-5" />
              },
              {
                metric: "Help Network Density",
                definition: "Frequency of cross-boundary assistance",
                tool: "Organizational network analysis",
                icon: <Network className="w-5 h-5" />
              },
              {
                metric: "Constructive Conflict",
                definition: "Productive disagreement frequency",
                tool: "Meeting sentiment analysis",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                metric: "Serendipity Rate",
                definition: "Unexpected valuable connections",
                tool: "Surprise value tracking",
                icon: <Sparkles className="w-5 h-5" />
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
              "When collaboration metrics become targets, they cease to be good measures. True indicators emerge organically from daily work."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Scaling Collaborative Culture",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            As organizations grow, collaboration often suffers. These strategies maintain connective tissue at scale:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-green-400"></div>
            {[
              { 
                strategy: "Fractal Teams", 
                method: "Self-similar collaborative units",
                example: "Autonomous 8-person teams with same collaboration norms",
                icon: <CircleDashed className="w-4 h-4" />
              },
              { 
                strategy: "Collaborative Onboarding", 
                method: "New hires join multiple cross-functional projects immediately",
                example: 'First-month "collaboration tour" across 5 teams',
                icon: <Users className="w-4 h-4" />
              },
              { 
                strategy: "Boundary Spanners", 
                method: "Dedicated role connecting disparate groups",
                example: "Technology translators between R&D and manufacturing",
                icon: <GitMerge className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{item.strategy}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.method}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-green-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "Collaboration at scale isn't about getting bigger—it's about creating more high-quality connections. Density trumps size every time."
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
            Cultivating Collaboration
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Leadership strategies for unleashing collective intelligence
          </p>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 p-2 rounded-lg mr-3">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Building cultures of connection and co-creation</p>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gradient-to-r from-blue-400 to-green-400 mt-6"></div>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Collaboration Commitment</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These principles guide my ongoing practice of cultivating collaboration:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-2" />
                <span><strong>Connection before content</strong> - Relationships enable ideas to flow</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-2" />
                <span><strong>Diversity as fuel</strong> - Difference drives innovation when harnessed well</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-2 mr-2" />
                <span><strong>Emergence over control</strong> - The best collaborations surprise everyone</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-4 rounded-lg">
              <p className="text-blue-700 dark:text-blue-300 italic">
                "After several years of fostering collaboration, I've learned the leader's role isn't to create great ideas—it's to create the conditions where ideas can't help but become great through connection."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}