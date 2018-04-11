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

console.log(generatePlayerBoard(3,3));