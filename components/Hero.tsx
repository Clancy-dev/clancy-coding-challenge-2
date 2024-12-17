import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <Image
        src="/hero-background.jpg"
        alt="Logistics Hero"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-dark-blue bg-opacity-70"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Efficient Logistics Solutions for Your Business</h1>
          <p className="text-xl mb-8">We provide reliable and cost-effective logistics services to help your business thrive.</p>
          <Button className="bg-orange text-white hover:bg-orange-600 text-lg px-8 py-3">Get Started</Button>
        </div>
      </div>
    </section>
  )
}

