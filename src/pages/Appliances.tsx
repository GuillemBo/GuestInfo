// src/pages/Appliances.tsx
import { useNavigate } from 'react-router-dom';

const Appliances: React.FC = () => {
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
        <h1 className="text-xl font-bold">Appliances</h1>
      </div>

      {/* Electrodoméstico: Aire acondicionado */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Air Conditioner</h2>
        <p className="text-gray-700 text-sm">
          Usa el mando que está en la mesa del salón. Apunta al aparato y pulsa “ON”. No bajar de 22°C para evitar sobrecargarlo. Apágalo al salir.
        </p>
      </div>

      {/* Electrodoméstico: Lavadora */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Washing Machine</h2>
        <p className="text-gray-700 text-sm">
          Está en el baño. Abre la puerta, mete la ropa, añade detergente en el cajetín izquierdo y pulsa “Inicio”. No sobrecargarla.
        </p>
      </div>

      {/* Electrodoméstico: Cafetera */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Coffee Machine</h2>
        <p className="text-gray-700 text-sm">
          Es de cápsulas. Se encuentra en la cocina. Abre la tapa, coloca una cápsula, cierra y pulsa el botón grande. Cápsulas extra están en el cajón.
        </p>
      </div>

      {/* Puedes añadir más si hace falta */}
    </div>
  );
};

export default Appliances;
