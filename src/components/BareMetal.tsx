import { Button } from "@/components/ui/button";
import { Server, Cpu, HardDrive, Network } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "8× NVIDIA H200 GPUs",
    description: "NVLink topology as per NVIDIA reference platform"
  },
  {
    icon: Server,
    title: "Up to 2 TB System RAM",
    description: "High-core-count CPUs for maximum performance"
  },
  {
    icon: HardDrive,
    title: "Multiple NVMe SSDs",
    description: "Optional high-throughput and replicated storage"
  },
  {
    icon: Network,
    title: "Full Control",
    description: "Kubernetes, Slurm, Ray, or custom schedulers"
  }
];

const useCases = [
  "Model training & fine-tuning at scale",
  "Multi-tenant inference clusters for AI SaaS",
  "Hybrid setups with your own orchestrator"
];

export function BareMetal() {
  return (
    <section id="bare-metal" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Enterprise Grade
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dedicated 8× H200 <span className="text-gradient">Bare-Metal</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                For customers who want full control of the node (Kubernetes, custom schedulers, 
                on-prem-like experience in the cloud), we provide dedicated bare-metal servers 
                with 8× NVIDIA H200 in our Mumbai datacenter.
              </p>

              {/* Use cases */}
              <div className="mb-8">
                <div className="text-sm font-semibold mb-3">Ideal for:</div>
                <ul className="space-y-2">
                  {useCases.map((useCase, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="hero" size="lg">
                Request Bare-Metal Quote
              </Button>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl card-gradient border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
