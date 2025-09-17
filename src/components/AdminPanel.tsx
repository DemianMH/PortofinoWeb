'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

interface Entry {
  id: string;
  name: string;
  phone: string;
  ticket: string;
}

const AdminPanel = () => {
  const [winner, setWinner] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const handleDrawWinner = async () => {
    setLoading(true);
    setError('');
    setWinner(null);
    setShowConfetti(false);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GET_ENTRIES_URL!, {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY}`
        }
      });

      if (!response.ok) {
        throw new Error('Could not fetch entries. Are you authorized?');
      }

      const entries: Entry[] = await response.json();

      if (entries.length === 0) {
        setError('There are no entries to draw from.');
        setLoading(false);
        return;
      }

      const randomIndex = Math.floor(Math.random() * entries.length);
      const randomWinner = entries[randomIndex];
      
      setWinner(randomWinner);
      setShowConfetti(true);

    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-800 text-white py-20">
      {showConfetti && <Confetti />}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Admin Giveaway Panel</h2>
        <p className="text-gray-400 mb-8">Click the button to draw a random winner from all the entries.</p>
        
        <button
          onClick={handleDrawWinner}
          disabled={loading}
          className="bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-md hover:bg-yellow-400 transition-transform duration-300 hover:scale-105 disabled:bg-gray-500"
        >
          {loading ? 'Drawing...' : '🎉 Draw a Winner!'}
        </button>

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {winner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 bg-gray-700 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-yellow-400">And the winner is...</h3>
            <p className="mt-4 text-4xl font-bold">{winner.name}</p>
            <p className="text-gray-300 mt-2">Phone: {winner.phone}</p>
            <p className="text-gray-300">Ticket: {winner.ticket}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AdminPanel;