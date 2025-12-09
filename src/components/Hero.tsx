import { Button } from "@/components/ui/button";
import { Cpu, Zap, MapPin, Server, Mail } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Zap, text: "₹300/hour – 1× NVIDIA H200, 16 vCPU, 128 GB RAM, 250 GB NVMe", gradient: "from-amber-500 to-orange-600" },
  { icon: MapPin, text: "Mumbai Tier-4 DC – low-latency to Indian users & data residency", gradient: "from-emerald-500 to-teal-600" },
  { icon: Server, text: "Bare-metal or Cloud VMs – up to 8× H200 per node", gradient: "from-violet-500 to-purple-600" },
  { icon: Cpu, text: "Full GPU catalog – A100, L4, L40S, H200 available today", gradient: "from-cyan-500 to-blue-600" },
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">Now Available in Mumbai</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            NVIDIA H200 GPU Cloud
            <span className="block text-gradient mt-2">Now in Mumbai</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Train, fine-tune and serve next-gen LLMs with 141 GB HBM3e, ultra-low latency 
            and India-local data residency. Powered by Cloudpe & Leapswitch.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="https://cloudpe.com" target="_blank" rel="noopener noreferrer">Launch H200 in Mumbai</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://meetings.hubspot.com/knj/sales-team-round-robin" target="_blank" rel="noopener noreferrer">Talk to a GPU Specialist</a>
            </Button>
          </motion.div>

          {/* Highlight strip */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/30 backdrop-blur-md text-left hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`relative flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="relative text-sm text-foreground/80 leading-relaxed font-medium">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Mail className="w-4 h-4" />
            <a href="mailto:sales@cloudpe.com" className="text-sm hover:text-primary transition-colors">
              sales@cloudpe.com
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
