import React from 'react'

const App = () => {
  return (
    <div>
      <div className='bg-blue-800 p-3 flex flex-col h-[25vh]'>
        <input className='bg-yellow-700 m-2 w-[12rem] ml-[21rem] font-bold'placeholder='enter name' type="text"/>
        <input className='bg-yellow-700 m-2 w-[12rem] ml-[21rem] font-bold ' placeholder='enter age' type="text"/>
        <button className='bg-green-700 font-bold w-[8rem] ml-[23rem] text-white'>submit</button>
      </div>
    </div>
  )
}

export default App
