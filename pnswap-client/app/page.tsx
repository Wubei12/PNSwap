import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div className='sm:h-[30rem] sm:w-[55rem] h-[15rem] w-[25rem] animate-blob fixed blur-xl bg-[#88fcaf] rotate-45 rounded-[50%] mt-[10rem] ease-in-out transition duration-50'></div>
      <div className="flex flex-col absolute h-full items-center justify-center w-full  pt-[5rem] backdrop-blur-[160px]  lg:backdrop-blur-[120px]">
      <p className=' text-3xl text-white font-monument-bold'>Hello There</p>
      <p className=' text-xl text-white font-monument'>Welcome to PNSwap</p>
      <p className=' text-xl text-white font-redhat'>Welcome to PNSwap</p>
      <p className=' text-xl text-white font-redhat-semibold'>Welcome to PNSwap</p>
      <p className=' text-xl text-white font-redhat-bold'>Welcome to PNSwap</p>
      </div>
    </main>
  )
}
