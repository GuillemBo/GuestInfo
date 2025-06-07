import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoorInfo from './pages/DoorInfo';
import Appliances from './pages/Appliances';
import HouseRules from './pages/HouseRules';
import WifiInfo from './pages/WifiInfo';

const App: React.FC = () => {
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
