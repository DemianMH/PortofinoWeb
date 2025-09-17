'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { GiveawayForm } from './GiveawayForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GiveawayModal = ({ isOpen, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-lg z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <GiveawayForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GiveawayModal;