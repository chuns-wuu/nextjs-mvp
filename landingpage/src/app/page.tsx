import DetailSection from "@/components/detailssection";
import HomeSection from "@/components/homesection";
import Image from "next/image";
import Animation from "@/components/animation";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <DetailSection />
      <Animation />
    </div>
  );
}
