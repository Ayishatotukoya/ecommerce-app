export default function AdminHeader() {
  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
      {/* Left */}
      <h2 className="text-lg font-semibold">Admin Dashboard</h2>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-gray-200" />

        <span className="text-sm font-medium">Admin</span>
      </div>
    </header>
  );
}
