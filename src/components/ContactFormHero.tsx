import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, Building2, User, MessageSquare, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  useCase: z.string().trim().min(10, "Please describe your use case (min 10 characters)").max(1000, "Use case must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactFormHero() {
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

    // Simulate submission - replace with actual API call when backend is connected
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Demo request submitted!", {
      description: "Our team will get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", useCase: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 relative border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left content */}
              <div className="lg:col-span-2">
                <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Get in Touch
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Talk to a <span className="text-gradient">GPU Specialist</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Ready to supercharge your AI workloads? Our GPU specialists will help you 
                  find the right configuration for your needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    sales@cloudpe.ai
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="w-4 h-4 text-primary" />
                    Mumbai, India
                  </div>
                </div>
              </div>

              {/* Form - horizontal layout */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="p-6 rounded-2xl card-gradient border border-border">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="hero-name" className="flex items-center gap-1.5 text-xs">
                        <User className="w-3 h-3 text-muted-foreground" />
                        Full Name
                      </Label>
                      <Input
                        id="hero-name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={`h-9 text-sm ${errors.name ? "border-destructive" : ""}`}
                      />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label htmlFor="hero-email" className="flex items-center gap-1.5 text-xs">
                        <Mail className="w-3 h-3 text-muted-foreground" />
                        Work Email
                      </Label>
                      <Input
                        id="hero-email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`h-9 text-sm ${errors.email ? "border-destructive" : ""}`}
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <Label htmlFor="hero-company" className="flex items-center gap-1.5 text-xs">
                        <Building2 className="w-3 h-3 text-muted-foreground" />
                        Company
                      </Label>
                      <Input
                        id="hero-company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className={`h-9 text-sm ${errors.company ? "border-destructive" : ""}`}
                      />
                      {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                    </div>

                    {/* Use Case */}
                    <div className="space-y-1.5">
                      <Label htmlFor="hero-useCase" className="flex items-center gap-1.5 text-xs">
                        <MessageSquare className="w-3 h-3 text-muted-foreground" />
                        Use Case
                      </Label>
                      <Input
                        id="hero-useCase"
                        placeholder="LLM training, inference..."
                        value={formData.useCase}
                        onChange={(e) => handleChange("useCase", e.target.value)}
                        className={`h-9 text-sm ${errors.useCase ? "border-destructive" : ""}`}
                      />
                      {errors.useCase && <p className="text-xs text-destructive">{errors.useCase}</p>}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Demo
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
