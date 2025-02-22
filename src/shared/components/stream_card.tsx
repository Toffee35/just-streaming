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
      <div className={
        "relative overflow-hidden aspect-video " +
        "rounded-b-xl rounded-t-md bg-gradient-to-br " +
        "from-gsc-kesseki via-alp-iwa to-gsc-kesseki " +
        "from-50% via-80% to-90%"}>
        <Link href={`/stream/${cardProps.id}`}>
          <Image
            className="relative text-alp-usagi"
            src={`/stream/${cardProps.banner}`}
            alt={`Stream banner ${cardProps.banner}`}
            loading = "lazy" fill />
        </Link>

        <Link href={`/account/${cardProps.author}`} className={
          "relative left-2 top-1 px-4 py-0.5 " +
          "rounded-lg bg-gsc-yoru/90"}>
          <span className={
            `${robotoFlex.className} ` +
            "text-alp-usagi text-base"}>
            {cardProps.author}
          </span>
        </Link>
      </div>

      <div className="px-1 flex flex-col gap-2">
        <Link
          href={`/stream/${cardProps.id}`}
          className={
            `${robotoFlex.className} ` +
            "text-acc-yuki text-xl truncate leading-4"}>
          {cardProps.title}
        </Link>

        <div className={
          `${robotoFlex.className} px-1 ` +
          "flex justify-between " +
          "text-gsc-okami leading-3"}>
          <span>Started {timeFormat(cardProps.started)}</span>
          <span>{countFormat(cardProps.viewers)} Viewers</span>
        </div>
      </div>
    </div>
  )
}
