import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function Owner() {
  return (
    <div className="fixed bottom-4 left-6 flex flex-row items-center gap-1 bg-gsc-yoru px-1.5 py-1 rounded-md border border-gsc-amagumo">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e7e7e7">
          <path d="M450-154v-309L180-619v309l270 156Zm60 0 270-156v-310L510-463.16V-154Zm-30-360 266-155-266-154-267 154 267 155ZM150-258q-14.25-8.43-22.12-22.21Q120-294 120-310v-340q0-16 7.88-29.79Q135.75-693.57 150-702l300-173q14.33-8 30.16-8 15.84 0 29.84 8l300 173q14.25 8.43 22.13 22.21Q840-666 840-650v340q0 16-7.87 29.79Q824.25-266.43 810-258L510-85q-14.33 8-30.16 8Q464-77 450-85L150-258Zm330-222Z" />
        </svg>
      </button>
      
      <a href="https://github.com/Toffee35" className={
        `${montserrat.className} text-alp-usagi font-normal text-lg leading-5`
      }>@Toffee35</a>
    </div>
  )
}
