import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Sidebar } from './Sidebar';
import './style.css'
import { Footer } from './Footer';
import axios from 'axios';
import DeviceStatus from './DeviceStatus';

function NetworkDetails() {
    const { networkId } = useParams();
    const [netDetails, setDetails] = useState({});
    
    useEffect(() => {
        getNetDetail();
    },[]);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       [name]: value,
    //     }));
    //   };

    const getNetDetail = async () => {
        try {
            const response = await axios.post("http://localhost:3001/api/network",{data: networkId});
            
            
            setDetails(response.data);

        } catch(error) {
            //console.log("API error:",error);
        }
    }

    const handleExit = async () => {
        try {
            const response = await axios.post("http://localhost:3001/api/leave/network",{data: networkId});
            if(response.data.result)
            {
                alert("network disconnected");
                window.location.href = '/dashboard';
            }
            else{
                alert("please try again later");
            }
        } catch(error) {

        }
    }
  return (
    <>
        <Sidebar />
        <div className='cardContainer'>
            
            <table style={{"width":"400px","height":"500px"}}>
                
                <tr>
                    <th style={{"background":"black", "color":"white"}}>Details({networkId})</th>
                    <th style={{"background":"black", "color":"white"}}></th>
                </tr>
                <tr>
                    <td>allowDNS</td>
                    <td>{netDetails.allowDNS ? (<p>True</p>) : (<p>False</p>)}</td>
                </tr>
                <tr>
                    <td>allowDefault</td>
                    <td>{netDetails.allowDefault ? (<p>True</p>) : (<p>False</p>)}</td>
                </tr>
                <tr>
                    <td>allowGlobal</td>
                    <td>{netDetails.allowGlobal ? (<p>True</p>) : (<p>False</p>)}</td>
                </tr>
                <tr>
                    <td>allowManaged</td>
                    <td>{netDetails.allowManaged ? (<p>True</p>) : (<p>False</p>)}</td>
                </tr>
                <tr>
                    <td>bridge</td>
                    <td>{netDetails.bridge ? (<p>True</p>) : (<p>False</p>)}</td>
                </tr>
                <tr>
                    <td>broadcastEnabled</td>
                    <td>{netDetails.broadcastEnabled ? (<p>True</p>) : (<p>False</p>)}</td>
                </tr>
                <tr>
                    <td>dhcp</td>
                    <td>{netDetails.dhcp ? (<p>True</p>) : (<p>False</p>)}</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>{netDetails.id}</td>
                </tr>
                <tr>
                    <td>mac</td>
                    <td>{netDetails.mac}</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>{netDetails.name}</td>
                </tr>
                <tr>
                    <td>status</td>
                    <td>{netDetails.status}</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>{netDetails.type}</td>
                </tr>
                
            </table>
            <button className="leavebutton" onClick={handleExit}>Leave Network</button>
        </div>
        <DeviceStatus />
        <Footer />
    </>
  )
}

export default NetworkDetails