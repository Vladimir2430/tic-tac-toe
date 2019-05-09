module.exports = class TicTacToe {
  constructor() {
    this.currentPlayerSymbol = 'x';
    this.winner= null;
    this.isWin = false;
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]

  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.field[rowIndex][columnIndex]) {
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol === 'x' ? this.currentPlayerSymbol  = 'o' : this.currentPlayerSymbol = 'x';
    }
  }

  isFinished() {
    this.isWin = ((this.field[0][0] === this.field[0][1]) && (this.field[0][1] === this.field[0][2]) && this.field[0][2] !== null) ||
                 ((this.field[1][0] === this.field[1][1]) && (this.field[1][1] === this.field[1][2]) && this.field[1][2] !== null) ||
                 ((this.field[2][0] === this.field[2][1]) && (this.field[2][1] === this.field[2][2]) && this.field[2][2] !== null) ||
                 ((this.field[0][0] === this.field[1][0]) && (this.field[1][0] === this.field[2][0]) && this.field[2][0] !== null) ||
                 ((this.field[0][1] === this.field[1][1]) && (this.field[1][1] === this.field[2][1]) && this.field[2][1] !== null) ||
                 ((this.field[0][2] === this.field[1][2]) && (this.field[1][2] === this.field[2][2]) && this.field[2][2] !== null) ||
                 ((this.field[0][0] === this.field[1][1]) && (this.field[1][1] === this.field[2][2]) && this.field[2][2] !== null) ||
                 ((this.field[0][2] === this.field[1][1]) && (this.field[1][1] === this.field[2][0]) && this.field[2][0] !== null);
    return this.isWin || this.noMoreTurns();
  }

  getWinner() {
    if (this.isFinished() && this.isWin)
      return this.currentPlayerSymbol === 'x' ? 'o' : 'x';
      return null;
  }

  noMoreTurns() {
    for(let i of this.field) {
      if(i.includes(null)) return false;
    }
    return true;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}
