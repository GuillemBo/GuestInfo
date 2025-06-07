import { useNavigate } from 'react-router-dom';

const DoorInfo: React.FC = () => {
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
        <h1 className="text-xl font-bold">How to Open the Door</h1>
      </div>

      {/* Descripción en tarjeta */}
      <div className="bg-white shadow-md rounded-2xl p-4 mb-6">
        <p className="text-base text-gray-700 leading-relaxed">
          <p className='font-bold'>To open the door:</p>
          <br />
          <p>1. You'll need to provide a valid e-mail through the Airbnb chat.</p>
          <br />
          <p>2. Once you recieve the e-mail you will need to click on it and there will be two options:</p>
            <li> Open "PORTAL" - Press on the ringbell 4º 1ª before clicking on the link. After click the link "poral" and the doors will open</li>
            <li>· Open "DOOR". Once you are in the 4th floor you will use this link to open the front door</li>
          <p className='font-style: italic'>See the pictures below</p>
        </p>
      </div>

      {/* Imágenes explicativas */}
      <div className="space-y-4">
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/e-mail-key.jpg"
            alt="Ringbell panel"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">click in the link to access your virtual key</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/door-panel.jpg"
            alt="Ringbell panel"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">click the correct link to open the door</p>
        </div>
      </div>
    </div>
  );
};


export default DoorInfo;
