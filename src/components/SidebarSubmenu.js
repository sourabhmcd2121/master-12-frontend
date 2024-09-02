import React from 'react'
import '../css/SidebarSubmenu.css'
import { Link } from 'react-router-dom'
export default function SidebarSubmenu() {

    


    return (
        <div>
            <div className="l-navbar" id="navbar">
                <nav classNameName="nav">
                    <div>
                        <div className="nav__brand">
                            <ion-icon name="menu-outline" className="nav__toggle" id="nav-toggle"></ion-icon>
                            <Link to="#" className="nav__logo">Bedimcode</Link>
                        </div>
                        <div className="nav__list">
                            <Link to="#" className="nav__link active">
                                <ion-icon name="home-outline" className="nav__icon"></ion-icon>
                                <span className="nav__name">Dashboard</span>
                            </Link>
                            <Link to="#" className="nav__link">
                                <ion-icon name="chatbubbles-outline" className="nav__icon"></ion-icon>
                                <span className="nav__name">Messenger</span>
                            </Link>

                            <div className="nav__link collapse">
                                <ion-icon name="folder-outline" className="nav__icon"></ion-icon>
                                <span className="nav__name">Projects</span>

                                <ion-icon name="chevron-down-outline" className="collapse__link"></ion-icon>

                                <ul className="collapse__menu">
                                    <Link to="#" className="collapse__sublink">Data</Link>
                                    <Link to="#" className="collapse__sublink">Group</Link>
                                    <Link to="#" className="collapse__sublink">Members</Link>
                                </ul>
                            </div>

                            <Link to="#" className="nav__link">
                                <ion-icon name="pie-chart-outline" className="nav__icon"></ion-icon>
                                <span className="nav__name">Analytics</span>
                            </Link>
                            <div className="nav__link collapse">
                                <ion-icon name="people-outline" className="nav__icon"></ion-icon>
                                <span className="nav__name">Team</span>

                                <ion-icon name="chevron-down-outline" className="collapse__link"></ion-icon>

                                <ul className="collapse__menu">
                                    <Link to="#" className="collapse__sublink">Data</Link>
                                    <Link to="#" className="collapse__sublink">Group</Link>
                                    <Link to="#" className="collapse__sublink">Members</Link>
                                </ul>
                            </div>
                            <Link to="#" className="nav__link">
                                <ion-icon name="settings-outline" className="nav__icon"></ion-icon>
                                <span className="nav__name">Settings</span>
                            </Link>
                        </div>
                    </div>

                    <Link to="#" className="nav__link">
                        <ion-icon name="log-out-outline" className="nav__icon"></ion-icon>
                        <span className="nav__name">Log Out</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
// /*===== EXPANDER MENU  =====*/
// const showMenu = (toggleId, navbarId, bodyId) => {
//     const toggle = document.getElementById(toggleId),
//         navbar = document.getElementById(navbarId),
//         bodypadding = document.getElementById(bodyId)

//     if (toggle && navbar) {
//         toggle.addEventListener('click', () => {
//             navbar.classList.toggle('expander')

//             bodypadding.classList.toggle('body-pd')
//         })
//     }
// }
// showMenu('nav-toggle', 'navbar', 'body-pd')

// /*===== LINK ACTIVE  =====*/
// const linkColor = document.querySelectorAll('.nav__link')
// function colorLink() {
//     linkColor.forEach(l => l.classList.remove('active'))
//     this.classList.add('active')
// }
// linkColor.forEach(l => l.addEventListener('click', colorLink))


// /*===== COLLAPSE MENU  =====*/
// const linkCollapse = document.getElementsByClassName('collapse__link')
// var i

// for (i = 0; i < linkCollapse.length; i++) {
//     linkCollapse[i].addEventListener('click', function () {
//         const collapseMenu = this.nextElementSibling
//         collapseMenu.classList.toggle('showCollapse')

//         const rotate = collapseMenu.previousElementSibling
//         rotate.classList.toggle('rotate')
//     });
// }
