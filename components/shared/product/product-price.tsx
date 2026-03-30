import { cn } from "@/lib/utils"

export default function ProductPrice({value, className}: {value: number, className?: string}) {
  const stringValue = value.toFixed(2)

  const [intValue, floatValue] = stringValue.split('.')

  return <div className="flex items-start">
    <span>$</span>
    <span className={cn('text-2xl', className)}>{intValue}</span>
    <span>.{floatValue}</span>
  </div>
}