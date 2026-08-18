import { vehicleData } from "./trackingData";
import ActiveTrip from "./ActiveTrip";

export default function ActiveTripList() {
  return (
    <div className="space-y-2 bg-white p-3 sm:p-4">

      {vehicleData.map((vehicle) => (
        <ActiveTrip
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}

    </div>
  );
}