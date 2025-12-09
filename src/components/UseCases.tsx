import { Bot, Building2, LineChart, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Bot,
    title: "AI Product Companies & SaaS",
    items: [
      "Multi-tenant LLM APIs with strict latency SLOs",
      "Chatbots, copilots, and agents with 100k+ token context",
      "RAG over large vector stores"
    ]
  },
  {
    icon: LineChart,
    title: "Fintech, BFSI & Analytics",
    items: [
      "Real-time risk engines and fraud detection",
      "High-throughput inference over financial documents",
      "Compliance-sensitive workloads needing India data residency"
    ]
  },
  {
    icon: Building2,
    title: "Enterprises & System Integrators",
    items: [
      "Private LLMs on internal data (HR, legal, sales)",
      "Hybrid deployments mixing on-prem + cloud GPUs",
      "AI transformation PoCs where performance is non-negotiable"
    ]
  },
  {
    icon: GraduationCap,
    title: "Research & Academia",
    items: [
      "Training / fine-tuning open-source LLMs & VLMs",
      "Large-scale simulation and HPC",
      "Scientific computing at scale"
    ]
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Who Is H200 <span className="text-gradient">Perfect For?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From startups to enterprises, H200 powers the most demanding AI workloads.
            </p>
          </div>

          {/* Use case grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl card-gradient border border-border hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold pt-2">{useCase.title}</h3>
                </div>
                <ul className="space-y-3">
                  {useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
