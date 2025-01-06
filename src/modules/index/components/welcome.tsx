import { Montserrat, Inter_Tight } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
})

const interTight = Inter_Tight({
  subsets: ['latin'],
})

export default function Welcome() {
  return (
    <h1 className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl font-medium sm:font-normal md:font-light lg:font-normal text-alp-usagi tracking-tighter leading-9`}>
      Welcome to <b className={`${interTight.className} text-5xl md:text-6xl font-black text-acc-yuki tracking-wider leading-10 uppercase`}>Just Streaming</b>
    </h1>
  )
}
