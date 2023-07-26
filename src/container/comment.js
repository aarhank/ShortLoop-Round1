import React from 'react'
import CommentText from '../components/comments/commentText'
import ProfilePicture from '../components/comments/profilePicture'
import './index.css'

export default function Comment({text,img,data,index}) {
  return (
    <div className="commentContainer" >
      <div>
            <ProfilePicture img={img} />
        </div>
        <div>
            <CommentText text={text}/>
        </div>
        
    </div>
  )
}
