import Link from 'next/link'
import Image from 'next/image'

import timeFormat from '@/shared/funcs/time_format'
import countFormat from '@/shared/funcs/count_format'

import type CardProps from '@/shared/types/card_props'

import { Roboto_Flex } from 'next/font/google'


const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
})

export default function StreamCard({
  cardProps
}: {
  cardProps: CardProps
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-video rounded-b-xl rounded-t-md overflow-hidden bg-gradient-to-br from-gsc-kesseki via-alp-iwa to-gsc-kesseki from-50% via-80% to-90%">
        <Link href={`/stream/${cardProps.id}`}>
          <Image
            className="relative text-alp-usagi"
            src={`/${cardProps.banner}`}
            alt={`Stream banner ${cardProps.banner}`}
            loading = "lazy" fill />
        </Link>

        <Link href={`/account/${cardProps.author}`} className="relative left-2 top-1 w-fit px-4 py-px rounded-lg bg-gsc-yoru/70">
          <span className={`${robotoFlex.className} text-alp-usagi text-base leading-3 align-middle`}>{cardProps.author}</span>
        </Link>
      </div>

      <div className="px-1 flex flex-col gap-2">
        <Link href={`/stream/${cardProps.id}`} className={`${robotoFlex.className} text-acc-yuki text-xl truncate leading-4`}>
          {cardProps.title}
        </Link>

        <div className={`${robotoFlex.className} px-1 flex justify-between text-gsc-okami leading-3`}>
          <span>Started {timeFormat(cardProps.started)}</span>
          <span>{countFormat(cardProps.viewers)} Viewers</span>
        </div>
      </div>
    </div>
  )
}
