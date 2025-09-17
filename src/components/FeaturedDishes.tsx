'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const dishes = [
  {
    name: 'Lasagna',
    description: 'Layers of fresh pasta, rich meat sauce, mozzarella, and parmesan.',
    image: 'https://images.unsplash.com/photo-1709429790175-b02bb1b19207?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Tour of Italy',
    description: 'A perfect trio of Lasagna, Chicken Parmigiana & Fettuccine Alfredo.',
    image: 'https://images.pexels.com/photos/4371848/pexels-photo-4371848.jpeg'
  },
  {
    name: 'Margherita Pizza',
    description: 'Classic combination of fresh mozzarella, basil, and tomato sauce.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-serif">
            Our Beloved Dishes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Crafted with love from traditional recipes.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              className="group rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-xl font-bold text-gray-800">{dish.name}</h3>
                <p className="mt-2 text-gray-600">{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link href="/menu" className="inline-block bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-md hover:bg-yellow-400 transition-transform duration-300 hover:scale-105">
                View Full Menu
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;