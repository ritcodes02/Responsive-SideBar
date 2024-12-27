import React, { useState } from 'react'


function SideBarItem({item}) {
  const[open, setOpen] = useState(false)

if(item.childrens){
  return (
    <div className={open ? "sidebar-item open": "sidebar-item"}>
      <div className="sidebar-title">
          <span>
             {item.icon &&  <i className={item.icon}></i>}
              {item.title}
          </span>
              <i className='bi-chevron-down toggle-btn' onClick={()=>{setOpen(!open)}}></i>
       </div>
       <div className="sidebar-content">
        {item.childrens.map((child, index)=> <SideBarItem key={index} item={child}/>)}
       </div>
    </div>
)
} else{
  return (
    <a href={item.path || "#"} className= "sidebar-item plain">
              {item.icon &&  <i className={item.icon}></i>}
              {item.title}
    </a>
)
}
}

export default SideBarItem