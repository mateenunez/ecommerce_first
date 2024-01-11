import Providers from './Providers'
import './globals.css'
import Navigation from '@/components/Navigation'


export const metadata = {
  title: 'E-commerce Admin',
  description: 'E-commerce application using NextJS, MongoDB, AuthJS and other libraries',
  
}
export default function RootLayout({children }) {
  return (
    <html lang='en'>
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="overflow-y-hidden">
      <Providers>
      <Navigation/>
      {children}
      </Providers>
      </body>
    </html>
  )
}
