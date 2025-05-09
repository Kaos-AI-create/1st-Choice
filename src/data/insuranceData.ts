import { 
  Home, Car, Building, Umbrella, Briefcase, 
  BarChart, TruckIcon, Users, Shield 
} from 'lucide-react';

export interface InsuranceItem {
  name: string;
  icon: React.ElementType;
  description: string;
}

export const personalInsurance: InsuranceItem[] = [
  {
    name: 'Home Insurance',
    icon: Home,
    description: 'Protect your home and personal property from damage or loss.'
  },
  {
    name: 'Condo Insurance',
    icon: Building,
    description: 'Coverage for your condo unit and personal belongings.'
  },
  {
    name: 'Renters Insurance',
    icon: Shield,
    description: 'Affordable protection for your personal belongings as a renter.'
  },
  {
    name: 'Auto Insurance',
    icon: Car,
    description: 'Coverage for your vehicles with competitive rates.'
  },
  {
    name: 'SR-22 Insurance',
    icon: Shield,
    description: 'Special filing for high-risk drivers to maintain legal driving status.'
  },
  {
    name: 'High Net Worth Insurance',
    icon: Umbrella,
    description: 'Premium coverage options for high-value homes and assets.'
  }
];

export const businessInsurance: InsuranceItem[] = [
  {
    name: 'General Liability',
    icon: Shield,
    description: 'Protection against common business liability claims.'
  },
  {
    name: 'Commercial Auto',
    icon: TruckIcon,
    description: 'Coverage for company vehicles and transportation needs.'
  },
  {
    name: 'Commercial Property',
    icon: Building,
    description: 'Protect your business property, equipment, and inventory.'
  },
  {
    name: 'Workers Compensation',
    icon: Users,
    description: 'Coverage for employee injuries and illnesses occurring on the job.'
  }
];