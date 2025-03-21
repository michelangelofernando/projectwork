import React from "react";

export const Contatti = () => {
    return(
        <form className="bg-white">
            <div>
                <input autoComplete="off" placeholder="lascia un messaggio" className="input-field" type="text-area" />


            </div>
            
            <div className="btn">
                <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accedi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                <button className="button2">Registrati</button>
            </div>
        
        </form>
    )
}