import { Montserrat } from 'next/font/google'

import '../styles/owner.css'

import Link from 'next/link'


const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function Owner() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-row items-center gap-1 bg-gsc-iwa text-acc-yuki pl-1.5 pr-2 py-1 rounded-md border border-gsc-tsuki">
      <button className="material-symbols-outlined -mb-1">deployed_code</button>
      <Link href="https://github.com/Toffee35" className={`${montserrat.className} font-medium text-base leading-3`}>@Toffee35</Link>
    </div>
  )
}
