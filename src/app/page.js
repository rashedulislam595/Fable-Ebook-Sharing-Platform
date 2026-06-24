import EbookGenres from "@/components/HomePage/EbookGenres";
import FeaturedEbooks from "@/components/HomePage/FeaturedEbooks";
import HeroSection from "@/components/HomePage/HeroSection";
import TopWriters from "@/components/HomePage/TopWriters";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturedEbooks/>
      <TopWriters/>
      <EbookGenres/>
    </div>
  );
}
