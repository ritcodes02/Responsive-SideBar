import React from 'react'
import SideBar from './SideBar';
import './App.css'


function App() {
  return (
    <div className='main'>
      <SideBar/>
      <div className="container">
        <h1 className="title">Hello World</h1>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit hic amet obcaecati recusandae laudantium cum adipisci tempore neque corrupti dignissimos voluptatem voluptatibus, et incidunt voluptatum deleniti consequatur sapiente tenetur reiciendis iusto corporis! Sapiente nemo ducimus corporis repudiandae itaque distinctio ipsam nulla eius, neque earum repellat nihil deserunt quaerat quidem ipsum eligendi possimus repellendus deleniti expedita. Illum eum alias beatae quo incidunt suscipit nobis veritatis doloremque. Labore, blanditiis? Molestias atque laboriosam dolorum consequatur inventore, unde hic eaque temporibus aliquid? Impedit iusto saepe, quisquam eligendi neque necessitatibus qui temporibus assumenda accusamus mollitia optio explicabo reprehenderit sed, dolorum cum expedita nesciunt magni quidem!</p>
         <button className="btn">Explore now</button>
      </div>
    </div>
  )
}

export default App