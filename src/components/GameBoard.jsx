import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function Gameboard({ activePlayer, onSelectSquare }) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {

            // NOTE: Update Object-State Immutably

            // prevGameBoard[rowIndex][colIndex] = "X"       <----- Do not do this
            // return prevGameBoard
            // This would update the old value immediately before scheduling 
            // REASON: Objects and arrays are reference values in Js
            // You should therefore not mutate them directly - instead create a deep copy first 


            // DO THIS.. Create first deep copy and then update it
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex][colIndex] = activePlayer;
            return updatedBoard
        })

        onSelectSquare()
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {
                            row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{gameBoard[rowIndex][colIndex]}</button>
                                </li>
                            ))
                        }
                    </ol>
                </li>
            ))}
        </ol>
    )

}