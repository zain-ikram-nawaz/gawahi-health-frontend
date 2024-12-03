import React from 'react'
import Image from 'next/image';
import data from '../../data.json'
import { IoIosSearch } from "react-icons/io";

export default function Register() {
  return (
    <div className="">
    <div className='ml-6'>
            <h3 className="text-lg font-semibold text-slate-800 ">Register Center</h3>
            <p className="text-slate-500">Register Doctor or Receptionist</p>
          </div>
      <div className='flex gap-12 p-4 mt-4'>
       
          <div className='bg-gray-200 w-3/12 p-5 space-y-4 rounded-xl'>
          <Image src={"/recep.png"} width={100} height={100} alt='patient'></Image>

<h2 className=' font-semibold'>Total No of Receptionist </h2>
<p className='bg-gray-400  text-white px-4 py-[2px] text-2xl rounded-lg inline-block'>34  </p>

          </div>
          <div className='bg-gray-200 w-3/12 p-5 space-y-4 rounded-xl'>
          <Image src={"/patient.png"} width={100} height={100} alt='patient'></Image>

<h2 className=' font-semibold pt-4'>Total No of Doctors </h2>
<p className='bg-gray-400  text-white px-4 py-[2px] text-2xl rounded-lg inline-block'>55  </p>

          </div>
       
      </div>
   

    <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-slate-800 ">
            <p>Doctors and Patient List</p>
          </div>
          
          <div className="flex gap-2 shrink-0 ">
      <div>    <IoIosSearch className=' absolute text-3xl top-1 ml-1 text-gray-400'/> <input type="seacrh" placeholder='Search' className='search  border-2 h-full rounded'/></div>
            <button 
              className="flex select-none w-full items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="p-0">
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
          <tr>
{['Member', 'Number', 'age', 'gender', 'Permenent Address', 'Created Date', 'edit'].map((header, index) => (
  <th
    key={index}
    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100"
  >
    <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
      {header}
      {header === 'Member' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          ></path>
        </svg>
      )}
    </p>
  </th>
))}
</tr>

          </thead>
          <tbody>
           {data.map((employee, index) => (
              <tr key={index}>
                <td className="p-4 border-b border-slate-200">
                  <div  onClick={() => {
                          handleOpen(employee.id);
                        }} className="flex items-center gap-3">
                    <img
                      src={"/profile.png"}
                      alt={employee.firstName}
                      className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-slate-700">{employee.firstName}</p>
                      <p className="text-sm text-slate-500">{employee.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 border-b border-slate-200">
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-700">{employee.phoneNumber}</p>
                    <p className="text-sm text-slate-500">{employee.city}</p>
                  </div>
                </td>
              
                <td className="p-4 border-b border-slate-200">
                  <p className="text-sm text-slate-500">{employee.age}</p>
                </td>
                <td className="p-4 border-b border-slate-200">
                  <p className="text-sm text-slate-500">{employee.gender}</p>
                </td>
               
                <td className="p-4 border-b border-slate-200">
                  <p className="text-sm text-slate-500">{employee.permanentAddress}</p>
                </td>
                <td className="p-4 border-b border-slate-200">
                  <p className="text-sm text-slate-500">{employee.currentdate}</p>
                </td>
                <td className="p-4 border-b border-slate-200">
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.372 2.334l-.396 1.449a.75.75 0 00.927.927l1.449-.396a5.25 5.25 0 002.334-1.372l12.15-12.15z"></path>
                      </svg>
                    </span>
                  </button>
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
<path d="M3 6h18M9 6v12M15 6v12M5 6l1-2h12l1 2M6 6h12v12H6z" fill="none" stroke="red" stroke-width="2"/>
</svg>             </span>
                  </button>
                </td>
               
              </tr>
            ))
            
          }
          
          </tbody>
          {/* {isOpen && <Modal setIsOpen={setIsOpen} itemId={saveId} />} */}
        </table>
      </div>
    </div>
  </div>
  )
}
