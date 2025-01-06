import "@/modules/layouts/index/styles/global.css"


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-gsc-yoru">
        {children}
      </body>
    </html>
  );
}
