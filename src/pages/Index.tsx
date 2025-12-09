import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContactFormHero } from "@/components/ContactFormHero";
import { WhyH200 } from "@/components/WhyH200";
import { Pricing } from "@/components/Pricing";
import { PricingCalculator } from "@/components/PricingCalculator";
import { BareMetal } from "@/components/BareMetal";
import { GPUComparison } from "@/components/GPUComparison";
import { Benchmarks } from "@/components/Benchmarks";
import { UseCases } from "@/components/UseCases";
import { WhyCloudpe } from "@/components/WhyCloudpe";
import { GetStarted } from "@/components/GetStarted";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ContactFormHero />
        <WhyH200 />
        <Pricing />
        <PricingCalculator />
        <BareMetal />
        <GPUComparison />
        <Benchmarks />
        <UseCases />
        <WhyCloudpe />
        <GetStarted />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
