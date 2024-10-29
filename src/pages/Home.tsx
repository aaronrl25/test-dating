import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Stay Connected, Even Miles Apart
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Make your long-distance relationship stronger with shared activities, virtual dates, and special moments.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          title="Virtual Dates"
          description="Schedule and enjoy virtual dates together"
          to="/calendar"
        />
        <FeatureCard
          title="Fun Activities"
          description="Play games and share experiences"
          to="/activities"
        />
        <FeatureCard
          title="Stay Connected"
          description="Chat and create memories together"
          to="/chat"
        />
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, to }: { title: string; description: string; to: string }) => (
  <Link
    to={to}
    className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
  >
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

export default Home;