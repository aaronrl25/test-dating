const Milestones = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Our Milestones</h1>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Milestone</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Milestone Title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={3}
            />
            <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors">
              Add Milestone
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-pink-500 mt-2"></div>
              <div>
                <h3 className="font-semibold">First Virtual Date</h3>
                <p className="text-gray-600">Example milestone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;