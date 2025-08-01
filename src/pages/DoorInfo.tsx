import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const DoorInfo: React.FC = () => {
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
        <h1 className="text-xl font-bold">{t('pages.doorInfo.title')}</h1>
      </div>

      {/* Descripción en tarjeta */}
      <div className="bg-white shadow-md rounded-2xl p-4 mb-6">
        <p className="text-base text-gray-700 leading-relaxed">
          <p className='font-bold'>{t('pages.doorInfo.stepsTitle')}</p>
          <br />
          <p>1. {t('pages.doorInfo.step1')}</p>
          <br />
          <p>2. {t('pages.doorInfo.step2')}</p>
            <li>{t('pages.doorInfo.optionPortal')}</li>
            <li>{t('pages.doorInfo.optionPuerta')}</li>
          <p className='font-style: italic'>{t('pages.doorInfo.visualReferenceNote')}</p>
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
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.doorInfo.imgRingbellCaption')}</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/e-mail-key.jpg"
            alt="e-mail key"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.doorInfo.imgEmailKeyCaption')}</p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-2">
          <img
            src="/images/door-panel.jpg"
            alt="Ringbell panel"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.doorInfo.imgDoorPanelCaption')}</p>
        </div>
        <h2 className="text-xl font-bold mt-2">{t('pages.doorInfo.importantNotice1Title')}</h2>
        <p className='mb-4'>{t('pages.doorInfo.importantNotice1Text')}</p>

      </div>

      <div className="flex items-center justify-center mb-6 mt-6">
        <h1 className="text-xl font-bold">{t('pages.doorInfo.insideLockTitle')}</h1>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 mb-6">
        <p className="text-base text-gray-700 leading-relaxed">
          <p className='font-bold'>{t('pages.doorInfo.electronicLock.title')}</p>
          <br />
          <p>{t('pages.doorInfo.electronicLock.instructions')}</p>
          <br />
          <p>{t('pages.doorInfo.electronicLock.step')}</p>
          <p className='font-style: italic'>{t('pages.doorInfo.electronicLock.visualReferenceNote')}</p>
        </p>
        <div className="bg-white shadow-md rounded-2xl p-2 mb-3">
          <img
            src="/images/lock-slide.jpg"
            alt="lock"
            className="rounded-xl w-full"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">{t('pages.doorInfo.electronicLock.imgSlideCaption')}</p>
        </div>

        <p className="text-base text-gray-700 mb-2">
          {t('pages.doorInfo.electronicLock.videoNote')}
        </p>

        <video
          controls
          className="w-full rounded-2xl shadow-md"
          poster="/images/lock.jpg" // opcional
        >
          <source src="/videos/lock-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h2 className="text-xl font-bold mt-2">{t('pages.doorInfo.electronicLock.importantNotice2Title')}</h2>
        <p className='mb-4'>{t('pages.doorInfo.electronicLock.importantNotice2Text1')}</p>
        <p>{t('pages.doorInfo.electronicLock.importantNotice2Text2')}</p>
      </div>
      
    </div>
  );
};


export default DoorInfo;
