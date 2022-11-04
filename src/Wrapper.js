import React, { useEffect, useState} from "react";

function Wrapper (){
const [isMobile, setIsMobile] = useState(window.innerWidth);
useEffect(() => {
    if(window.innerWidth > 500){
        setIsMobile(false)
    }else{
        setIsMobile(true)
    }
    window.addEventListener("resize")
},[])
    return (
        <div>
           { isMobile ?<div className="desktop">Desktop</div>
           : <div className="mobile">Mobile</div>}
        </div>
    )
}
export default Wrapper