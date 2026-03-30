import Image from "next/image";

export default function loading() {
  return (
    <div className="w-full h-[calc(100vh-88px-66px)] flex justify-center items-center overflow-hidden">
      <Image src='/loader.gif' alt="Loading..." width={150} height={150}/>
    </div>
  )
}