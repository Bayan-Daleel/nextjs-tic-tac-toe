import {Dispatch,SetStateAction} from 'react';
type CellProps=
{
    cell:string;
    winningMessage:string;
    id:number;
    go:string;  
    cells:string[];
    setCell:Dispatch<SetStateAction<string[]>>;
    setGo:Dispatch<SetStateAction<string>>;
}

const Cell =({id, cell, winningMessage, cells,setCell,go,setGo}:CellProps)=>{
    const handleClick = (e)=>{ 
        if(winningMessage){
          return;
        }
        const nottaken = !cells[id];
        if(nottaken){
          if(go==="circle"){
           handelCellChange("circle");
           setGo("cross");
          }
          else if(go==="cross"){
            handelCellChange("cross");
            setGo("circle");
          }
          }
        }
        const  handelCellChange = (cellToChange:string)=>{
          let copyCells=[...cells];
          copyCells[id] = cellToChange;
          setCell(copyCells);
          
        };
    //console.log(id);
  
  return <div className="square" onClick={handleClick}>
    <div className={cell}>{cell ? (cell ==="circle"?"O":"X"):""}</div>
  </div>
    }

export default Cell;

