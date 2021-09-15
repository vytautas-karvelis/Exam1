import React, {useReducer} from 'react';
import {FaThumbsUp} from 'react-icons/fa'
import {FaThumbsDown} from 'react-icons/fa'

import './task2.css'
const likesReducer = (state, action) => {
  switch (action.type) {
      case 'Like':
          if(state.clicked === "" ){
            state.clicked = "Like"
            return {
              ...state, likes: state.likes+1
            }
          }
          if(state.clicked ==="Dislike"){
            state.clicked = ""
            return {
              ...state, likes: state.likes+1, dislikes: state.dislikes-1
            }
          }
          return state         
      case 'Dislike':
        if(state.clicked === "" ){
          state.clicked = "Dislike"
          return {
            ...state, dislikes: state.dislikes+1
          }
        }

        if(state.clicked ==="Like"){
          state.clicked = ""
          return {
            ...state, likes: state.likes-1, dislikes: state.dislikes+1
          }
        }
        return state
      
      default:
          return state
  }
}

function Task2() {

  const [state, dispatch] = useReducer(likesReducer, {likes:10, dislikes:5, clicked:""})
  return (
    <div className="task2Div">
      <h3>Task 2</h3>
      <div><FaThumbsUp onClick={()=>dispatch({type:"Like"})} />{state.likes}</div>
      <div className="dislike"><FaThumbsDown onClick={()=>dispatch({type:"Dislike"})} />{state.dislikes}</div>    
    
    </div>
  );
}

export default Task2;

/* Task 2
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, vartotojui leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
