"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cardTools, tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="maincol h-screen  ">
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
      <div className="flex mt-20 gap-5">
        {cardTools.map((card) => (
          <Card className="flex-1 h-72 w-72 rounded-xl border" {...card}>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-2xl font-semibold">{card.title}</div>
              <div className="text-sm text-muted-foreground">
                {card.description}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
