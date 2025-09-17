'use client'
import { motion } from 'framer-motion'
import { GiveawayForm } from './GiveawayForm';

export default function Giveaway() {
  return (
    <section 
      id="giveaway" 
      className="py-20 bg-gray-900 bg-cover bg-center bg-fixed flex items-center justify-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full"
      >
        <GiveawayForm />
      </motion.div>
    </section>
  )
}