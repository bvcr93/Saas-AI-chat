import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="maincol flex flex-col ">
        <div className="py-4 text-5xl font-semibold gradient-text">
          Revolutionizing Education with AI
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href={"/conversation"}>
            <Button
              size="lg"
              variant="destructive"
              className="bg-slate-800 mx-auto text-lg rounded-full hover:bg-slate-700  mt-4"
            >
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
