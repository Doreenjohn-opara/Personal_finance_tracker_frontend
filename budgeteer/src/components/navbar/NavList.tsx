import React from 'react';
import { GiWallet, GiTakeMyMoney, GiTrophyCup } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { HiMiniChartBar } from "react-icons/hi2";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { FaAward } from "react-icons/fa6";



export const navItems = [
    { 
        name: 'Dashboard', 
        icon: <MdDashboard className='nav-icon font-aeonik-bold'/> , 
        path: '/' 
    },
    { 
        name: 'Income & Expenses', 
        icon:<GiTakeMyMoney/>, 
        path: '/expenses' 
    },
    { 
        name: 'Budgets', 
        icon: <GiWallet className='nav-icon font-aeonik-bold'/>, 
        path: '/budgets' 
    },
    { 
        name: 'Analytics', 
        icon: <HiMiniChartBar className='nav-icon font-aeonik-bold'/>, 
        path: '/analytics' 
    },
    { 
        name: 'Achievements', 
        icon: <GiTrophyCup />, 
        path: '/achievements' 
    },
    { 
        name: 'Streaks', 
        icon: <FaAward />, 
        path: '/streaks' 
    },
  ];

  export const bottomNavItems = [
    {
        name: 'Settings', 
        icon: <IoSettings />, 
        path: '/settings' 
    },
    {
        name: 'Help', 
        icon: <IoMdHelpCircle/>, 
        path: '/help' 
    },
    {
        name: 'Logout', 
        icon: <IoLogOut/>, 
        path: '/logout' 
    }
  ]