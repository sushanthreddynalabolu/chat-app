import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 mx-2 mt-2' >
        <input type="text" placeholder='Search.....' className='input input-bordered rounded-full bg-black' />
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