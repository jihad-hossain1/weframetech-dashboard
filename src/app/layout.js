import './globals.css'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Weframe',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='bg-[#0D0B21]'>
      <body className={cairo.className }>{children}</body>
    </html>
  )
}
