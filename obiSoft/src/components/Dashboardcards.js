import React, { useEffect, useState } from 'react'
import './style.css';
import { Footer } from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeviceStatus from './DeviceStatus';
import Connect from './Connect';

export function Dashboardcards(props) {
    const [data,setData] = useState([]);
    const [networks,setNetworks] = useState([]);

    useEffect(() => {
        getData();
        getNetworks();
    },[])

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/devices");
            setData(response.data);
        } catch(error) {
            console.error("API error:",error);
        }
        
    }

    const getNetworks = async () => {
        try {
            const response = await axios.get("http://localhost:3001/api/networks");
            setNetworks(response.data);
        } catch(error) {
            console.error("API error:",error);
        }
        
    }

    const popupData = {
        "title": "Connect to Network",
        "label": "Enter Network Id",
        "button": "Connect"
    };
    

    return (
        <>        
        <div className="cardContainer">
        <div className='card temp'>
            <div className='inner'>
            <div className='icon'></div>
            <div className='title'>
                <div className='text'>Devices</div>
            </div>
            <div className='number'><Link to="devices">{data.length}</Link></div>
            <div className='measure'>Nos</div>
            </div>
        </div>
        <div className='card energy'>
            <div className='inner'>
            <div className='icon'></div>
            <div className='title'>
                <div className='text'>Networks</div>
            </div>
            <div className='number'>
                <Link to="networks">{networks.length}</Link></div>
            <div className='measure'>Nos</div>
            </div>
            </div>    
        </div>
        <Connect data={popupData}/>
        <DeviceStatus />
        <Footer />
        </>        
        
    )
}
