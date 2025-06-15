import { Globe, Network, GitMerge, Leaf, Cpu, BarChart2, 
         HeartPulse, Scale, Zap, Sparkles, Users, BookOpen, Clock,
         Compass, CircleDashed, Handshake } from "lucide-react"
import Link from "next/link"

export default function EcoSystemicLeadershipPage() {
  const sections = [
    {
      title: "From Hierarchies to Ecosystems",
      icon: <Network className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Traditional leadership models break down in complex, interconnected systems. Through leading multi-stakeholder initiatives, I've developed principles for thriving in ecosystem environments:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                shift: "Control → Influence",
                method: "Building gravitational pull rather than authority",
                example: "Created open standards adopted by competitors",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                shift: "Planning → Sensing",
                method: "Reading emergent patterns in real-time",
                example: "Pioneered distributed sensing networks for market shifts",
                icon: <Cpu className="w-5 h-5" />
              },
              {
                shift: "Competition → Co-opetition",
                method: "Collaborating on infrastructure while competing on value",
                example: "Joint sustainability initiative with industry rivals",
                icon: <Handshake className="w-5 h-5" />
              },
              {
                shift: "Growth → Regeneration",
                method: "Measuring system health beyond revenue",
                example: "Implemented ecosystem vitality metrics",
                icon: <Leaf className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-through">{item.shift.split('→')[0]}</p>
                    <p className="font-semibold text-green-600 dark:text-green-400">→ {item.shift.split('→')[1]}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{item.method}</p>
                <p className="text-xs text-green-600 dark:text-green-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500 mb-6">
            <p className="italic text-green-700 dark:text-green-300">
              "In ecosystems, leadership isn't about being the tallest tree—it's about nurturing the conditions where the entire forest thrives."
            </p>
          </div>
        </>
      )
    },
    {
      title: "The Five Ecosystemic Capabilities",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Leading in interconnected environments requires developing distinct muscles beyond traditional management:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-green-400"></div>
            {[
              { 
                capability: "Contextual Intelligence", 
                practice: "Reading hidden connections and leverage points",
                development: "Conducted weekly 'system mapping' exercises",
                icon: <Compass className="w-4 h-4" />
              },
              { 
                capability: "Multi-scale Thinking", 
                practice: "Operating simultaneously at micro and macro levels",
                development: "Created nested decision frameworks (local/regional/global)",
                icon: <BarChart2 className="w-4 h-4" />
              },
              { 
                capability: "Boundary Spanning", 
                practice: "Linking disparate networks and knowledge domains",
                development: "Rotated leaders through different ecosystem roles",
                icon: <CircleDashed className="w-4 h-4" />
              },
              { 
                capability: "Ambidextrous Impact", 
                practice: "Delivering immediate value while shaping long-term evolution",
                development: "Split teams into 'now' and 'next' cadences",
                icon: <Clock className="w-4 h-4" />
              },
              { 
                capability: "Regenerative Mindset", 
                practice: "Designing for net-positive system outcomes",
                development: "Instituted 'give first' policy for ecosystem contributions",
                icon: <HeartPulse className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{item.capability}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.practice}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Developed through: {item.development}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Ecosystem Governance Models",
      icon: <Scale className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Traditional corporate governance fails in decentralized ecosystems. Through trial and error, I've tested these alternative models:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                model: "Polycentric Governance",
                keyFeature: "Nested decision-making authorities",
                example: "Climate initiative with local/global decision layers",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                model: "Protocol Democracy",
                keyFeature: "Rules encoded in shared infrastructure",
                example: "Open API standards with community governance",
                icon: <Cpu className="w-5 h-5" />
              },
              {
                model: "Dynamic Coalition",
                keyFeature: "Fluid participation based on contribution",
                example: "Alliance where voting power matches engagement",
                icon: <Users className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.model}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.keyFeature}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 italic">Ex: {item.example}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Governance Insight:</h3>
            <p className="text-purple-700 dark:text-purple-300">
              "The most effective ecosystem governance feels slightly uncomfortable to everyone—that tension ensures no single interest dominates."
            </p>
          </div>
          
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-3">Governance Design Principles:</h3>
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
              <span><strong>Subsidiarity</strong> - Decisions at the most local level possible</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
              <span><strong>Fractal Consistency</strong> - Local actions align with global principles</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2" />
              <span><strong>Evolutionary Potential</strong> - Rules can adapt as the ecosystem matures</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "Measuring Ecosystem Health",
      icon: <HeartPulse className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Traditional KPIs miss the vitality of living systems. These alternative metrics reveal true ecosystem health:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                metric: "Connection Density",
                definition: "Quality and quantity of interrelationships",
                tool: "Network mapping and value flow analysis",
                icon: <Network className="w-5 h-5" />
              },
              {
                metric: "Innovation Circulation",
                definition: "Speed of idea propagation and adaptation",
                tool: "Tracking concept adoption across nodes",
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                metric: "Resource Symbiosis",
                definition: "Waste streams becoming inputs elsewhere",
                tool: "Material/energy flow accounting",
                icon: <Leaf className="w-5 h-5" />
              },
              {
                metric: "Resilience Signatures",
                definition: "Diversity of responses to disturbances",
                tool: "Stress-test simulations",
                icon: <Zap className="w-5 h-5" />
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
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Measurement Paradox:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "The healthiest ecosystems have the least need for centralized measurement—vital signs emerge naturally through participation."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Cultivating Ecosystem Leaders",
      icon: <Users className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Ecosystem leadership requires different development approaches than traditional programs:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-green-400 to-blue-400"></div>
            {[
              { 
                practice: "Ecosystem Immersion", 
                method: "Extended placements in different network nodes",
                duration: "3-6 month rotations",
                outcome: "Developed innate system sense",
                icon: <Globe className="w-4 h-4" />
              },
              { 
                practice: "Shadow Networks", 
                method: "Mapping and engaging informal influence flows",
                duration: "Ongoing relationship building",
                outcome: "Gained access to latent capabilities",
                icon: <Network className="w-4 h-4" />
              },
              { 
                practice: "System Entrepreneurship", 
                method: "Charged with creating new connection points",
                duration: "6-12 month projects",
                outcome: "Built valuable bridging capital",
                icon: <GitMerge className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-green-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-green-100 dark:bg-green-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-green-600 dark:text-green-400">{item.practice}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.method}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Duration: {item.duration}</p>
                  <p className="text-xs text-green-600 dark:text-green-400 italic">Outcome: {item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "Ecosystem leaders aren't trained—they're grown through repeated exposure to complexity and trusted to find their own pathways through it."
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
            Eco-Systemic Leadership
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Leading in interconnected networks and complex adaptive systems
          </p>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 p-2 rounded-lg mr-3">
              <Globe className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Frameworks for thriving in interdependence</p>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Ecosystem Leader's Mindset</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              After fifteen years of leading in complex networks, these principles guide my approach:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>See relationships before entities</strong> - The connections matter more than the nodes</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Nurture the soil, not just the plants</strong> - Invest in infrastructure others build upon</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Let go to retain influence</strong> - Power flows to those who enable others' success</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
              <p className="text-green-700 dark:text-green-300 italic">
                "The most powerful position in an ecosystem isn't at the top—it's at the center of vital flows. Cultivate those currents, and leadership becomes an emergent property of the network itself."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}