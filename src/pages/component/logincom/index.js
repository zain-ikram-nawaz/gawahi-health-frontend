import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Api from '../../config'
import { useRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';
import { setLoginInfo } from '@/pages/redux/loginInfoSlice';

export default function LoginPage() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [loading, setLoading] = useState(false); 
  const [formData, setFormData] = useState({
    identifier: '',
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
  const handleSubmit =async (e) => {
   setLoading(true)
    e.preventDefault();

    try {
      const res = await fetch(`${Api.USERS}auth/local`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData),
      });

      const result = await res.json();
      if(res.ok){
      console.log(result)
      localStorage.setItem("login",JSON.stringify(result))
      // dispatch(setLoginInfo(result))
        toast.success("Login successful!!", {
          position: "top-center"
        });
      }
   
     else{
      toast()
      toast.error(result.error.message, {
        position: "top-center"
      });
     }
    
    } catch (error) {
      toast.error('Error making POST request:',error, {
        position: "top-center"
      });

    } finally {
      router.push("/dashboard")
      setLoading(false); // Hide loading button
    }
   
    
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
                type="email"
                name="identifier"
                placeholder="Email Address"
                value={formData.identifier}
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
            <button
  type="submit"
  className="flex items-center justify-center w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
>
  {loading ? (
    <svg
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
    </svg>
  ) : (
    "Login"
  )}
</button>

            {/* <Link href="/signup">
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Create a new account</span>
            </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}
