import React from 'react'
import Comment from './comment'


export default function NestedComments({data,text,img,index}) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'2vw'}}>
        <Comment text={text} img={img} />
        <div style={{marginLeft:'50px'}}>
        {data.map((item,index)=> {
            return(
            <NestedComments text={item.Text} img={item.img} data={item.replies ? item.replies : []} />
            )
        })}
        </div>
    </div>
  )
}
