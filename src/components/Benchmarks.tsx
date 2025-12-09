const benchmarks = [
  {
    metric: "1.4–1.9×",
    label: "Faster vs H100",
    description: "On GPT-like LLM inference with optimized TensorRT-LLM stacks"
  },
  {
    metric: "21ms",
    label: "Time-to-First-Token",
    description: "vs 29ms on H100 and 48ms on A100 – critical for conversational agents"
  },
  {
    metric: "60%",
    label: "Higher Throughput",
    description: "Compared to H100 on large transformer models"
  },
  {
    metric: "~50%",
    label: "Power Savings",
    description: "On LLM inference vs previous-gen GPUs when scaled out"
  }
];

export function Benchmarks() {
  return (
    <section id="benchmarks" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real-World <span className="text-gradient">Performance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What H200 actually changes for your LLMs. Benchmark-backed claims you can trust.
            </p>
          </div>

          {/* Benchmark grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benchmarks.map((bench, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl" />
                
                <div className="relative p-6 rounded-2xl border border-border bg-card h-full flex flex-col group-hover:border-primary/40 transition-colors">
                  <div className="text-4xl font-bold text-gradient mb-2">
                    {bench.metric}
                  </div>
                  <div className="text-sm font-semibold text-foreground mb-3">
                    {bench.label}
                  </div>
                  <p className="text-sm text-muted-foreground mt-auto">
                    {bench.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary callout */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-glow opacity-20 blur-3xl" />
            <div className="relative p-8 rounded-2xl border border-primary/30 bg-card text-center">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                <span className="text-gradient font-bold">Fewer GPUs, same throughput.</span>{" "}
                <span className="text-muted-foreground">
                  Many workloads that previously needed 2× H100 or 2–3× A100 can now be consolidated 
                  to a single H200, especially when long context windows and big KV caches are involved.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
