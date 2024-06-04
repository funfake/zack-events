import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-2">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          alt="Logo"
          className="dark:hidden"
        />
        <Image
          src="/logo-orange.svg"
          width={40}
          height={40}
          alt="Logo"
          className="hidden dark:block"
        />
        <h1 className="text-lg font-semibold leading-5">Zack Events</h1>
      </div>
    </Link>
  );
};

export default Logo;
