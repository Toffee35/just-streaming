import GridStreamCards from '@/modules/index/components/grid_stream_cards'
import Welcome from '@/modules/index/components/welcome'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the platform Just Streaming",
}

export default function Home() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 2xl:gap-7">
      <Welcome />
      <GridStreamCards />
    </div>
  )
}
