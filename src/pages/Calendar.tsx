import { useState } from 'react';
import { format } from 'date-fns';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Virtual Date Calendar</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Schedule a Virtual Date</h2>
          <div className="space-y-4">
            <input
              type="datetime-local"
              className="w-full p-2 border rounded-md"
              value={format(selectedDate, "yyyy-MM-dd'T'HH:mm")}
              onChange={(e) => setSelectedDate(new Date(e.target.value))}
            />
            <button
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors"
            >
              Schedule Date
            </button>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Dates</h2>
          <div className="space-y-4">
            {events.length === 0 ? (
              <p className="text-gray-600">No upcoming dates scheduled</p>
            ) : (
              events.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-gray-600">{format(event.date, 'PPP')}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface Event {
  id: string;
  title: string;
  date: Date;
  description?: string;
}

export default Calendar;