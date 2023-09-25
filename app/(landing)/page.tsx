import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { ArrowRightCircleIcon } from "lucide-react";
export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-white flex items-center justify-center">
      <div className="maincol flex flex-col ">
        <div className="py-4 text-5xl font-semibold gradient-text">
          Revolutionizing Education with AI
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href={"/conversation"}>
            <Button
              size="lg"
              variant="destructive"
              className="bg-slate-800 text-slate-300 hover:text-white flex gap-4 mx-auto text-lg rounded-full hover:bg-slate-700  mt-4"
            >
              <p>Try it out</p>
              <ArrowRightCircleIcon className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
