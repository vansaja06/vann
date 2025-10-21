import { Poppins } from 'next/font/google' // Memuat font Google Poppins secara teroptimasi (Next.js)
import './globals.css' // Gaya global proyek
import Navbar from '@/components/Navbar' // Navbar global di semua halaman

// Inisialisasi font Poppins dan expose sebagai CSS variable agar mudah dipakai di seluruh app
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// Metadata global (SEO) untuk semua halaman
export const metadata = {
  title: 'My Portfolio — Husnul Fikri Averus',
  description: 'Website portofolio pribadi yang menampilkan proyek, skill, dan informasi tentang saya.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {/* Terapkan variable font + smoothing */}
        <Navbar /> {/* Navbar tampil di semua halaman */}
        <main className="fontpop">{children}</main> {/* Area konten halaman */}
      </body>
    </html>
  )
}
