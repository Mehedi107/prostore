
export default function ProductList({title, data, limit}: {title: string, data: any, limit?: number}) {
  const products = limit ? data.slice(0, limit) : data
  return (
    <section className="space-y-5">
      <h2 className="font-bold text-4xl">{title}</h2>
      {data.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product:any) => (

          <p key={product.name}>{product.name}</p>
        ))}
      </div> 
      : <p>No products found</p>}
    </section>
  )
}