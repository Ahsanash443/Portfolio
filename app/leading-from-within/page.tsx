import { BookOpen, BrainCircuit, HeartPulse, Eye, GitMerge,
         Compass, CircleDashed, Clock, Sparkles, Zap,
         BarChart2, Users, Shield, Globe } from "lucide-react"
import Link from "next/link"

export default function LeadingFromWithinPage() {
  const sections = [
    {
      title: "The Inner Leadership Compass",
      icon: <Compass className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Authentic leadership begins with self-awareness. These core practices have anchored my leadership through turbulent times:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                practice: "Values Clarification",
                method: "Regular refinement of personal leadership principles",
                impact: "Provided unwavering guidance during crises",
                icon: <HeartPulse className="w-5 h-5" />
              },
              {
                practice: "Shadow Work",
                method: "Exploring disowned aspects of my leadership",
                impact: "Reduced blindspots in decision-making",
                icon: <Eye className="w-5 h-5" />
              },
              {
                practice: "Energy Mapping",
                method: "Tracking what energizes vs. depletes me",
                impact: "Optimized 70% of time for high-value work",
                icon: <Zap className="w-5 h-5" />
              },
              {
                practice: "Inner Dialogue",
                method: "Journaling conversations with future/past selves",
                impact: "Gained perspective on current challenges",
                icon: <BookOpen className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.practice}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.method}</p>
                <p className="text-xs text-purple-600 dark:text-purple-400 italic">Impact: {item.impact}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mb-6">
            <p className="italic text-purple-700 dark:text-purple-300">
              "The most important leadership development happens not in boardrooms but in quiet moments of self-reflection—where we confront our fears and clarify our purpose."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Emotional Mastery for Leaders",
      icon: <HeartPulse className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Leadership intensity requires emotional intelligence. These frameworks help navigate the inner landscape:
          </p>
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            {[
              { 
                skill: "Emotional Archeology", 
                practice: "Unearthing root causes of reactions",
                example: "Recognized my anger as fear of inadequacy",
                icon: <CircleDashed className="w-4 h-4" />
              },
              { 
                skill: "Energy Containment", 
                practice: "Holding space for others without absorbing",
                example: 'Developed "emotionally permeable boundaries"',
                icon: <Shield className="w-4 h-4" />
              },
              { 
                skill: "Resonant Leadership", 
                practice: "Matching emotional tone to situation",
                example: "Calming panic during market crashes",
                icon: <Users className="w-4 h-4" />
              },
              { 
                skill: "Vulnerability Calculus", 
                practice: "Strategic sharing of inner struggles",
                example: "Modeling growth through public learning",
                icon: <BookOpen className="w-4 h-4" />
              }
            ].map((item, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-3 w-3 rounded-full bg-blue-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2"></div>
                <div className="ml-6 bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-1">
                    <div className="bg-blue-100 dark:bg-blue-900/20 p-1 rounded-full mr-2">
                      {item.icon}
                    </div>
                    <p className="font-bold text-blue-600 dark:text-blue-400">{item.skill}</p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.practice}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 italic">Ex: {item.example}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-6">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Emotional Insight:</h3>
            <p className="text-blue-700 dark:text-blue-300">
              "Early in my career, I suppressed emotions to appear strong. Now I understand leadership strength comes from channeling emotions wisely, not denying them."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Cognitive Leadership Tools",
      icon: <BrainCircuit className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            How we think shapes how we lead. These mental models upgrade leadership cognition:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                model: "Paradox Navigation",
                use: "Holding competing truths simultaneously",
                outcome: "Resolved 85% of leadership dilemmas",
                icon: <GitMerge className="w-5 h-5" />
              },
              {
                model: "Temporal Bracketing",
                use: "Separating immediate/enduring concerns",
                outcome: "Improved long-term decision quality",
                icon: <Clock className="w-5 h-5" />
              },
              {
                model: "Perspective Plurality",
                use: "Viewing challenges through multiple lenses",
                outcome: "Developed more inclusive strategies",
                icon: <Eye className="w-5 h-5" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">{item.model}</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{item.use}</p>
                <p className="text-xs text-green-600 dark:text-green-400 italic">Outcome: {item.outcome}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500 mb-6">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Cognitive Principle:</h3>
            <p className="text-green-700 dark:text-green-300">
              "The most powerful leadership tool isn't your experience or IQ—it's your ability to observe and upgrade your own thinking patterns."
            </p>
          </div>
        </>
      )
    },
    {
      title: "Spiritual Anchors for Leaders",
      icon: <Globe className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Sustainable leadership requires deeper grounding. These practices connect daily work with enduring purpose:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                practice: "Legacy Awareness",
                method: "Regular reflection on long-term impact",
                example: 'Monthly "100-year impact" visualizations',
                icon: <Sparkles className="w-5 h-5" />
              },
              {
                practice: "Sacred Pauses",
                method: "Intentional stillness amidst activity",
                example: "5-minute breathing before major decisions",
                icon: <CircleDashed className="w-5 h-5" />
              },
              {
                practice: "Service Reminders",
                method: "Connecting tasks to human benefit",
                example: "Customer story reviews before strategy",
                icon: <Users className="w-5 h-5" />
              },
              {
                practice: "Wisdom Traditions",
                method: "Drawing from diverse philosophical wells",
                example: "Applying Stoic principles to modern leadership",
                icon: <BookOpen className="w-5 h-5" />
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
            <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Spiritual Insight:</h3>
            <p className="text-amber-700 dark:text-amber-300">
              "In my darkest leadership moments, it wasn't business acumen but spiritual resilience that carried me through—the unshakable knowing of why this work matters."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "The Leader's Renewal Cycle",
      icon: <HeartPulse className="w-6 h-6" />,
      content: (
        <>
          <p className="mb-4 text-lg text-slate-700 dark:text-slate-300">
            Leadership energy must be consciously replenished. This rhythm sustains peak performance:
          </p>
          
          <div className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
            {[
              { 
                phase: "Full Engagement", 
                practice: "Immersion in meaningful work",
                duration: "4-6 week sprints",
                icon: <Zap className="w-4 h-4" />
              },
              { 
                phase: "Reflective Withdrawal", 
                practice: "Solitude for integration",
                duration: "2-4 day retreats",
                icon: <BookOpen className="w-4 h-4" />
              },
              { 
                phase: "Playful Exploration", 
                practice: "Cross-pollination from other domains",
                duration: "1 week quarterly",
                icon: <Sparkles className="w-4 h-4" />
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
                  <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{item.practice}</p>
                  <p className="text-xs text-purple-600 dark:text-purple-400 italic">Duration: {item.duration}</p>
                </div>
              </div>
            ))}
          </div>
          
          <blockquote className="border-l-4 border-blue-500 pl-6 my-6">
            <p className="text-xl italic text-slate-700 dark:text-slate-300">
              "We lead others best when we're leading ourselves first—attending to our physical, emotional, mental and spiritual wellbeing as the foundation for organizational health."
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
            Leading from Within
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            The inner foundations of transformational leadership
          </p>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-2 rounded-lg mr-3">
              <HeartPulse className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              <p>Cultivating self-awareness and authenticity</p>
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
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">The Inner Leader's Creed</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              These principles guide my ongoing journey of leading from within:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Self-knowledge precedes organizational wisdom</strong> - We can only lead others as far as we've led ourselves</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Vulnerability enables authenticity</strong> - Strength comes from integrated wholeness, not perfected images</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-2" />
                <span><strong>Inner work creates outer impact</strong> - Personal transformation drives organizational change</span>
              </li>
            </ul>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
              <p className="text-purple-700 dark:text-purple-300 italic">
                "The most powerful leadership development happens in the quiet moments between meetings—when we turn inward to examine our motives, heal our wounds, and reconnect with our deepest purpose."
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}