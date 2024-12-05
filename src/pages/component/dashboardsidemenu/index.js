import React, { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setValue } from "../../redux/viewreq";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogout } from "react-icons/ai";
import Api from "../../config"
import { toast } from "react-toastify";

export default function Leftdashboard() {
  const router =useRouter()
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value.value);
  const [isContabilidadOpen, setContabilidadOpen] = useState(false);
  const [loading, setLoading] = useState(false); 
  const [isOpen, setIsOpen] = useState(false);
  const [loading2, setLoading2] = useState(true); 
  const [buttonVal, setButtonVal] = useState("");
  const [logInfo,setLogInfo]=useState()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [field,setField]=useState()
  const [notes, setNotes] = useState();

  const toggleDropdown = (setState) => {
    setState((prevState) => !prevState);
  };

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickButton = (buttonId) => {
    setButtonVal(buttonId); // Set the clicked button as active
  };
  const handleSubmit =async (e) => {
    const payload = {
      data: {
        name,
        email,
        field,
        notes,
      },
    };
    
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${Api.USERS}requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(payload),
      });

      const result = await res.json();
      if(res.ok){
        
        toast.success("Form Submitted Successfully!", {
          position: "top-center"
        });
      }
   
     else{
  
      toast.error(result.error.message, {
        position: "top-center"
      });
     }
    } catch (error) {
      console.error('Error making POST request:', error);
    } finally {
      setLoading(false); // Hide loading button
    
    }
    setIsOpen(false);
  };


  const handleClick = (data) => {
    dispatch(setValue(data));
  };

  const LogOut = ()=>{
    localStorage.clear()
    toast.success("Logout Successfully!", {
      position: "top-center"
    });
    router.push("/")
  }

  useEffect(() => {
    const logData = localStorage.getItem("login");

    if (logData) {
      try {
        const parsedData = JSON.parse(logData); // Parse the JSON string
        setLogInfo(parsedData); // Update the state with the parsed object
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    }
    else{
      toast.error("Pleas Login First", {
        position: "top-center"
      });
      router.push('/')
    }
    setLoading2(false)
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    if (logInfo) {
      console.log(logInfo.user.is_admin); // Access user information after state updates
    }
  }, [logInfo,loading2]); 
  return (
    <>
       {loading2 ? (
  <div className="flex items-center justify-center min-h-screen">
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
) : (
  ""
)}
    
    <div className="bg-gray-800 flex">
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col justify-between">
      <nav>
        <div className="flex items-center bg-gray-600 text-3xl w-full h-20 rounded-xl">
          <div>
            <Image src={"/logo.png"} width={200} height={0} alt="dsad" />
          </div>
        </div>
        <ul className="space-y-2">
          <p className="mt-8 text-gray-500">Menu</p>
          <hr className="border-gray-500" />
          <li
            onClick={() => {
              handleClickButton("button1");
              handleClick("dashboard");
            }}
            className={`block p-2 flex items-center ${
              buttonVal === "button1"
                ? "bg-gray-600 rounded-lg text-white"
                : "opcion-con-desplegable p-2 rounded-xl"
            }`}
          >
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <FaHospitalUser className="mr-2" />
                <span>Patient</span>
              </div>
            </div>
          </li>
          <Link href={"#"}>
            <li className="opcion-con-desplegable">
              <div
                onClick={() => {
                  handleClickButton("button2");
                  toggleDropdown(setContabilidadOpen);
                }}
                className={`block p-2 flex items-center justify-between ${
                  buttonVal === "button2"
                    ? "bg-gray-600 rounded-lg text-white"
                    : "opcion-con-desplegable flex items-center justify-between p-2 cursor-pointer"
                }`}
              >
                <div className="flex items-center">
                  <IoMdPersonAdd className="mr-2" />
                  <span>Request</span>
                </div>
                <IoIosArrowDown />
              </div>
              {isContabilidadOpen && (
                <ul className="ml-4 mt-2 ">
                  <li
                    onClick={() => {
                      handleClickButton("button2");
                      handleToggleModal();
                    }}
                    className={`block p-2 flex items-center ${
                      buttonVal === "button2"
                        ? "bg-gray-600 rounded-lg text-white"
                        : "opcion-con-desplegable"
                    }`}
                  >
                    <button className="block  flex items-center">
                      <IoIosArrowForward className="mr-2" />
                      Add request
                    </button>
                  </li>
                  <li
                    onClick={() => {
                      handleClickButton("button4");
                    }}
                    className={`block flex items-center ${
                      buttonVal === "button4"
                        ? "bg-gray-600 rounded-lg text-white"
                        : "opcion-con-desplegable"
                    }`}
                  >
                    <button
                      onClick={() => {
                        handleClick("viewreq");
                      }}
                      href="#"
                      className="block p-2 flex items-center"
                    >
                      <IoIosArrowForward className="mr-2" />
                      {value ? "View Request" : "View Request"}
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </Link>
          {logInfo?.user?.is_admin ? <li
            onClick={() => {
              handleClickButton("button3");
              handleClick("register");
            }}
            className={`block p-2 flex ${
              buttonVal === "button3"
                ? "bg-gray-600 rounded-lg text-white"
                : "opcion-con-desplegable p-2 rounded-xl"
            }`}
          >
            <div className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <FaRegRegistered className="mr-2" />
                <span>Register</span>
              </div>
            </div>
          </li> :""}
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
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Email"
                required
              />
            </div>
            <select
id="dropdown"
value={field}
onChange={(e) => setField(e.target.value)}
className="block w-full border rounded-md p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
<option value="" disabled>
Select an option
</option>
<option value="Doctor">Doctor</option>
<option value="Receptionist">Receptionist</option>

</select>

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
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write description here"
              ></textarea>
            </div>
          </div>
        
          <button
            type="submit"
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
              {loading? <svg
aria-hidden="true"
className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
viewBox="0 0 100 101"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
fill="currentColor"
/>
<path
d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
fill="currentFill"
/>
</svg>:   <svg
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
            </svg>}
          
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
)}
</>
      </nav>
     
        <div className="mt-4">
          <button onClick={LogOut} className="text-white bg-gray-600 w-full p-3 rounded-lg flex items-center justify-center gap-4">
            <AiOutlineLogout className="-ml-6" /> Logout
          </button>
        </div>
     
    </aside>
  </div>
  </>
  );
}
