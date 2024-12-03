

import React from 'react';

import EmployeeList from "../component/dashboardbody"
import Leftdashboard from '../component/dashboardsidemenu';
import ReqCenter from '../component/reqcentercom';
import { useSelector } from 'react-redux';
import Register from '../component/registercom';





const DashboardPage = () => {
  const value = useSelector((state) => state.value.value);
 console.log(value)
  return(
  <div className="flex">
    
   <Leftdashboard/>
    <main className="container mx-auto p-4 flex-1">
    {value === "viewreq" ? (
  <ReqCenter />
) : value === "register" ? (
  <Register/>
) : (
  <EmployeeList />
)}
    </main>
  </div>)
};

export default DashboardPage;
