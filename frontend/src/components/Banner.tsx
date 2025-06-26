'use client'

import Image from 'next/image'

const Banner = () => {
  return (
    <div className="h-80 relative overflow-hidden shadow-3xl">
      <Image
        src="/shushi.jpg" // add this image in `public/banner.jpg`
        alt="Kwik Poster"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
        priority
      />
    </div>
  )
}

export default Banner
