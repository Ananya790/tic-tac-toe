import React, {useState} from 'react';
import './App.css';



import { Board } from "./components/Board";
function App() {

  const WIN_CONDITIONS= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xplaying, setXPlaying] = useState(true);

  const [gameover, setgameover]= useState(false);

  const handleBoxClick=(boxIdx)=>{
    const updatedBoard= board.map((value, idx)=>{
      if(idx=== boxIdx){
        return xplaying === true? "X": "O" ;
      }
      else{
        return value;
      }
    })

   const winner = checkWinner(updatedBoard); 
   if(winner){
    if(winner === "O"){
     
      alert("o wins");
      setgameover(true);
    }
    else if(winner === "X"){
      
      alert("x wins");
      setgameover(true);
    }
   
   }
  
  setBoard(updatedBoard);
  setXPlaying(!xplaying);

}
const resetboard=()=>{
  setgameover(false);
  setBoard(Array(9).fill(null));
  setXPlaying(true);
}

const checkWinner = (board) => {
  for(let i=0;i<WIN_CONDITIONS.length;i++){
    const[x,y,z]= WIN_CONDITIONS[i];

    if(board[x]!=='' && board[y]!=='' && board[z]!==''){ 
    if(board[x] && board[x]===board[y] &&board[y]===board[z]){
      // //  alert("x wins");
      //  setgameover(true);
      // // console.log(board[x]);
      return board[x];
    }}
    // return null;
  }
  return null;

    };
  
    


 


return (
    <div className="App">
      <Board board={board} onClick={gameover? resetboard:handleBoxClick} />
      {gameover && (
        <div className="button-container">
        <button onClick={resetboard} className="reset-button">
          Reset Game
        </button>
        </div>
      )}
    </div>
  )
}

export default App;
