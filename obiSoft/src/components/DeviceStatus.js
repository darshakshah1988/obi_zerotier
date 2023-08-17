import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

function DeviceStatus() {

    const [device, setDevice] = useState([]);

    useEffect(() => {
        getDeviceInfo();
    }, [])

    const getDeviceInfo = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/status');
            setDevice(response.data);
        } catch (error) {
            console.error("API error: ", error);
        }
    }

    

    return (
        <>

            <div className="at-floating-card">
                { device.online ? (
                    <div className="at-floating-card__thumbnail">
                    <img alt="online" src="https://e7.pngegg.com/pngimages/136/88/png-clipart-traffic-light-green-light-green-circle-blue-color.png" />
                    </div>
                ) : (
                    <div className="at-floating-card__thumbnail">
                    <img alt="offline" src="https://w7.pngwing.com/pngs/150/578/png-transparent-traffic-light-computer-icons-red-red-light-color-light-traffic-thumbnail.png" />
                    </div>
                )}
                <div className="at-floating-card__content">
                    <h2 className="at-floating-card__title">Your Address: {device.address}</h2>
                    {/* <h3 className="at-floating-card__sub-title">Prot Mapping: { device.config.settings.portMappingEnabled ? (<b>Yes</b>) : (<b>No</b>) }</h3> */}
                    {/* <p className="at-floating-card__description">Primary Port: { device.config.settings.primaryPort ? (<b>-</b>):(<b>{device.config.settings.primaryPort}</b>) } </p> */}
                    <p className="at-floating-card__description">version: { device.version } </p>
                    {/* <div className="at-floating-card__footer">
                        <a href="https://andytran.me">Website</a>
                        <span> &middot; </span>
                        <a href="https://facebook.com/itsandytran">Facebook</a>
                        <span> &middot; </span>
                        <a href="https://twitter.com/helloandytran">Twitter</a>
                        <span> &middot; </span>
                        <a href="https://codepen.io/andytran">CodePen</a>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default DeviceStatus