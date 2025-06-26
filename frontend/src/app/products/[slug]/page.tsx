// app/products/[slug]/page.tsx
import dummyProducts from '@/lib/DummyProducts';
import ProductDetails from '@/components/products/ProductDetails';
import { notFound } from 'next/navigation';

// Helper function to find the product by its slug (no changes here)
const getProductBySlug = (slug: string) => {
  const getSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
  
  return dummyProducts.find(product => getSlug(product.name) === slug);
};

// THE FIX: Make the function async
export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Now you can safely access the slug
  const slug = params.slug; 
  const product = getProductBySlug(slug);

  // If the product doesn't exist, show a 404 page
  if (!product) {
    notFound();
  }

  // Render the client component with the found product data
  return <ProductDetails product={product} />;
}