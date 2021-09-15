import React from 'react'

const Button = ({text, btnClass}) => {
    return (
        <button className={btnClass}>{text}</button>
    )
}

export default Button
