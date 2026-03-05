"use client";

import Order from "@/types/order";
import Link from "next/link";

export default function OrdersTable({orders}: {orders:Order[]}) { {

  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">Orders</h2>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Order ID</th>

            <th className="p-4 text-left">Customer</th>

            <th className="p-4 text-left">Amount</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-left">Date</th>

            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-4">{order.id}</td>

              <td className="p-4">{order.customer.name}</td>

              <td className="p-4">{order.total}</td>

              <td className="p-4">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
                 {order.status}
                </span>
              </td>

              <td className="p-4">{}</td>

              <td className="p-4 flex gap-2">
                <Link href={`/admin/orders/${order.id}`}className="border px-3 py-1 rounded ">
                View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
}
