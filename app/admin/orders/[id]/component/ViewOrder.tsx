// import Order from "@/types/order";
// import Image from "next/image";


// export default async function OrderViewPage({orders}: {orders:Order[]}) {
//     const order = orders[0];
//     return (
//        <div className="space-y-6">
//          {/* top */}
   
//          <div>
//            <h1 className="text-2xl font-bold">Order {order.id}</h1>
//            <p className="text-gray-500">placed on {order.date}</p>
//          </div>
   
//          <div className="flex gap-3 items-center">
//            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
//              {order.status}
//            </span>
   
//            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
//              {order.payment}
//            </span>
   
//            <button className="bg-black text-white px-4 py-2 rounded-lg">
//              Update Status
//            </button>
//          </div>
   
//          {/* Customer*/}
//          <div className="grid md:grid-cols-2 gap-6">
//            <div className="bg-white rounded-xl shadow p-6">
//              <h2 className="font-semibold mb-4">Customer Information</h2>
   
//              <div className="space-y-2 text-sm">
//                <p>
//                  <strong>Name:</strong> {order.customer.name}
//                </p>
//                <p>
//                  <strong>Email:</strong> {order.customer.email}
//                </p>
//                <p>
//                  <strong>Phone:</strong> {order.customer.phone}
//                </p>
//                <p>
//                  <strong>Address:</strong> {order.customer.address}
//                </p>
//              </div>
//            </div>
//          </div>
   
//          {/* Order Items */}
//          <div className="bg-white rounded-xl shadow overflow-hidden">
//            <div className="p-6 border-b">
//              <h2 className="font-semibold">Order Items</h2>
//            </div>
   
//            <div className="divide-y">
//              {order.items.map((item) => (
//                <div
//                  key={item.product_id}
//                  className="flex flex-col md:flex-row justify-between items-center p-6 gap-4"
//                >
//                  <div className="flex items-center gap-4">
//                    <Image
//                      src={order.item.product_image}
//                      alt={order.item.title}
//                      width={80}
//                      height={80}
//                      className="rounded-lg object-cover"
//                    />
   
//                    <div>
//                      <p className="font-medium">{item.title}</p>
//                      <p className="text-sm text-gray-500">Qty: {item}</p>
//                    </div>
//                  </div>
   
//                  <div className="font-semibold">${item.price * item.quantity}</div>
//                </div>
//              ))}
//            </div>
//          </div>
   
//          {/* Summary */}
//          <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
//            <div className="text-gray-600">Total Amount</div>
   
//            <div className="text-2xl font-bold">${order.total}</div>
//          </div>
//        </div>
//      );
//    }
   