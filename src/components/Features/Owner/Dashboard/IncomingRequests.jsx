import { requestData } from "./requestData";
import RequestRow from "./RquestRow";

export default function IncomingRequests() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Incoming Requests
        </h2>

        <div className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">

          ● 3+ New

        </div>

      </div>

      <div className="space-y-4">

        {requestData.map((request) => (

          <RequestRow
            key={request.id}
            request={request}
          />

        ))}

      </div>

    </section>
  );
}