import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full p-6 w-full m-10 bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp           
      <span className='text-blue-300 pl-2'>ChatApp</span>
        </h1>


        <form action="">
          
        <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
          </div>
          
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
          </div>
          {/* Gendercheckbox */}
          <GenderCheckbox/>
          <div>
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block pl-0'>
            Already have an Account?
          </a>
          </div>
          <div>
            <button className='btn btn-block btn-sm mt-2'>SignUp</button>
          </div>
        </form>

      </div>
       
    </div>
  )
}

export default Signup











// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='h-full p-6 w-full m-10 bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp           
//       <span className='text-blue-300 pl-2'>ChatApp</span>
//         </h1>


//         <form action="">
          
//         <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10' />
//           </div>
          
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input type="password" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
//           </div>
//           {/* Gendercheckbox */}
//           <GenderCheckbox/>
//           <div>
//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block pl-0'>
//             Already have an Account?
//           </a>
//           </div>
//           <div>
//             <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//           </div>
//         </form>

//       </div>
       
//     </div>
//   )
// }

// export default Signup