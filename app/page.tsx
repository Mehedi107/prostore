export const metadata = {
  title: 'Home'
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default async function page() {
  await delay(2000);
  
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      Home
    </div>
  )
}