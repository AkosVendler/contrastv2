

import localFont from 'next/font/local'
 
export const metadata = {
  title: "AMdesgin",
  description: "Spaces personalised",
};

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: './ClashDisplay-Variable.ttf',
  variable: "--font-display",
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${myFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}