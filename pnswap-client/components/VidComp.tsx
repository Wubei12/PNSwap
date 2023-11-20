"use client";

import React, { useEffect, useRef, useState } from 'react'
import CustomPlayButton from './CustomPlayButton';

export default function VidComp() {
        const videoRef = useRef<HTMLVideoElement | null>(null);
    const [play, setPlay] = useState(false);

    const playVideo = () => {
        if (play) {
            videoRef.current?.pause();
            setPlay(false);
        } else {
            videoRef.current?.play();
            setPlay(true);
        }
    };
  return (
    <div className='w-full relative border-white row row-span-2 h-full'>
      <div>
            <video  className='rounded-2xl p-2' loop ref={videoRef} onClick={playVideo} >
                <source src={"https://res.cloudinary.com/dtbufoojz/video/upload/v1699563220/Crypto_Video_Presentation_for_InCrypto_Blockchain-Based_Platform_3D_Motion_Design_Services_jzvwgi.mp4"} />
            </video>
      </div> 
      <div className='w-full h-full bg-white'>
        <div className='absolute ml-2 mt-2 lg:w-16 lg:h-16' onClick={playVideo}>
            <CustomPlayButton />
        </div>
      </div>
        <div className='h-full mt-20 py-4 px-4'>
            <h1 className="font-monument text-2xl">How to Buy & Trade tokens with PNSwap</h1>
        </div>
        <p className="absolute top-0 right-0 bg-black text-white p-2 m-2 rounded-xl text-sm z-10">Guide</p>
    </div>
  )
}
