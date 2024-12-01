

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
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your submission logic here
    setIsOpen(false); // Close the modal after submission
  }

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
                <li  onClick={handleToggleModal}>
                  <Link href={"#"} className="block p-2 hover:bg-gray-700 flex items-center">
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
        <>
      {/* Modal toggle button */}
      {/* <button
       
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button> */}

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-50"
          aria-hidden="true"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Request
                </h3>
                <button
                  onClick={handleToggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                     
                    
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Name"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      
                      id="name"
                      
                     
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Email"
                      required
                    />
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="name"
                      id="name"
                     
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type Phone Number"
                      required
                    />
                  </div>
                 
                  {/* <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Request For ? / recommadation
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="">Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div> */}
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Request for?
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                     
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write description here"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                 Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
      </nav>
    </aside>
  );
};



const DashboardPage = () => {

 
  return(
  <div className="flex">
    
    <Sidebar />
    <main className="container mx-auto p-4 flex-1">
        <EmployeeList></EmployeeList>
      {/* <h1 className="text-2xl font-bold mb-4">¡Bienvenido al CRM de Mi Empresa!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nostrum commodi rem, praesentium, error aliquam porro et nulla placeat earum, libero sint molestias quis. Magni ipsa dignissimos ullam tempore magnam!</p> */}
    </main>
  </div>)
};

export default DashboardPage;
