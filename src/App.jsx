
import { useState } from 'react'
import './App.css'

function App() {
const [backgroundColor,setbackgroundColor]=useState('');
const changeColor=(color)=>{
  setbackgroundColor(color);
}
  return (
    <>
  <div  style={{width:'100%',height:'100vh',backgroundColor}}className=' dd d-flex justify-content-center align-items-center bg-dark'>
      <h1 className='h1'>Background color change</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />



      <div className=''>
        <button className='button ' style={{marginRight:'10px'}} onClick={()=>changeColor('pink')}>pink</button>
        <button className='button' style={{marginRight:'10px'}} onClick={()=>changeColor('yellow')}>Yellow</button>
        <button className='button' style={{marginRight:'10px'}} onClick={()=>changeColor('orange')}>orange</button>
        <button className='button' style={{marginRight:'10px'}} onClick={()=>changeColor('cyan')}>cyan</button>
          </div>
     </div>
    </>
  )
}

export default App
