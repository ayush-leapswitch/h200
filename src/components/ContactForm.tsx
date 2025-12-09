import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection, AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, Building2, User, MessageSquare } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  useCase: z.string().trim().min(10, "Please describe your use case (min 10 characters)").max(1000, "Use case must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    useCase: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Demo request submitted!", {
      description: "Our team will get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", useCase: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="container px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left content */}
            <AnimatedSection>
              <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Request a <span className="text-gradient">Demo</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to supercharge your AI workloads with H200? Fill out the form and our 
                GPU specialists will reach out within 24 hours to discuss your requirements.
              </p>

              <AnimatedStagger className="space-y-4">
                <AnimatedItem>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    sales@cloudpe.ai
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    Mumbai, India
                  </div>
                </AnimatedItem>
              </AnimatedStagger>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl card-gradient border border-border">
                <div className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Work Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      className={errors.company ? "border-destructive" : ""}
                    />
                    {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                  </div>

                  {/* Use Case */}
                  <div className="space-y-2">
                    <Label htmlFor="useCase" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-muted-foreground" />
                      Describe Your Use Case
                    </Label>
                    <Textarea
                      id="useCase"
                      placeholder="Tell us about your AI workload, model sizes, expected usage patterns..."
                      value={formData.useCase}
                      onChange={(e) => handleChange("useCase", e.target.value)}
                      className={`min-h-[120px] resize-none ${errors.useCase ? "border-destructive" : ""}`}
                    />
                    {errors.useCase && <p className="text-xs text-destructive">{errors.useCase}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Demo"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
