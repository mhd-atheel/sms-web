import React from 'react'
import '../css/BoxContainer.css'

const StudentContainer = ({ name, count, color }) => {
    const style =
    {
        display: 'flex',
        justifyContent: 'center',
        paddingRight: '0px',
        paddingLeft: '0px',
        fontSize: '40px',
        paddingBottom: '40px',
        textAlign: 'center'
    };
    const boxContainer =
    {
        height: '105px',
        width: '13%',
        backgroundColor: 'brown',
        borderRadius: '25px',
        backgroundColor: color
    };

    const h1 = {
        fontSize: '24px',
        color: 'white',
        fontWeight: 'bolder',
        paddingLeft: '0px',
        paddingTop: '10px',
        textAlign: 'center'
    }



    return (
        <div className='boxContainer' style={boxContainer}>
            
            <h5 style={h1}>{name}</h5>
            <h5 style={style}>{count}</h5>
        </div>
    )
}

export default StudentContainer