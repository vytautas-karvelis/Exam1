import React, {useContext} from 'react';
import { UserContext} from './Task6'



function CompB() {

  const userContext = useContext(UserContext)
  const count = userContext.count
  let setCount = userContext.setCount
  return (
    <div>
    <h3>CompB</h3>
      <button className="btn6" onClick={()=>setCount(count+10)}>Increase 10</button>
      <button className="btn6" onClick={()=>setCount(count-10)}>Decrease 10</button>
    </div>
  );
}

export default CompB;
