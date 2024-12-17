import { AlarmClock, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

export function TopBar() {
  return (
    <div className=" w-[100%] h-[5vh] bg-black z-50 top-0 left-0 right-0 text-dark-blue fixed py-2 px-4 text-sm lh sm:block">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0">
          <AlarmClock className="text-orange" size={16} />
          <span className="text-xs sm:text-sm">Opening hours: Mon-Fri 6am to 11am - Closed on Weekends</span>
        </div>
        <div className="flex flex-wrap items-center justify-between w-full sm:w-auto">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0 mr-4">
            <MapPin className="text-orange" size={16} />
            <span className="text-xs sm:text-sm">Location Near you: San Francisco &gt;</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm mr-2">Reach us:</span>
            <Facebook size={16} />
            <Instagram size={16} />
            <Linkedin size={16} />
            <Twitter size={16} />
            <Youtube size={16} />
          </div>
        </div>
      </div>
    </div>
  )
}

