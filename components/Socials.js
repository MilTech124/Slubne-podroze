import React from 'react'

function Socials() {
  return (
    <div id='socials' className='absolute items-center justify-center flex top-1/2 right-0 -translate-y-1/2 translate-x-20 hover:translate-x-0 transition-all'>
        <p className='text-white animate-pulse text-2xl -mr-[50px]' style={{ transform: "rotate(-90deg)" }}>Social Media</p>
        <ul className='flex flex-col gap-5 p-5 bg-white/50 rounded-bl-md rounded-tl-md'>
            <li><a href='#'><img src="/Youtube_logo.png" width={50} /></a></li>
            <li><a href='#'><img src='/Facebook.png' width={50} /></a></li>
            {/* <li><a href='#'><img src='/x.png' width={50} /></a></li> */}
            <li><a href='#'><img src='/tic-toc.png' width={50} /></a></li>
            <li><a href='#'><img src='/insta.png' width={50} /></a></li>
        </ul>
    </div>
  )
}

export default Socials