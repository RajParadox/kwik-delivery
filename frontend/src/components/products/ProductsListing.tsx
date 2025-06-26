'use client';

import { useState, useMemo } from 'react';
import { Product } from '@/components/types'; 
import dummyProducts from '@/lib/DummyProducts'; 
import ProductCard from '../ProductCard'; 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function ProductListing() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');

  // useMemo hook to efficiently calculate the final list of products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = dummyProducts.filter(p => p.published);

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'All') {
        filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    }

    // Search by term in name or description
    if (searchTerm.trim()) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(lowercasedTerm) ||
        p.description.toLowerCase().includes(lowercasedTerm)
      );
    }
    
    const sortableProducts = [...filtered];

    // Sorting logic 
    const getFinalPrice = (p: Product) => p.price - (p.price * (p.discount / 100));
    switch (sortOption) {
      case 'price-asc':
        sortableProducts.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
        break;
      case 'price-desc':
        sortableProducts.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
        break;
      case 'name-asc':
        sortableProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        sortableProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return sortableProducts;

  }, [searchTerm, selectedCategory, selectedSubcategory, sortOption]);

  const categories = useMemo(() => ['All', ...Array.from(new Set(dummyProducts.map(p => p.category)))], []);
  
  const subcategories = useMemo(() => {
    const relevantProducts = (selectedCategory === 'All')
      ? dummyProducts
      : dummyProducts.filter(p => p.category === selectedCategory);
    
    return ['All', ...Array.from(new Set(relevantProducts.map(p => p.subcategory)))];
  }, [selectedCategory]);

  return (
    <div className="w-full">
      {/* Controls Section - UI ENHANCEMENTS APPLIED HERE */}
      <div className="bg-white p-4 rounded-xl mb-8 sticky top-4 z-10 shadow-md border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Search Bar */}
          <div className="relative lg:col-span-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search products by name or description..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Filters and Sort */}
          <select 
            value={selectedCategory} 
            onChange={(e) => { setSelectedCategory(e.target.value); setSelectedSubcategory('All'); }}
            className="w-full p-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {categories.map(cat => (<option key={cat} value={cat}>Category: {cat}</option>))}
          </select>
          <select 
            value={selectedSubcategory} 
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {subcategories.map(sub => (<option key={sub} value={sub}>Subcategory: {sub}</option>))}
          </select>
          <select 
            value={sortOption} 
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 md:col-span-full"
          >
            <option value="default">Sort by: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Product Grid - UI ENHANCEMENTS APPLIED HERE */}
      {filteredAndSortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedProducts.map((product) => (
            // CRITICAL FIX: The key should be the unique `_id` we created, not `id`.
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-50/70 rounded-xl">
          <h2 className="text-2xl font-semibold text-gray-700">No Products Found</h2>
          <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}