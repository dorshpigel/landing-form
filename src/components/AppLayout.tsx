import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex items-center gap-3 p-4">
          <img
            src="title-icon.png"
            alt="Logo"
            className="w-7 h-7 transition-transform hover:scale-105"
          />
          <h1 className="text-xl font-semibold">Landing Form</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
