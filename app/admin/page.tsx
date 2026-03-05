export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-2xl font-bold">320</h2>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-2xl font-bold">145</h2>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <p className="text-gray-500">Categories </p>
          <h2 className="text-2xl font-bold">4</h2>
        </div>

        <div className="bg-white p-6 rounded-xl border">
          <p className="text-gray-500">customers</p>
          <h2 className="text-2xl font-bold">23</h2>
        </div>
      </div>
    </div>
  );
}
