import React from 'react'

function Socials() {
  return (
    <div id='socials' className='absolute max-sm:scale-50 max-sm:translate-x-12 items-center justify-center flex top-1/2 right-0 -translate-y-1/2 '>
        <p className='text-white animate-pulse text-2xl -mr-[50px]' style={{ transform: "rotate(-90deg)" }}>Social Media</p>
        <ul className='flex flex-col gap-5 p-5 bg-white/50 rounded-bl-md rounded-tl-md'>
            <li><a href='https://www.youtube.com/@slubnepodroze'><img src="/Youtube_logo.png" width={50} /></a></li>
            <li><a href='https://www.facebook.com/slubnepodroze'><img src='/Facebook.png' width={50} /></a></li>
            <li><a href='https://twitter.com/SlubnePodroze'><img src='/x.png' width={50} /></a></li>
            <li><a href='https://twitter.com/SlubnePodroze'><img src='/pin.png' width={50} /></a></li>
            <li><a href='https://www.tiktok.com/@slubne.podroze'><img src='/tic-toc.png' width={50} /></a></li>
            <li><a href='https://www.instagram.com/slubne_podroze'><img src='/insta.png' width={50} /></a></li>
        </ul>
    </div>
  )
}

export default Socials