import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          {/* car + login button */}
          <div className="space-x-2">
            <Button asChild variant="outline">
              <Link href='/cart'>
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href='/login'>
                <User /> Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}