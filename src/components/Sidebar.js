
// Filename - components/Sidebar.js

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { Button, Form } from 'react-bootstrap'
import { FaUser, } from "react-icons/fa";

const Nav = styled.div`
    background: #0a58ca;
    height: 58px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 1.5rem;
    font-size: 1.5rem;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #0a58ca;
    width: 230px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars
                            onClick={showSidebar}
                        />
                    </NavIcon>
                    <h5
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            color: "white",
                        }}
                    >
                        Master Data Management System
                    </h5>

                    <div className="p-2 ms-auto h6"></div>
                    <span>
                        <div className="p-2 ">
                        <Form.Select className='bg-grey'>
                            <option> Select Option </option>
                            <option value="MCD">MCD-MASTER</option>
                            <option value="PIMS-NEW">PIMS-NEW-MASTER</option>
                            <option value="PTR_UNI">PTR_UNI</option>
                               


                            <select id="tenantCode" class="form-control selectpicker select2-hidden-accessible" name="tenantCode" tabindex="-1" aria-hidden="true">
                                <option >Select</option>
                                <option value="MCD">MCD-MASTER</option>
                                <option value="PIMS-NEW">PIMS-NEW-MASTER</option>
                                <option value="PTR_UNI">PTR_UNI</option>



                            </select>
                            </Form.Select>
                        </div></span>
                    <span>
                        <div className="p-2 ">
                           
                          
                        </div>
                    </span>
                    <span
                        style={{
                            textAlign: "center",

                            color: "white",
                        }}
                    >
                        <Button variant="primary" className='inlined' type="submit">
                            Submit
                        </Button>

                    </span>
                    <span
                        style={{
                            textAlign: "center",
                            marginLeft: "200px",
                            marginRight: "32px",
                            color: "white",
                        }}
                    >
                        <Button variant="outline-info m-0"><FaUser /> Raj Kumar</Button>
                    </span>
                </Nav>


                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose
                                onClick={showSidebar}
                            />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                />
                            );
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
