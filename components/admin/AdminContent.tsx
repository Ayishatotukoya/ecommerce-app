export default function AdminContent({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="p-6 max-w-7xl mx-auto">
        {title && <h1 className="text-2xl font-bold mb-6">{title}</h1>}

        {children}
      </div>
    </main>
  );
}
