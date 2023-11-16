import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing(wasEdited => !wasEdited)
    }
    function handleNameEdit(e) {
        setPlayerName(e.target.value)
    }

    let playerNameText = <span className="player-name">{playerName}</span>
    if (isEditing) {
        playerNameText = <input type="text" onChange={handleNameEdit} defaultValue={playerName} required />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerNameText}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}