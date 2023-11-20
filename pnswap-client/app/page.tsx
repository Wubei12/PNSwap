import Banner from '@/components/Banner'
import CTA from '@/components/CTA'
import PopularTokens from '@/components/PopularTokens'
import VidComp from '@/components/VidComp'

export default function Home() {
  return (
    <main className='flex flex-col h-screen'>
      <div className='sm:h-[20rem] sm:w-[40rem] h-[15rem] w-[25rem] animate-blob fixed blur-xl bg-[#88fcaf]/60 rotate-45 rounded-[50%] mt-[10rem] ease-in-out transition duration-50'></div>
      <div className='sm:h-[30rem] sm:w-[55rem] h-[15rem] w-[25rem] animate-blob fixed blur-xl bg-[#88fcaf]/60 rotate-45 rounded-[50%] mt-[30rem] ml-[30rem] ease-in-out transition duration-50'></div>
      <div className="flex flex-col absolute w-full h-full pt-[5rem] backdrop-blur-[160px] xsl lg:backdrop-blur-[180px]">
        <Banner />
        <div className="grid h-full gap-1 items-center justify-center grid-cols-4">
          <div className="bg-white col-span-1 shadow-2xl rounded-xl">
            <VidComp />
          </div>
          <div className="bg-white col-span-1 rounded-lg">
            <PopularTokens />
          </div>
          <div className="flex flex-col col-span-2 justify-center items-center">
            <CTA />
            <div className="flex items-center w-[25%] h-[25%] justify-center">
              <div className="bg-white  w-[50%] h-[50%] rounded-lg">bgWhite</div>
              <div className="bg-[#88fcaf] w-[50%] h-[50%] rounded-lg">bgGreen</div>
            </div>
          </div>
        </div>
      
      </div>
    </main>
  )
}
