import React, {useState, useEffect} from "react";
import "./Theme.css";

const Theme = ()=>{

    const [dark, setDark] = useState(true);

    useEffect (()=>{
        if (dark){
            document.documentElement.style.setProperty('--bgColor', '#162052');
            document.documentElement.style.setProperty('--whiteColor', '#fff');
        }else{
            document.documentElement.style.setProperty('--bgColor', '#fff');
            document.documentElement.style.setProperty('--whiteColor', '#111');
        }

    }, [dark])

    return(
        <div id="theme">
            {
                dark
                ?<i className="fa-solid fa-sun" onClick={()=> setDark(false)}></i>
                : <i className="fa-solid fa-moon" onClick={()=> setDark(true)}> </i>
            } 

        </div>
    )
}
export default Theme;