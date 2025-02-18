import { Card, CardContent } from '@/components/ui/card'
import { GearIcon } from '@radix-ui/react-icons'
import { ShoppingBag } from 'lucide-react'
import { CarouselMain } from './carousel'

export function Home() {
  return (
    <div>
      <div className='flex flex-shrink-0 items-stretch flex-wrap lg:flex-nowrap justify-center  gap-5 lg:gap-20 mt-10'>
        <CarouselMain></CarouselMain>
        <div className='flex flex-wrap lg:flex-col items-center justify-center gap-4 h-full'>
          <div className='w-[20rem] sm:w-[25rem] h-[15rem] bg-slate-400 rounded-md'>
            Ad 1
          </div>
          <div className='w-[20rem] sm:w-[25rem] h-[15rem] bg-slate-400 rounded-md'>
            Ad 2
          </div>
        </div>
      </div>
      <div className='mt-20 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-screen-2xl mx-auto px-10'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div className='p-1' key={index}>
            <Card>
              <CardContent className='flex items-center flex-wrap justify-center p-6 gap-4'>
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
      <div className='mt-10'>
        <div className='text-center space-y-2'>
          <p className='font-semibold text-2xl'>FEATURED CATEGORIES</p>
          <p className='font-normal text-xl'>
            Get your desired product from featured category
          </p>
        </div>
        <div className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 max-w-screen-2xl mx-auto'>
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index}>
              <Card>
                <CardContent className='flex items-center justify-center flex-col gap-2 pt-10'>
                  <p>
                    <ShoppingBag className='size-20'></ShoppingBag>
                  </p>
                  <div className=''>
                    <p className='font-normal text-lg'>
                      Product Category {index + 1}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
