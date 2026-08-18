import {
  AlertCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

export default function AlertRow({ alert }) {
  const styles = {
    danger: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "text-red-500",
      Icon: AlertCircle,
    },

    warning: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "text-orange-500",
      Icon: AlertTriangle,
    },

    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-500",
      Icon: Info,
    },
  };

  const current = styles[alert.type];
  const Icon = current.Icon;

  return (
    <div
      className={`flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 hover:shadow-md ${current.bg} ${current.border}`}
    >
      <div className="flex items-center gap-4">

        <Icon
          size={22}
          className={current.icon}
        />

        <div>

          <h3 className="font-semibold text-slate-900">
            {alert.title}
          </h3>

          <p className="text-sm text-slate-500">
            {alert.vehicle}
            {" • "}
            {alert.due}
          </p>

        </div>

      </div>

      <button className="rounded-full p-2 text-slate-400 transition hover:bg-white hover:text-slate-700">
        <X size={18} />
      </button>

    </div>
  );
}