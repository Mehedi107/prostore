import ProductList from "@/components/shared/product/ProductList";
import sampleData from "@/db/sample-data";

// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default async function page() {
  // await delay(2000);

  return (
    <section className="wrapper">
      <ProductList title='Newest Arrivals' data={sampleData.products} limit={4}/>
    </section>
  )
}