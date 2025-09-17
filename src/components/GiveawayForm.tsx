'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const GiveawayForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [physicalTicket, setPhysicalTicket] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !physicalTicket) {
      setError('Please fill in all fields, including your ticket number.');
      return;
    }
    if (!acceptedTerms) {
      setError('You must accept the Terms & Conditions to participate.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_ENTER_GIVEAWAY_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, ticket: physicalTicket }),
      });

      if (!response.ok) throw new Error('Something went wrong. Please try again.');
      setSubmitted(true);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black/60 backdrop-blur-md rounded-xl shadow-lg p-8 w-full text-center">
      <Image src="/logoblanco.png" alt="Portofino Logo" width={150} height={150} className="mx-auto mb-4" />

      {!submitted ? (
        <>
          <h2 className="text-3xl font-bold mb-2 text-white">Win a Dinner for Two Every Month for a Year!</h2>
          <p className="text-gray-200 mb-6">Enter your details and ticket number for a chance to enjoy 12 dinners for two — one each month for a year.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="p-3 rounded-md bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <input type="tel" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-3 rounded-md bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            <input type="text" placeholder="Your Ticket Number" value={physicalTicket} onChange={(e) => setPhysicalTicket(e.target.value)} className="p-3 rounded-md bg-gray-800/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            
            <div className="text-left flex items-center gap-2">
              <input 
                type="checkbox" 
                id="terms" 
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="h-4 w-4 rounded bg-gray-800/50 text-yellow-500 focus:ring-yellow-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-300">
                I accept the <Link href="/giveaway-terms.pdf" target="_blank" className="underline hover:text-yellow-400">Terms & Conditions and Privacy Notice</Link>
              </label>
            </div>

            <button type="submit" disabled={!acceptedTerms || loading} className="bg-yellow-500 text-gray-900 font-bold p-3 rounded-md hover:bg-yellow-400 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
              Enter to Win
            </button>
            {error && <p className="text-red-400 mt-2">{error}</p>}
          </form>
        </>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
          <h2 className="text-3xl font-bold text-yellow-500">Thank You!</h2>
          <p className="text-gray-200 mt-2">You have been successfully entered. Good luck!</p>
        </motion.div>
      )}
    </div>
  );
};