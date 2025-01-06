import { Roboto_Flex } from 'next/font/google'


const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
})

export default async function StreamById({
  params,
}: {
  params: Promise<{
    id: number
  }>
}) {
  const id = (await params).id

  return (
    <div className="h-svh flex justify-center items-center p-16">
      <span className={`${robotoFlex} text-5xl text-acc-yuki font-semibold`}>Шо ты тут ищешь? Стрим id: {id}</span>
    </div>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    id: number
  }>
}) {
  const id = (await params).id

  return {
    title: `Стрим ${id}`,
  }
}
