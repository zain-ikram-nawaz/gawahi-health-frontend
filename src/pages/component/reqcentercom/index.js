import React,{useEffect,useState} from "react";


import Image from "next/image";
import Api from "../../config"


const ReqCenter = () => {
  const [data,setData]=useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${Api.USERS}requests`);
      const data = await response.json();
      setData(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="">
     
      <div className="flex gap-12 p-4 mt-4">
        <div className="bg-gray-200 w-3/12 p-5 space-y-4 rounded-xl">
          <Image
            src={"/request.png"}
            width={70}
            height={70}
            alt="patient"
          ></Image>

          <h2 className=" font-semibold">Total No of Request </h2>
          <p className="bg-gray-400  text-white px-4 py-[2px] text-2xl rounded-lg inline-block">
          {data?.length}
          </p>
        </div>
      </div>
      <div className="ml-4 mt-4">
        <h3 className="text-lg font-semibold text-slate-800 ">Patient List</h3>
        <p className="text-slate-500">Review each person before edit</p>
      </div>
      <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
          <div className="flex items-center justify-end">
            <div className="flex gap-2 shrink-0 sm:flex-row"></div>
          </div>
        </div>
        <div className="p-0">
          <table className="w-full mt-4 text-left table-auto min-w-max">
            <thead>
              <tr>
                {[
                  "User Name",
                  "Post",
                  "resquest for",
                  "responce",
                 
                ].map((header, index) => (
                  <th
                    key={index}
                    className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100"
                  >
                    <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      {header}
                      {header === "Member" && (
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
              {data?.map((employee, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <img
                        src={"/profile.png"}
                        alt={employee.firstName}
                        className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                      />
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-slate-700">
                          {employee.name}
                        </p>
                        <p className="text-sm text-slate-500">
                          {employee.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-slate-700">
                        {employee.field}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="text-sm text-slate-500">{employee.notes}</p>
                  </td>

                  {/* 
                  <td className="p-4 border-b border-slate-200">
                    <p className="text-sm text-slate-500">{employee.gender}</p>
                  </td>

                  <td className="p-4 border-b border-slate-200">
                    <p className="text-sm text-slate-500">
                      {employee.permanentAddress}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-200">
                    <p className="text-sm text-slate-500">
                      {employee.currentdate}
                    </p>
                  </td> */}
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M3 6h18M9 6v12M15 6v12M5 6l1-2h12l1 2M6 6h12v12H6z"
                            fill="none"
                            stroke="red"
                            stroke-width="2"
                          />
                        </svg>{" "}
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReqCenter;
