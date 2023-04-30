import React, { useEffect, useState } from "react";
import Botcollection from "./Components/BotCollection";
import YourBotArmy from "./Components/YourBotArmy";
import './App.css';


function App() {
  const url = 'http://localhost:3000/bots'
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);

  function BotCard({ bot, handleArmyBots }) {
    return (
      <div className="botCard">
        <img src={bot.avatar_url} alt={`${bot.name} avatar`} />
        <h3>{bot.name}</h3>
        <p>{bot.catchphrase}</p>
        <button onClick={() => handleArmyBots(bot)}>Enlist</button>
      </div>
    );
  }

  function handleArmyBots(bot) {
    setArmyBots([...armyBots, bot]);
  }

  function deleteArmyBot(bot) {
    const filteredBots = armyBots.filter((element) => {
      return element.id !== bot.id;
    })

    setArmyBots(filteredBots);
  }

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setBots(res)
      })
    .catch(err => console.log(err.message))
  }, [])

  return (
    <div>
      <YourBotArmy armybots={armyBots} deleteArmyBot={deleteArmyBot} />
      <section className='botCollection'>
        {bots.map((element) => {
          return <Botcollection key={element.id} bot={element} handleArmyBots={handleArmyBots}/>
        })}
      </section>
      <section className='botCollections'>
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleArmyBots={handleArmyBots} />
        ))}
      </section>
    </div>
  );
}

export default App;