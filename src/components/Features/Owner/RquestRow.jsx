import {
  MapPin,
  Truck,
  Clock3,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function RequestRow({ request }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-all duration-300 hover:shadow-md">

      {/* Left */}

      <div>

        <div className="flex items-center gap-2">

          <h3 className="font-semibold text-slate-900">
            {request.company}
          </h3>

          <span className="text-xs text-slate-400">
            {request.id}
          </span>

        </div>

        <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">

          <MapPin
            size={15}
            className="text-green-600"
          />

          <span>
            {request.pickup}
          </span>

          <span>→</span>

          <span>
            {request.drop}
          </span>

          <span>·</span>

          <span>
            {request.distance}
          </span>

        </div>

        <div className="mt-2 flex items-center gap-5 text-sm text-slate-400">

          <div className="flex items-center gap-2">

            <Truck size={15} />

            {request.vehicle}

          </div>

          <div className="flex items-center gap-2">

            <Clock3 size={15} />

            {request.time}

          </div>

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <div className="text-right">

          <h2 className="text-xl font-bold">
            {request.amount}
          </h2>

        </div>

        <div className="flex gap-3">

          <Button className="rounded-full bg-green-600 px-6 hover:bg-green-700">
            Accept
          </Button>

          <Button
            variant="secondary"
            className="rounded-full"
          >
            Decline
          </Button>

        </div>

      </div>

    </div>
  );
}
