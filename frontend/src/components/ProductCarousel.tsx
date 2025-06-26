"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Star } from "lucide-react";
import dummyProducts from "@/lib/DummyProducts"; // Your original data source

const ProductCarousel = () => {
  // We'll process the data here to fit the component's needs
  const topProducts = dummyProducts.slice(0, 10).map((product, index) => {
    // Calculate the sale price on the fly
    const salePrice = product.price * (1 - product.discount / 100);

    // Create a URL-friendly slug from the product name
    const slug = product.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    // Determine the 'brand' or 'restaurant' - we can use subcategory as a good proxy
    const brand = product.subcategory || product.category;

    return {
      ...product, // Keep all original product data
      key: `${product.name}-${index}`, // Create a unique key using name and index
      slug: slug, // Add the generated slug
      salePrice: salePrice, // Add the calculated sale price
      brand: brand, // Add the derived brand/restaurant name
      rating: (4.2 + (index % 8) / 10).toFixed(1), // Assign a pseudo-random rating
    };
  });

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Top Picks for You
            </h2>
            <p className="mt-2 text-lg text-slate-500">
              Hand-picked dishes and deals, just for you.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden sm:block font-bold text-indigo-600 hover:underline"
          >
            View All
          </Link>
        </div>

        {/* Horizontal Scrolling Grid */}
        <div className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[40%] md:auto-cols-[28%] lg:auto-cols-[23%] gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {topProducts.map((product) => (
            <div
              key={product.key} // Use the generated unique key
              className="group snap-center flex flex-col bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Section - Link to product page */}
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={product.image[0]} // Access the first image in the array
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = '/images/placeholder-food.jpg'; }}
                  />
                </div>
              </Link>
              
              {/* Content Section */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Brand/Restaurant and Rating */}
                <div className="flex justify-between items-center text-sm mb-1">
                  <p className="text-slate-500 truncate">{product.brand}</p>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold text-slate-600">{product.rating}</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-md font-bold text-slate-800 truncate mb-2">
                  <Link href={`/products/${product.slug}`} className="hover:underline">
                    {product.name}
                  </Link>
                </h3>

                {/* Spacer to push price/button to bottom */}
                <div className="flex-grow" />

                {/* Price and Add to Cart Button */}
                <div className="flex justify-between items-center mt-2">
                  {product.discount > 0 ? (
                    <div className="flex items-baseline gap-2">
                      <p className="text-lg font-extrabold text-slate-900">
                        ₹{product.salePrice.toFixed(2)}
                      </p>
                      <p className="text-sm font-medium text-slate-400 line-through">
                        ₹{product.price.toFixed(2)}
                      </p>
                    </div>
                  ) : (
                    <p className="text-lg font-extrabold text-slate-900">
                      ₹{product.price.toFixed(2)}
                    </p>
                  )}
                  
                  <button 
                    className="flex items-center justify-center w-10 h-10 cursor-pointer bg-yellow-500 rounded-full text-slate-900 transition-transform duration-200 hover:scale-110 active:scale-100"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <Plus size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;