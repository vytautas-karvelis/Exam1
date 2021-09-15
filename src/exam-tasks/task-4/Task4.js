import React, {useState, useEffect} from 'react';
import axios from 'axios'
import User from './User';
function Task4() {

  const [user, setUsers] = useState([{}])
  const [isLoading, setIisLoading] = useState(true)
  useEffect(() => {
    
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        setUsers(response.data)
        console.log(response)       
        setIisLoading(false)
    })

  }, [])

  useEffect(() => {
      console.log('u', user)
  }, [user])

  return (
    <div>
    <h3>Task 4</h3>
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>

      { isLoading ? (
        <tr><td>Loading...</td></tr>
    ) : (
      user.map(singleUser=><User user={singleUser} key={singleUser.id} />)
    )}
     
    
   
     
      </tbody>
     </table>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
