import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DoorInfo from './pages/doorInfo';
import Appliances from './pages/Appliances';
import HouseRules from './pages/HouseRules';

const App: React.FC = () => {
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/door" element={<DoorInfo />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/rules" element={<HouseRules />} />
    </Routes>
  );
};

export default App;
