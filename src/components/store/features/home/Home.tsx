import { CarouselMain } from './carousel'

export function Home() {
  return (
    <div className='flex items-stretch flex-wrap lg:flex-nowrap justify-center gap-20 h-[30rem] mt-10'>
      <CarouselMain></CarouselMain>
      <div className='grid place-items-center gap-4 h-full'>
        <div className='w-[25rem] h-full bg-slate-400 rounded-md'></div>
        <div className='w-[25rem] h-full bg-slate-400 rounded-md'></div>
      </div>
    </div>
  )
}
