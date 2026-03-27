export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Admin layout is clean without public navbar/footer */}
      <div className="flex flex-col h-screen overflow-hidden">
        {children}
      </div>
    </div>
  );
}
