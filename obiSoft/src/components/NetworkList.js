import React, { useEffect, useState } from 'react'
import { Networks } from './Networks'
import axios from 'axios';
import "./style.css";
function NetworkList() {
    const [networks, setNetworks] = useState([]);

    useEffect(() => {
        listNetworks()
    },[]);

    const listNetworks = async () => {
        try {
        const response = await axios.get("http://localhost:3001/api/networks");
        setNetworks(response.data);
    } catch(error) {
        console.error("API Error:",error);
        }
    }

  return (
    <div className="cardContainer">
    <Networks data={networks} />
    </div>
  )
}

export default NetworkList