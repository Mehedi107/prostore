import { Button } from "@/components/ui/button";
import { APP_NAME, SERVER_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-[calc(100vh-88px-66px)] flex flex-col justify-center items-center overflow-hidden space-y-4">
      <Image src="/images/logo.svg" alt={`${APP_NAME} logo`} width={48} height={48}/>
      <div className="flex flex-col justify-center items-center gap-4 p-10 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-center">Not found</h1>
        <p className="text-center text-red-400">Could not find your requested page.</p>
        <Button asChild size='lg'>
          <Link href={SERVER_URL}>Back to home</Link>
        </Button>
      </div>
    </div>
  )
}