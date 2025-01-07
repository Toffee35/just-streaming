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
    <div className="h-full flex justify-center items-center px-8">
      <span className={`${robotoFlex} text-5xl text-acc-yuki font-semibold`}>Account Name: {name}</span>
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
    title: `Account ${id}`,
  }
}
