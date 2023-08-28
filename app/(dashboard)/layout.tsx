import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React, { ReactNode } from "react";
interface DashboardProps {
  children: ReactNode;
}
export default function DashboardLoayout({ children }: DashboardProps) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-96 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div> 
            <Sidebar/>
        </div>
      </div>
      <main className="md:pl-96">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
