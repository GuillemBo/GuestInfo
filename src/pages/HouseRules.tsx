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
          <li>No se permite fumar dentro del apartamento.</li>
          <li>Por respeto a los vecinos, evita ruidos fuertes después de las 22:00.</li>
          <li>Por favor, no organices fiestas.</li>
          <li>No se permiten mascotas sin autorización previa.</li>
          <li>Apaga el aire acondicionado y las luces al salir.</li>
          <li>Deja la basura en el contenedor gris de la calle al marcharte.</li>
        </ul>
      </div>
    </div>
  );
};

export default HouseRules;
