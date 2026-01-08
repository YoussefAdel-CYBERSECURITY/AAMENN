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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  var html = document.documentElement;
                  html.classList.remove('light', 'dark');
                  html.classList.add(theme);
                  html.style.colorScheme = theme;
                } catch (e) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
