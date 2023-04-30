import React from 'react'

const Botcollection = ({bot, handleArmyBots}) => {
    return (
        <div>
            <div className='singleBot' onClick={()=> handleArmyBots(bot)}>
                <img src={bot.avatar_url} alt='bot' />
                <h3>{bot.name}</h3>
            </div>
        </div>
    )
}

export default Botcollection