import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";

const gpuData = [
  {
    name: "H200",
    architecture: "Hopper",
    vram: "141 GB HBM3e",
    bandwidth: "~4.8 TB/s",
    bestFor: "Massive LLMs, long context, high-TPS inference",
    highlight: true
  },
  {
    name: "H100",
    architecture: "Hopper",
    vram: "80 GB HBM3",
    bandwidth: "~3.35 TB/s",
    bestFor: "Large models, mixed training + inference",
    highlight: false
  },
  {
    name: "A100",
    architecture: "Ampere",
    vram: "80 GB HBM2e",
    bandwidth: "~2.0 TB/s",
    bestFor: "Classic training & inference, cost-sensitive",
    highlight: false
  },
  {
    name: "L40S",
    architecture: "Ada",
    vram: "48 GB GDDR6",
    bandwidth: "~864 GB/s",
    bestFor: "High-throughput inference, vision + graphics",
    highlight: false
  },
  {
    name: "L4",
    architecture: "Ada",
    vram: "24 GB GDDR6",
    bandwidth: "~300 GB/s",
    bestFor: "Video analytics, edge inference, lighter LLMs",
    highlight: false
  }
];

const recommendations = [
  {
    gpu: "H200",
    description: "When memory & throughput are your bottlenecks – large LLMs, long context RAG, multi-tenant inference APIs."
  },
  {
    gpu: "L40S / L4",
    description: "For GPU-accelerated SaaS: image/video, generative media, classical ML and smaller models."
  }
];

export function GPUComparison() {
  return (
    <section id="compare" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Choose the <span className="text-gradient">Right GPU</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare our full NVIDIA GPU lineup. H200 tops the stack for memory-intensive LLMs.
            </p>
          </AnimatedSection>

          {/* Comparison table */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-border overflow-hidden mb-12 card-gradient">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-foreground font-semibold">GPU</TableHead>
                      <TableHead className="text-foreground font-semibold">Architecture</TableHead>
                      <TableHead className="text-foreground font-semibold">VRAM & Type</TableHead>
                      <TableHead className="text-foreground font-semibold">Bandwidth</TableHead>
                      <TableHead className="text-foreground font-semibold">Best For</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {gpuData.map((gpu) => (
                      <TableRow 
                        key={gpu.name}
                        className={`border-border ${gpu.highlight ? 'bg-primary/10 hover:bg-primary/15' : 'hover:bg-secondary/50'}`}
                      >
                        <TableCell className="font-bold">
                          {gpu.highlight ? (
                            <span className="text-gradient">{gpu.name}</span>
                          ) : (
                            gpu.name
                          )}
                        </TableCell>
                        <TableCell className="text-muted-foreground">{gpu.architecture}</TableCell>
                        <TableCell>
                          <span className={gpu.highlight ? 'text-primary font-medium' : 'text-muted-foreground'}>
                            {gpu.vram}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={gpu.highlight ? 'text-primary font-medium' : 'text-muted-foreground'}>
                            {gpu.bandwidth}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground max-w-xs">{gpu.bestFor}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </AnimatedSection>

          {/* Recommendations */}
          <AnimatedStagger className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {recommendations.map((rec, index) => (
              <AnimatedItem key={index}>
                <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors h-full">
                  <div className="text-lg font-bold text-gradient mb-2">Pick {rec.gpu}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{rec.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}
