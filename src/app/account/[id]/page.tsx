import { Roboto_Flex } from 'next/font/google'


const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
})

export default async function AccountById({
  params,
}: {
  params: Promise<{
    id: number
  }>
}) {
  const name = (await params).id

  return (
    <span className={`${robotoFlex} text-5xl text-acc-yuki font-semibold`}>Account Name: {name}</span>
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
    title: `Account ${id}`,
  }
}
