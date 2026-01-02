import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata = {
  title: 'AAMENN - Privacy First Storage',
  description: 'Store, organize, and share your life\'s memories without trading away your data. Zero tracking. Zero ads. 100% encrypted.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
