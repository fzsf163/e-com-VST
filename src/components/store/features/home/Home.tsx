import { Card, CardContent } from '@/components/ui/card'
import { GearIcon } from '@radix-ui/react-icons'
import { CarouselMain } from './carousel'

export function Home() {
  return (
    <div>
      <div className='flex items-stretch flex-wrap lg:flex-nowrap justify-center gap-20 h-[30rem] mt-10'>
        <CarouselMain></CarouselMain>
        <div className='grid place-items-center gap-4 h-full'>
          <div className='w-[25rem] h-full bg-slate-400 rounded-md'></div>
          <div className='w-[25rem] h-full bg-slate-400 rounded-md'></div>
        </div>
      </div>
      <div className='mt-20 flex items-center justify-center gap-10'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className='p-1' key={index}>
            <Card>
              <CardContent className='flex items-center flex-wrap justify-center p-6 gap-4 min-w-[20rem]'>
                <p>
                  <GearIcon className='size-12'></GearIcon>
                </p>
                <div className='grid'>
                    <p className='font-bold text-lg'>Option Title</p>
                    <p>Option text</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
