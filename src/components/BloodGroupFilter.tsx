import React from "react";

const BloodGroupFilter: React.FC<{
  bloodGroupFilter: string;
  handleBloodGroupChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ bloodGroupFilter, handleBloodGroupChange }) => (
  <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg border border-gray-300">
    <div className="flex items-center justify-between mb-4">
      <h2 className="font-semibold text-gray-800 text-lg">
        Filter by Blood Group
      </h2>
      <select
        name="bloodGroup"
        id="bloodGroup"
        className="mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 ease-in-out"
        value={bloodGroupFilter}
        onChange={handleBloodGroupChange}
      >
        <option value="">-- All --</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
      </select>
    </div>
  </div>
);

export default BloodGroupFilter;
