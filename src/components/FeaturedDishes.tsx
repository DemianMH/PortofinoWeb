'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const dishes = [
  {
    name: 'Baked Tuscany',
    description: 'Shrimp, chicken, bacon and spinach w/spicy alla panna sauce topped w/melted mozzarella over ziti.',
    image: '/Tuscany1.jpg'
  },
  {
    name: 'Linguine Tutto Mare',
    description: 'Shrimp, mussels, clams, scallops & calamari w/light white wine sauce over linguine.',
    image: '/TuttoMare2.jpg'
  },
  {
    name: 'Pizza and more...',
    description: 'A crispy yet soft base, topped with tomato sauce, melted mozzarella cheese, and your choice of fresh ingredients.',
    image: '/PizzaPepperoni1.jpg'
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-serif">
            Our Specialties
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Authentic flavors crafted with passion.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              className="group rounded-lg overflow-hidden shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-gray-50 flex-grow">
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