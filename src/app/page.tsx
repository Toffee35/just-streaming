import GridStreamCards from '@/modules/index/components/grid_stream_cards'
import Welcome from '@/modules/index/components/welcome'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the platform Just Streaming",
}

export default function Home() {
  return (
    <div className={
      "flex flex-col " +
      "gap-5 sm:gap-6 lg:gap-7 2xl:gap-8"}>
      <Welcome />
      <GridStreamCards />
    </div>
  )
}
