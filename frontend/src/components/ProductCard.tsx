// components/ProductCard.tsx
import Link from "next/link";
import Image from "next/image";

const getSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${getSlug(product.name)}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition">
        <Image
          src={product.image[0]}
          alt={product.name}
          width={200}
          height={150}
          className="rounded mb-2"
        />
        <h3 className="font-semibold">{product.name}</h3>
        <p>₹{product.price}</p>
      </div>
    </Link>
  );
}
