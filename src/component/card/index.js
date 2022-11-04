import React, { useState, useEffect } from "react"


function Card ({title, id, editCardCount}) {
    const [ isVisible, setIsVisible ] = useState(true)

    useEffect(() => {
        editCardCount(id)
    }, [isVisible]);
    
    const handleToggle = () => {
        setIsVisible(!isVisible)
    }
    return(
        <div className="card">
            {isVisible ? <div>
            <img onClick={ handleToggle } 
            className="img" 
            src={"/icon/32178.png"}
            alt="close-icon" />
             <div>{title}</div>
             </div> 
            : <>
            <button onClick={ handleToggle }>Show</button>
            </>}
        </div>
    )
}

export default Card