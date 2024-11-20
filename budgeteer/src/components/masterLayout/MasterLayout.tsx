import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../navbar/SideNav';
import TopNav from '../navbar/TopNav';

const MasterLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="master-layout">
      <SideNav />

      <div className="content-container">
        <TopNav 
          isCollapsed={isCollapsed}
          />
        
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MasterLayout;
