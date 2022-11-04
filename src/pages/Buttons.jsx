import React from 'react'
import qr from '../assets/qr.png'

export default function Buttons() {
  return (
    <div className='w-screen min-h-screen p-6 sm:p-0 bg-slate-400 flex justify-center items-center'>
      <div className='w-96 h-auto bg-slate-200 p-4 rounded-lg'>
        <img src={qr} alt="qr code" className='rounded-lg' />
        <div className='p-2 flex flex-col gap-2'>
          <h3 className='text-2xl font-bold text-center p-1'>Improve your front-end skills by building projects</h3>
          <p className='text-center font-semibold text-gray-400 px-4'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  )
}
