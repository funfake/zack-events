import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full p-6 bg-background z-50">
      <div className="md:ml-auto w-full justify-center md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms and conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
