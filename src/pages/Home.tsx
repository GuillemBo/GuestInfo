import InfoCard from '../components/InfoCard';
import MapSection from '../components/MapSection';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';


const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[430px] mx-auto px-4 py-6">
      <LanguageSelector />
      <h1 className="text-2xl font-bold mb-6">{t('pages.home.homeTitle')}</h1>

      <div className="space-y-4">
        <InfoCard title={t('pages.home.howToOpenDoor')} icon="🔑" to='/door' />
        <InfoCard title={t('pages.home.appliances')} icon="🍽️" to='/appliances'/>
        <InfoCard title={t('pages.home.houseRules')} icon="⚠️" to='/rules'/>
        <InfoCard title={t('pages.home.wifiInfo')} icon="📶" to='/wifi'/>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-3">{t('pages.home.nearbyPlaces')}</h2>
      <MapSection />
    </div>
  );
};

export default Home;
