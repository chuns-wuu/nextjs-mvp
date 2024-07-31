import DetailSection from "@/components/detailssection";
import HomeSection from "@/components/homesection";
import Landing from "@/components/LandingV0";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Landing /> */}
      <HomeSection />
      <DetailSection />
    </div>
  );
}
