import StreamCard from '@/shared/components/stream_card'

import getCards from '../funcs/card_gen'


export default async function GridStreamCards() {
  const cards = getCards(20)

  return (
    <div className="px-2 sm:px-4 xl:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-9 md:gap-7 xl:gap-8">
        {cards.map((props) => (
          <StreamCard key={props.id} cardProps={props} />
        ))}
    </div>
  )
}
