import Image from 'next/image'

const team = [
  { name: 'John Doe', position: 'CEO', image: '/team1.jpg' },
  { name: 'Jane Smith', position: 'Operations Manager', image: '/team2.jpg' },
  { name: 'Mike Johnson', position: 'Logistics Coordinator', image: '/team3.jpg' },
  { name: 'Sarah Brown', position: 'Customer Relations', image: '/team4.jpg' },
]

export function Team() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

