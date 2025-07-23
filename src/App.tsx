import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoorInfo from './pages/DoorInfo';
import Appliances from './pages/Appliances';
import HouseRules from './pages/HouseRules';
import WifiInfo from './pages/WifiInfo';
import { useEffect, useState } from 'react';

const correctPassword = 'as1841'; // Cambia esta contraseña
const storageKey = 'accessGranted';
const timeKey = 'accessGrantedTime';
const sessionDuration = 604800000; // 1 semana en milisegundos

const App: React.FC = () => {

  const [inputPassword, setInputPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState('');

  // Al montar el componente, comprueba localStorage
  useEffect(() => {
    const savedAccess = localStorage.getItem(storageKey);
    const savedTime = localStorage.getItem(timeKey);
    if (savedAccess === 'true' && savedTime) {
      const elapsed = Date.now() - parseInt(savedTime, 10);
      if (elapsed < sessionDuration) {
        setAccessGranted(true);
      } else {
        // Sesión expirada
        localStorage.removeItem(storageKey);
        localStorage.removeItem(timeKey);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setAccessGranted(true);
      localStorage.setItem(storageKey, 'true');
      localStorage.setItem(timeKey, Date.now().toString());
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

if (!accessGranted) {
  return (
    <div className="max-w-[430px] mx-auto px-4 py-6 text-center">
      <h2 className="text-2xl font-bold mb-6">Please enter the password to access the site</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          autoFocus
          required
          className="w-full p-3 text-lg border border-gray-300 rounded-md"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Access
        </button>
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/door" element={<DoorInfo />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/rules" element={<HouseRules />} />
      <Route path="/wifi" element={<WifiInfo />} />
    </Routes>
  );
};

export default App;
