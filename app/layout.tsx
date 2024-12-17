import { TopBar } from '@/components/TopBar'
import './style.scss'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Logisco - Your Logistics Partner',
  description: 'Efficient and reliable logistics solutions for your business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-dark-blue pt-16`}>
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

