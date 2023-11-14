import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {

    // Concept : Lifting State Up
    // Lift the state up to the closest ancestor component that has access to all components that need to work with that state
    // here we need activePlayer in both Player component as well as in Gameboard
    
    const [activePlayer, setActivePlayer] = useState('X')

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    }

    return (
        <>
            <main>
                <div id="game-container">
                    <ol id="players" className="highlight-player">
                        <Player initialName="Player 1" icon="X" isActive={activePlayer === 'X'} />
                        <Player initialName="Player 2" icon="O" isActive={activePlayer === 'O'} />
                    </ol>
                    <GameBoard activePlayer={activePlayer} onSelectSquare={handleSelectSquare} />
                </div>
            </main>
        </>
    )
}

export default App
