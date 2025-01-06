import GridStreamCards from '@/modules/index/components/grid_stream_cards'
import Welcome from '@/modules/index/components/welcome'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the platform Just Streaming",
}

export default function Home() {
  return (
    <div className="px-4 pt-3 pb-6 sm:px-5 sm:pb-8 md:px-7 md:pt-4 md:pb-10 lg:pb-14 lg:pt-6 flex flex-col gap-4 md:gap-7 lg:gap-8 xl:gap-6 2xl:gap-9">
      <Welcome />
      <GridStreamCards />
    </div>
  )
}
