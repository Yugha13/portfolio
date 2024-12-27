import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Works } from "@/components/Works";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";


const Index = () => {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;