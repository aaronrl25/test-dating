import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Activities from './pages/Activities';
import Chat from './pages/Chat';
import Milestones from './pages/Milestones';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/milestones" element={<Milestones />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;