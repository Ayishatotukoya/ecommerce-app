import Image from "next/image";

export default function CategoriesTable() {
  return (
    <div className="bg-white border rounded-xl overflow-hidden">
      <div className="p-4 border-b flex justify-between">
        <h2 className="font-semibold text-lg">Categories</h2>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Add Category
        </button>
      </div>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4 text-left">Image</th>

            <th className="p-4 text-left">Name</th>

            <th className="p-4 text-left">Slug</th>

            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3].map((item) => (
            <tr key={item} className="border-t">
              <td className="p-4">
                <div className="relative w-14 h-14">
                  <Image
                    src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
                    alt="category"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </td>

              <td className="p-4">Shoes</td>

              <td className="p-4">shoes</td>

              <td className="p-4 flex gap-2">
                <button className="border px-3 py-1 rounded">Edit</button>

                <button className="border px-3 py-1 rounded text-red-500">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
