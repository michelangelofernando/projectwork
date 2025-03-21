import React from "react"

export const Car = (props) => {
    return (
        <h1>I am a {props.brand}</h1>
    )

}

export const Garage = () => {
    const carName = ["Ford", "Fiat", "Citroen", "Toyota"]
       return (
           <div>
               <h1>Who lives in my garage?</h1>
               <Car brand={carName[1]}/>
               
           </div>
       )
}

