import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { OffcanvasMenu } from "./offcanvas-menu";

export default function Header() {
  return (
    <header className="border-b">
      <div className="wrapper">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link href='/' className="flex justify-start items-center gap-2">
            <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={48} priority={true} />
            <span className="hidden md:block font-bold text-2xl">{APP_NAME}</span>
          </Link>
          {/* theme toggle + cart + login button */}
          <Menu/>
          <OffcanvasMenu/>
        </div>
      </div>
    </header>
  )
}