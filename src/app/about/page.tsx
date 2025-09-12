// src/app/about/page.tsx
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-96">
        <Image
          src="https://images.pexels.com/photos/4350119/pexels-photo-4350119.jpeg" // Puedes cambiar esto por una foto del interior del restaurante
          alt="Interior of Portofino restaurant"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Our Story</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-lg text-gray-700">
          <h2 className="text-3xl font-bold text-red-700 mb-4 font-serif">A Taste of Italy in Conway</h2>
          <p className="mb-6">
            Welcome to Portofino, where our passion for authentic Italian cuisine comes to life. Founded with the dream of bringing traditional recipes and the warmth of Italian hospitality to Conway, Arkansas, our restaurant is a place where families gather, friends celebrate, and delicious memories are made.
          </p>
          <p className="mb-6">
            Our journey began with a simple idea: to use only the freshest, highest-quality ingredients to create dishes that are both classic and innovative. From our handmade pasta to our wood-fired pizzas, every meal is a testament to our commitment to excellence. 
          </p>
          <h2 className="text-3xl font-bold text-red-700 mt-12 mb-4 font-serif">Our Philosophy</h2>
          <p className="mb-6">
            We believe that great food starts with great ingredients. That's why we source our produce locally whenever possible and import the finest cheeses, meats, and olive oils directly from Italy. Our chefs pour their hearts into every dish, ensuring that each bite is an authentic and unforgettable experience. We're more than just a restaurant; we are a family dedicated to sharing our love for food with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;