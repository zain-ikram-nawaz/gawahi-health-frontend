import React from 'react'
import data from '../../data.json'

export default function DetailModal({itemId,setIsOpen}) {
const data2 = data.filter((item)=>item.id==itemId)
const result = data2[0]
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <button
          onClick={()=>{setIsOpen(false)}}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4">Key-Value Data</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-semibold">First Name:</span>
            <span>{result.firstName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Current Address:</span>
            <span>{result.currentAddress}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Permanent Address:</span>
            <span>{result.permanentAddress}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Email:</span>
            <span>{result.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Phone Number:</span>
            <span>{result.phoneNumber}</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}
