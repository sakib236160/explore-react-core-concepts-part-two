import './App.css'
import Counters from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick(){
    alert('plz Click This Button');
  }

  const handleClick2=()=>{
    alert('plz Click This Button 2')
  }

  const addToFive=(num)=>{
    alert(num + 5)
  }
  return (
    <>
      <h2>React Core Concepts Part2</h2>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counters></Counters>


      {/* ...........................   button number 01 ............................. */}
      <button onClick={handleClick}>Click Me! 1</button>
      <br />
      <br />
      {/* ...........................   button number 02 ............................. */}
      <button onClick={handleClick2}>Click Me! 2</button>
      <br />
      <br />
      {/* ...........................   button number 03 ............................. */}
      <button onClick={()=>{
        alert('Third Click')
      }}>Third</button>
      <br />
      <br />
      {/* ............................   button number 04 ............................. */}
      <button onClick={()=>{addToFive(3)}}>Fourth</button>

    </>
  )
}

export default App
