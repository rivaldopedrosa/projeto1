import { About } from "@/components/sections/About";
import { Approach } from "@/components/sections/Approach";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Intelligence } from "@/components/sections/Intelligence";
import { Problem } from "@/components/sections/Problem";
import { Solutions } from "@/components/sections/Solutions";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Approach />
        <Intelligence />
        <Solutions />
        <CaseStudies />
        <Testimonials />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
