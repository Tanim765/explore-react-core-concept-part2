
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './user';
import Friends from './friends';

function App() {
  
  function handleClick(){
     alert('button clicked');
  }
  const handleClick2 =() =>{
    alert('button 2 clicked');
  }
  
  const addToFive =(num) =>{
    alert(num + 5);
  }
  return (
    <>
      
     <h3>React core concept 2</h3>
     <Friends></Friends>
      <Users></Users>
     <Counter></Counter>
     <Team></Team>
     

     {/* <button onclick="handleClick()">Click Me</button> */}

     <button onClick={handleClick}>Click Me</button>
      
      <button  onClick={handleClick2}>Click Me 2</button>

      <button onClick={() => {alert('third clicked')}}>Third</button>
      
      {/* hard one */}
      <button onClick={() => addToFive(5)}>Five</button>

    </>
  )
}

export default App
