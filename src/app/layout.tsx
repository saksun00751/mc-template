import './globals.css'

import Nav from 'components/Nav'
export const metadata = {
  title: 'Clone YT',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      

      <body>

        {children}
   
        </body>
    </html>
  )
}
