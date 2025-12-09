import { Button } from "@/components/ui/button";
import { Check, Cpu, HardDrive, MemoryStick, Server } from "lucide-react";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const specs = [
  { icon: Cpu, label: "GPU", value: "1× NVIDIA H200 Tensor Core GPU" },
  { icon: Server, label: "vCPU", value: "16 vCPU" },
  { icon: MemoryStick, label: "Memory", value: "128 GB RAM" },
  { icon: HardDrive, label: "Storage", value: "250 GB NVMe (customizable)" },
];

const features = [
  "Custom storage & network configurations",
  "Monthly and reserved pricing available",
  "Partner & reseller discount programs",
  "Mumbai Tier-4 Datacenter",
  "24/7 GPU specialist support",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              H200 Pricing in India. No hidden fees.
            </p>
          </AnimatedSection>

          {/* Pricing card */}
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-glow opacity-40 blur-3xl" />
              
              <div className="relative rounded-3xl border border-primary/40 bg-card overflow-hidden">
                {/* Header */}
                <div className="p-8 pb-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        On-Demand
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">
                        H200 – Mumbai
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-bold text-gradient">₹300</span>
                        <span className="text-muted-foreground">/ hour</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specs */}
                <div className="p-8 border-b border-border">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {specs.map((spec, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary">
                          <spec.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">{spec.label}</div>
                          <div className="text-sm font-medium">{spec.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" className="flex-1">
                      Start with H200
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      Request Custom Quote
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
