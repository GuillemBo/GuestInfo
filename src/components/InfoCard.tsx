import { Link } from 'react-router-dom';

interface InfoCardProps {
    title: string;
    icon: string;
    to: string;
  }
  
  const InfoCard: React.FC<InfoCardProps> = ({ title, icon, to }) => {
    return (
      <div>
        <Link to={to}>
          <div className="flex items-center justify-between bg-white shadow-md p-4 rounded-2xl">
            <div className="flex items-center gap-4">
              <span className="text-3xl">{icon}</span>
              <span className="text-base">{title}</span>
            </div>
            <span className="text-gray-300 text-2xl">›</span>
          </div>
        </Link>
      </div>
    );
  };
  
  export default InfoCard;
  