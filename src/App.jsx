import Player from "./components/Player.jsx"
import Gameboard from "./components/GameBoard.jsx";
import { useState } from "react"
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const INIT_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X'
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        currentPlayer = 'O'
    }
    return currentPlayer
}


function App() {
    const [gameTurns, setGameTurns] = useState([])
    // Concept : Lifting State Up
    // Lift the state up to the closest ancestor component that has access to all components that need to work with that state
    // here we need activePlayer in both Player component as well as in Gameboard

    // not using it because we can derive it with turns
    //const [activePlayer, setActivePlayer] = useState('X');
    let activePlayer = deriveActivePlayer(gameTurns)

    let gameBoard = INIT_GAME_BOARD;
    // NOTE: Deriving State
    for (const turn of gameTurns) {
        const { square, player } = turn
        const { row, col } = square
        gameBoard[row][col] = player
    }


    // for winner
    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol =
            gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol =
            gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol =
            gameBoard[combination[2].row][combination[2].column];

        if (
            firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol
        ) {
            winner = firstSquareSymbol;
        }
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    function handleSelectSquare(rowIndex, colIndex) {
        //change game turn
        //setActivePlayer(wasActivePlayer => wasActivePlayer === 'X' ? 'O' : 'X')
        setGameTurns((prevTurns) => {

            // NOTE: at the current point
            //let currentPlayer = 'X'
            //if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
            //    currentPlayer = 'O'
            //}
            const currentPlayer = deriveActivePlayer(prevTurns)

            const updatedTurns = [
                // NOT A GOOD IDEA BECAUSE activePlayer is dependent
                //{ square: { row: rowIndex, col: colIndex }, player: activePlayer }
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer
                },
                ...prevTurns,
            ]

            return updatedTurns
        })


        // NOW CHECK FOR WINNER

    }

    return (
        <>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} />}
                <Gameboard onSelectSquare={handleSelectSquare} board={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </>
    )
}

export default App
