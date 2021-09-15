import React, { useRef} from 'react';

function Task5() {

  const mainRef = useRef()

  const changeLight = () => {
    mainRef.current.style.background = "#f1f1f1"
    mainRef.current.style.color = "#0000"
  }
  const changeDark= () => {
    mainRef.current.style.background = "#000000"
    mainRef.current.style.color = "#f1f1f1"
  }

  return (
    <div ref={mainRef}>
      <h1>Task 5</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, inventore. </p>
      <button onClick={()=>changeLight()}>Light theme</button>
      <button onClick={()=>changeDark()}>Dark theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 5 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task5 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
