"use client";

import { useEffect } from "react";
import { MapPin, Phone, Clock, Mail, ChevronRight } from "lucide-react";
import { LOCATIONS } from "@/lib/constants";

export default function Contact() {
  useEffect(() => {
    const AOS = require("aos");
    AOS.refresh();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              {" Our Locations"}
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find your nearest PureGleam location and experience the future of car washing today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1" data-aos="fade-right">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 h-full">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-muted-foreground">info@puregleam.com</p>
                    <p className="text-muted-foreground">support@puregleam.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-muted-foreground">Toll-free: 1-800-CARWASH</p>
                  </div>
                </div>
                
                <form className="space-y-4 mt-8">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 rounded-md bg-background border border-border focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 rounded-md bg-background border border-border focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      className="w-full p-3 rounded-md bg-background border border-border focus:border-primary outline-none transition-all h-24 resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="button"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-left">
            {LOCATIONS.map((location, index) => (
              <div 
                key={location.id} 
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 h-full hover:shadow-md transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <span>{location.hours}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-teal-500/20 animate-gradient-shift" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-lg font-medium">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">Map would be displayed here</p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 border border-primary/50 hover:bg-primary hover:text-primary-foreground text-primary py-2 rounded-md transition-all duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}

            <div 
              className="md:col-span-2 bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-6 rounded-xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">Ready for a Spotless Shine?</h3>
                <p className="text-muted-foreground">Visit any of our locations today or book an appointment online.</p>
              </div>
              <button className="whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 group">
                Book Now
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}