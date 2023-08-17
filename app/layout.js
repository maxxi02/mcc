
import Header from '@/components/Layout/Header'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Layout/Footer'

const monstserrat = Montserrat({ subsets: ['latin'], weight: "400" })


export const metadata = {
  title: 'MCC',
  description: "Welcome!, This is MCC's portfolio, feel free to Message me. :D",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={monstserrat.className}>
          {children}
      </body>

    </html>
  )
}
