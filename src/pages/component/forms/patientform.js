import React from "react";
import { useState } from "react";
import data from "../../data.json";
import { useRouter } from "next/router";

export default function Patientform() {
  const router = useRouter();
  const data2  = router.query.data;
  // console.log(data2)

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cnic, setCnic] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [notes, setNotes] = useState("");
  
  const [patientdata, setPatientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cnic: "",
    age: "",
    gender: "",
    doctorName: "",
    diagnosis: "",
    treatment: "",
    currentAddress: "",
    permanentAddress: "",
    servicePrice: "",
    notes: "",
  
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPatientData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      cnic,
      age,
      gender,
      doctorName,
      diagnosis,
      treatment,
      currentAddress,
      permanentAddress,
      servicePrice,
      notes,
    };

    data.push(newPatientData)
    console.log(data)
    // Update the patient data state with the collected data
    // setPatientData(newPatientData);
    router.push("/component/dashboard")

    // Log the collected data (Optional)
    // localStorage.setItem("patientData",JSON.stringify([newPatientData]))
  };

  return (
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
          Add Patient Information{" "}
        </h2>
       
      </div>
      <form
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
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
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
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                type="number"
                name="age"
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
          {/* doctors name */}
          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 "
            >
              Doctor Name
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setDoctorName(e.target.value);
                }}
                type="text"
                name="address"
                id="age"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* diagonoses */}
          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 "
            >
              Diagonoses
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setDiagnosis(e.target.value);
                }}
                type="text"
                name="address"
                id="age"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* treatment */}
          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 "
            >
              Treatment
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setTreatment(e.target.value);
                }}
                type="text"
                name="address"
                id="age"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
        
          {/* service price */}

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 "
            >
              Service Price
            </label>
            <div className="mt-2.5">
              <input
                onChange={(e) => {
                  setServicePrice(e.target.value);
                }}
                type="text"
                name="address"
                id="age"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 "
            >
              Recommendation/Additional Notes
            </label>
            <div className="mt-2.5">
              <textarea
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
                name="message"
                id="message"
                rows="4"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

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
            className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
