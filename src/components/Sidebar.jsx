import React, { useState } from 'react'

const navItems = [

  {title : `what's new`},
  {
    title : `get started`,
    otherOptions : [
      {title: 'designers'},
      {title: 'designers'},
      {title: 'designers'}
    ]
  },
  {title : `foundation`},
  {title : `contents`},
  {title : `product guidlines`},
  {title : `marketing guidlines`},
  {title : `contact us`}
]

export default function Sidebar() {
  const [selected, setSelected] = useState(-1);
  const [isvisible, setVisible] = useState(false);

  return (
    <div className='w-60 h-screen bg-slate-900/80 fixed'>
      <img src="https://cdn.holidaykeepers.com/wp-content/uploads/2022/05/holidaykeepers-logo-white.png" alt="logo" className='p-4'/>
      <div className='flex flex-col'>
      {navItems.map((i, k) => {
        return(
          <div className={`text-white flex flex-col justify-between text-lg font-medium hover: ${k === selected ? `bg-slate-900`: ``} w-full p-2`} onClick={() => setSelected(k)} key={k}>
            <div className='flex justify-between w-full'>{i.title} {i.otherOptions && <div onClick={() => setVisible(v => v = !v)}>&gt;</div>}</div>
            {i.otherOptions && 
              <div className={`${isvisible ? 'opacity-100 h-full' : '-translate-y-full opacity-0 -z-10 h-0'} transition-all ease-in-out duration-700`}>
              {i.otherOptions.map((i, k) => {
                return(
                  <div className={`text-white text-lg rin font-medium hover:bg-slate-900 w-full p-2`} key={k}>
                    {i.title}
                    </div>
                  )
              })}
              </div>
            }
          </div>)
      })}
      </div>
    </div>
  )
}
