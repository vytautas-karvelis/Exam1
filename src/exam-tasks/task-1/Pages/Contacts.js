import React from 'react'
import { useHistory } from "react-router-dom";

const Contacts = () => {
    const history = useHistory();

    return (
        <div>
            <h1>Contacts</h1>
            <button onClick={()=>history.goBack()}>Grįžti atgal</button>
        </div>
    )
}

export default Contacts
