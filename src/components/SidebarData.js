// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
//import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "common master",
        path: "/about-us",
        // icon: <AiIcons.AiFillHome />,
        icon: <FaIcons.FaUser />,

        iconClosed: <RiIcons.RiAddLine />,
        iconOpened: <RiIcons.RiSubtractLine />,

        subNav: [
            {
                title: "Country",
                path: "/country",
                icon: <IoIcons.IoIosPaper />,
            }, {
                title: "CountryData",
                path: "/CountryDataTable",
                icon: <IoIcons.IoIosPaper />,
            },
          
        ],
    },
    // {
    //     title: "Services",
    //     path: "/services",

    //     icon: <IoIcons.IoIosPaper />,

    //     iconClosed: <RiIcons.RiAddLine />,
    //     iconOpened: <RiIcons.RiSubtractLine />,

    //     subNav: [
    //         {
    //             title: "Service 1",
    //             path: "/services/services1",
    //             icon: <IoIcons.IoIosPaper />,
    //             cName: "sub-nav",
    //         },
    //         {
    //             title: "Service 2",
    //             path: "/services/services2",
    //             icon: <IoIcons.IoIosPaper />,
    //             cName: "sub-nav",
    //         },
    //         {
    //             title: "Service 3",
    //             path: "/services/services3",
    //             icon: <IoIcons.IoIosPaper />,
    //         },
    //     ],
    // },



    // {
    //     title: "CantryDataTable",
    //     path: "/CantryDataTable",
    //     icon: <IoIcons.IoMdChatbubbles />,

    //     iconClosed: <RiIcons.RiAddLine />,
    //     iconOpened: <RiIcons.RiSubtractLine />,


    //     subNav: [

    //         {
    //             title: "DataTable",
    //             path: "/CantryDataTable",
    //             icon: <IoIcons.IoIosMap />,
    //             cName: "sub-nav",
    //         },

    //     ],
    // },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,


    },
];
