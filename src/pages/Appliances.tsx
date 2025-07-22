// src/pages/Appliances.tsx
import { useNavigate } from 'react-router-dom';

const Appliances: React.FC = () => {
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
        <h1 className="text-xl font-bold">Appliances & more</h1>
      </div>

      {/* Electrodoméstico: Aire acondicionado */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Air Conditioner</h2>
        <p className="text-gray-700 text-sm">
          Usa el mando que está colgado en la pared de cada habitación. Apunta al aparato y pulsa “ON”. No bajar de 22°C para evitar sobrecargarlo. Apágalo al salir.
        </p>
      </div>

      {/* Electrodoméstico: Lavadora */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Washing Machine</h2>
        <p className="text-gray-700 text-sm">
          Está en la cocina. Abre la puerta, mete la ropa, añade detergente en el cajetín derecho, el suavizante en el cajetín del medio, selecciona el programa con la rueda y pulsa “Inicio”. No sobrecargarla.
        </p>
      </div>

      {/* Electrodoméstico: Cafetera */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Coffee Machine</h2>
        <p className="text-gray-700 text-sm">
          Hay dos cafeteras, una es de cápsulas, se encuentra en la cocina y la otra es de filtro, está guardada en un armario de la cocina junto con los filtros del café.
        </p>
      </div>

      {/* Electrodoméstico: Secadora */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Dryer Machine</h2>
        <p className="text-gray-700 text-sm">
          Está en la cocina, a la derecha de la lavadora. Abre la puerta, mete la ropa, selecciona el prorama con la rueda (entre 80 y 100 está bien), pulsa el botón de play/pause para reiniciar el programa y luego presiona el mismo botón una vez para iniciarlo. Asegurate que el botón izquierdo no está activado.
        </p>
      </div>

      {/* Limpieza: Basura */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 space-y-2">
        <h2 className="text-base font-semibold text-gray-800">Rubbish</h2>
        <p className="text-gray-700 text-sm">
          Hay un cubo de basura general debajo del fregadero para la basura general y restos orgánicos. Este cubo se puede tirar por el agujero que se encuentra saliendo del apartamento. Por favor, no tires plásticos ni cartones ni basura suelta, se puede quedar atascado. Solo tirar la bolsa cerrada.
          Para el reciclaje, hay que separar el plástico, el cartón y el vidrio. Se pueden tirar en los contenedores que hay en la calle (hay unos subiendo la calle y otros delante del centro comercial).
          Por favor, antes de desalojar el apartamento, asegúrate de que la basura está sacada y los cubos están vacíos.
        </p>
      </div>

    </div>
  );
};

export default Appliances;
