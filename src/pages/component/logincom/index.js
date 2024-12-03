import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handler to update state based on input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Example handler for form submission
  const handleSubmit = (e) => {
    if(!formData.email == "" && !formData.password == ""){
      router.push("/component/dashboard")
    }
    else{alert("Please fill the form first")}
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can perform further actions such as API calls here
  };

  return (
    <div>
      <div className="h-screen md:flex">
	  <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-700 to-blue-300 justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Gawahi Health Care</h1>
            <p className="text-white mt-1 capitalize">Bring Health care at your door step.</p>
            <Link href={"https://gawahihealth.com"}>
            <button type="button" className="block w-28 bg-white text-blue-700 mt-4 py-2 rounded-2xl font-bold mb-2">
              Read More
            </button></Link>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

            {/* Email Field */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Password Field */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="block w-full bg-blue-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
              Login
            </button>

          
          </form>
        </div>
      </div>
    </div>
  );
}
