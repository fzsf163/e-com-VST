import { CarouselMain } from './carousel'

export function Home() {
  return (
    <div className='flex'>
      <CarouselMain></CarouselMain>
      {/* <div className='flex flex-col gap-2'>
        <div className='w-[20rem] h-[10rem] bg-slate-400'></div>
        <div className='w-[20rem] h-[10rem] bg-slate-400'></div>
      </div> */}
    </div>
  )
}
