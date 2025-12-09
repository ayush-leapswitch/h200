import { MapPin, CreditCard, Layers, Users, Headphones } from "lucide-react";

const advantages = [
  {
    icon: MapPin,
    title: "India-Local Mumbai DC",
    description: "Lower latency to Indian users and easier compliance with data-residency requirements."
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "Flat ₹300/hr on-demand for 1× H200 with generous CPU/RAM – no confusing credit systems."
  },
  {
    icon: Layers,
    title: "Full GPU Stack",
    description: "Seamlessly move workloads between A100, L4, L40S and H200 on the same platform."
  },
  {
    icon: Users,
    title: "Partner-Friendly",
    description: "MSPs, ISVs, and resellers get custom discounts and co-marketing opportunities."
  },
  {
    icon: Headphones,
    title: "Human Support",
    description: "Direct access to GPU & infra specialists in India who understand AI workloads."
  }
];

export function WhyCloudpe() {
  return (
    <section id="why-us" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why <span className="text-gradient">Cloudpe</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              H200 on our cloud vs global hyperscalers. Built for India, priced for scale.
            </p>
          </div>

          {/* Advantages grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 ${
                  index === 4 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <advantage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
