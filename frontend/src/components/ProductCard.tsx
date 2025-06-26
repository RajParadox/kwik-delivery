'use client'; // This is now a Client Component because it uses state

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/components/types";

const getSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export default function ProductCard({ product }: { product: Product }) {
  // State to manage the quantity of this specific card
  const [quantity, setQuantity] = useState(0);

  const finalPrice = product.price - (product.price * (product.discount / 100));
  const hasDiscount = product.discount > 0;
  const isOutOfStock = product.stock === 0;

  // Stop click from propagating to the Link wrapper
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleButtonClick(e);
    if (!isOutOfStock) {
      setQuantity(1);
    }
  };

  const incrementQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleButtonClick(e);
    setQuantity(prev => Math.min(product.stock, prev + 1));
  };

  const decrementQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleButtonClick(e);
    setQuantity(prev => Math.max(0, prev - 1));
  };

  return (
    // The main container is no longer the Link itself
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 group">
      {/* This Link now wraps only the top, clickable area */}
      <Link href={`/products/${getSlug(product.name)}`} className="block">
        <div className="relative w-full h-48">
          <Image
            src={product.image[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          {hasDiscount && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {product.discount}% OFF
            </div>
          )}
           {isOutOfStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-bold tracking-wider">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-base font-bold text-gray-800 h-12 leading-tight">
            {product.name}
          </h3>
          <div className="flex items-baseline text-gray-900">
            <span className="text-xl font-extrabold text-yellow-600">
              ₹{finalPrice.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ₹{product.price.toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">per {product.unit}</p>
        </div>
      </Link>

      {/* --- Add to Cart Section (outside the Link) --- */}
      <div className="mt-auto px-4 pb-4">
        {quantity === 0 ? (
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className="w-full bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isOutOfStock ? "Unavailable" : "Add to Cart"}
          </button>
        ) : (
          <div className="flex items-center justify-between border-2 border-yellow-500 rounded-lg">
            <button onClick={decrementQuantity} className="w-10 h-10 text-xl font-bold text-yellow-600 hover:bg-yellow-100 rounded-l-md">-</button>
            <span className="text-lg font-bold text-gray-800">{quantity}</span>
            <button onClick={incrementQuantity} disabled={quantity >= product.stock} className="w-10 h-10 text-xl font-bold text-yellow-600 hover:bg-yellow-100 rounded-r-md disabled:text-gray-400 disabled:hover:bg-transparent disabled:cursor-not-allowed">+</button>
          </div>
        )}
      </div>
    </div>
  );
}