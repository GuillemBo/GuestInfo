// src/pages/Appliances.tsx
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Appliances: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <h1 className="text-xl font-bold">{t('pages.appliances.title')}</h1>
      </div>

      {/* Electrodoméstico: Aire acondicionado */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">{t('pages.appliances.airConditioner.title')}</h2>
        <p className="text-gray-700 text-sm">
          {t('pages.appliances.airConditioner.text')}
        </p>
      </div>

      {/* Electrodoméstico: Lavadora */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">{t('pages.appliances.washingMachine.title')}</h2>
        <p className="text-gray-700 text-sm">
          {t('pages.appliances.washingMachine.text')}
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/washing-machine.jpg"
            alt="washing machine"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.appliances.washingMachine.image1.label1')}</p>
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.appliances.washingMachine.image1.label2')}</p>
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.appliances.washingMachine.image1.label3')}</p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/washing-machine-open.jpg"
            alt="washing machine open"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.appliances.washingMachine.image2.label1')}</p>
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.appliances.washingMachine.image2.label2')}</p>
        </div>
      </div>

      {/* Electrodoméstico: Cafetera */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">{t('pages.appliances.coffeeMachine.title')}</h2>
        <p className="text-gray-700 text-sm">
          {t('pages.appliances.coffeeMachine.text')}
        </p>
      </div>

      {/* Electrodoméstico: Secadora */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">{t('pages.appliances.dryerMachine.title')}</h2>
        <p className="text-gray-700 text-sm">
          {t('pages.appliances.dryerMachine.text')}
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/dryer-machine.jpg"
            alt="dryer machine"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.appliances.dryerMachine.image.label')}</p>
        </div>
      </div>

      {/* Electrodoméstico: Microondas */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">{t('pages.appliances.microwave.title')}</h2>
        <p className="text-gray-700 text-sm">
          <p><li>{t('pages.appliances.microwave.text1')}</li></p>
          <p><li>{t('pages.appliances.microwave.text2')}</li></p>
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/microwave.jpg"
            alt="microwave"
            className="rounded-xl w-full"
          />
        </div>
      </div>

      {/* Limpieza: Basura */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">{t('pages.appliances.rubbish.title')}</h2>
        <p className="text-gray-700 text-sm">
          <p><li>{t('pages.appliances.rubbish.text1')}</li></p>
          <p><li>{t('pages.appliances.rubbish.text2')}</li></p>
          <p><li>{t('pages.appliances.rubbish.text3')}</li></p>
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/bin-hole.jpg"
            alt="bin hole"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.appliances.rubbish.image.label')}</p>
        </div>
      </div>

    </div>
  );
};

export default Appliances;
