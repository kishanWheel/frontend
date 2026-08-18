import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const bookingStats = [
  {
    id: 1,
    title: "Total Bookings",
    value: 248,
    icon: ClipboardList,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Pending",
    value: 18,
    icon: Clock3,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Completed",
    value: 201,
    icon: CheckCircle2,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 4,
    title: "Cancelled",
    value: 29,
    icon: XCircle,
    color: "bg-red-100 text-red-600",
  },
];

export const bookingData = [
  {
    id: 1,
    customer: "Rahul Sharma",
    pickup: "Lucknow",
    destination: "Kanpur",
    vehicle: "UP32 AB 4589",
    driver: "Suresh Mane",
    amount: "₹4,800",
    status: "Pending",
    date: "06 Aug 2026",
  },
  {
    id: 2,
    customer: "Amit Kumar",
    pickup: "Delhi",
    destination: "Noida",
    vehicle: "DL01 EF 8899",
    driver: "Ajay Kumar",
    amount: "₹3,200",
    status: "Completed",
    date: "05 Aug 2026",
  },
  {
    id: 3,
    customer: "Neha Singh",
    pickup: "Jaipur",
    destination: "Ajmer",
    vehicle: "RJ14 GH 4567",
    driver: "Vijay Singh",
    amount: "₹2,950",
    status: "Cancelled",
    date: "04 Aug 2026",
  },
  {
    id: 4,
    customer: "Rohit Verma",
    pickup: "Patna",
    destination: "Gaya",
    vehicle: "BR01 JK 8899",
    driver: "Ramesh Patil",
    amount: "₹5,100",
    status: "Pending",
    date: "06 Aug 2026",
  },
];