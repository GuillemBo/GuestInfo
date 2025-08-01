import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '/public/images/england.png' },
  { code: 'es', label: 'Español', flag: '/public/images/spain.png' },
  { code: 'fr', label: 'Français', flag: '/public/images/france.png' },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  // Cierre al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative flex justify-end mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full text-sm shadow-sm bg-white"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5 rounded-full" />
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      {open && (
        <div className="absolute top-10 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-40">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-100 ${
                lang.code === i18n.language ? 'font-bold text-blue-600' : ''
              }`}
            >
                <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full" />
                <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
