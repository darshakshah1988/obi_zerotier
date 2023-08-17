import React from 'react'
import { Link } from 'react-router-dom';
import Connect from './Connect';

export function Networks(props) {
    const { data } = props;

    const popupData = {
        "title": "Connect to Network",
        "label": "Enter Network Id",
        "button": "Connect"
    };
    return (
        <>
        {data.map((item, index) => (
            <div className='card energy'>
            <div className='inner'>
            <div className='icon'></div>
            <div className='title'>
                <div className='text'>{item.name}</div>
            </div>
            <div className='measure'>Id: <Link to={`/dashboard/network/${item.nwid}`}>{item.nwid}</Link></div>
            <div className='measure'>Status: {item.status}</div>
            <div className='measure'>Type: {item.type}</div>
            <div className='measure'>mac: {item.mac}</div>
            <div className='measure'>PortDeviceName: {item.portDeviceName}</div>
            </div>
            </div>
        )) }
        <Connect data={popupData}/>
        </>
    )
}
