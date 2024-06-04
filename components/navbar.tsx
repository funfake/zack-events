"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-transparent fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b bg-background"
      )}
    >
      <Logo />
      <div className="justify-end w-full flex items-center gap-x-2">
        {/* CTA button */}
        <Button variant="secondary_outline" className="">
          Get Started
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
