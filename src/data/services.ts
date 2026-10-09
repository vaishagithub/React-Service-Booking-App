

export interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "AC Service",
    category: "Home Appliance",
    description: "Complete AC cleaning and servicing.",
    price: 499,
    duration: "1 Hour",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
  },
  {
    id: 2,
    name: "Plumbing",
    category: "Home Repair",
    description: "Professional plumbing repair service.",
    price: 399,
    duration: "1 Hour",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39",
  },
  {
    id: 3,
    name: "Electrician",
    category: "Electrical",
    description: "Electrical installation and repair service.",
    price: 449,
    duration: "1 Hour",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
  },
  {
    id: 4,
    name: "House Cleaning",
    category: "Cleaning",
    description: "Professional home cleaning service.",
    price: 799,
    duration: "2 Hours",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
  {
    id: 5,
    name: "Car Washing",
    category: "Vehicle",
    description: "Complete exterior and interior car cleaning.",
    price: 599,
    duration: "1.5 Hours",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9",
  },

  {
    id: 6,
    name: "Washing Machine Repair",
    category: "Home Appliance",
    description: "Professional washing machine inspection and repair service.",
    price: 599,
    duration: "1.5 Hours",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1",
  },

  {
    id: 7,
    name: "Carpentry Service",
    category: "Home Repair",
    description:
      "Furniture repair, installation, and custom carpentry services.",
    price: 499,
    duration: "2 Hours",
    image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88",
  },

  {
    id: 8,
    name: "Bathroom Cleaning",
    category: "Cleaning",
    description: "Deep cleaning and sanitization service for bathrooms.",
    price: 449,
    duration: "1.5 Hours",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
  },

  {
    id: 9,
    name: "Laptop Repair",
    category: "Electronics",
    description:
      "Laptop diagnosis, software installation, and hardware repair service.",
    price: 699,
    duration: "2 Hours",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
  },
  {
    id: 10,
    name: "TV Repair",
    category: "Electronics",
    description:
      "Professional TV inspection, troubleshooting, and repair service.",
    price: 549,
    duration: "1.5 Hours",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
  },

  {
    id: 11,
    name: "Water Tank Cleaning",
    category: "Cleaning",
    description: "Complete water tank cleaning and sanitization service.",
    price: 899,
    duration: "2 Hours",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7",
  },

  
];
