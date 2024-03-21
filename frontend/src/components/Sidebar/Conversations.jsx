import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../Hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emojis'
const Conversations = () => {
  const {loading,conversations}=useGetConversations();
   
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,index)=>(
          <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={index === conversations.length-1}
          />
        ))
      }
      {
        loading?<span className='loading loading-spinner'></span>:null
      }
       
      
    </div>
  )
}

export default Conversations








// import Conversation from './Conversation'
// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
      
//     </div>
//   )
// }

// export default Conversations