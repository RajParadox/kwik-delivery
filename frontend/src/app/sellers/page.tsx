import Link from 'next/link'

const SellersPage = () => {
  const dummySellers = [
    { id: '1', name: 'Green Pharmacy' },
    { id: '2', name: 'Fresh Mart' },
    { id: '3', name: 'Spicy Kitchen' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Available Sellers</h2>
      <ul className="space-y-2">
        {dummySellers.map((seller) => (
          <li key={seller.id}>
            <Link href={`/sellers/${seller.id}`} className="text-green-700 underline">
              {seller.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SellersPage
