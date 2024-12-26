import React from 'react'

const Footer = () => {
  return (
    <div className='absolute bottom-0 h-[80px] w-full bg-black text-white flex items-center justify-between px-10'>
        <div className='bg-white text-black text-sm p-1 rounded-xl'>
        Thursday, November 5, 2024 6:17 PM
        </div>
        <div className='text-center flex gap-5 text-white text-[28px] 2xl:text-[30px]'>
            <p>삼가 故人의 冥福을 빕니다.</p>
            <p>한림병원장례식장 일동</p>
        </div>
    </div>
  )
}

export default Footer