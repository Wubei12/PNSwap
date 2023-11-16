"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import LogoImg from "@/public/images/logo.png"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

    const handleNav = () => {
    setNav(!nav);
  };

   useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className={shadow ? 'h-20 z-[999] top-0 text-white backdrop-blur-xl fixed w-full flex items-center justify-between shadow-2xl transition-all' : 'h-20 z-[999] top-0 text-white backdrop-blur-xl fixed w-full flex items-center justify-between'}>
         <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={LogoImg}
            alt="/"
            width={100}
            height={50}
          />
        </Link>
        <div>
          <ul className="hidden items-center justify-center md:flex">
            <Link href="/">
              <li className="ml-10 motion-safe:transition-ease motion-safe:duration-100 text-sm  max-[900px]:text-xs max-[900px]:ml-6 font-monument uppercase hover:border-b-4 border-[#88fcaf]">About</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 motion-safe:transition-ease motion-safe:duration-100 text-sm  max-[900px]:text-xs max-[900px]:ml-6 font-monument uppercase hover:border-b-4 border-[#88fcaf]">Swap</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 motion-safe:transition-ease motion-safe:duration-100 text-sm  max-[900px]:text-xs max-[900px]:ml-6 font-monument uppercase hover:border-b-4 border-[#88fcaf]">Stake</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 motion-safe:transition-ease motion-safe:duration-100 text-sm  max-[900px]:text-xs max-[900px]:ml-6 font-monument uppercase border-[#88fcaf] hover:border-b-4">
                Dashboard
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 motion-safe:transition-ease motion-safe:duration-100 text-sm  max-[900px]:text-xs max-[900px]:ml-6 text-center font-monument uppercase hover:border-b-4 border-[#88fcaf]">
                Contact us
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden rounded-md shadow-lg text-gray-900 bg-[#88fcaf] shadow-[#17181e] p-3 cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
          <div className="md:flex hidden justify-center items-center gap-6 font-monument ">
            <button className="hover:text-[#88fcaf] max-[900px]:text-xs text-center transition duration-100">
                <Link href="/sign-in">
                    Sign In
                </Link>
            </button>
            <button className='bg-[#88fcaf]   max-[900px]:text-xs hover:bg-transparent motion-safe:transition-ease motion-safe:duration-200 border-[#88fcaf] border hover:p-1.75 hover:text-[#88fcaf] text-[#17181e] py-2 px-4 rounded-md'>
                <Link className='w-full h-full' href="/signup">
                    Signup
                </Link>
            </button>
          </div>
      </div>

    <div
        className={
          nav ? " md:hidden fixed peer right-0 top-0 transition-colors w-full h-screen bg-[#17181e]/90" : ""
        }
        onClick={handleNav}
      >
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75] peer-focus:right-[-100%] sm:w-[60%] md:w[45%] bg-[#88fcaf]/40 h-screen backdrop-blur-2xl p-10 ease-in duration-500"
              : "fixed right-[-100%] h-screen peer-focus:right-[-100%] top-0 p-10 ease-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/" onClick={handleNav}>
              <Image
                className="cursor-pointer"
                src={LogoImg}
                alt="/"
                width={75}
                height={50}
              />
            </Link>

            <div
              onClick={handleNav}
              className="rounded-md shadow-lg text-gray-900 bg-[#88fcaf] shadow-[#17181e] p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b flex justify-center items-center text-center border-[#88fcaf] mt-6 mb-4 gap-6 px-2 py-4 font-monument ">
            <button className="hover:text-[#88fcaf] transition duration-100">Sign In</button>
            <button className='bg-[#88fcaf] text-[#17181e] p-2 rounded-md'>Signup</button>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <ul className=" text-[#17181e] text-lg text-center font-monument capitalize">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4">
                  About
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4">
                  Swap
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4">
                  Stake
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4">
                  Farm
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4">
                  Dashboard
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4">
                  Contact us
                </li>
              </Link>
            </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar