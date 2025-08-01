// src/pages/HouseRules.tsx
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HouseRules: React.FC = () => {
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
        <h1 className="text-xl font-bold">{t('pages.houseRules.title')}</h1>
      </div>

      {/* Reglas dentro de una tarjeta */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          {(Array.isArray(t("pages.houseRules.rules", { returnObjects: true }))
            ? (t("pages.houseRules.rules", { returnObjects: true }) as string[])
            : []
          ).map((rule: string, i: number) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HouseRules;
