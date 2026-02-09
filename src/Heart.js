    import React from 'react'
    import "./Heart.css"
    import { useNavigate } from 'react-router-dom'

    export default function Heart() {
        const navigate = useNavigate();
    return (

        <div className="sparkle-page">
      <div className="content">
        <div className='heartback'>
        

        </div>
        <button className='open' onClick={()=> navigate("/home")}> Open! </button>
        </div>
         </div>
         
    )
    }
