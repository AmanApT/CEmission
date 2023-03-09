import React from 'react'


const RecommendIndustry = ({setToggleQuestion,opArrIndustry}) => {
  return (
    <div>
        
        <h1>{opArrIndustry[1]}</h1>
        <h1>{opArrIndustry[2]}</h1>
        
        <button onClick={()=>setToggleQuestion(5)}> wapas aa ja </button>
    </div>
  )
}

export default RecommendIndustry