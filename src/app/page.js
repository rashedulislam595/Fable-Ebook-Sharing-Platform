import EbookGenres from "@/components/HomePage/EbookGenres";
import HeroSection from "@/components/HomePage/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <EbookGenres/>
    </div>
  );
}
