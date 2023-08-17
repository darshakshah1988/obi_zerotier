import React, { useState } from 'react'
import './float.css';
import Popup from './Popup';
import axios from 'axios';

function Connect(props) {
    const { data } = props;
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [networkId, setNetworkId] = useState();
    const [networkstatus, setNetworkStatus] = useState([]);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleSubmit = async(e) => {
        try {
            const response = await axios.post("http://localhost:3001/api/network",{data:networkId});
            setNetworkStatus(response.data);
            if(response.status == 200)
            {
                alert("connection established");
                window.location.href = '/dashboard/network/'+networkId;
            }
            else {
                alert("connection can not established ! please try again later");
            }
        } catch(error) {
            console.error("API error",error);
            e.preventDefault();
        }
        
    }

    return (
        <>
            <div class="btn-wrap">
                <a class="floating-btn" href="javascript:void(0)" onClick={openPopup}>Connect</a>
                <div class="shadow"></div>
            </div>
            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <h2>{data.title}</h2>
                <form style={{ "width": "100%", "padding": "5%", "display": "flex", "flex-direction": "column", "justify-content": "center", "alignItems": "center" }}>
                    <label for="ip" style={{ "font-weight": "bold" }}>{data.label}</label>
                    <input type="text" id="ip" name="ip" placeholder={data.label} value={networkId} onChange={(e) => setNetworkId(e.target.value)} style={{ "padding": "10px", "width": "300px" }} />
                    <button type="button" style={{ "width": "300px", "padding": "5px", "margin-top": "5px" }} onClick={handleSubmit}>{data.button}</button>
                </form>
            </Popup>
        </>
    )
}

export default Connect