import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-snakeladder',
  templateUrl: './snakeladder.component.html',
  styleUrl: './snakeladder.component.scss'
})
export class SnakeladderComponent implements OnInit {


  currentPlayer: string = 'Player 1';
  player1Position: number = 1;
  player2Position: number = 1;
  diceValue: number = 1;
  winner: string | null = null;
  snake: number[]=[14,17,95];

  board: number[][] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeBoard();
  }

  initializeBoard(): void {
    // Customize the board initialization based on your requirements
    for (let i = 0; i < 10; i++) {
      const row: number[] = [];
     // if(i%2!==0){
        //for(let j=9;j>=0;j--){
        //  row.push(i*10+j+1);
       // }
     // }
      // else{
       for (let j = 0; j < 10; j++) {
        row.push(i * 10 + j + 1);
       }
      this.board.push(row);
    }
  }

  rollDice(): void {
    if (this.winner) {
      return; // Game already won, no need to roll the dice
    }

    this.diceValue = Math.floor(Math.random() * 6) + 1;
    this.movePlayer(this.currentPlayer, this.diceValue);

    if (this.checkForWin(this.currentPlayer)) {
      this.winner = this.currentPlayer;
      console.log(this.currentPlayer);
    } else {
      this.switchPlayer();
    }
  }

  movePlayer(player: string, steps: number): void {
    const currentPlayerPosition = player === 'Player 1' ? this.player1Position : this.player2Position;

    // Move the player
    if (player === 'Player 1') {
      
       // this.player1Position+=(11-steps);
         this.player1Position += steps;
      
    } 
    else {
      this.player2Position += steps;
    }

    // Check for snakes and ladders
    this.player1Position = this.checkForSnakeAndLadder(this.player1Position);
    this.player2Position = this.checkForSnakeAndLadder(this.player2Position);
  }

  checkForSnakeAndLadder(position: number): number {
    // Add your snake and ladder logic here
    // For example:
     if (position === 14) {
      console.log( 'Snake: go back to position 4');
       return 4; 
        }
     else if (position === 7) {
      console.log('Ladder: climb to position 17');
     return 17; 
     
     }
     if(position===17){
      console.log('Snake : return to position 1');
      return 1;
     }
     else if(position===23){
      console.log('Ladder : move to 40');
      return 40;
     }
     else if(position==63){
      console.log('Ladder go to 93');
      return 93;
     }
     else if(position==95){
      console.log('Snake : go to 1');
      return 1;
     }
    return position;
  }

  checkForWin(player: string): boolean {
    // Add your win condition logic here
    // For example:
    if (player === 'Player 1' && this.player1Position >= 100) {
      alert("Player1 wins");
      return true;}
         // Player 1 wins}
     else if (player === 'Player 2' && this.player2Position >= 100) 
    {  alert('Player2 wins'); return true;} // Player 2 wins
    // }
    return false;
  }

  switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
  }
  isPlayerCell(rowIndex: number, columnIndex: number): boolean {
   // if((rowIndex==0||rowIndex==2||rowIndex==4||rowIndex==6||rowIndex==8)){
    return (
      (rowIndex * 10 + columnIndex + 1) === this.player1Position ||
      (rowIndex * 10 + columnIndex + 1) === this.player2Position
    );
  //}
    
    //  return((rowIndex*10+12-columnIndex)===this.player1Position||(rowIndex*10+12-columnIndex)==this.player2Position);
   


  }
}

  

