import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  )
}

