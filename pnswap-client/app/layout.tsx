import type { Metadata } from 'next'
import { Poppins, Red_Hat_Display } from 'next/font/google'
import localFont from 'next/font/local'
import Navbar from '@/components/Navbar'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700"]  })

const fontMonument = localFont({
  src: "../public/fonts/MonumetExtended/MonumentExtended-Regular.otf",
  variable: '--font-monument'
})

console.log(fontMonument);


export const metadata: Metadata = {
  title: 'PNSwap | Swap Value',
  description: 'PNSwap | Swap. Stake. Farm.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#17181e]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
