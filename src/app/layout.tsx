import Owner from '@/modules/layouts/index/components/owner'

import '@/modules/layouts/index/styles/global.css'


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="w-full min-h-full">
      <body className="max-w-full min-h-svh px-4 sm:px-5 lg:px-4 pt-3 sm:pt-4 lg:pt-5 xl:pt-6 2xl:pt-7 pb-5 sm:pb-10 md:pb-12 lg:pb-14 bg-gsc-yoru">
        {children}
        <Owner />
      </body>
    </html>
  );
}
