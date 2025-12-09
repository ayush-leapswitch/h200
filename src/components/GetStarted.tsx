import { Button } from "@/components/ui/button";
import { UserPlus, Cpu, Rocket } from "lucide-react";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up for Cloudpe. Complete KYC & basic verification for credits or trial access."
  },
  {
    icon: Cpu,
    step: "02",
    title: "Pick Your GPU Plan",
    description: "Start with 1× H200 (₹300/hr) in Mumbai. Use PyTorch, TensorFlow, JAX, vLLM, TGI, or TensorRT-LLM."
  },
  {
    icon: Rocket,
    step: "03",
    title: "Scale Up",
    description: "Horizontally scale to multiple H200 instances, or move to a dedicated 8× H200 bare-metal node."
  }
];

export function GetStarted() {
  return (
    <section id="get-started" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Zero to H200 in <span className="text-gradient">Under an Hour</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started with the most powerful GPU in India. It's that simple.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <AnimatedStagger className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <AnimatedItem key={index}>
                <div className="relative text-center">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  
                  {/* Step number */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-glow opacity-50 blur-xl" />
                    <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>

          {/* CTAs */}
          <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start with 1× H200
            </Button>
            <Button variant="heroOutline" size="lg">
              Book a 30-min Architecture Call
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
