
import React from 'react';

import "../App.css";
import Sidebar from '../components/Sidebar';
import CountryDataTable from '../components/common master/CountryDataTable'


import {Routes,Route,} from "react-router-dom";
import {OurAim,OurVision,} from "../pages/AboutUs";
import CountryList from '../components/common master/CountryList';


//import Login from '../pages/Login';
import {Services, ServicesOne, ServicesTwo, ServicesThree} from '../pages/Services';
function AppRouter() {
    return (
        <>
            <Sidebar />
            <div style={{marginLeft:'240px',marginTop:'25px'}}>

            
            <Routes>
             
                <Route
                    path="/country"
                    element={<CountryList />}
                />
                <Route
                    path="/CountryDataTable"
                    element={<CountryDataTable />}
                />
                <Route
                    path="/about-us/aim"
                    element={<OurAim />}
                />
                <Route
                    path="/about-us/vision"
                    element={<OurVision />}
                />

                <Route
                    path="/services"
                    element={<Services />}
                />
                <Route
                    path="/services/services1"
                    element={<ServicesOne />}
                />
                <Route
                    path="/services/services2"
                    element={<ServicesTwo />}
                />
                <Route
                    path="/services/services3"
                    element={<ServicesThree />}
                />





            </Routes>
            </div>
        </>
    );
}

export default AppRouter;





