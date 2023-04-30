import React from 'react'

const YourBotArmy = ({armybots, deleteArmyBot}) => {
    return (
        <div>
        <div className='yourBotArmy' >
            {armybots.map(element => {
            return (
                <div className='singleArmyBot' onClick={()=> deleteArmyBot(element)}>
                <img src={element.avatar_url} alt='bot' />
                <h3>{element.name}</h3>
                </div>
            )
            })}
            
        </div>
        </div>
    )
}

export default YourBotArmy