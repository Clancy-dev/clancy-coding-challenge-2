import { MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
              </div>
              <Button type="submit" className="bg-orange text-white hover:bg-orange-600">Send Message</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-orange mr-2" />
                <span>123 Logistics St, San Francisco, CA 94122</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-orange mr-2" />
                <span>+01177564321</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-orange mr-2" />
                <span>info@logisco.com</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-2">Office Hours</h4>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

