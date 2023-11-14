export default function Player ({name, icon}) {
    return (
        <li>
            <span className="player">
                <span className="player-name">{name}</span>
                <span className="player-symbol">{icon}</span>
            </span>
            <button>Edit</button>
        </li>
    )
}