"use client";

import { useEffect } from "react";
import { Check, Star } from "lucide-react";
import { MEMBERSHIPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Membership() {
  useEffect(() => {
    const AOS = require("aos");
    AOS.refresh();
  }, []);

  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-gray-400/20 to-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Membership
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {" Plans"}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our membership program and enjoy unlimited washes, exclusive perks, and significant savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {MEMBERSHIPS.map((membership, index) => (
            <div
              key={membership.id}
              className={cn(
                "bg-card/50 backdrop-blur-sm hover:bg-card border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 group relative flex flex-col",
                membership.popular
                  ? "border-primary/30 scale-105 md:scale-110 shadow-lg z-10"
                  : "border-border/50"
              )}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {membership.popular && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={cn("p-6 flex-grow", membership.popular ? "pt-8" : "")}>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {membership.name}
                  {membership.popular && <Star size={16} className="ml-2 fill-amber-400 text-amber-400" />}
                </h3>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold">${membership.price}</span>
                  <span className="text-muted-foreground">/{membership.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-6">{membership.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {membership.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className={cn(
                        "mr-2 flex-shrink-0 mt-0.5",
                        membership.popular ? "text-primary" : "text-foreground/70"
                      )} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0">
                <button 
                  className={cn(
                    "w-full py-3 rounded-md transition-all duration-300",
                    membership.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Subscribe Now
                </button>
              </div>
              
              <div 
                className={cn(
                  "h-1 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
                  membership.popular
                    ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    : "bg-gradient-to-r from-blue-400 to-teal-400"
                )} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}