
////////////////////////////////////////multilavel list/////////

import React, { useState } from 'react';
import '../assets1/css/styles.css'
import '../assets1/css/Headers.css'
import { Nav, Navbar } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaTachometerAlt, FaUser, FaCogs, FaProjectDiagram, FaChartLine, FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';




function DynamicSidebar(props) {


    const [selectedOption, setSelectedOption] = useState('option1');
    const [openItems, setOpenItems] = useState({});

    const toggleMenuItem = (label) => {
        setOpenItems((prevState) => ({
            ...prevState,
            [label]: !prevState[label],
        }));
    };

    const renderMenuItems = (items) => {
        return items.map((item, index) => (
            <div className='' key={index} style={{ paddingLeft: item.subItems ? '10px' : '20px' }}>
                <Nav.Item
                    onClick={() => item.subItems && toggleMenuItem(item.label)}
                    style={{ cursor: item.subItems ? 'pointer' : 'default' }}
                >
                    <div className="d-flex align-items-center">
                        {item.icon}
                        <span className="ms-2">{item.label}</span>
                        {item.subItems && (
                            <span className="ms-auto">
                                {openItems[item.label] ? <FaChevronUp /> : <FaChevronDown />}
                            </span>
                        )}
                    </div>
                </Nav.Item>
                {item.subItems && (
                    <TransitionGroup>
                        {openItems[item.label] && (
                            <CSSTransition key={item.label} timeout={300} classNames="menu-item">
                                <Nav className="flex-column ms-4">
                                    {renderMenuItems(item.subItems)}
                                </Nav>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                )}
            </div>
        ));
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setOpenItems({}); // Reset opened items when changing options
    };

    return (
        <div style={{ display: 'flex', marginLeft: '120px' }}>
            {/* Sidebar */}
            <Navbar bg="light" expand="lg" className="flex-column">
                <Navbar.Brand>Multi-Level Menu</Navbar.Brand>
                <Nav className="flex-column">
                    {renderMenuItems(menuOptions[selectedOption])}
                </Nav>
            </Navbar>

            {/* Main Content */}
            <div style={{ marginLeft: '20px', padding: '10px' }}>
                <h3>Main Content Area</h3>
                <select className="form-select" onChange={handleOptionChange} value={selectedOption}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <p>You have selected: {selectedOption}</p>
            </div>
        </div>
    );
}

export default DynamicSidebar;


const menuOptions = {
    option1: [
        {
            label: 'Dashboard',
            link: '/dashboard',
            icon: <FaTachometerAlt />,
        },
        {
            label: 'User Management',
            icon: <FaUser />,
            subItems: [
                {
                    label: 'Users',
                    link: '/prodata',
                    icon: <FaUser />,
                },
                {
                    label: 'Roles',
                    link: '/dataBass',
                    icon: <FaCogs />,
                }, {
                    label: 'Roles',
                    link: '/dataBass',
                    icon: <FaCogs />,
                }, {
                    label: 'Roles',
                    link: '/dataBass',
                    icon: <FaCogs />,
                },
            ],
        },
        {
            label: 'Settings',
            icon: <FaCogs />,
            subItems: [
                {
                    label: 'General',
                    link: '/settings/general',
                    icon: <FaCogs />,
                },
                {
                    label: 'Security',
                    link: '/settings/security',
                    icon: <FaCogs />,
                },
            ],
        },
    ],
    option2: [
        {
            label: 'Projects',
            icon: <FaProjectDiagram />,
            subItems: [
                {
                    label: 'Active Projects',
                    link: '/projects/active',
                    icon: <FaProjectDiagram />,
                },
                {
                    label: 'Archived Projects',
                    link: '/projects/archived',
                    icon: <FaProjectDiagram />,
                },
            ],
        },
        {
            label: 'Teams',
            icon: <FaCogs />,
            subItems: [
                {
                    label: 'Development',
                    link: '/teams/development',
                    icon: <FaCogs />,
                },
                {
                    label: 'Marketing',
                    link: '/teams/marketing',
                    icon: <FaCogs />,
                },
            ],
        },
    ],
    option3: [
        {
            label: 'Reports',
            icon: <FaFileAlt />,
            subItems: [
                {
                    label: 'Daily Reports',
                    link: '/reports/daily',
                    icon: <FaFileAlt />,
                },
                {
                    label: 'Monthly Reports',
                    link: '/reports/monthly',
                    icon: <FaFileAlt />,
                },
            ],
        },
        {
            label: 'Analytics',
            link: '/analytics',
            icon: <FaChartLine />,
        },
    ],
};

