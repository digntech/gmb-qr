
import Hero from '@/components/Hero'
import ToolCards from '@/components/ToolCards'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    (<div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow dotted-bg">
        <Hero />
        <ToolCards />
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>)
  );
}

