'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/components/types';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

interface ProductDetailsProps {
  product: Product;
}

const StockStatus = ({ stock }: { stock: number }) => {
    if (stock === 0) {
        return (
            <div className="flex items-center text-red-600">
                <XCircleIcon className="w-5 h-5 mr-2" />
                <span className="font-semibold">Out of Stock</span>
            </div>
        );
    }
    if (stock < 10) {
        return (
            <div className="flex items-center text-yellow-600">
                <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                <span className="font-semibold">Low Stock ({stock} left)</span>
            </div>
        );
    }
    return (
        <div className="flex items-center text-green-600">
            <CheckCircleIcon className="w-5 h-5 mr-2" />
            <span className="font-semibold">In Stock</span>
        </div>
    );
};

export default function ProductDetails({ product }: ProductDetailsProps) {
    const [quantity, setQuantity] = useState(0);

    const finalPrice = product.price - (product.price * (product.discount / 100));
    const isOutOfStock = product.stock === 0;

    const handleAddToCart = () => {
        if (!isOutOfStock) {
            setQuantity(1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(prev => Math.min(product.stock, prev + 1));
    };

    const decrementQuantity = () => {
        setQuantity(prev => Math.max(0, prev - 1));
    };


    return (
        <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <div className="text-sm mb-6 text-gray-500">
                    <Link href="/products" className="hover:text-indigo-600">Products</Link>
                    <span className="mx-2">/</span>
                    <span>{product.name}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white p-8 rounded-2xl shadow-lg">
                    {/* Left Column: Image */}
                    <div className="relative w-full h-80 md:h-full rounded-xl overflow-hidden shadow-inner">
                        <Image
                            src={product.image[0]}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                        />
                         {product.discount > 0 && (
                            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                                {product.discount}% OFF
                            </div>
                        )}
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                            {product.name}
                        </h1>

                        <div className="my-4">
                            <StockStatus stock={product.stock} />
                        </div>

                        <p className="text-gray-600 mt-2 text-base leading-relaxed">
                            {product.description}
                        </p>
                        
                        <div className="my-6">
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-bold text-indigo-600">₹{finalPrice.toFixed(2)}</span>
                                {product.discount > 0 && (
                                    <span className="text-xl text-gray-400 line-through">₹{product.price.toFixed(2)}</span>
                                )}
                                <span className="text-lg text-gray-500">/ {product.unit}</span>
                            </div>
                        </div>

                        {/* Add to Cart / Quantity Control */}
                        <div className="mt-auto pt-6">
                            {quantity === 0 ? (
                                <button
                                    onClick={handleAddToCart}
                                    disabled={isOutOfStock}
                                    className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    Add to Cart
                                </button>
                            ) : (
                                <div className="flex items-center justify-between border border-gray-300 rounded-lg p-2">
                                    <span className="font-semibold text-gray-700">Quantity</span>
                                    <div className="flex items-center gap-4">
                                        <button onClick={decrementQuantity} className="w-10 h-10 bg-gray-200 rounded-md text-2xl font-bold hover:bg-gray-300">-</button>
                                        <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                                        <button onClick={incrementQuantity} disabled={quantity >= product.stock} className="w-10 h-10 bg-gray-200 rounded-md text-2xl font-bold hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed">+</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* More Details Section */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                             <h3 className="text-lg font-semibold text-gray-800 mb-3">More Details</h3>
                             <div className="space-y-2 text-sm">
                                <div className="flex justify-between"><span className="text-gray-500">Category:</span> <span className="font-medium text-gray-800">{product.category}</span></div>
                                <div className="flex justify-between"><span className="text-gray-500">Subcategory:</span> <span className="font-medium text-gray-800">{product.subcategory}</span></div>
                                {Object.entries(product.more_details).map(([key, value]) => (
                                    <div key={key} className="flex justify-between">
                                        <span className="text-gray-500 capitalize">{key.replace(/_/g, ' ')}:</span>
                                        <span className="font-medium text-gray-800">{value}</span>
                                    </div>
                                ))}
                             </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}