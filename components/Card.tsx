import React from "react";
interface CardProps {
  title: string;
  description: string;
}
export default function Card({ title, description }: CardProps) {
  return <div className="flex-1 h-72 w-72 rounded-xl border">Card</div>;
}
