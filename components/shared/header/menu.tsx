import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";

export default function Menu() {
  return (
    <nav className="space-x-2 hidden md:flex">
      <ModeToggle/>
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
    </nav>
  )
}