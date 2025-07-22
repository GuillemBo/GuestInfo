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
          <p>2. Once you recieve the e-mail on the day of your arrival, you will need to click on it and there will be two options:</p>
            <li> Open "PORTAL" - This option opens the two entrance doors from the street. First, press the doorbell for 4º 1ª. Then, click the "PORTAL" link and both doors will open.</li>
            <li>· Open "DOOR" - This option opens the front door of the flat. Once you're on the 4th floor, use this link to open the apartment door.</li>
          <p className='font-style: italic'>See the pictures below for visual info</p>
        </p>
      </div>

      {/* Imágenes explicativas */}
      <div className="space-y-4">
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/e-mail-key.jpg"
            alt="e-mail key"
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
        <h2 className="text-xl font-bold mt-2">IMPORTANT INFO:</h2>
        <p className='mb-4'>This links open the door from any place. Do not use them unless you are in front of the door.</p>

      </div>

      <div className="flex items-center justify-center mb-6 mt-6">
        <h1 className="text-xl font-bold">The Lock from the inside</h1>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 mb-6">
        <p className="text-base text-gray-700 leading-relaxed">
          <p className='font-bold'>Electronic Lock</p>
          <br />
          <p>in order to open the door from inside the flat without using the link on the email or the phisical key, you will need to read the following instructions:</p>
          <br />
          <p>Put two fingers from your hand on the sides of the lock and sofly slide your fingers from top to bottom, wait until the door is fully unlocked and pull from it.</p>
          <p className='font-style: italic'>See the pictures below for visual info</p>
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2 mb-3">
          <img
            src="/images/lock-slide.jpg"
            alt="lock"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">slide your finger in both sides, from top to bottom</p>
        </div>

        <p className="text-base text-gray-700 mb-2">
          For a better understanding: Please watch the video below carefully.
        </p>

        <video
          controls
          className="w-full rounded-2xl shadow-md"
          poster="/images/lock.jpg" // opcional
        >
          <source src="/videos/lock-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-xl font-bold mt-2">IMPORTANT INFO:</h2>
        <p className='mb-4'>Be really carfull with the round wheel on the top, it has some tape on it to avoid moving. In case it moves and get stuck in a non central position it will start beeping and someone will need to come to open the door for you.</p>
        <p>In case the lock stops working or you get stuck inside without option of using the key or the link: You can take the tape off and turn the wheel to the left as if it was a key. It will unlock the door.</p>
      </div>
      
    </div>
  );
};


export default DoorInfo;
