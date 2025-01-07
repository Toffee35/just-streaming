import StreamCard from '@/shared/components/stream_card'

import getCards from '../funcs/card_gen'


export default async function GridStreamCards() {
  const cards = getCards(20)

  return (
    <div className="px-2 sm:px-1.5 md:px-4 lg:px-5 pt-3 md:pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-5 2xl:gap-x-8 gap-y-6 md:gap-y-8 2xl:gap-y-10">
        {cards.map((props) => (
          <StreamCard key={props.id} cardProps={props} />
        ))}
    </div>
  )
}
