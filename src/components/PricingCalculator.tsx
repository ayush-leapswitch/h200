import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { Calculator, Clock, Calendar, CalendarDays, CalendarRange, Check } from "lucide-react";

const HOURLY_RATE = 300;

const commitmentPlans = [
  {
    id: "hourly",
    name: "On-Demand",
    duration: "Pay as you go",
    discount: 0,
    icon: Clock,
  },
  {
    id: "monthly",
    name: "30 Days",
    duration: "Monthly commitment",
    discount: 15,
    icon: Calendar,
  },
  {
    id: "6months",
    name: "6 Months",
    duration: "Half-yearly commitment",
    discount: 25,
    icon: CalendarDays,
  },
  {
    id: "annual",
    name: "Annual",
    duration: "Yearly commitment",
    discount: 35,
    icon: CalendarRange,
  },
];

export function PricingCalculator() {
  const [hours, setHours] = useState<string>("100");
  const [selectedPlan, setSelectedPlan] = useState<string>("hourly");

  const hoursNum = parseInt(hours) || 0;
  const selectedPlanData = commitmentPlans.find(p => p.id === selectedPlan);
  const discount = selectedPlanData?.discount || 0;
  
  const basePrice = hoursNum * HOURLY_RATE;
  const discountAmount = basePrice * (discount / 100);
  const finalPrice = basePrice - discountAmount;

  return (
    <section className="py-16 relative">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-8 rounded-3xl card-gradient border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pricing Calculator</h3>
                  <p className="text-sm text-muted-foreground">Estimate your H200 GPU costs</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Input */}
                <div className="space-y-6">
                  {/* Hours input */}
                  <div className="space-y-2">
                    <Label htmlFor="hours" className="text-sm font-medium">
                      Estimated Hours of Usage
                    </Label>
                    <div className="relative">
                      <Input
                        id="hours"
                        type="number"
                        min="1"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        className="h-12 text-lg font-semibold pr-16"
                        placeholder="Enter hours"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                        hours
                      </span>
                    </div>
                  </div>

                  {/* Commitment plans */}
                  <div className="space-y-3">
                    <Label className="text-sm font-medium">Select Commitment Plan</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {commitmentPlans.map((plan) => (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`relative p-4 rounded-xl border text-left transition-all duration-200 ${
                            selectedPlan === plan.id
                              ? "border-primary bg-primary/10"
                              : "border-border bg-card hover:border-primary/50"
                          }`}
                        >
                          {plan.discount > 0 && (
                            <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                              -{plan.discount}%
                            </span>
                          )}
                          <plan.icon className={`w-5 h-5 mb-2 ${selectedPlan === plan.id ? 'text-primary' : 'text-muted-foreground'}`} />
                          <div className="font-semibold text-sm">{plan.name}</div>
                          <div className="text-xs text-muted-foreground">{plan.duration}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Result */}
                <div className="flex flex-col justify-center">
                  <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Base Rate</span>
                        <span>₹{HOURLY_RATE}/hour</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Hours</span>
                        <span>{hoursNum.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>₹{basePrice.toLocaleString()}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between items-center text-sm text-primary">
                          <span>Commitment Discount ({discount}%)</span>
                          <span>-₹{discountAmount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="border-t border-border pt-4">
                        <div className="flex justify-between items-end">
                          <span className="font-semibold">Total Estimated Cost</span>
                          <div className="text-right">
                            <span className="text-3xl font-bold text-gradient">
                              ₹{finalPrice.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {discount > 0 && (
                    <div className="mt-4 p-4 rounded-xl border border-primary/30 bg-primary/5">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <span className="font-semibold text-primary">You save ₹{discountAmount.toLocaleString()}</span>
                          <span className="text-muted-foreground"> with {selectedPlanData?.name} commitment</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button variant="hero" size="lg" className="mt-4" asChild>
                    <a href="#contact">Get Custom Quote</a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
