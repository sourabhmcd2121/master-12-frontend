



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from '../src/components/Login';
// import Dashboard from '../src/components/Dashboard';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/" element={<Login />} /> {/* Default route */}
//             </Routes>
//         </Router>
//     );
// };

// export default App;


// Filename - App.js

import React from 'react'
//import Login from './pages/Login'
import AppRouter from './pages/AppRouter'
//import SidebarSubmenu from './components/SidebarSubmenu'
//import Footer from './pages/Footer';
//import Header from './components/Header';
//import Home from './components/Home';


export default function App() {


    return (
        <div>
        
            {/* <Login /> */}
             <AppRouter />
            <div className="container">
                {/* <SidebarSubmenu /> */}
               

            </div>
          

        </div>
    );
}

