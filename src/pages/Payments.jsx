import { useState } from "react";
import { Search, Calendar, PlusCircle, Download } from "lucide-react";

export default function Payments() {
  const [payments] = useState([
    {
      id: 1,
      patient: "Ramesh Adhikari",
      doctor: "Dr. Sita Sharma",
      service: "General Checkup",
      amount: 1200,
      mode: "eSewa",
      date: "2025-10-10",
      status: "Paid",
    },
    {
      id: 2,
      patient: "Kiran Lama",
      doctor: "Dr. Ramesh KC",
      service: "Dental Consultation",
      amount: 1500,
      mode: "Cash",
      date: "2025-10-09",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Sita Devi",
      doctor: "Dr. Hari Thapa",
      service: "Eye Test",
      amount: 900,
      mode: "Khalti",
      date: "2025-10-08",
      status: "Refunded",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">Payments</h1>
          <p className="text-gray-600 mt-1">Track and manage all hospital payments and invoices.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow-md transition-all">
          <PlusCircle size={18} /> Add Payment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { title: "Total Revenue", value: "Rs. 5,60,000", color: "bg-blue-600" },
          { title: "Today's Income", value: "Rs. 12,400", color: "bg-green-500" },
          { title: "Pending Payments", value: "Rs. 8,200", color: "bg-yellow-500" },
          { title: "Top Doctor", value: "Dr. Sita Sharma", color: "bg-purple-600" },
        ].map((card) => (
          <div
            key={card.title}
            className={`rounded-2xl shadow-md text-white p-6 ${card.color} flex flex-col justify-center`}
          >
            <h3 className="text-sm opacity-90 mb-1">{card.title}</h3>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 px-4 py-3 w-full sm:w-1/2 lg:w-1/3">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search payments..."
            className="ml-3 flex-1 border-none outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow-sm border border-gray-200 transition">
            <Calendar size={16} /> Date Range
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Payment Table */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden gap-y-16">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-8 py-4 text-sm font-semibold">Patient</th>
              <th className="px-8 py-4 text-sm font-semibold">Doctor</th>
              <th className="px-8 py-4 text-sm font-semibold">Service</th>
              <th className="px-8 py-4 text-sm font-semibold">Amount</th>
              <th className="px-8 py-4 text-sm font-semibold">Mode</th>
              <th className="px-8 py-4 text-sm font-semibold">Date</th>
              <th className="px-8 py-4 text-sm font-semibold text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr
                key={p.id}
                className={`border-b last:border-none hover:bg-blue-50 transition-all ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-8 py-4 text-gray-800 font-medium">{p.patient}</td>
                <td className="px-8 py-4 text-gray-700">{p.doctor}</td>
                <td className="px-8 py-4 text-gray-700">{p.service}</td>
                <td className="px-8 py-4 text-gray-700">Rs. {p.amount}</td>
                <td className="px-8 py-4 text-gray-700">{p.mode}</td>
                <td className="px-8 py-4 text-gray-700">{p.date}</td>
                <td className="px-8 py-4 text-center">
                  <span
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                      p.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : p.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
