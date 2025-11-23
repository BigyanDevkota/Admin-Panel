import { useState } from "react";
import { Search, UserPlus, Trash2, Edit3 } from "lucide-react";

export default function Patients() {
  const [patients, setPatients] = useState([
    { id: 1, name: "Ramesh Adhikari", age: 32, gender: "Male", phone: "9801234567", lastVisit: "2025-10-10" },
    { id: 2, name: "Sita Sharma", age: 28, gender: "Female", phone: "9812345678", lastVisit: "2025-09-21" },
    { id: 3, name: "Kiran Lama", age: 45, gender: "Male", phone: "9840011122", lastVisit: "2025-08-18" },
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-700">Patients</h1>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition">
          <UserPlus size={18} /> Add Patient
        </button>
      </div>

      {/* Search */}
      <div className="mb-10 flex items-center bg-white rounded-xl shadow-sm border px-4 py-2 w-full max-w-md">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search patients..."
          className="ml-3 flex-1 border-none outline-none text-sm text-gray-700"
        />
      </div>

      {/* Table */}
      <div className="mt-2.5 bg-white rounded-xl shadow-md overflow-hidden border">
        <table className="w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold">Name</th>
              <th className="px-6 py-3 text-sm font-semibold">Age</th>
              <th className="px-6 py-3 text-sm font-semibold">Gender</th>
              <th className="px-6 py-3 text-sm font-semibold">Phone</th>
              <th className="px-6 py-3 text-sm font-semibold">Last Visit</th>
              <th className="px-6 py-3 text-sm font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, i) => (
              <tr
                key={p.id}
                className={`border-b hover:bg-blue-50 transition ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-6 py-4 text-gray-800 font-medium">{p.name}</td>
                <td className="px-6 py-4 text-gray-700">{p.age}</td>
                <td className="px-6 py-4 text-gray-700">{p.gender}</td>
                <td className="px-6 py-4 text-gray-700">{p.phone}</td>
                <td className="px-6 py-4 text-gray-700">{p.lastVisit}</td>
                <td className="px-6 py-4 text-center flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800 transition">
                    <Edit3 size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
