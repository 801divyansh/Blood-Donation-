import React, { useState } from "react";
import { BiFemale } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";

interface Donor {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  bloodGroup: string;
  age: number;
  phone: string;
  address: string;
}

const DonorCard: React.FC<{ donor: Donor }> = ({ donor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      onClick={toggleExpand}
      className="bg-white shadow-md rounded-xl p-6 text-center mb-4 md:mb-0 transform transition duration-300 hover:shadow-lg cursor-pointer"
    >
      <div className="mb-4">
        {donor.gender.toLowerCase() === "male" ? (
          <FaCircleUser className="w-16 h-16 text-blue-600 inline-block" />
        ) : (
          <BiFemale className="w-16 h-16 text-pink-600 inline-block" />
        )}
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{`${donor.firstName} ${donor.lastName}`}</h2>
      <p className="text-red-600 font-bold mb-4">{donor.bloodGroup}</p>

      {isExpanded && ( // Only show if expanded
        <div className="flex flex-col space-y-2 border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Phone:</span>
            <span>{donor.phone}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Address:</span>
            <span>{donor.address}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorCard;
