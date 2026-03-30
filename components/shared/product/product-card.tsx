import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

export default function ProductCard({product}: {product: any}) {
  return <Card className="relative mx-auto w-full max-w-sm pt-0">
    <Link href={`product/${product.slug}`}>
      <Image src={product.images[0]} alt={product.name} width={300} height={300} priority={true}/>
    </Link>
    <CardHeader >
      <div className="text-muted-foreground">{product.brand}</div>
      <CardTitle className="text-primary">{product.name}</CardTitle>
      <div className="flex justify-between items-center mt-4">
        <div>{product.rating}</div>
        {product.stock > 0 ? <ProductPrice value={product.price}/> : <div className="text-destructive">Out of stock</div>}
      </div>
    </CardHeader>
  </Card>
}