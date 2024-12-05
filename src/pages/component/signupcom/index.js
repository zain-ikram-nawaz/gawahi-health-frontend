import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Api from "../../config";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [logInfo, setLogInfo] = useState();
  const [getId, setGetId] = useState();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [options, setOptions] = useState({
    is_admin: false,
    is_doctor: false,
    is_receptionist: false,
  });

  // handle authentication 

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setOptions({
      is_admin: selectedOption === "is_admin",
      is_doctor: selectedOption === "is_doctor",
      is_receptionist: selectedOption === "is_receptionist",
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

 
// handle submint 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formValues);

    setLoading(true); // Show loading button

    fetch(`${Api.USERS}auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.user && result.user.id) {
          setGetId(result.user.id);
          return result.user.id; // Return getId for chaining
        } else {
          throw new Error("User ID not found in response");
        }
      })
      .then((getId) => {
        // Second request
        return fetch(`${Api.USERS}users/${getId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(options),
        });
      })
      .then((res2) => res2.json().then((result2) => ({ ok: res2.ok, result2 }))) // Combine res2.ok with result2
      .then(({ ok, result2 }) => {
        if (ok) {
          toast.success("Signup successful!", {
            position: "top-center",
          });
        } else {
          throw new Error(result2.error.message);
        }
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, {
          position: "top-center",
        });
      })
      .finally(() => {
        setLoading(false); // Hide loading button
      });
  };

// get data from local storage 
  useEffect(() => {
    const logData = localStorage.getItem("login");

    if (logData) {
      try {
        const parsedData = JSON.parse(logData); // Parse the JSON string
        setLogInfo(parsedData); // Update the state with the parsed object
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
    } else {
      toast.error("You are not an Admin", {
        position: "top-center",
      });
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (logInfo) {
      console.log(logInfo.user.is_admin);
      if (!logInfo.user.is_admin) {
        router.push("/");
        toast.error("You are not an Admin", {
          position: "top-center",
        });
      }
    }
  }, [logInfo]);

  useEffect(() => {
  }, [getId, options]);

  return (
    <div>
      <div className="h-screen md:flex justify-center">
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Register New user!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Please register an account
            </p>

            {/* Username Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleInputChange}
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
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
                value={formValues.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-400"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
              <select
                className="pl-2 outline-none border-none w-full bg-transparent cursor-pointer appearance-none"
                name="options"
                onChange={handleChange}
              >
                <option
                  value=""
                  disabled
                  className="text-gray-600 font-medium hover:bg-gray-100"
                >
                  Select option
                </option>
                <option
                  value="is_doctor"
                  className="text-gray-600 font-medium hover:bg-gray-100"
                >
                  Doctor
                </option>
                <option
                  value="is_receptionist"
                  className="text-gray-600 font-medium hover:bg-gray-100"
                >
                  Administrator
                </option>
                <option
                  value="is_admin"
                  className="text-gray-600 font-medium hover:bg-gray-100"
                >
                  Admin
                </option>
              </select>
            </div>
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
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
