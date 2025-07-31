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
          <p>1. You’ll need to provide a valid email address through the Airbnb chat.</p>
          <br />
          <p>2. On the day of your arrival, you will receive an email. Open it and click the link — you’ll see two options:</p>
            <li>Open “PORTAL” — This option opens the two entrance doors from the street. First, ring the doorbell for 4º 1ª. Then, click the “PORTAL” link and both doors will open.</li>
            <li>Open “PUERTA” — This option opens the front door of the flat. Once you’re on the 4th floor, use this link to unlock the apartment door.</li>
          <p className='font-style: italic'>See the pictures below for visual reference.</p>
        </p>
      </div>

      {/* Imágenes explicativas */}
      <div className="space-y-4">
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/ringbell.jpg"
            alt="ringbell"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Press the button 4º 1ª before the link</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/e-mail-key.jpg"
            alt="e-mail key"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Click the link to access your virtual key.</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/door-panel.jpg"
            alt="Ringbell panel"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Click the correct link to open the door</p>
        </div>
        <h2 className="text-xl font-bold mt-2">IMPORTANT INFORMATION:</h2>
        <p className='mb-4'>These links open the door from anywhere. Do not use them unless you are standing right in front of the door.</p>

      </div>

      <div className="flex items-center justify-center mb-6 mt-6">
        <h1 className="text-xl font-bold">The Lock from the inside</h1>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 mb-6">
        <p className="text-base text-gray-700 leading-relaxed">
          <p className='font-bold'>Electronic Lock</p>
          <br />
          <p>To open the door from inside the flat without using the link in the email or the physical key, please follow these instructions:</p>
          <br />
          <p>Place two fingers on the sides of the lock and gently slide them from top to bottom. Wait until the door is fully unlocked, then pull it open.</p>
          <p className='font-style: italic'>See the pictures below for visual information</p>
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2 mb-3">
          <img
            src="/images/lock-slide.jpg"
            alt="lock"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Slide your fingers on both sides of the lock, from top to bottom.</p>
        </div>

        <p className="text-base text-gray-700 mb-2">
          For better understanding, please watch the video below carefully.
        </p>

        <video
          controls
          className="w-full rounded-2xl shadow-md"
          poster="/images/lock.jpg" // opcional
        >
          <source src="/videos/lock-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-xl font-bold mt-2">IMPORTANT INFORMATION:</h2>
        <p className='mb-4'>Be very careful with the round wheel on top. It has tape to prevent it from moving. If it shifts and gets stuck in an off-center position, it will start beeping, and someone will need to come to open the door for you.</p>
        <p>If the lock stops working or you get stuck inside without the option to use the key or the link, you can remove the tape and turn the wheel to the left, as if it were a key. This will unlock the door.</p>
      </div>
      
    </div>
  );
};


export default DoorInfo;
