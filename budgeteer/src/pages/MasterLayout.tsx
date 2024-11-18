import React from 'react'
import SideNav from '../components/navbar/SideNav';
import TopNav from '../components/navbar/TopNav';

const MasterLayout = () => {
  return (
    <>
        <div>
            <SideNav/>
            <TopNav/>
        </div>
    </>
  )
};

export default MasterLayout;