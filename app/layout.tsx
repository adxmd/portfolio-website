
import NavBarFull from './ui/nav-bar-full';

import { inter } from './ui/fonts';

import './ui/global.css';

import { Metadata } from 'next';

export const metadata = {
  title: 'Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <header>
        <NavBarFull />
      </header> */}
      <body className={`${inter.className} antialiased`}>
        <NavBarFull />
        {/* <SideNav /> */}
        <div>{children}</div>
      </body>

        {/* <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav/>
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div> */}
    </html>
  )
}
