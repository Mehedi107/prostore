import { APP_NAME } from "@/lib/constants"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="wrapper text-center text-base text-neutral-500">
        {currentYear} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  )
}