import React,{useState} from 'react'

export function Home() {

       
const [color, setColor]=useState('#fff')

    return (
        <section>

           <div className="Home-container">
           <img src="/images/kicks-one.jpg" alt="" style={{backgroundColor: "red"}}/>
                <button >{color} click</button>  
             

               </div> 
         
        </section>
    )
}
 