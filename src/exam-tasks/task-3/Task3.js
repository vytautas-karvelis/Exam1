import React from 'react';
import {FaTwitter} from 'react-icons/fa'
import Button from './components/Button';
import './task3.css'
function Task3() {
  return (
    <div className="task3Div">
      <h3>Task3</h3>
      <FaTwitter size={30} color='lightblue' />
      <h1>Happening Now</h1>
      <h3>Join Twitter today</h3>
      <Button text={"Sign up"} btnClass={'first'}/>
      <Button text={"Log in"} btnClass={'second'}/>
     
    </div>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
