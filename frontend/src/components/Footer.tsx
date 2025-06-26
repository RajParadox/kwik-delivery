'use client'

import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { BsThreads } from 'react-icons/bs'
import Image from 'next/image'

const usefulLinks = [
  'Blog', 'Privacy', 'Terms', 'FAQs', 'Security', 'Contact',
  'Partner', 'Franchise', 'Seller', 'Warehouse', 'Deliver', 'Resources',
]

const categories = [
  'Vegetables & Fruits', 'Cold Drinks & Juices', 'Bakery & Biscuits',
  'Dry Fruits, Masala & Oil', 'Paan Corner', 'Pharma & Wellness',
  'Ice Creams & Frozen Desserts', 'Beauty & Cosmetics', 'Electronics & Electricals',
  'Toys & Games', 'Dairy & Breakfast', 'Instant & Frozen Food',
  'Sweet Tooth', 'Sauces & Spreads', 'Organic & Premium', 'Cleaning Essentials',
  'Personal Care', 'Magazines', 'Stationery Needs', 'Print Store', 'Munchies',
  'Tea, Coffee & Health Drinks', 'Atta, Rice & Dal', 'Chicken, Meat & Fish',
  'Baby Care', 'Home & Office', 'Pet Care', 'Fashion & Accessories', 'Books', 'E-Gift Cards',
]

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-10 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            {usefulLinks.map(link => (
              <Link href="#" key={link} className="hover:text-yellow-600">{link}</Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Categories</h3>
            <Link href="#" className="text-yellow-600 text-sm hover:underline">see all</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-gray-600">
            {categories.map(cat => (
              <Link href="#" key={cat} className="hover:text-yellow-600">{cat}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-center">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-xl mx-auto">
          <p className="text-gray-500">© Kwik Commerce, 2025</p>

          {/* App Links */}
          <div className="flex items-center gap-2">
            <Image src="/appstore.png" alt="App Store" width={120} height={40} />
            <Image src="/googleplay.png" alt="Google Play" width={120} height={40} />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg text-gray-700">
            <FaFacebookF className="hover:text-yellow-600 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-600 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-600 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-600 cursor-pointer" />
            <BsThreads className="hover:text-yellow-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
