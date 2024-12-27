import React from 'react'
import SideBarItem from './SideBarItem'
import items from './data/sidebar.json'


function SideBar() {
  return (
    <div className='Sidebar'>
      {items.map((item, index) => <SideBarItem key={index} item={item}/>)}

    </div>
  )
}
export default SideBar