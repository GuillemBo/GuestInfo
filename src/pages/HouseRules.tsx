const HouseRules: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">House Rules</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li>No smoking inside the house.</li>
        <li>Quiet hours are from 10 PM to 8 AM.</li>
        <li>Pets are not allowed unless pre-approved.</li>
        <li>Please dispose of trash in the designated bins.</li>
        <li>Report any damages or issues immediately.</li>
      </ul>
    </div>
  );
};

export default HouseRules;