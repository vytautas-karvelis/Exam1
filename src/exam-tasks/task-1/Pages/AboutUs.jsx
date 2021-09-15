import React from 'react'
import { useHistory } from "react-router-dom";

const AboutUs = () => {
    const history = useHistory();

    return (
        <div>
            <h1>About us</h1>
            <button onClick={()=>history.goBack()}>Grįžti atgal</button>
        </div>
    )
}

export default AboutUs
