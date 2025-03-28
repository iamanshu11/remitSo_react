import React, { useEffect, useState } from "react";
import recipientsData from "../data/recipients.json"; // Import JSON file

const Recipients = () => {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    setRecipients(recipientsData);
  }, []);

  return (
    <div className="bg-[#00374A] p-6 rounded-lg shadow-md w-full">
      <h3 className="text-lg font-semibold mb-4 text-white">Your Recipients</h3>

      {/* Scrollable List with Custom Scrollbar */}
      <div className="max-h-90 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200">
        {recipients.map((recipient, index) => (
          <div key={index} className="flex justify-between p-3 border border-white rounded-md">
            <div>
              <p className="font-medium text-white">{recipient.name}</p>
              <p className="text-sm text-gray-300">{recipient.country}</p>
            </div>
            <span className="text-white">{recipient.maskedNumber}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipients;
