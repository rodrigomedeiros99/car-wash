export type ServiceType = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type PriceType = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
};

export type MembershipType = {
  id: number;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export const SERVICES: ServiceType[] = [
  {
    id: 1,
    title: "Express Wash",
    description: "Quick clean with advanced foam technology and spot-free rinse.",
    icon: "droplets"
  },
  {
    id: 2,
    title: "Deluxe Wash",
    description: "Thorough cleaning with triple foam polish and wheel brightener.",
    icon: "sparkles"
  },
  {
    id: 3,
    title: "Premium Detail",
    description: "Complete interior and exterior detailing with ceramic coating protection.",
    icon: "car"
  },
  {
    id: 4,
    title: "Eco Friendly",
    description: "Water-efficient wash using biodegradable cleaning products.",
    icon: "leaf"
  }
];

export const PRICES: PriceType[] = [
  {
    id: 1,
    name: "Basic Wash",
    price: 12.99,
    description: "Quick and efficient cleaning for your vehicle",
    features: ["Exterior Wash", "Wheel Cleaning", "Basic Dry", "Air Freshener"]
  },
  {
    id: 2,
    name: "Deluxe Wash",
    price: 19.99,
    description: "Enhanced cleaning with added protection",
    features: ["Everything in Basic", "Triple Foam Polish", "Undercarriage Wash", "Wax Protection", "Tire Shine"]
  },
  {
    id: 3,
    name: "Premium Detail",
    price: 29.99,
    description: "Comprehensive cleaning inside and out",
    features: ["Everything in Deluxe", "Interior Vacuum", "Dashboard Cleaning", "Window Cleaning", "Leather Treatment", "Ceramic Coating"]
  }
];

export const MEMBERSHIPS: MembershipType[] = [
  {
    id: 1,
    name: "Basic",
    price: 29.99,
    period: "month",
    description: "Perfect for occasional drivers",
    features: ["4 Basic Washes per month", "10% off additional services", "Priority lane access"]
  },
  {
    id: 2,
    name: "Premium",
    price: 49.99,
    period: "month",
    description: "Ideal for regular drivers",
    features: ["4 Deluxe Washes per month", "2 Premium Details per month", "15% off additional services", "Priority lane access", "Free vacuum use"],
    popular: true
  },
  {
    id: 3,
    name: "Ultimate",
    price: 79.99,
    period: "month",
    description: "For those who demand perfection",
    features: ["Unlimited Basic & Deluxe Washes", "4 Premium Details per month", "20% off additional services", "VIP lane access", "Free vacuum use", "Monthly ceramic treatment"]
  }
];

export const LOCATIONS = [
  {
    id: 1,
    name: "Downtown Station",
    address: "123 Main Street, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Sun: 7AM - 9PM"
  },
  {
    id: 2,
    name: "Westside Plaza",
    address: "456 West Avenue, Westside",
    phone: "(555) 987-6543",
    hours: "Mon-Sun: 7AM - 10PM"
  }
];