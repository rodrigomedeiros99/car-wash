"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Shield, Droplets, Timer, Users } from "lucide-react";

export default function About() {
  useEffect(() => {
    const AOS = require("aos");
    AOS.refresh();
  }, []);

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Vehicle Protection",
      description: "Our gentle cleaning processes protect your car's paint and finish."
    },
    {
      icon: <Droplets className="h-6 w-6 text-primary" />,
      title: "Eco-Friendly",
      description: "Water recycling systems and biodegradable products minimize environmental impact."
    },
    {
      icon: <Timer className="h-6 w-6 text-primary" />,
      title: "Quick Service",
      description: "Get a thorough clean in minutes with our efficient process."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Team",
      description: "Our trained professionals ensure your vehicle receives the best care."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-400/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                {" PureGleam"}
              </span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Founded in 2020, PureGleam has revolutionized the car washing industry with cutting-edge technology and a commitment to environmental sustainability. Our mission is to provide exceptional vehicle care while minimizing our ecological footprint.
            </p>
            
            <p className="text-muted-foreground mb-8">
              What sets us apart is our innovative approach to car washing. We&apos;ve developed proprietary cleaning solutions and water-saving technologies that deliver superior results while using less water and electricity than traditional car washes.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.pexels.com/photos/372810/pexels-photo-372810.jpeg"
                alt="Modern car wash facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/30 backdrop-blur-md p-4 rounded-lg border border-white/10">
                  <p className="text-white text-lg font-medium">Our State-of-the-Art Facility</p>
                  <p className="text-white/80 text-sm">Featuring the latest in car wash technology</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-gradient-to-br from-blue-400/30 to-teal-400/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}