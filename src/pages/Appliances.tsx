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
        <h1 className="text-xl font-bold">Appliances & more</h1>
      </div>

      {/* Electrodoméstico: Aire acondicionado */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Air Conditioner</h2>
        <p className="text-gray-700 text-sm">
          Use the remote control hanging on the wall in each room. Point it at the unit and press “ON.” Do not set the temperature below 22°C to avoid overloading it. Turn it off when you leave.
        </p>
      </div>

      {/* Electrodoméstico: Lavadora */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Washing Machine</h2>
        <p className="text-gray-700 text-sm">
          It’s in the kitchen. Open the door, load the laundry, add detergent in the right drawer, softener in the middle drawer, select the program using the dial, and press “Start.” Do not overload it.
        </p>
      </div>

      {/* Electrodoméstico: Cafetera */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Coffee Machine</h2>
        <p className="text-gray-700 text-sm">
          There are two coffee makers: one is a capsule machine located in the kitchen, and the other is a filter coffee maker, stored in a kitchen cabinet along with the coffee filters.
        </p>
      </div>

      {/* Electrodoméstico: Secadora */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Dryer Machine</h2>
        <p className="text-gray-700 text-sm">
          It’s in the kitchen, to the right of the washing machine. Open the door, load the laundry, select the program using the dial (between 80 and 100 is fine), press and hold the play/pause button for about 5 seconds to reset the program, then press the same button once to start it. Make sure the left button is not activated.
        </p>
      </div>

      {/* Limpieza: Basura */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Rubbish</h2>
        <p className="text-gray-700 text-sm">
          <p><li>There is a general trash bin under the sink for general waste and organic leftovers. This bin can be emptied through the chute located just outside the apartment. Please do not throw plastics, cardboard, or loose trash down the chute as it may get stuck. Only dispose of closed bags.</li></p>
          <p><li>For recycling, please separate plastic, cardboard, and glass. These can be disposed of in the recycling bins located on the street (some are up the street and others in front of the shopping center).</li></p>
          <p><li>Before checking out, please make sure all trash is taken out and the bins are empty.</li></p>
        </p>
      </div>

    </div>
  );
};

export default Appliances;
