// src/components/Giveaway.tsx
'use client'
import { motion } from 'framer-motion'
import { GiveawayForm } from './GiveawayForm'; // Importamos el nuevo formulario

export default function Giveaway() {
  // Ya no necesitamos los estados ni la lógica aquí.

  return (
    // CORRECCIÓN DE CENTRADO: Añadimos flex, items-center y justify-center
    <section 
      id="giveaway" 
      className="py-20 bg-gray-900 bg-cover bg-center bg-fixed flex items-center justify-center" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full" // Quitamos clases de padding y estilo que ahora están en el form
      >
        <GiveawayForm />
      </motion.div>
    </section>
  )
}