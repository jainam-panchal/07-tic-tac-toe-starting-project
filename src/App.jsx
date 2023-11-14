import Player from "./components/Player"

function App() {

    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name="Player 1" icon="X" />
                    <Player name="Player 2" icon="O" />
                </ol>
            </div>
        </main>
    )
}

export default App
