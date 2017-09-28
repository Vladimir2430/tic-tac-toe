class TicTacToe {
    constructor() {
        this.aaa='x';
        this.bbb=[
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]
        this.ccc=null;
        this.ddd=false;
    }

    getCurrentPlayerSymbol() {
        return this.aaa;
    }

    nextTurn(rowIndex, columnIndex) {
         if(!this.bbb[rowIndex][columnIndex]){
            this.field[rowIndex][columnIndex]=this.aaa;
            (this.aaa==='x')?this.aaa='o':this.aaa='x';
        }
    }

    isFinished() {
        this.ddd=((this.bbb[0][0]==this.bbb[0][1])&&(this.bbb[0][1]==this.bbb[0][2])&&this.bbb[0][2]!=null)||
            ((this.bbb[1][0]==this.bbb[1][1])&&(this.bbb[1][1]==this.bbb[1][2])&&this.bbb[1][2]!=null)||
            ((this.bbb[2][0]==this.bbb[2][1])&&(this.bbb[2][1]==this.bbb[2][2])&&this.bbb[2][2]!=null)||
            ((this.bbb[0][0]==this.bbb[1][0])&&(this.bbb[1][0]==this.bbb[2][0])&&this.bbb[2][0]!=null)||
            ((this.bbb[0][1]==this.bbb[1][1])&&(this.bbb[1][1]==this.bbb[2][1])&&this.bbb[2][1]!=null)||
            ((this.bbb[0][2]==this.bbb[1][2])&&(this.bbb[1][2]==this.bbb[2][2])&&this.bbb[2][2]!=null)||
            ((this.bbb[0][0]==this.bbb[1][1])&&(this.bbb[1][1]==this.bbb[2][2])&&this.bbb[2][2]!=null)||
            ((this.bbb[0][2]==this.bbb[1][1])&&(this.bbb[1][1]==this.bbb[2][0])&&this.bbb[2][0]!=null);
        return this.isWin||this.noMoreTurns();
    }

    getWinner() {
         if(this.isFinished()&&this.ddd)
            return this.aaa==='x'?'o':'x';
         return null;
    }

    noMoreTurns() {
        for(let el of this.bbb){
            if(el.includes(null)) return false; 
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns()&&!this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
         return this.bbb[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
