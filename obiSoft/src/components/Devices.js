import React from 'react'

export function Devices(props) {
    
    const { data } = props;
    return (
        <>
            
            <div className='card temp'>
            <div className='inner'>
            <div className='icon'></div>
            <div className='title'>
                <div className='text'>Devices</div>
            </div>
            <div className='number'>{data.length}</div>
            <div className='measure'>Nos</div>
            </div>
        </div>
        </>
    )
}
