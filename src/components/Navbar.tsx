import { Link } from 'react-router-dom';
import { CalendarIcon, PuzzlePieceIcon, ChatBubbleLeftRightIcon, HeartIcon, HomeIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <HeartIcon className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold text-gray-800">LDR Connect</span>
          </Link>
          
          <div className="flex space-x-4">
            <NavLink to="/" icon={<HomeIcon className="h-5 w-5" />} text="Home" />
            <NavLink to="/calendar" icon={<CalendarIcon className="h-5 w-5" />} text="Calendar" />
            <NavLink to="/activities" icon={<PuzzlePieceIcon className="h-5 w-5" />} text="Activities" />
            <NavLink to="/chat" icon={<ChatBubbleLeftRightIcon className="h-5 w-5" />} text="Chat" />
            <NavLink to="/milestones" icon={<HeartIcon className="h-5 w-5" />} text="Milestones" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-600 hover:text-pink-500 hover:bg-pink-50 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;