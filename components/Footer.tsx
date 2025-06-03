import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm pt-12 pb-6 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="#home" className="text-xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-4 inline-block">
              PureGleam
            </Link>
            <p className="text-muted-foreground mb-6">
              The future of car cleaning technology, delivering spotless results while caring for your vehicle and the environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "Pricing", href: "#pricing" },
                { name: "Membership", href: "#membership" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Express Wash",
                "Deluxe Wash",
                "Premium Detail",
                "Interior Cleaning",
                "Ceramic Coating",
                "Fleet Services"
              ].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">123 Main Street</p>
              <p className="mb-2">Downtown, City 12345</p>
              <p className="mb-4">United States</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p>Email: info@puregleam.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-6 mt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} PureGleam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}