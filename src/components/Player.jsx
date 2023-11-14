import { useState } from 'react'

export default function Player({ initialName, icon, isActive }) {

    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)

    function handleEditClick() {
        //NOTE : Updating State Based On Old State
        //setIsEditing(!isEditing)                 <------ this is a bad practice
        //setIsEditing(wasEditing => !wasEditing)  <------ Best Practice
        setIsEditing((editing) => !editing)
    }

    function handleInputChange(e) {
        setPlayerName(e.target.value)
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">

                {/*Player Name*/}
                {isEditing ? <input type="text" required defaultValue={playerName} onChange={handleInputChange} /> : <span className="player-name">{playerName}</span>}

                {/* defaultValue={playerName} onChange={handleInputChange} <------- called Two Way Binding */}

                {/*Player Icon*/}
                <span className="player-symbol">{icon}</span>

            </span>

            {/* Edit/Save Button */}
            <button onClick={handleEditClick}  >{isEditing ? "Save" : "Edit"}</button>

        </li>
    )
}
