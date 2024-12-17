import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const projects = [
  {
    title: 'Global Supply Chain Optimization',
    description: 'Streamlined the supply chain for a multinational corporation, reducing costs by 15% and improving delivery times by 20%.',
    image: '/placeholder.svg?height=200&width=300',
    link: '#'
  },
  {
    title: 'E-commerce Fulfillment Center',
    description: 'Designed and implemented an automated fulfillment center for a major online retailer, increasing order processing speed by 40%.',
    image: '/placeholder.svg?height=200&width=300',
    link: '#'
  },
  {
    title: 'Sustainable Last-Mile Delivery',
    description: 'Developed an eco-friendly last-mile delivery solution for an urban area, reducing carbon emissions by 30% while maintaining delivery efficiency.',
    image: '/placeholder.svg?height=200&width=300',
    link: '#'
  }
]

export function Projects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-dark-blue">Our Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl font-semibold mb-2 text-dark-blue">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full bg-orange text-white hover:bg-orange-600">
                  <a href={project.link}>Learn More</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild className="bg-dark-blue text-white hover:bg-blue-800">
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

