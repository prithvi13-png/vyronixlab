import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Comparison from "@/components/sections/Comparison";
import Timeline from "@/components/sections/Timeline";
import Programs from "@/components/sections/Programs";
import DailyFollowUp from "@/components/sections/DailyFollowUp";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Comparison />
        <Timeline />
        <Programs />
        <DailyFollowUp />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
