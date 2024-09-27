


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
//import RoutsPage from './layout/RoutsPage';
//import Home from './pages/Home';


import DynamicSidebar from './layout/DynamicSidebar';
import Header from './layout/Headers'
import { Row, } from 'react-bootstrap';
import Master from './pages/Master';


import CountryList from './components/CommanMaster/CountryList';
import AccessibilityBar from './layout/AccessibilityBar';
import CountryDataTable from './components/CommanMaster/CountryDataTable';
import MasterCountryMstGuid from './pages/MasterCountryMstGuid';
import CustomDataTable from './components/CommanMaster/CountryDataTable';





function App() {
  return (

    <>
      <AccessibilityBar />
      <Header />
      <>


        <Row className='' style={{ marginLeft: '170px', marginRight: '15px', marginTop: '10px' }}>
          <div>
          </div>
          <div>

            <Routes>
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/masterCounrtry" element={<MasterCountryMstGuid />} />


          
              <Route path="/CountryList" element={<CountryList />} />
              
              <Route path="/CustomDataTable" element={<CustomDataTable />} />



              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/master" element={<Master />} />
              <Route path="/CountryDataTable" element={<CountryDataTable />} />


            
              <Route path="/DynamicSidebar" element={<DynamicSidebar />} />

              CountryMstGuid
            </Routes>
          </div>
        </Row>
      </>
    </>
  );
}

export default App;




// import React, { useState } from 'react'
// import './App.css'

// import { Button } from 'react-bootstrap';



// export default function App() {







//   const purple = 'blue';

//   const [Bg, setBg] = useState(purple);

//   const ChangBg = () => {
//     // console.log('clicked')
//   }

//   return (
//     <>
//       <div className='App'>

//         <div className='App-header' style={{ backgroundColor: 'Bg' }}>


//           <Button onClick={ChangBg}>Clilck me</Button>
//         </div>
//       </div>
//     </>
//   );
// }




































