import React from 'react'
import SideItems from './SideItems/SideItems'

export default function SideBar() {
 const menuList = [{id:1,name:'Home'}, {id:2,name:'File'}, {id:3,name:'Edit'},{id:4,name:'Insert'}, {id:5,name:'Contact Us'}]
  return (
    <div className="w-1/5 h-screen bg-gray-400">
         <ul className="flex pt-28 h-1/2 flex-col justify-between">
           {menuList.map(items => (
            <SideItems key={items.key} itemDetails={items}/>
           ))}
          </ul>
    </div>
  )
}
