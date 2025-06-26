"use client";

import { useState, use } from "react";
import dummyProducts from "@/lib/DummyProducts";
import { notFound } from "next/navigation";
import Button from "@/components/Button";

const categorySlugMapping: Record<string, string> = {
  grocery: "Groceries",
  pharmacy: "Pharmacy",
  restaurant: "Food & Restaurants",
};

export default function CategoryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(props.params); // ✅ unwrap Promise

  const categoryName = categorySlugMapping[slug.toLowerCase()];
  if (!categoryName) return notFound();

  const categoryProducts = dummyProducts.filter(
    (product) => product.category === categoryName && product.published
  );

  if (categoryProducts.length === 0) return notFound();

  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (index: number) => {
    setCart((prev) => ({ ...prev, [index]: 1 }));
  };

  const increaseQty = (index: number) => {
    setCart((prev) => ({ ...prev, [index]: prev[index] + 1 }));
  };

  const decreaseQty = (index: number) => {
    setCart((prev) => {
      const newQty = prev[index] - 1;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[index];
        return updated;
      }
      return { ...prev, [index]: newQty };
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold capitalize mb-6">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categoryProducts.map((product, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 font-medium text-yellow-700">
              ₹{product.price}
              {product.discount > 0 && (
                <span className="text-sm text-red-500 ml-2">
                  ({product.discount}% off)
                </span>
              )}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              In stock: {product.stock}
            </p>

            <div className="mt-4r">
              {cart[idx] ? (
                <div className="flex items-center gap-2">
                  <Button className="hover:cursor-pointer" onClick={() => decreaseQty(idx)}>-</Button>
                  <span className="font-semibold">{cart[idx]}</span>
                  <Button className="hover:cursor-pointer" onClick={() => increaseQty(idx)}>+</Button>
                </div>
              ) : (
                <Button className="hover:cursor-pointer" onClick={() => addToCart(idx)}>Add to Cart</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
