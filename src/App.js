import './App.css';
import { useState } from 'react';

function App() {
  const [passType, setPassType] = useState("password");
  const [password, setPassword] = useState("");
  let menus = {
    Nykaa: ["Sub brand 1", "Sub brand 2"],
    Nike: ["Sub brand 3", "Sub brand 4"],
    Adidas: ["Sub brand 5", "Sub brand 6"],
  }
  const [menuOptions, setMenuOptions] = useState(Object.keys(menus));

  async function handleChange(e){
    setPassword(e.target.value)
    console.log(password)
  }
  async function toggle(){
    if(passType === "password") setPassType("text")
    else setPassType("password")
  }
  const handleMenuClick = (option)=>{
    Object.keys(menus).map(single=>{
      if(single === option){
        console.log(option,single)
        setMenuOptions(menus[option])
      }
      return 1;
    })
  }
  
  return (
    <div className="App">
      <h2>Form</h2>
      <div className='form'>
        <input type={passType} name={password} onChange={(e)=>handleChange(e)}/>
        <button onClick={toggle}>Toggle</button>
        <p></p>
        {menuOptions.map((option,index)=>(
          <button key={"menu"+index} onClick={(e)=>handleMenuClick(option)}>{option}</button>
        ))}
        <p></p>
        <button onClick={(e)=>setMenuOptions(Object.keys(menus))}>Main Menu</button>
      </div>
    </div>
  );
}

export default App;
