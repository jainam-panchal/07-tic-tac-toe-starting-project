export default function Gameboard({ onSelectSquare, board }) {

    //const [gameBoard, setGameBoard] = useState(INIT_GAME_BOARD)
    //function handleSelectSquare(rowIndex, colIndex) {
    //    setGameBoard((prevGameBoard) => {
    //        const updatedGameBoard = [...prevGameBoard.map(row => [...row])]

    // NOTE: Update Object-State Immutably

    // prevGameBoard[rowIndex][colIndex] = "X"       <----- Do not do this
    // return prevGameBoard
    // This would update the old value immediately before scheduling 
    // REASON: Objects and arrays are reference values in Js
    // You should therefore not mutate them directly - instead create a deep copy first 

    // DO THIS.. Create first deep copy and then update it

    //        updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol
    //        return updatedGameBoard
    //    })
    //    onSelectSquare()
    //}


    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
} 