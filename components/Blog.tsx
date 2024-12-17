import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  { title: 'The Future of Logistics', image: '/blog1.jpg', date: 'May 15, 2023', excerpt: 'Exploring emerging trends in the logistics industry.' },
  { title: 'Sustainable Supply Chains', image: '/blog2.jpg', date: 'May 22, 2023', excerpt: 'How companies are making their supply chains more environmentally friendly.' },
  { title: 'Technology in Warehousing', image: '/blog3.jpg', date: 'May 29, 2023', excerpt: 'The impact of automation and AI on modern warehousing.' },
]

export function Blog() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href="#" className="text-orange font-semibold hover:underline">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

