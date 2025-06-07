import { useNavigate } from 'react-router-dom';

const WifiInfo: React.FC = () => {
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
        <h1 className="text-xl font-bold">Wi-Fi Info</h1>
      </div>

      {/* Tarjeta con los datos */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <div>
          <p className="text-sm text-gray-500">Network name</p>
          <p className="text-base font-semibold text-gray-800">SunnyApt-Guest</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Password</p>
          <p className="text-base font-semibold text-gray-800 tracking-wider">
            9Xf3-72kl-WIFI
          </p>
        </div>
      </div>

      {/* Imagen decorativa opcional */}
      <div className="mt-6 bg-white shadow-md rounded-2xl p-2">
        <img
          src="/images/wifi-icon.jpg"
          alt="Wi-Fi symbol"
          className="rounded-xl w-full"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">Wi-Fi access point location</p>
      </div>
    </div>
  );
            
};

export default WifiInfo;