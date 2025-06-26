"use client"

import { useParams } from 'next/navigation'

export default function SellerDetails() {
  const params = useParams()
  const { id } = params

  const dummyProducts = [
    { name: 'Paracetamol', price: '₹50' },
    { name: 'Sanitizer', price: '₹70' },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Seller ID: {id}</h2>
      <ul className="space-y-2">
        {dummyProducts.map((item, index) => (
          <li key={index} className="border p-3 rounded">
            <p className="font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
