

import React, { useEffect } from "react";
import { useState,useRef } from "react";
import Api from "../../config"
import { toast } from "react-toastify";
import { useSelector ,useDispatch  } from "react-redux";


export default function Patientform() {
  const [loading, setLoading] = useState(false); 
  const formRef = useRef();
  const dispatch = useDispatch();
  const editData = useSelector((state) => state.editData.selectedPatient); 
  const [logInfo,setLogInfo]=useState()

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [cnic, setCnic] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [doctorName, setDoctorName] = useState();
  const [diagnosis, setDiagnosis] = useState();
  const [treatment, setTreatment] = useState();
  const [currentAddress, setCurrentAddress] = useState();
  const [permanentAddress, setPermanentAddress] = useState();
  const [servicePrice, setServicePrice] = useState();
  const [notes, setNotes] = useState();

  const emptyField =()=>{
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhoneNumber("")
    setCnic("")
    setAge("")
    setGender("")
    setDoctorName("")
    setDiagnosis("")
    setTreatment("")
    setCurrentAddress("")
    setPermanentAddress("")
    setServicePrice("")
    setNotes("")
  }
  useEffect(() => {
    if (editData) {
      setFirstName(editData.firstName || "");
      setLastName(editData.lastName || "");
      setEmail(editData.email || "");
      setPhoneNumber(editData.phoneNumber || "");
      setCnic(editData.cnic || "");
      setAge(editData.age || "");
      setGender(editData.gender || "");
      setDoctorName(editData.doctorName || "");
      setDiagnosis(editData.diagnosis || "");
      setTreatment(editData.treatment || "");
      setCurrentAddress(editData.currentAddress || "");
      setPermanentAddress(editData.permanentAddress || "");
      setServicePrice(editData.servicePrice || "");
      setNotes(editData.notes || "");
    }
  }, [editData]);
  const handleSubmit =async (event) => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phoneNumber === "" ||
      cnic === "" ||
      age === "" ||
      gender === "" ||
      doctorName === "" ||
      diagnosis === "" ||
      treatment === "" ||
      currentAddress === "" ||
      permanentAddress === "" ||
      servicePrice === "" ||
      notes === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }
    event.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("firstName",firstName)
    formData.append("lastName",lastName)
    formData.append("email",email)
    formData.append("phoneNumber",phoneNumber)
    formData.append("cnic",cnic)
    formData.append("age",age)
    formData.append("gender",gender)
    formData.append("doctorName",doctorName)
    formData.append("diagnosis",diagnosis)
    formData.append("treatment",treatment)
    formData.append("currentAddress",currentAddress)
    formData.append("permanentAddress",permanentAddress)
    formData.append("servicePrice",servicePrice)
    formData.append("notes",notes)

    const data = Object.fromEntries(formData);
        const body = JSON.stringify({
          data: data,
        })

        try {
          let res;
          let result;
      
          if (editData?.documentId) {
            // Update existing patient data
            res = await fetch(`${Api.USERS}patients/${editData.documentId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: body,
            });
            result = await res.json();
          } else {
            // Create new patient data
            res = await fetch(`${Api.USERS}patients`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: body,
            });
            result = await res.json();
          }
      
          if (res.ok) {
            toast.success("Form Submitted Successfully!", {
              position: "top-center",
            });
            // emptyField()
          } else {
            toast.error(result.error.message, {
              position: "top-center",
            });
          }
        } catch (error) {
          toast.error('Error making request:', error, {
            position: "top-center",
          });
        } finally {
        
          setLoading(false); 
        }
      
        
      };


      // privacy 

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
        
        }
      }, []); // Empty dependency array ensures this runs only once
    
      useEffect(() => {
        if (logInfo) {
          console.log(logInfo.user.is_receptionist);
         
         
           // Access user information after state updates
        }
      }, [logInfo]);
    

  return (
    <>
   {loading ? (
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

  
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {editData ? "Update Patient Information" :"Add Patient Information"

        }  
        </h2>
       
      </div>
      <form ref={formRef}
        onSubmit={handleSubmit}
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
               value={firstName} 
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
               
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* lastName */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                 value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

           {/* current address */}
           <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 "
            >
              Current Address
            </label>
            <div className="mt-2.5">
              <input
                 value={currentAddress}
                onChange={(e) => {
                  setCurrentAddress(e.target.value);
                }}
                type="text"
                name="address"
                id="age"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
            {/* permenet address */}
            <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 "
            >
              Permenent Address
            </label>
            <div className="mt-2.5">
              <input
                 value={permanentAddress}
                onChange={(e) => {
                  setPermanentAddress(e.target.value);
                }}
                type="text"
                name="address"
                id="age"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 "
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
              value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* number */}
          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 "
            >
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                 value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                type="number"
                name="address"
                id="age"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* nic */}

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 "
            >
              CNIC
            </label>
            <div className="mt-2.5">
              <input
                 value={cnic}
                onChange={(e) => {
                  setCnic(e.target.value);
                }}
                type="number"
                name="address"
                id="age"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* age */}
          <div className="sm:col-span-2">
            <label
              htmlFor="Age"
              className="block text-sm font-semibold leading-6 "
            >
              Age
            </label>
            <div className="mt-2.5">
              <input
                 value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type="number"
                
                id="age"
                autoComplete="age"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* gender */}
          <div className="sm:col-span-2">
            <label htmlFor="Age" className=" text-sm font-semibold  ">
              Gender
            </label>
            <div className="mt-2.5 flex">
              <input
                 value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                type="radio"
                name="gender"
                id="gender"
                autoComplete="gender"
                className="block   rounded-md border-0 px-3.5 py-2 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <span className="ml-2">male</span>
            </div>
            <div className="mt-2.5 flex ">
              <input
              value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                type="radio"
                name="gender"
                id="gender"
                autoComplete="gender"
                className="block  rounded-md border-0 px-3.5 py-2 text-gray-900  sm:text-sm sm:leading-6"
              />
              <span className="ml-2">female</span>
            </div>
          </div>
         
          {!logInfo?.user.is_receptionist ? (
  <>
    <div className="sm:col-span-2">
      <label
        htmlFor="doctor-name"
        className="block text-sm font-semibold leading-6 "
      >
        Doctor Name
      </label>
      <div className="mt-2.5">
        <input
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          type="text"
          name="doctorName"
          id="doctor-name"
          autoComplete="doctor-name"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:col-span-2">
      <label
        htmlFor="diagnosis"
        className="block text-sm font-semibold leading-6 "
      >
        Diagnosis
      </label>
      <div className="mt-2.5">
        <input
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          type="text"
          name="diagnosis"
          id="diagnosis"
          autoComplete="diagnosis"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:col-span-2">
      <label
        htmlFor="treatment"
        className="block text-sm font-semibold leading-6 "
      >
        Treatment
      </label>
      <div className="mt-2.5">
        <input
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          type="text"
          name="treatment"
          id="treatment"
          autoComplete="treatment"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:col-span-2">
      <label
        htmlFor="service-price"
        className="block text-sm font-semibold leading-6 "
      >
        Service Price
      </label>
      <div className="mt-2.5">
        <input
          value={servicePrice}
          onChange={(e) => setServicePrice(e.target.value)}
          type="number"
          name="servicePrice"
          id="service-price"
          autoComplete="service-price"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>

    <div className="sm:col-span-2">
      <label
        htmlFor="notes"
        className="block text-sm font-semibold leading-6 "
      >
        Recommendation/Additional Notes
      </label>
      <div className="mt-2.5">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          name="notes"
          id="notes"
          rows="4"
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
      </div>
    </div>
  </>
) : (
  ""
)}

           

          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <button
                type="button"
                className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus:outline-indigo-600"
                role="switch"
                aria-checked="false"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                ></span>
              </button>
            </div>
            <label
              className="text-sm leading-6 text-gray-600"
              id="switch-1-label"
            >
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-red-600">
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
  <button
    type="submit"
    className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus:outline-none flex items-center justify-center"
  >
   
     {editData ? "update" : "Submit"}
   
  </button>
</div>

      </form>
    </div>
    </>
  );
}


