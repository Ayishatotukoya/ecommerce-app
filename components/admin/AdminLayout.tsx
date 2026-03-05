import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminContent from "./AdminContent";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Right side */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <AdminHeader />

        {/* Content */}
        <AdminContent>
          {children}
          </AdminContent>
      </div>
    </div>
  );
}
