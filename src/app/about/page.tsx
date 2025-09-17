import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-96">
        <Image
          src="https://images.pexels.com/photos/4350119/pexels-photo-4350119.jpeg"
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
            Welcome to Portofino, a family-owned restaurant where our passion for authentic Italian cuisine comes to life. Founded with the dream of bringing traditional recipes and the warmth of Italian hospitality to Conway, Arkansas, our restaurant is a place where families gather, friends celebrate, and delicious memories are made.
          </p>
          <p className="mb-6">
            Our journey began with a simple idea: to offer genuine Italian flavors using high-quality ingredients and products imported directly from Italy. From our pasta crafted in Italy to our oven-baked pizzas, every meal reflects our commitment to quality and tradition.
          </p>
          <h2 className="text-3xl font-bold text-red-700 mt-12 mb-4 font-serif">Our Philosophy</h2>
          <p className="mb-6">
            We believe that great food begins with care and dedication. That&apos;s why we rely on trusted suppliers who provide us with authentic Italian products such as cheeses, cured meats, and olive oils. Our cooks prepare every dish with passion, ensuring that each plate delivers a comforting, authentic, and memorable dining experience. At Portofino, we are more than just a restaurant we are a family eager to share our love for Italian food with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;