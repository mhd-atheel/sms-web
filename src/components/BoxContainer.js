import React from 'react'
import '../css/BoxContainer.css'

const BoxContainer = ({ name, count, color }) => {
    const style =
    {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '50px',
        fontSize: '40px',
        paddingBottom: '40px',
    };

  
    return (
        <div className='boxContainer' style={{ backgroundColor: color }}>
            
                <h5 style={{ paddingTop: '10px' }}>{name}</h5>
                <h5 style={style}>{name==='Donations'?`$${count}`:count}</h5>
        </div>
    )
}

export default BoxContainer