

import React, { useState } from 'react';
import { FaBuildingLock } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { PiGraphBold } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import EmployeeList from "../patientdata"
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  const [isAgendaOpen, setAgendaOpen] = useState(false);
  const [isContabilidadOpen, setContabilidadOpen] = useState(false);
  const [isInformesOpen, setInformesOpen] = useState(false);
  const [isDocumentacionOpen, setDocumentacionOpen] = useState(false);

  const toggleDropdown = (setState) => {
    setState(prevState => !prevState);
  };

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
       <div className=' flex  items-center bg-gray-600 text-3xl w-full h-20 rounded-xl'>
       <div> <Image src={"/logo.png"} width={200} height={0} alt='dsad'></Image></div></div>
        <ul className="space-y-4">
<p className='mt-8 text-gray-500'>Menu</p>
  
<hr className='border-gray-500 '/>  
          <li className="opcion-con-desplegable bg-gray-600  p-2 rounded-xl">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleDropdown(setAgendaOpen)}
            >
              
              <div className="flex items-center ">
              
                <FaBuildingLock className='mr-2'></FaBuildingLock>
                <span>Patient</span>
              </div>
              {/* <IoIosArrowDown/> */}
            </div>
            {/* {isAgendaOpen && (
              <ul className="desplegable ml-4">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
               <IoIosArrowForward className='mr-2'/>
                    Gestión de citas
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                  <IoIosArrowForward className='mr-2'/>
                    Pólizas
                  </a>
                </li>
              </ul>
            )} */}
          </li>
          <li className="opcion-con-desplegable">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleDropdown(setContabilidadOpen)}
            >
              <div className="flex items-center">
              <VscGraph className='mr-2'/>
                <span>Request</span>
              </div>
              <IoIosArrowDown/>
            </div>
            {isContabilidadOpen && (
              <ul className="desplegable ml-4">
                <li>
                  <Link href="/component/forms/patientform" className="block p-2 hover:bg-gray-700 flex items-center">
                  <IoIosArrowForward className='mr-2'/>
                   Add request
                  </Link>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                  <IoIosArrowForward className='mr-2'/>
                    View request
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                  <IoIosArrowForward className='mr-2'/>
                    
                  </a>
                </li> */}
              </ul>
            )}
          </li>
          {/* <li className="opcion-con-desplegable">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleDropdown(setInformesOpen)}
            >
              <div className="flex items-center">
              <PiGraphBold className='mr-2'/>
                <span>Informes</span>
              </div>
              <IoIosArrowDown/>
            </div>
            {isInformesOpen && (
              <ul className="desplegable ml-4">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                  <IoIosArrowForward className='mr-2'/>
                    Presupuestos
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                  <IoIosArrowForward className='mr-2'/>
                    Informe médico
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="opcion-con-desplegable">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => toggleDropdown(setDocumentacionOpen)}
            >
              <div className="flex items-center">
              <GrDocumentText className='mr-2'/>
                <span>Documentación</span>
              </div>
              <IoIosArrowDown/>
            </div>
            {isDocumentacionOpen && (
              <ul className="desplegable ml-4">
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                  <IoIosArrowForward className='mr-2'/>
                    Firmas pendientes
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                  <IoIosArrowForward className='mr-2'/>
                    Documentos
                  </a>
                </li>
              </ul>
            )}
          </li> */}
        </ul>
      </nav>
    </aside>
  );
};

const Navbar = () => (
  <nav className="bg-blue-500 p-4 flex items-center justify-between">
    <div>
      <h1 className="text-white text-xl font-semibold">SALUD 360</h1>
    </div>
    <div className="flex items-center space-x-4">
      <span className="text-white">Bienvenido</span>
      <i className="fas fa-user-circle text-white text-2xl"></i>
    </div>
  </nav>
);

const DashboardPage = () => (
  <div className="flex">
    <Sidebar />
    <main className="container mx-auto p-4 flex-1">
        <EmployeeList></EmployeeList>
      {/* <h1 className="text-2xl font-bold mb-4">¡Bienvenido al CRM de Mi Empresa!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum commodi rem, praesentium, error aliquam porro et nulla placeat earum, libero sint molestias quis. Magni ipsa dignissimos ullam tempore magnam!</p> */}
    </main>
  </div>
);

export default DashboardPage;
