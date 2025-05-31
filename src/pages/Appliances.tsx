const Appliances: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Appliances</h1>
      <p>Here are some details about the appliances in the house:</p>
      <ul className="list-disc pl-5 mt-2">
        <li>Refrigerator: Brand, model, and any special features.</li>
        <li>Washing Machine: Instructions for use and settings.</li>
        <li>Oven: How to operate and any quirks.</li>
        <li>Heating/Cooling: Thermostat instructions and settings.</li>
      </ul>
    </div>
  );
};

export default Appliances;