// src/pages/HouseRules.tsx
import { useNavigate } from 'react-router-dom';

const HouseRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[430px] mx-auto px-4 py-6">
      {/* Encabezado */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-xl mr-4 text-gray-500"
        >
          ←
        </button>
        <h1 className="text-xl font-bold">House Rules</h1>
      </div>

      {/* Reglas dentro de una tarjeta */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          <li>Smoking is not allowed inside the apartment.</li>
          <li>Out of respect for the neighbors, please avoid loud noises, especially after 9:00 PM.</li>
          <li>Please do not host parties.</li>
          <li>Pets are not allowed.</li>
          <li>Please turn off the air conditioning and lights when you leave.</li>
          <li>Please take out the trash before you leave.</li>
        </ul>
      </div>
    </div>
  );
};

export default HouseRules;
