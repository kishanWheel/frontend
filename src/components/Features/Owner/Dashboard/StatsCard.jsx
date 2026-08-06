export default function StatsCard({
  title,
  value,
  badge,
  icon: Icon,
  iconBg,
  iconColor,
}) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="mb-6 flex items-start justify-between">

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
        >
          <Icon className={`h-7 w-7 ${iconColor}`} />
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
          {badge}
        </span>

      </div>

      <h2 className="text-2xl font-bold text-slate-900">
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {title}
      </p>

    </div>
  );
}