import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white flex flex-row shadow-md p-4 gap-4 sticky top-0 z-10">
        <img
          className="max-w-[1.75rem] max-h-[1.75rem]"
          src={
            "title-icon.png"
          }
        ></img>
        <div className="w-full mx-auto text-xl font-semibold">
          Landing Form
        </div>
      </header>
      <main className="w-full mx-auto p-4">{children}</main>
    </div>
  );
}
