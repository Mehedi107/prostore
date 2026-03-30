"use client";

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { EllipsisVertical, ShoppingCart, User } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"

export function OffcanvasMenu() {
  return (
    <nav className="md:hidden" suppressHydrationWarning>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <EllipsisVertical />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-6 px-4 items-start">
            <ModeToggle/>
            <Button asChild variant="ghost" size='lg'>
              <Link href='/cart'>
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <Button asChild size='lg'>
              <Link href='/login'>
                <User /> Login
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
