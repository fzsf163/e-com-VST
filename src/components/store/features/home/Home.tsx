import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { GearIcon } from '@radix-ui/react-icons'
import { ShoppingBag } from 'lucide-react'
import { ProductCarousel } from '../../shared/productCarousel'
import { CarouselMain } from './carousel'
import TabsGroupProduct from './productTabs'

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
      {/* 🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️ */}
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
      {/* 🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️ */}
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
      {/* 🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️ */}
      <div className='mt-10'>
        <p className='font-semibold text-2xl text-center'>Ready for Order 🔥</p>
        <div className='flex items-center justify-center mt-10'>
          <ProductCarousel></ProductCarousel>
        </div>
      </div>
      {/* 🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️ */}
      <div className='mt-10'>
        <p className='font-semibold text-2xl text-center'>Featured Products</p>
        <div className='mt-10 max-w-screen-2xl mx-auto'>
          <TabsGroupProduct></TabsGroupProduct>
        </div>
      </div>
      {/* 🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️ */}
      <div className='mt-10 max-w-screen-2xl mx-auto h-[25rem] grid grid-cols-2 gap-4'>
        <div className='border border-gray-200 shadow text-center text-xl rounded'>
          AD 1
        </div>
        <div className='border border-gray-200 shadow text-center text-xl rounded'>
          AD 2
        </div>
      </div>
      {/* 🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️🗂️ */}
      <div className='mt-10'>
        <p className='font-semibold text-2xl text-center'>New Arrival</p>
        <p className='font-normal text-base text-center mt-4 underline underline-offset-8 decoration-orange-300 decoration-[2px]'>Gadgets</p>
        <div className='mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 max-w-screen-2xl mx-auto'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10'>
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index}>
                <Card>
                  <CardContent className='flex h-[14rem] items-center justify-center p-6 '>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                  <CardFooter className='flex items-center justify-center gap-2'>
                    <Button className='dark:text-foreground'>Buy Now</Button>
                    <Button variant={'outline'}>Add to cart</Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>{' '}
        </div>
      </div>
    </div>
  )
}
