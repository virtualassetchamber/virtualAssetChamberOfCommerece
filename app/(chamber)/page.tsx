import FoundationalPillar from "@/components/FoundationalPillar";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import TrustSection from "@/components/TrustSection";
import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <>
    <Hero/>
    <WelcomeSection />
    <FoundationalPillar />
    <TrustSection />
    <NewsletterSection />
    </>
  );
}
