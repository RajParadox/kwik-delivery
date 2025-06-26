// app/products/page.tsx
import ProductListing from "@/components/products/ProductsListing";

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              Our Collection
            </h1>
            <p className="text-lg text-gray-600">
              Find everything you need for your daily life.
            </p>
        </div>

        <ProductListing />
      </main>
    </div>
  );
}