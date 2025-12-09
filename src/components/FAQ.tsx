import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is your H200 priced compared to other providers?",
    answer: "We offer ₹300/hour on-demand for 1× H200 + 16 vCPU + 128 GB RAM + 250 GB NVMe in our Mumbai datacenter. Comparable H200 instances on global clouds are typically priced in USD with additional network and storage charges. Our goal is to be India's most cost-effective H200 platform without compromising on performance."
  },
  {
    question: "Can I get reserved or monthly pricing?",
    answer: "Yes. For steady workloads (training pipelines, always-on inference), we provide reserved and monthly pricing and partner discounts. Contact our sales team for a custom quote."
  },
  {
    question: "Do you support multi-GPU setups (2×, 4×, 8× H200)?",
    answer: "Yes. You can launch multiple H200-backed VMs and orchestrate via your stack, or take a dedicated 8× H200 bare-metal node for maximum control."
  },
  {
    question: "Can I mix different GPU types?",
    answer: "Absolutely. On Cloudpe, you can run workloads on A100, L4, L40S and H200 simultaneously – for example, training on A100/H100-class GPUs and serving on H200 or L40S/L4 for cost optimization."
  },
  {
    question: "Is H200 only available in Mumbai?",
    answer: "Right now, H200 is launched in our Mumbai datacenter, with connectivity to the rest of our Cloudpe regions. Additional regions can be added based on demand."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
