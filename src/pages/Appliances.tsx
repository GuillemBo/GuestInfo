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
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/washing-machine.jpg"
            alt="washing machine"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">On/Off button (yellow)</p>
          <p className="text-sm text-gray-500 mt-2 text-center">Dial to choose the program (red)</p>
          <p className="text-sm text-gray-500 mt-2 text-center">Start button (green)</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/washing-machine-open.jpg"
            alt="washing machine open"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Yellow drawer: soap</p>
          <p className="text-sm text-gray-500 mt-2 text-center">Blue drawer: softener</p>
        </div>
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
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/dryer-machine.jpg"
            alt="dryer machine"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">play/pause button (yellow)</p>
        </div>
      </div>

      {/* Electrodoméstico: Microondas */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Microwave</h2>
        <p className="text-gray-700 text-sm">
          <p><li>Use the top dial to choose the power from the top (low) to right (higher)</li></p>
          <p><li>Use the bottom dial to choose the time and start it</li></p>
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/microwave.jpg"
            alt="microwave"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">throw the rubbish bags here</p>
        </div>
      </div>

      {/* Limpieza: Basura */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Rubbish</h2>
        <p className="text-gray-700 text-sm">
          <p><li>There is a general trash bin under the sink for general waste and organic leftovers. This bin can be emptied through the chute located just outside the apartment. Please do not throw plastics, cardboard, or loose trash down the chute as it may get stuck. Only dispose of closed bags.</li></p>
          <p><li>For recycling, please separate plastic, cardboard, and glass. These can be disposed of in the recycling bins located on the street (some are up the street and others in front of the shopping center).</li></p>
          <p><li>Before checking out, please make sure all trash is taken out and the bins are empty.</li></p>
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/bin-hole.jpg"
            alt="bin hole"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">throw the rubbish bags here</p>
        </div>
      </div>

    </div>
  );
};

export default Appliances;
