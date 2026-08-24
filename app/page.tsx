import Aurora from "@/components/background/Aurora";
import Particles from "@/components/background/Particles";
import Stars from "@/components/background/Stars";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Blogs from "@/components/blog/Blogs";
import Memories from "@/components/memories/Memories";
import Certificates from "@/components/certificates/Certificates";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ChatBot from "@/components/assistant/ChatBot";
import AICursor from "@/components/ui/AICursor";
import Music from "@/components/music/Music";
 
export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Stars />
        <Particles />
        <Aurora />
      </div>
      <LoadingScreen />


       <AICursor/>


      <ScrollProgress />


  <Navbar />

  <Hero />
  <About />
  <Skills />
  <Projects />
  <Music />

  <Blogs />
  <Certificates />
  <Contact />

  <BackToTop />
  <ChatBot />
      
    </>
  );
}