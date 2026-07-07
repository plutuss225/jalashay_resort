import dynamic from "next/dynamic";
import { Hero, Intro } from "@/components/home";

// Dynamically import below-the-fold components to reduce Total Blocking Time (TBT)
const ParallaxBand = dynamic(() => import("@/components/home/parallax-band").then(m => m.ParallaxBand));
const Stays = dynamic(() => import("@/components/home/stays").then(m => m.Stays));
const Experiences = dynamic(() => import("@/components/home/experiences").then(m => m.Experiences));
const Itinerary = dynamic(() => import("@/components/home/itinerary").then(m => m.Itinerary));
const Dining = dynamic(() => import("@/components/home/dining").then(m => m.Dining));
const Gallery = dynamic(() => import("@/components/home/gallery").then(m => m.Gallery));
const Testimonials = dynamic(() => import("@/components/home/testimonials").then(m => m.Testimonials));
const CTA = dynamic(() => import("@/components/home/cta").then(m => m.CTA));
const Footer = dynamic(() => import("@/components/home/footer").then(m => m.Footer));
import backwater from "@/assets/sliderImage/slider-5.webp";

export default function Page() {
  return (
    <main className="bg-background">
      <Hero />
      <Intro />
      <ParallaxBand
        image={backwater.src}
        kicker="— A Place Apart"
        title="Silence, at last."
        sub="Twelve acres by the lake. No cars. No clocks."
      />
      <Stays />
      <Experiences />
      <Itinerary />
      <Dining />
      {/* <Amenities /> */}
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

