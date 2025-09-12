// src/app/page.tsx
'use client'
import { useState, useEffect } from 'react'; // Importa useState y useEffect
import Giveaway from "@/components/Giveaway";
import FeaturedDishes from "@/components/FeaturedDishes";
import { motion } from 'framer-motion';
import GiveawayModal from '@/components/GiveawayModal'; // Importa el nuevo Modal
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'; // Importa useSearchParams
import AdminPanel from '@/components/AdminPanel'; 
import { Suspense } from 'react';

// --- Componente Hero (sin cambios) ---
const Hero = () => {
    // ... tu código del componente Hero
    return (
        <div className="relative h-[75vh] flex items-center justify-center text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" poster="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                <source src="https://www.pexels.com/es-es/download/video/7172270/" type="video/mp4" />
                Tu navegador no soporta videos.
            </video>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative z-20 p-4">
                <div className="mb-4">
                    <Image
                        src="/logoblanco.png"
                        alt="Portofino Logo"
                        width={240} // Ajusta el tamaño según tu preferencia
                        height={80}
                        className="mx-auto"
                        priority // Ayuda a que el logo cargue más rápido
                    />
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg font-serif">
                    Authentic Italian Cuisine
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Experience the taste of Italy in the heart of Conway. Fresh pasta, handmade pizza, and timeless recipes.
                </p>
            </motion.div>
        </div>
    );
}

function AdminToggle() {
  const searchParams = useSearchParams();
  const isAdmin = searchParams.get('admin') === 'true';

  return isAdmin ? <AdminPanel /> : null;
}

// --- Página Principal ---
export default function HomePage() {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // El componente <Suspense> es necesario para que useSearchParams funcione correctamente
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <GiveawayModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        <Hero />
        <FeaturedDishes />
        <Giveaway />
        
        {/* Aquí se renderiza el panel de admin (solo si la URL es correcta) */}
        <AdminToggle />
      </div>
    </Suspense>
  )
}