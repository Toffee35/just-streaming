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
    <span className={`${robotoFlex} text-5xl text-acc-yuki font-semibold`}>Stream ID: {id}</span>
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
    title: `Stream ${id}`,
  }
}
