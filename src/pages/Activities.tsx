const Activities = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Activities Together</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActivityCard
          title="Trivia Game"
          description="Test your knowledge together with fun trivia questions"
          comingSoon
        />
        <ActivityCard
          title="Movie Night"
          description="Watch movies together with synchronized playback"
          comingSoon
        />
        <ActivityCard
          title="Drawing Game"
          description="Create art together in real-time"
          comingSoon
        />
        <ActivityCard
          title="Shared Playlist"
          description="Listen to music together and create memories"
          comingSoon
        />
      </div>
    </div>
  );
};

const ActivityCard = ({ 
  title, 
  description, 
  comingSoon = false 
}: { 
  title: string; 
  description: string; 
  comingSoon?: boolean;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    {comingSoon ? (
      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
        Coming Soon
      </span>
    ) : (
      <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
        Start Activity
      </button>
    )}
  </div>
);

export default Activities;