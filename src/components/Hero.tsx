import { Button } from "@/components/ui/button";
import { Cpu, Zap, MapPin, Server } from "lucide-react";

const highlights = [
  { icon: Zap, text: "₹300/hour – 1× NVIDIA H200, 16 vCPU, 128 GB RAM, 250 GB NVMe" },
  { icon: MapPin, text: "Mumbai Tier-4 DC – low-latency to Indian users & data residency" },
  { icon: Server, text: "Bare-metal or Cloud VMs – up to 8× H200 per node" },
  { icon: Cpu, text: "Full GPU catalog – A100, L4, L40S, H200 available today" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-glow opacity-50 animate-pulse-glow" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Now Available in Mumbai</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            NVIDIA H200 GPU Cloud
            <span className="block text-gradient mt-2">Now in Mumbai</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Train, fine-tune and serve next-gen LLMs with 141 GB HBM3e, ultra-low latency 
            and India-local data residency. Powered by Cloudpe & Leapswitch.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg">
              Launch H200 in Mumbai
            </Button>
            <Button variant="heroOutline" size="lg">
              Talk to a GPU Specialist
            </Button>
          </div>

          {/* Highlight strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm text-left hover:border-primary/30 transition-colors"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
