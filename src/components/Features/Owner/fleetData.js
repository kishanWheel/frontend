import {
  Truck,
  CircleCheckBig,
  Wrench,
  CircleOff,
} from "lucide-react";

export const fleetStats = [
  {
    id: 1,
    title: "Total Fleet",
    value: 25,
    icon: Truck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Active",
    value: 18,
    icon: CircleCheckBig,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Maintenance",
    value: 4,
    icon: Wrench,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 4,
    title: "Idle",
    value: 3,
    icon: CircleOff,
    color: "bg-blue-100 text-blue-600",
  },
];
export const fleetVehicles = [
  {
    id: 1,
    vehicleNo: "UP32 AB 4589",
    type: "Tata Ace Gold",
    driver: "Rahul Singh",
    status: "Active",
    health: 96,
    fuel: 78,
    service: "15 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600",
  },

  {
    id: 2,
    vehicleNo: "UP78 CD 2251",
    type: "Ashok Leyland Dost",
    driver: "Amit Kumar",
    status: "Maintenance",
    health: 68,
    fuel: 40,
    service: "08 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1556122071-e404eaedb77f?w=600",
  },

  {
    id: 3,
    vehicleNo: "DL01 EF 8899",
    type: "Mahindra Bolero Pickup",
    driver: "Sanjay Verma",
    status: "Idle",
    health: 42,
    fuel: 18,
    service: "01 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600",
  },

  {
    id: 4,
    vehicleNo: "MH14 GH 4587",
    type: "Eicher Pro 2049",
    driver: "Vikas Sharma",
    status: "Active",
    health: 91,
    fuel: 82,
    service: "20 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600",
  },
];