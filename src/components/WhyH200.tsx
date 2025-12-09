import { CheckCircle2 } from "lucide-react";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";

const features = [
  {
    stat: "141 GB",
    label: "HBM3e Memory",
    description: "First GPU with this capacity, ideal for large models and long context windows"
  },
  {
    stat: "4.8 TB/s",
    label: "Memory Bandwidth", 
    description: "~43% higher bandwidth than H100, enabling larger batch sizes and faster throughput"
  },
  {
    stat: "1.9×",
    label: "Faster Than H100",
    description: "On large language models, thanks to the HBM3e upgrade"
  },
  {
    stat: "2.3×",
    label: "Lower Latency vs A100",
    description: "Time-to-first-token drops from 48ms to 21ms for instant responses"
  }
];

const benefits = [
  "Same Hopper Tensor Cores and Transformer Engine as H100",
  "Up to 60% higher inference throughput vs H100 on large transformers",
  "Memory-bound workloads get a significant performance boost",
  "Future-proof for next-gen LLMs with 100K+ context windows"
];

export function WhyH200() {
  return (
    <section id="why-h200" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for <span className="text-gradient">Massive LLMs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Long Context & High-Throughput Inference. The H200 is the upgrade your AI workloads need.
            </p>
          </AnimatedSection>

          {/* Stats grid */}
          <AnimatedStagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {features.map((feature, index) => (
              <AnimatedItem key={index}>
                <div className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-glow h-full">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {feature.stat}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-2">
                    {feature.label}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>

          {/* Description with benefits */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h3 className="text-2xl font-bold mb-4">
                Why Upgrade to H200?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The NVIDIA H200 is an upgrade to the Hopper-based H100, with the same compute 
                architecture but a dramatic jump in memory and bandwidth. That's exactly what 
                today's giant LLMs and context-heavy workloads need.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Callout box */}
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-glow opacity-30" />
                <div className="relative p-8 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
                  <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                    For AI Founders
                  </div>
                  <p className="text-lg font-medium leading-relaxed">
                    "If A100 is 'good enough', H200 is the GPU you pick when you 
                    <span className="text-gradient font-bold"> never want to think about context length, 
                    KV cache, or batch size constraints</span> again."
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
