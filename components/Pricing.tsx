"use client";

import { useEffect } from "react";
import { Check } from "lucide-react";
import { PRICES } from "@/lib/constants";

export default function Pricing() {
  useEffect(() => {
    const AOS = require("aos");
    AOS.refresh();
  }, []);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {" Pricing"}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect wash for your vehicle with our simple and straightforward pricing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {PRICES.map((price, index) => (
            <div 
              key={price.id}
              className="bg-card/40 backdrop-blur-sm hover:bg-card border border-border/50 hover:border-primary/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg group flex flex-col"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{price.name}</h3>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary font-medium">${index + 1}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold">${price.price}</span>
                  <span className="text-muted-foreground"> / wash</span>
                </div>
                
                <p className="text-muted-foreground mb-6">{price.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {price.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className="mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 pt-0">
                <button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-md transition-all duration-300"
                >
                  Select Package
                </button>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}