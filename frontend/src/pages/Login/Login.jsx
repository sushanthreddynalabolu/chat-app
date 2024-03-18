import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full p-6 w-full m-10 bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
          <span className='text-blue-300 pl-2'>ChatApp</span>
        </h1>
        <form>

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
          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block '>
            {"Don't"} have an Account?
          </a>
          <div>
            <button className='btn btn-block btn-sm mt-2'>Login</button>
          </div>


        </form>
      </div>

    </div>
  )
}

export default Login



// Starter code

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='h-full p-6 w-full m-10 bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//           <span className='text-blue-300 pl-2'>ChatApp</span>
//         </h1>
//         <form>

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
//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block '>
//             {"Don't"} have an Account?
//           </a>
//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>


//         </form>
//       </div>

//     </div>
//   )
// }

// export default Login
