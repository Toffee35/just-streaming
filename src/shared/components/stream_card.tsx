"use client"

import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()

  return (
    <Link href={`/stream/${cardProps.id}`} className="flex flex-col gap-2 tracking-wider">
      <div className="relative aspect-video rounded-b-xl rounded-t-md overflow-hidden bg-gradient-to-br from-gsc-kesseki via-alp-iwa to-gsc-kesseki from-50% via-80% to-90%">
        <Image
          className="relative object-contain w-full"
          src={`${pathname}${cardProps.banner}`}
          alt={`Stream banner ${cardProps.banner}`}
          loading = "lazy" fill />

        <div className="relative top-2 left-1.5 sm:top-1.5 sm:left-2.5 md:left-2 md:top-2 lg:left-2.5 w-fit px-2.5 sm:px-3 md:px-2 lg:px-3 rounded-md bg-gsc-yoru/75">
          <span className="text-alp-usagi text-base leading-3">{cardProps.author}</span>
        </div>
      </div>

      <div className={`${robotoFlex.className} px-1.5 sm:px-4 md:px-2 lg:px-3 2xl:px-4 flex flex-col gap-1`}>
        <span className="text-acc-yuki text-xl truncate leading-5">
          {cardProps.title}
        </span>

        <div className="px-0.5 sm:px-1 lg:px-1.5 2xl:px-2 flex justify-between text-gsc-okami text-base leading-4">
          <span>Started {timeFormat(cardProps.started)}</span>
          <span>{countFormat(cardProps.viewers)} Viewers</span>
        </div>
      </div>
    </Link>
  )
}
