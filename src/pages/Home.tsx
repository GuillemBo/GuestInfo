import InfoCard from '../components/InfoCard';
import MapSection from '../components/MapSection';

const Home: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Guest Information</h1>

      <div className="space-y-4">
        <InfoCard title="How to Open the Door" icon="🔑" to='/door' />
        <InfoCard title="Appliances" icon="🍽️" to='/appliances'/>
        <InfoCard title="House Rules" icon="⚠️" to='/rules'/>
        <InfoCard title="Wi-Fi Info" icon="📶" to='/wifi'/>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-3">Nearby Places</h2>
      <MapSection />
    </div>
  );
};

export default Home;
