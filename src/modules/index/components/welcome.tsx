import { Montserrat, Inter_Tight } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
})

const interTight = Inter_Tight({
  subsets: ['latin'],
})

export default function Welcome() {
  return (
    <div className="flex flex-row items-start flex-wrap gap-x-2 sm:gap-x-2,5 gap-y-1 sm:gap-y-2.5">
      <span className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl leading-8 sm:leading-9 md:leading-[2.75rem] font-light text-alp-usagi`}>Welcome to</span>
      <span className={`${interTight.className} text-5xl sm:text-6xl leading-9 sm:leading-[3rem] font-bold text-acc-yuki uppercase`}>Just</span>
      <span className={`${interTight.className} text-5xl sm:text-6xl leading-9 sm:leading-[3rem] font-bold text-acc-yuki uppercase`}>Streaming</span>
    </div>
  )
}
