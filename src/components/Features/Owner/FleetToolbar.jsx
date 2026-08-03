import { Search, Filter, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function FleetToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <Input
          placeholder="Search vehicle..."
          className="h-12 rounded-xl border-slate-200 pl-12"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">

        {/* Status */}

        <Select>
          <SelectTrigger className="h-12 w-full rounded-xl sm:w-44">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="maintenance">
              Maintenance
            </SelectItem>
            <SelectItem value="idle">
             Idle
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Vehicle Type */}

        <Select>
          <SelectTrigger className="h-12 w-full rounded-xl sm:w-44">
            <SelectValue placeholder="Vehicle Type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="truck">Truck</SelectItem>
            <SelectItem value="mini-truck">
              Mini Truck
            </SelectItem>
            <SelectItem value="pickup">
              Pickup
            </SelectItem>
            <SelectItem value="trailer">
              Trailer
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Sort */}

        <Select>
          <SelectTrigger className="h-12 w-full rounded-xl sm:w-44">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="latest">
              Latest
            </SelectItem>

            <SelectItem value="oldest">
              Oldest
            </SelectItem>

            <SelectItem value="name">
              Vehicle Name
            </SelectItem>

            <SelectItem value="status">
              Status
            </SelectItem>
          </SelectContent>
        </Select>

      </div>

    </div>
  );
}