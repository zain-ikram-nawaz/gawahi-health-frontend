import React, { useEffect, useState } from "react";
import api from "../../config";

export default function DetailModal({ itemId, setIsOpen }) {
  const [modalData, setModalData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${api.USERS}patients/${itemId}`);
      const data = await response.json();
      setModalData(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-xl shadow-xl w-3/4 max-w-3xl">
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition transform"
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Patient Details
        </h2>
        <div className="space-y-5">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">First Name:</span>
            <span className="text-gray-800">{modalData?.firstName}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Current Address:</span>
            <span className="text-gray-800">{modalData?.currentAddress}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Permanent Address:</span>
            <span className="text-gray-800">{modalData?.permanentAddress}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Email:</span>
            <span className="text-gray-800">{modalData?.email}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Phone Number:</span>
            <span className="text-gray-800">{modalData?.phoneNumber}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">CNIC:</span>
            <span className="text-gray-800">{modalData?.cnic}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Age:</span>
            <span className="text-gray-800">{modalData?.age}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Gender:</span>
            <span className="text-gray-800">{modalData?.gender}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Doctor's Name:</span>
            <span className="text-gray-800">{modalData?.doctorName}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Diagnoses:</span>
            <span className="text-gray-800">{modalData?.diagnosis}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Treatment:</span>
            <span className="text-gray-800">{modalData?.treatment}</span>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <span className="font-medium text-gray-600">Service Price:</span>
            <span className="text-gray-800">{modalData?.servicePrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-600">
              Recommendation/Notes:
            </span>
            <span className="text-gray-800">{modalData?.notes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
