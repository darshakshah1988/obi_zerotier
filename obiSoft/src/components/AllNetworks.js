import React from 'react'
import { Sidebar } from './Sidebar'
import NetworkList from './NetworkList'
import "./style.css";
import { Footer } from './Footer';
import DeviceStatus from './DeviceStatus';

function AllNetworks() {
  return (
    <>
        <Sidebar />
        <NetworkList />
        <DeviceStatus />
        <Footer />

    </>
  )
}

export default AllNetworks