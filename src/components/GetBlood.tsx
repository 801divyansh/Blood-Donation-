import React from "react";

const HowToGetBloodStep = ({
  stepNumber,
  description,
}: {
  stepNumber: number;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[35vh] w-full bg-gradient-to-b from-red-100 to-white shadow-lg rounded-lg p-6 mb-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
      <div className="text-5xl font-bold text-red-600 mb-3">{stepNumber}</div>
      <div className="text-center text-md sm:text-lg text-gray-800 font-medium">
        {description}
      </div>
    </div>
  );
};

const GetBlood = () => {
  return (
    <div className="mb-[100px]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center pt-10 text-red-800 transition-colors duration-300 ease-in-out">
        How to Obtain Blood?
      </h1>
      <div className="flex justify-center items-center px-4 sm:px-10 mt-10">
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          <HowToGetBloodStep
            stepNumber={1}
            description="Become a lifesaver by donating blood. Your generous contributions make a tangible difference!"
          />
          <HowToGetBloodStep
            stepNumber={2}
            description="Every drop counts! Your donation can help those in critical need. Join this noble cause."
          />
          <HowToGetBloodStep
            stepNumber={3}
            description="In need of blood? Contact your local blood bank or reach out to our community of donors."
          />
        </div>
      </div>
    </div>
  );
};

export default GetBlood;
