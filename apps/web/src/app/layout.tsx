import '@/styles/globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ variable: '--font-sans', subsets: ['latin'] })

export const metadata = {
  title: 'Next.js Starter Turbo',
  description:
    'Next.js Turborepo template with TypeScript, ESLint, Prettier, Husky, Lint-staged, and Commitlint',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
