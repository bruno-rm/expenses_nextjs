import { listExpenses } from "@/lib/data";
import { DeleteExpense } from "@/lib/buttons";

export default async function Table() {
  const data = await listExpenses();
  return (
    <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-left">
            <th className="px-4 py-3 font-semibold">Description</th>
            <th className="px-4 py-3 font-semibold">Value</th>
            <th className="px-4 py-3 font-semibold">Day</th>
            <th className="px-4 py-3 font-semibold">Month</th>
            <th className="px-4 py-3 font-semibold">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={index}
                className={`border-t hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2 ">{item.value}</td>
                <td className="px-4 py-2 ">{item.day}</td>
                <td className="px-4 py-2 ">{item.month}</td>
                <td className="px-7 py-2 text-gray-400 hover:text-red-500 transition-colors">
                  {" "}
                  <DeleteExpense id={item.id} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center text-gray-500 py-6 italic">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

