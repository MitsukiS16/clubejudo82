

import {useState} from "react";


function Home() {
    const [show,setshow] = useState(true);
  
    console.log(show);
    
    return (
        <>
        <button onClick={()=> setshow(!show)}>

        ola sissi

        </button>

        {show && <h1> texto 2 qualquer </h1>}
        </>
    )
}

export default Home;
