import MobileSidebar from "./mobile-sidebar";
import { Button } from "./ui/button";
export default function Navbar() {
  return (
    <div className="flex items-center p-4 ">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <Button className={"cursor-not-allowed"}>Demo</Button>
      </div>
    </div>
  );
}
