import React ,{useState} from 'react';
import * as FaIcons from "react-icons/fa"
import {Link} from "react-router-dom";
import * as AiIcons from "react-icons/ai"
import * as BsIcons from 'react-icons/bs';
import * as Fa from "react-icons/fa";
export const SidebarData =
   [ {
        title:"Home",
        path:"/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    {
        title:"Customers",
        path:"/customers",
        icon: <BsIcons.BsPersonCircle/>,
        cName: "nav-text"
    },
    {
        title:"Transactions",
        path:"/transactions",
        icon: <Fa.FaMoneyBillAlt/>,
        cName: "nav-text"
    }
]
