import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {

    return (
        <>
            <main>
                <div id="game-container">
                    <ol id="players">
                        <Player initialName="Player 1" icon="X" />
                        <Player initialName="Player 2" icon="O" />
                    </ol>
                    <GameBoard />
                </div>
            </main>

        </>
    )
}

export default App
