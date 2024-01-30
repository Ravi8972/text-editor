import React, {useState} from "react";

function App() {

  const [text,settext] = useState("");
  const [history,setHistory]= useState([]);

  function Undo(){
    if(history.length>0){
    let x = history[history.length-1];
    setHistory(history.slice(0,history.length-1));
    settext(x);
    }
  }


  return (
    <div className="App">
     <input type="Text"  value={text} onChange={e=> settext(e.target.value)}/>
     <button onClick={() =>{
      setHistory([...history, text]);
      settext("")
     }}>Append</button>
    <button onClick={Undo}> undo </button>

    <div>
      {history.map((item ,index) => <p key={index}>{item} {item}</p>) }
    </div>

    </div>
  );
}

export default App;
