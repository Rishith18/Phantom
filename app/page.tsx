import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ConfidenceSpectrum from "@/components/ConfidenceSpectrum";
import Vision from "@/components/Vision";
import TechStack from "@/components/TechStack";
import VideoDemos from "@/components/VideoDemos";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10">
        <div
          className="h-40 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #F5F0EB 100%)",
          }}
        />
        <div className="bg-phantom-bg">
        <Mission />
        <ConfidenceSpectrum />
        <Vision />
        <TechStack />
        <VideoDemos />
        <Team />
        <Footer />
        </div>
      </div>
    </main>
  );
}
