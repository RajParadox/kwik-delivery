import Banner from '@/components/Banner'
import Categories from '@/components/Categories'
import Footer from '@/components/Footer'
import ProductCarousel from '@/components/ProductCarousel'

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-full mx-auto px-8 py-8">
        <Banner />
      </div>
      <div className="max-w-screen mx-auto px-8">
        <Categories />
        <ProductCarousel />
      </div>
      <Footer />
    </div>
  )
}
