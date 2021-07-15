import React from "react"
import "./style.css"
import Button from "./Button"

const Apple=()=>{
    return(
        <div >
            <h1 style={{textAlign:"center",color: "#003049"  }}>Welcome to my first React program</h1>
            <h2>Choose any button</h2>
            <Button buttonText="1"/>
            <Button buttonText="2"/>
            <Button buttonText="3"/>
            
        </div>
        
    )
}

export default Apple