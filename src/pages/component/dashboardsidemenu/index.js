import React, { useState } from 'react'

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setValue } from '../../redux/viewreq';  
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { AiOutlineLogout } from "react-icons/ai";

export default function Leftdashboard() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value.value);
    const [isContabilidadOpen, setContabilidadOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [buttonVal,setButtonVal] = useState("")


    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phoneNumber: "",
      description: "",
    });
  
  
    const toggleDropdown = (setState) => {
      setState(prevState => !prevState);
    };


   
    
  
    const handleToggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickButton = (buttonId) => {
      setButtonVal(buttonId); // Set the clicked button as active
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form Data:", formData);
      // Add your submission logic here
      setIsOpen(false); // Close the modal after submission
    }
    const handleClick = (data) => {
        // Yeh wo value hai jo aap store karna chahte hain
      dispatch(setValue(data));  // Redux store mein value set kijiye
    };
  return (
  <div className='bg-gray-800'>
      <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
    
    <nav>
     <div className=' flex  items-center bg-gray-600 text-3xl w-full h-20 rounded-xl'>
     <div> <Image src={"/logo.png"} width={200} height={0} alt='dsad'></Image></div></div>
      <ul className='space-y-2'>
<p className='mt-8 text-gray-500'>Menu</p>

<hr className='border-gray-500 '/>  
        <li  onClick={() => {handleClickButton("button1");
           handleClick("dashboard")
        }}
          className={`block p-2 flex items-center ${
            buttonVal === "button1" ? "bg-gray-600 text-white" : "opcion-con-desplegable   p-2 rounded-xl  "
          }`}>
          <div
            className="flex items-center justify-between cursor-pointer"
          >
            
            <div className="flex items-center ">
            
              <FaHospitalUser  className='mr-2'></FaHospitalUser>
              <span>Patient</span>
            </div>
            {/* <IoIosArrowDown/> */}
          </div>
         
        </li>
       <Link href={"#"}>
       <li 
        className="opcion-con-desplegable">
          <div  onClick={() =>{ 
                handleClickButton("button2");
                toggleDropdown(setContabilidadOpen)
               
              }}
          className={`block p-2 flex items-center justify-between ${
            buttonVal === "button2" ? "bg-gray-600 text-white" : "opcion-con-desplegable flex items-center justify-between p-2 cursor-pointer"
          }`}
          
          
          >
            <div  className="flex items-center">
            <IoMdPersonAdd  className='mr-2'/>
              <span>Request</span>
            </div>
            <IoIosArrowDown/>
          </div>
          {isContabilidadOpen && (
            <ul className="desplegable ml-4">
              <li onClick={() =>{ 
                handleClickButton("button2");
                handleToggleModal()
              }}
          className={`block p-2 flex items-center ${
            buttonVal === "button2" ? "bg-gray-600 text-white" : "opcion-con-desplegable"
          }`}
              >
                <button className="block p-2  flex items-center">
                <IoIosArrowForward className='mr-2'/>
                Add request
                </button>
              </li>
              
              <li onClick={() =>{ 
                handleClickButton("button4");
    
              }}
          className={`block p-2 flex items-center ${
            buttonVal === "button4" ? "bg-gray-600 text-white" : "opcion-con-desplegable"
          }`}>
                <button onClick={()=>{handleClick("viewreq")}}  href="#" className="block p-2  flex items-center">
                <IoIosArrowForward className='mr-2'/>
                {value ? 'View Request' : 'View Request'}
                </button>
              </li>
              
              
            </ul>
          )}
        </li></Link>
       
                <li onClick={() =>{ 
                handleClickButton("button3");
                handleClick("register")
    
              }}
          className={`block p-2 flex  ${
            buttonVal === "button3" ? "bg-gray-600 text-white" : "opcion-con-desplegable p-2 rounded-xl"
          }`}>
          <div
            className="flex items-center justify-between   cursor-pointer"
          >
            
            <div className="flex items-center ">
            
              <FaRegRegistered className='mr-2'></FaRegRegistered>
              <span>Register</span>
            </div>
            {/* <IoIosArrowDown/> */}
          </div>
         
        </li>
       
      </ul>
      <>
    {/* Modal toggle button */}
   

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
  <div className='relative -top-14'>
      <Link href={"/"}>  <div className='  w-full flex items-end '><button className=' text-white bg-gray-600 w-full p-3 rounded-lg flex items-center justify-center gap-4'><AiOutlineLogout  className='-ml-6'/> Logout</button></div></Link>
      </div>
  </div>
  )
}
