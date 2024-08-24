'use client'
import Cell from "./component/cell";
import { useEffect, useState } from "react";

export default function Home() {
  const [cells,setCell]=useState(["","","","","","","","",""])
  const [go,setGo]=useState("circle")
  const [winningMessage,setwinningMessage]= useState("");
  const winarray=
  [[0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

  useEffect(()=>{
   winarray.forEach((combo)=>{
     const circlewin=combo.every((cell)=>cells[cell] ==="circle");
     const crosslewin=combo.every((cell)=>cells[cell] ==="circle");
     if (circlewin){
      setwinningMessage("circle wins!");
     }
     else if(crosslewin){
      setwinningMessage("cross wins!");
     }
   });
  },[cells,winningMessage]);
  useEffect(()=>{
    if(cells.every((cell)=> cell !=="")&& winningMessage==""){
      setwinningMessage("Draw !");
    }
   },[cells ,winningMessage]);
     
    
  console.log(cells);
  return (
    <main >
      <div className="cell-container">
        {cells.map((cell,index)=>(
           <Cell cell={cell} 
           id={index}
            key={index}
             go={go} 
             setGo={setGo}
              cells={cells} 
             setCell={setCell}
             winningMessage={winningMessage}/>
        ))}
       </div>
        <div>{winningMessage}</div>
        {!winningMessage && <div>{`its now ${go} turn`}</div>}
    </main>
  );
}
