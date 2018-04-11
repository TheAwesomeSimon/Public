const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    var board = [];
    for (let row = 0; row < numberOfRows; row++) {
        rows = [];
        for (let column = 0; column < numberOfColumns; column++) {
            rows.push(' ');
        };
        board.push(rows);
    };
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    var board = [];
    for (let row = 0; row < numberOfRows; row++) {
        rows = [];
        for (let column = 0; column < numberOfColumns; column++) {
            rows.push(null);
        };
        board.push(rows);
    };
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        //possible to place bomb on top of bomb
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (board[randomRowIndex][randomColumnIndex] != 'B') {
            board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced++;
        } 
    };
    
    return board;
};

const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board:');
printBoard(playerBoard);
console.log('Bomb Board:');
printBoard(bombBoard);