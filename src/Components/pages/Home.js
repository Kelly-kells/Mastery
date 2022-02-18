import React,{useState} from 'react'

export function Home() {

       const[change, setChange]=useState('Shop')


    const handleClick=()=>{
       
        setChange('Buy')

    }

    return (
        <section>

           <div className="Home-container">
           <img src="/images/kicks-one.jpg" alt="" />

                <button onClick={(change)}> click</button>

               </div> 
         
        </section>
    )
}
 