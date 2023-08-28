import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant="ghost" className="md:hidden" size="icon">
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <Button>Dont login</Button>
      </div>
    </div>
  );
}
