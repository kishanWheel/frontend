import DriverCard from "./DriverCard";
import { driverData } from "./driverData";

export default function DriverGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {driverData.map((driver) => (
        <DriverCard
          key={driver.id}
          driver={driver}
        />
      ))}
    </div>
  );
}