import React from 'react'


 const Lists=(props)=>{
    const {data,title} = props
return <div> 
    <h1> {title} </h1>
    <ol> 
    {
     data.map((v,i)=>{
        return <li key={i}> {v} </li>
     })
    }
     </ol> </div>
}
export {Lists}