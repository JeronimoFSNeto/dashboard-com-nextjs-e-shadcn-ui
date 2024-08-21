import Image from "next/image";
import Link from "next/link";

export default function Brasao() {
  return (
    <Link href="/" className="flex items-center h-14">
      <Image
        src="/logos/brasaoufdpar.png"
        alt="Logo"
        width={85}
        height={85}
        className="hidden sm:block"
      />
      <Image
        src="/logos/brasaoufdpar.png"
        alt="Logo"
        width={50}
        height={50}
        className="block sm:hidden"
      />
    </Link>
  );
}
