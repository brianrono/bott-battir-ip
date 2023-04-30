function BotCard({ bot }) {
    return (
        <div className="botCard">
            <img src={bot.avatar_url} alt={`${bot.name} avatar`} />
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <button onClick={() => handleArmyBots(bot)}>Enlist</button>
        </div>
        );
    }

    