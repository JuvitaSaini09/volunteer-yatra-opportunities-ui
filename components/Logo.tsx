// components/Logo.tsx
import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link href="/">
    <div className="relative h-8 sm:h-9 w-auto aspect-[168/36]">
      <Image
        src="/images/logo.svg"
        fill
        className="object-contain"
        alt="logo"
      />
    </div>
  </Link>
);

export default Logo;