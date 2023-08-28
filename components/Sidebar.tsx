"use client";

import Image from "next/image";
import Link from "next/link";
import next from "../public/logo.png";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare, Settings } from "lucide-react";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });
const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
export default function Sidebar() {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-20 h-20 mr-4 rounded-full">
            <Image fill alt="logo" src={next} />
          </div>
          <h1 className={cn("mb-4 text-2xl", montserrat.className)}>
            Ai Chatbot
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
