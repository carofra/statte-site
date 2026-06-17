import ArtistsSection from "@/components/ArtistsSection";
import CosESection from "@/components/CosESection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LabsSection from "@/components/LabsSection";
import ManifestoScreens from "@/components/ManifestoScreens";
import MasterclassSection from "@/components/MasterclassSection";
import MostraSection from "@/components/MostraSection";
import ProgrammaSection from "@/components/ProgrammaSection";
import RunningMarquee from "@/components/RunningMarquee";
import SponsorsSection from "@/components/SponsorsSection";
import TalkSection from "@/components/TalkSection";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <CosESection />
        <ManifestoScreens />
        <MasterclassSection />
        <ArtistsSection />
        <ProgrammaSection />
        <LabsSection />
        <TalkSection />
        <MostraSection />
        <SponsorsSection />
      </main>
      <RunningMarquee />
      <Footer />
    </div>
  );
}
