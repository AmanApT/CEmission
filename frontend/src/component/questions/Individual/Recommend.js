import React from 'react'


const Recommend = ({setToggleQuestion,opArr}) => {
  return (
    <div>
        <h1>Hello Bhai</h1>
        <h1>{opArr[1]}</h1>
        <h1>{opArr[2]}</h1>
        <h1>{opArr[3]}</h1>
        <h1>{opArr[4]}</h1>
        <button onClick={()=>setToggleQuestion(5)}> wapas aa ja </button>
    </div>
  )
}

export default Recommend