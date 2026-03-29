import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";


export default function page() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <h1>Hello</h1>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}