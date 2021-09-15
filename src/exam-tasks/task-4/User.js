import React from 'react'

const User = ({user}) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}, {user.address.street} </td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>              
        </tr>
    )
}

export default User
