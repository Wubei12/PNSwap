import Image from 'next/image'
import React from 'react'
import pplUrl from '@/public/images/people.png'
import Link from 'next/link'
import { GoArrowUpRight } from "react-icons/go";


export default function Banner() {
  return (
    <div className='flex px-8 xs:px-10 sm:px-24 lg:px-10 lg:grid grid-cols-2 items-center justify-center mt-12 2xl:px-16 flex-col lg:flex-row'>
      <div className='font-monument mb-4 lg:mb-0 text-white'>
        <h1 className='sm:text-[50px] lg:text-[text] text-[30px] xs:text-[40px] 2xl:text-[80px]'>
            PNSwap. <br />
            Swap. Stake. <br />
            Farm. 
        </h1>
      </div>
      <div className='font-redhat text-sm xs:text-[18px] leading-4 xs:leading-6 sm:text-[18px] h-full flex justify-center flex-col lg:px-6 xl:px-28 text-gray-400'>
        <div className='flex items-center justify-start gap-4 mb-4'>
            <Image src={pplUrl} width={150} height={100} alt='people' />
            <h2 className='text-lg'>200K Users</h2>
        </div>
        <p>
            Stake your PNS tokens directly on the platform using MetaMask and create a liquidity pool of PNS-BNB tokens to process and earn rewards on your investment.
        </p>
        <Link className='mt-8 group py-4 px-4 text-white rounded-xl w-[300px] border border-white hover:border-[#88fcaf] active:scale-110 transition duration-200 flex items-center justify-between' href="/signup">
            <button className='font-monument'>Get Started</button>
            <GoArrowUpRight className="text-[#88fcaf] group-hover:text-white transition-colors duration-200" size={25} />
        </Link>
      </div>
    </div>
  )
}
