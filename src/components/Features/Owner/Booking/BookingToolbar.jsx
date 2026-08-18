import { Search, Filter, ArrowUpDown, Calendar } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function BookingToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      {/* Search */}

      <div className="relative w-full lg:max-w-md">

        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

        <Input
          placeholder="Search booking..."
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

            <SelectItem value="all">
              All
            </SelectItem>

            <SelectItem value="pending">
              Pending
            </SelectItem>

            <SelectItem value="completed">
              Completed
            </SelectItem>

            <SelectItem value="cancelled">
              Cancelled
            </SelectItem>

          </SelectContent>

        </Select>

        {/* Date */}

        <Select>

          <SelectTrigger className="h-12 w-full rounded-xl sm:w-44">

            <Calendar className="mr-2 h-4 w-4" />

            <SelectValue placeholder="Date" />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="today">
              Today
            </SelectItem>

            <SelectItem value="week">
              This Week
            </SelectItem>

            <SelectItem value="month">
              This Month
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

            <SelectItem value="amount">
              Amount
            </SelectItem>

            <SelectItem value="customer">
              Customer
            </SelectItem>

          </SelectContent>

        </Select>

      </div>

    </div>
  );
}