"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Cleaned up and more relevant data for a food delivery app
const categories = [
  {
    name: "Restaurants",
    href: "/categories/restaurant",
    description: "Delicious meals from the best local spots.",
    image: "/Restaurant.jpg", // Use realistic image paths
  },
  {
    name: "Grocery",
    href: "/categories/grocery",
    description: "Fresh vegetables, fruits, and daily essentials delivered fast.",
    image: "/Grocery.jpg",
  },
  {
    name: "Desserts & Bakes",
    href: "/categories/desserts",
    description: "Sweet treats, cakes, and pastries for your sweet tooth.",
    image: "/Restaurant.jpg",
  },
  {
    name: "Cafe & Drinks",
    href: "/categories/cafe",
    description: "Your favorite coffee, bubble tea, and fresh juices.",
    image: "/Grocery.jpg",
  },
  {
    name: "Pharmacy",
    href: "/categories/pharmacy",
    description: "Medicines, health supplies, and wellness products.",
    image: "/Pharmacy.jpg",
  },
];

export default function Categories() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What are you craving today?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Explore our wide range of categories.
          </p>
        </div>

        {/* Horizontal Scrolling Grid */}
        <div className="mt-12 grid grid-flow-col auto-cols-[90%] sm:auto-cols-[45%] md:auto-cols-[30%] lg:auto-cols-[23%] gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {categories.map((category) => (
            <Link href={category.href} key={category.name} className="block snap-center">
              <div className="group relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                {/* Image and Gradient Overlay */}
                <div className="relative h-72 w-full">
                  <Image
                    src={category.image}
                    alt={`${category.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  
                  {/* Category Name on Image */}
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Card Content Below Image */}
                <div className="p-4 bg-white">
                  <p className="mb-4 text-sm text-slate-600 h-10">
                    {category.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 font-bold text-indigo-600 group-hover:underline"
                  >
                    Explore
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}