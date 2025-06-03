"use client";

import { useEffect } from "react";
import { SERVICES } from "@/lib/constants";
import { Droplets, Sparkles, Car, Leaf } from "lucide-react";
import Image from "next/image";

export default function Services() {
  // Initialize AOS
  useEffect(() => {
    const AOS = require("aos");
    AOS.refresh();
  }, []);

  // Map service icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "droplets":
        return <Droplets className="h-8 w-8 mb-4 text-blue-400" />;
      case "sparkles":
        return <Sparkles className="h-8 w-8 mb-4 text-amber-400" />;
      case "car":
        return <Car className="h-8 w-8 mb-4 text-purple-400" />;
      case "leaf":
        return <Leaf className="h-8 w-8 mb-4 text-green-400" />;
      default:
        return <Droplets className="h-8 w-8 mb-4 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-400/20 to-gray-400/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Premium
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {" Services"}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of specialized car wash services designed to keep your vehicle
            looking immaculate in any condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-card/50 backdrop-blur-sm hover:bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {getIcon(service.icon)}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              State-of-the-Art Technology
            </h3>
            <p className="text-muted-foreground mb-6">
              Our facilities are equipped with the latest car washing technology, ensuring a thorough and gentle clean every time.
            </p>
            <ul className="space-y-2">
              {[
                "Touch-free washing systems",
                "Advanced spot-free rinse technology",
                "Eco-friendly water recycling",
                "High-pressure cleaning capabilities"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 relative h-[300px] rounded-xl overflow-hidden" data-aos="fade-left">
            <Image
              src="https://images.unsplash.com/photo-1539116404839-b2a39d8643d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Advanced car wash technology"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-medium">Advanced Cleaning Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}