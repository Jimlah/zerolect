import Footer from "@/components/landing-pages/Footer";
import Hero from "@/components/landing-pages/Hero";
import Team from "@/components/landing-pages/Team";
import WhatWeOffer from "@/components/landing-pages/WhatWeOffer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Hero />
      <WhatWeOffer />
      <Team />
      <Footer />
    </div>
  );
}
