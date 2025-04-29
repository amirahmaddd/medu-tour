import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import SpecialPlace from "@/components/places/SpecialPlace";
import States from "@/components/places/States";
import VideoPlayer from "@/components/player/VideoPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <States />
        <FeatureSection />
        <VideoPlayer />
        <SpecialPlace />
      </main>
    </div>
  );
}
