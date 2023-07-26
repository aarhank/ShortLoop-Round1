import { useState, useEffect } from 'react';
import './App.css';
import Comment from './container/comment'
import NestedComments from './container/NestedComments';
function App() {
  let data = [
    {
      Text: 'testtestest',
      img:'testestest',
      replies: [
        {
          Text: 'testtestest',
          img:'testestest',
          replies: [
            {
              Text: 'testtestest',
              img:'testestest',
              replies: [
                {
                  Text: 'testtestest',
                  img:'testestest',
                }
              ]
            },
            {
              Text: 'testtestest',
              img:'testestest',
            }
          ]
        },
        {
              Text: 'testtestest',
              img:'testestest',
        },
        {
          Text: 'testtestest',
          img:'testestest',
        }
      ]
    },
    {
      Text: 'testtestest',
      img:'testestest',
      replies: [
        {
          Text: 'testtestest',
          img:'testestest',
        }
      ]
    }
    
  ]
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'4vw'}}>
      {data.map((item,index) => {
        return(
          <NestedComments text={item.Text} img={item.img} data={item.replies} index={index}/>
        )
      })}

    </div>
  );
}

export default App;