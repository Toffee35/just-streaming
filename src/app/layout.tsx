import Owner from '@/modules/layouts/components/owner'

import '@/modules/layouts/styles/global.css'


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="w-full h-full">
      <body className={
        "flex justify-center items-center " +
        "max-w-full min-h-full bg-gsc-yoru " +
        "px-3 sm:px-4 lg:px-5 2xl:pt-6 " +
        "pt-4 sm:pt-5 lg:pt-6 2xl:pt-7 " +
        "pb-5 sm:pb-7 md:pb-12 lg:pb-14"}>
        {children}
      
        <Owner />
      </body>
    </html>
  );
}
