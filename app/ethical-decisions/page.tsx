import { Scale, BrainCircuit, GitMerge, Users, BookOpen, 
         Eye, Shield, Clock, Compass, CircleDashed, 
         BarChart2, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function EthicalDecisionMakingPage() {
  const sections = [
    {
      title: "The Anatomy of Ethical Decisions",
      icon: <Scale className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Through decades of leadership in high-stakes environments, I've dissected ethical decisions into four core dimensions that demand consideration:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                dimension: "Temporal Impact",
                question: "How will this decision echo through time?",
                tool: "7-generation impact assessment",
                icon: <Clock className="w-5 h-5" />
              },
              {
                dimension: "Distributed Consequences",
                question: "Who benefits and who bears hidden costs?",
                tool: "Stakeholder mapping with power analysis",
                icon: <Users className="w-5 h-5" />
              },
              {
                dimension: "Moral Uncertainty",
                question: "What don't we know about this situation?",
                tool: "Known unknowns framework",
                icon: <Eye className="w-5 h-5" />
              },
              {
                dimension: "Systemic Effects",
                question: "How might this alter larger systems?",
                tool: "Network effect modeling",
                icon: <GitMerge className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.dimension}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2 italic">{item.question}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400">Tool: {item.tool}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
            <p className="italic text-blue-700 dark:text-blue-300">
              "The most perilous ethical mistakes I've witnessed weren't between right and wrong, but between two competing rights. Depth of analysis makes all the difference."
            </p>
          </div>
        </>
      )
    },
    {
      title: "The Decision Ladder: A Tiered Approach",
      icon: <BarChart2 className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Not all decisions require equal ethical scrutiny. This framework helps allocate appropriate attention:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            {[
              { 
                level: "Routine Checks", 
                criteria: "Low impact, clear guidelines",
                process: "Pre-approved ethical protocols",
                example: "Standard vendor contracts",
                icon: <CircleDashed className="w-4 h-4" />
              },
              { 
                level: "Deliberate Review", 
                criteria: "Moderate impact, some ambiguity",
                process: "Cross-functional ethics review",
                example: "New market entry decisions",
                icon: <Compass className="w-4 h-4" />
              },
              { 
                level: "Full Ethical Audit", 
                criteria: "High impact, significant uncertainty",
                process: "Multidisciplinary ethics tribunal",
                example: "AI deployment in sensitive domains",
                icon: <Scale className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-purple-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-purple-100 dark:bg-purple-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-purple-600 dark:text-purple-400">{item.level}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1"><strong>When:</strong> {item.criteria}</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1"><strong>Process:</strong> {item.process}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Ladder Insight:</h3>
            <p className="text-purple-700 dark:text-purple-300">
              "The mark of ethical maturity isn't treating every decision with equal gravity—it's knowing precisely which decisions deserve extraordinary gravity."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Cognitive Biases in Ethical Reasoning",
      icon: <BrainCircuit className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Even well-intentioned leaders fall prey to these common ethical blind spots, with countermeasures I've developed:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                bias: "Moral Licensing",
                description: "Good deeds justifying later compromises",
                antidote: "Virtue ledger balancing system",
                icon: <Scale className="w-5 h-5" />
              },
              {
                bias: "Consequence Neglect",
                description: "Overfocusing on intentions not outcomes",
                antidote: "Pre-mortem impact analysis",
                icon: <Eye className="w-5 h-5" />
              },
              {
                bias: "Tribal Morality",
                description: "Different standards for in-group/out-group",
                antidote: "Rotating stakeholder perspective-taking",
                icon: <Users className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.bias}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.description}</p>
                <p className="text-xs text-red-600 dark:text-red-400 italic">Antidote: {item.antidote}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border-l-4 border-red-400 mb-6">
            <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Bias Breakthrough:</h3>
            <p className="text-red-700 dark:text-red-300">
              "I once vetoed a profitable deal because it 'felt off'—only later realizing my discomfort came from recognizing my own moral licensing at play."
            </p>
          </div>
        </>
      )
    },
    {
      title: "The Ethical Decision Journal",
      icon: <BookOpen className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            This reflective practice, honed over twenty years, transforms one-time decisions into lasting ethical wisdom:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                prompt: "The Dilemma",
                purpose: "Articulate the core tension without jargon",
                example: "Balancing employee privacy with workplace safety",
                icon: <Compass className="w-5 h-5" />
              },
              {
                prompt: "Values at Stake",
                purpose: "Name competing principles in conflict",
                example: "Autonomy vs. duty of care",
                icon: <Scale className="w-5 h-5" />
              },
              {
                prompt: "Unknown Knowns",
                purpose: "Surface unconscious assumptions",
                example: "Assuming surveillance equals safety",
                icon: <Eye className="w-5 h-5" />
              },
              {
                prompt: "Future Retrospective",
                purpose: "Imagine looking back from 10 years hence",
                example: "How will this decision age with new norms?",
                icon: <Clock className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.prompt}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.purpose}</p>
                <p className="text-xs text-green-600 dark:text-green-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-400 mt-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Journal Insight:</h3>
            <p className="text-green-700 dark:text-green-300">
              "Re-reading my ethical journals from ten years ago revealed how today's obvious choices were yesterday's impossible dilemmas—a humbling lesson in moral progress."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Communicating Ethical Decisions",
      icon: <GitMerge className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Implementation matters as much as the decision itself. These frameworks ensure ethical choices translate into action:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-amber-400 to-purple-400"></div>
            {[
              { 
                step: "Moral Narrative", 
                element: "Framing the decision as part of larger values",
                tool: "Ethical story arcs that show progression",
                icon: <BookOpen className="w-4 h-4" />
              },
              { 
                step: "Transparency Spectrum", 
                element: "Determining what to share and why",
                tool: "Disclosure impact assessment matrix",
                icon: <Eye className="w-4 h-4" />
              },
              { 
                step: "Implementation Ethics", 
                element: "Ensuring execution matches intent",
                tool: "Ethical delivery checkpoints",
                icon: <Shield className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-amber-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-amber-100 dark:bg-amber-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-amber-600 dark:text-amber-400">{item.step}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.element}</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 italic">Tool: {item.tool}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-purple-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "An ethical decision poorly communicated often backfires. The how of delivery must match the why of decision-making to maintain moral authority."
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
            Ethical Decision-Making
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Frameworks for moral clarity in complex leadership
          </p>
          <div className="flex items-center">
            <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
              <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Practical wisdom for principled leadership</p>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Leader's Moral Compass</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These enduring principles guide my ethical decision-making across contexts:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Process over perfection</strong> - Consistent methodology beats occasional moral heroics</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Collective wisdom</strong> - The best ethical decisions emerge from diverse perspectives</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
                <span><strong>Moral courage</strong> - Willingness to bear the costs of doing right</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "Ethical leadership isn't about never making mistakes—it's about creating systems where mistakes are caught early, corrected quickly, and learned from deeply."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}