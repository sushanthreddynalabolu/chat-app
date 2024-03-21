import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../Hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetConversations()

const handleSubmit=(e)=>{
  e.preventDefault()
  if(!search) return
  if(search.length<3){
    return toast.error("Search term consists must be at least 3 characters")
  }
  const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
  if(conversation){
    setSelectedConversation(conversation)
    setSearch('')
  }else{
    toast.error("There is no such user found")
  }
}



  return (
    <form className='flex items-center gap-2 mx-2 mt-2' onSubmit={handleSubmit} >
        <input type="text" placeholder='Search.....' className='input input-bordered rounded-full bg-black text-white'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <button  type="submit" className='btn btn-circle bg-sky-500 text-white'><FaSearch/></button>
    </form>
  )
}

export default SearchInput





// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2 mx-2 mt-2' >
//         <input type="text" placeholder='Search.....' className='input input-bordered rounded-full bg-black' />
//         <button  type="submit" className='btn btn-circle bg-sky-500 text-white'><FaSearch/></button>
//     </form>
//   )
// }

// export default SearchInput