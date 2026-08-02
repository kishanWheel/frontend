import {
  Truck,
  Activity,
  IndianRupee,
  TrendingUp,
  CircleCheck,
  ChartColumn,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Active Fleet",
    value: "3 / 5",
    badge: "+1",
    icon: Truck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Vehicles Online",
    value: "3",
    badge: "60%",
    icon: Activity,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Revenue Today",
    value: "₹18,900",
    badge: "+22%",
    icon: IndianRupee,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "Monthly Revenue",
    value: "₹2.61L",
    badge: "+16%",
    icon: TrendingUp,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Trips Completed",
    value: "52",
    badge: "+7",
    icon: CircleCheck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Fleet Utilization",
    value: "78%",
    badge: "+5%",
    icon: ChartColumn,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-500",
  },
];