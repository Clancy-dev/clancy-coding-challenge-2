import { Truck, Package, Clock, Globe } from 'lucide-react'

const services = [
  { icon: Truck, title: 'Transportation', description: 'Efficient and reliable transportation services for your goods.' },
  { icon: Package, title: 'Warehousing', description: 'Secure storage solutions for your inventory management needs.' },
  { icon: Clock, title: 'Express Delivery', description: 'Fast and timely delivery for urgent shipments.' },
  { icon: Globe, title: 'Global Logistics', description: 'Comprehensive logistics solutions for international trade.' },
]

export function Services() {
  return (
    <section className="py-16 bg-gray-100" id='services'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <service.icon className="text-orange w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

