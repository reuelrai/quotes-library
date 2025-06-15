import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className=" p-4 shadow">
          <div className="max-w-6xl mx-auto flex justify-between">
            <Link href="/">Upload</Link>
            <Link href="/quotes">Quotes</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
