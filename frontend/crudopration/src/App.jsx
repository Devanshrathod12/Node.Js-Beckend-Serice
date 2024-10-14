import React,{useEffect, useState} from 'react'
import axios from "axios"
const App = () => {

  const [name, setname] = useState("")
  const [age, setage] = useState("")
  const [list, setlist] = useState([])
 
 // post data in database using beckend post method avlabal on bekend file
  const postdata = async()=>{
      const result = await axios.post("http://localhost:3000/post",{name:name,age:age})
      setlist([...list,{_id:result.data._id,name:name,age:age}])
  }

 // puting data in data base using input boxes
  const updatedata = async(id)=>{
    const newname = prompt("enter new name")
    const newage = prompt("enter new age")
      const data = await axios.put(`http://localhost:3000/update/${id}`,{name:newname,age:newage})
      setlist(list.map((val)=>{
       return val._id==id?{_id:id,name:newname,age:newage}:val;
      }))
  }

  // delete data in the data base using button 
  const deletedata = async(id)=>{
    const data = await axios.delete(`http://localhost:3000/delete/${id}`)
    setlist(list.filter((val)=>{
      return val._id!=id;
    }))
}  

// show all db data in main page
  useEffect(() => {
    const getdata = async()=>{
      const result = await axios.get("http://localhost:3000/get")
      console.log(result.data);
      setlist(result.data)
    }
    getdata()
  }, [])
  

  return (
    <div>
      <div className='bg-blue-800 p-3 flex flex-col h-[25vh]'>
        <input type="text"  className='bg-yellow-700 m-2 w-[12rem] ml-[21rem] font-bold'placeholder='enter name' onChange={(e)=>setname(e.target.value)}/>
        <input  type="Number" className='bg-yellow-700 m-2 w-[12rem] ml-[21rem] font-bold ' placeholder='enter age' onChange={(e)=>setage(e.target.value)}/>
        <button className='bg-green-700 font-bold w-[8rem] ml-[23rem] text-white' onClick={postdata}>submit</button>
      </div>
 {/* that is { } open so return key word is must be insert importent */}
     {
      list.map((val)=>(
        <div className='bg-yellow-700 flex justify-end font-extrabold ml-[20rem]  w-[18rem] mt-7'>
          <h1 className='mr-4 h-[3rem]'>{val.name}</h1>
          <h2 className='mr-4'>{val.age}</h2>
          <button className='bg-green-800 font-extrabold  text-white' onClick={()=>updatedata(val._id)}>update</button>
          <button className='bg-blue-800 font-extrabold  text-white ml-2' onClick={()=>deletedata(val._id)}>delete</button>
         </div>
      ))
     }
      
    </div>
  )
}

export default App
