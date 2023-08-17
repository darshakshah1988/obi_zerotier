
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Dashboard } from "../components/Dashboard";
import AllNetworks from "../components/AllNetworks";
import NetworkDetails from "../components/NetworkDetails";

function AppRouter() {
    

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/dashboard' element={<Dashboard/>} />
                <Route exact path='/dashboard/networks' element={<AllNetworks />} />
                <Route exact path='/dashboard/network/:networkId' element={<NetworkDetails />} />
            </Routes>
        </Router>
    )
}


export default AppRouter