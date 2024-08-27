import FaqSection from "./Components/Sections/FaqSection/FaqSection";
import ScrollingText from "./Components/ScrollingText/ScrollingText";
import AboutSection from "./Components/Sections/AboutSection/AboutSection";
import AwardsSection from "./Components/Sections/AwardsSection/AwardsSection";
import ContactSection from "./Components/Sections/ContactSection/ContactSection";
import FooterSection from "./Components/Sections/FooterSection/FooterSection";
import HeroSection from "./Components/Sections/HeroSection/HeroSection";
import PorfoliosSection from "./Components/Sections/PorfoliosSection/PorfoliosSection";
import ServicesSection from "./Components/Sections/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <div className="py-10 border-y-2">
        <ScrollingText direction="left" />
        <ScrollingText />
      </div>
      <PorfoliosSection />
      <AwardsSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
