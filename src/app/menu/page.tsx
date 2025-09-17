import React from 'react';

const SpicyIcon = () => <span title="Spicy">🌶️</span>;

type MenuItem = {
    name: string;
    price: string;
    description?: string;
    icon?: React.ReactNode;
    note?: string;
};

type MenuCategory = {
    category: string;
    items: MenuItem[];
    note?: string;
};

const menuData: MenuCategory[] = [
    {
        category: "Appetizers",
        items: [
            { name: "Garlic Cheese Bread", price: "5.99" },
            { name: "Italian Sausage", description: "Sliced w/spicy marinara", price: "9.99", icon: <SpicyIcon/> },
            { name: "Cheese Sticks (7)", price: "9.99" },
            { name: "Fried Ravioli (12)", description: "Meat, Cheese or half and half", price: "9.99" },
            { name: "Fried Calamari", price: "12.99" },
            { name: "Spinach Artichoke Dip", price: "13.99" }
        ]
    },
    {
        category: "Salads",
        note: "Dressings: Ranch, Bleu Cheese, Italian, Caesar, 1000 Island, House. *Change Tossed Salad to Caesar Salad $1.00",
        items: [
            { name: "Tossed Salad", description: "Green leaf, onion, tomato & croutons", price: "4.99" },
            { name: "Caesar Salad", description: "Lettuce, parmesan & croutons", price: "8.99" },
            { name: "Greek Salad", description: "Lettuce, black olives, onion, tomatoes, peppers & feta cheese", price: "10.99" },
            { name: "Small Caesar Salad", price: "5.99" },
        ],
    },
    {
        category: "Side Orders",
        items: [
            { name: "Marinara", price: "2.49" },
            { name: "Pesto Sauce", description: "Olive oil, garlic, basil & spices", price: "2.99" },
            { name: "Grilled Chicken", price: "5.99" },
            { name: "Meatballs (4)", price: "4.99" },
            { name: "Meatsauce", price: "4.99" },
            { name: "Alla Panna Sauce", description: "Alfredo sauce with marinara", price: "5.99" },
            { name: "Alfredo Sauce", price: "5.99" },
            { name: "Shrimp (6)", price: "7.49" }
        ]
    },
    {
        category: "Kid's Menu",
        note: "(Under 12 or over 65)",
        items: [
            { name: "Spaghetti Meatballs or Meatsauce", price: "8.49" },
            { name: "Lasagna", price: "8.49" },
            { name: "Manicotti", price: "8.49" },
            { name: "Cheese Ravioli", price: "7.99" },
            { name: "Spaghetti w/Alfredo", price: "8.99" },
            { name: "Chicken Strips & Fries", price: "8.99" }
        ]
    },
    {
        category: "Home Baked Pasta",
        items: [
            { name: "Lasagna", description: "Layered pasta with beef and mozzarella topped with marinara", price: "13.99" },
            { name: "Manicotti", description: "Pasta stuffed w/mozzarella, ricotta & parmesan", price: "12.99" },
            { name: "Cheese Ravioli", description: "Four ravioli shells stuffed w/cheese and topped w/marinara", price: "12.99" },
            { name: "Pasta Sampler", description: "Piece of manicotti, lasagna & meat ravioli", price: "14.99" },
            { name: "Baked Ziti", description: "Ziti pasta, alla panna sauce w/ricotta & mozzarella", price: "13.99" },
            { name: "Meat Ravioli", description: "Four ravioli shells stuffed w/meat & topped w/marinara", price: "13.99" },
            { name: "Baked Tortellini", description: "Tortellini pasta topped w/marinara and mozzarella", price: "13.99" }
        ]
    },
    {
        category: "Pasta",
        note: "Every entrée comes with tossed salad | We also have gluten free pasta",
        items: [
            { name: "Spaghetti Tomato Sauce", price: "11.99" },
            { name: "Spaghetti", description: "Choice of meatballs, meatsauce, mushrooms or sausage", price: "13.99" },
            { name: "Eggplant Parmigiana", price: "15.99" },
            { name: "Chicken Parmigiana", price: "17.99" },
            { name: "Shrimp Parmigiana", price: "18.99" },
            { name: "Veal Parmigiana", price: "18.99" },
            { name: "Tortellini Alla Panna", description: "Sherry wine pink sauce over tortellini pasta", price: "14.99" },
            { name: "Sausage Pizzaiola", description: "Italian sausage w/garlic & basil in a spicy alla panna sauce over ziti", price: "15.99" },
            { name: "Sausage & Pepper Parmigiana", description: "Italian sausage & bell peppers with marinara topped w/mozzarella over spaghetti", price: "16.99" },
            { name: "Spaghetti The Works", description: "Meatballs, meatsauce, mushrooms & sausage", price: "17.99" },
            { name: "Linguine Carbonara", description: "Sautéed fresh garlic, onions, mushrooms & bacon w/alfredo over linguine", price: "17.99" },
            { name: "Pasta Primavera", description: "Mushrooms, broccoli, onions, green peppers, red peppers, artichokes, tomatoes and spinach w/alla panna served over fettuccine", price: "16.99" }
        ]
    },
    {
        category: "Subs",
        note: "with fries",
        items: [
            { name: "Chicken Parmigiana Sub", price: "11.99" },
            { name: "Meatballs Sub", price: "11.99" },
            { name: "Philly Cheese Steak", description: "Philly Steak with green peppers, onions & mushrooms", price: "13.99" }
        ]
    },
    {
        category: "Chef's Specials",
        items: [
            { name: "Chicken Broccoli", description: "Garlic, broccoli and chicken in alfredo sauce over tortellini", price: "18.99" },
            { name: "Viva Italia", description: "Chicken, mushrooms and italian sausage w/alfredo sauce over ziti", price: "21.99" },
            { name: "Chef's Favorite", description: "Four shrimp, chicken and capers w/alfredo sauce over tortellini", price: "22.99" },
            { name: "Chicken Genevis", description: "Chicken breast, mushrooms w/alla panna sauce topped w/mozzarella cheese over spaghetti", price: "21.99" },
            { name: "Baked Tuscany", description: "Sautéed garlic, basil, spinach, shrimp, chicken & bacon w/spicy alla panna sauce topped w/melted mozzarella over ziti", price: "21.99" },
            { name: "Tour of Italy", description: "Lasagna, chicken parmigiana & fettuccine alfredo", price: "24.99" }
        ]
    },
    {
        category: "Seafood",
        items: [
            { name: "Baked Shrimp Florentine", description: "Shrimp, spinach, mushrooms, garlic & basil w/alfredo & melted mozzarella over ziti", price: "22.99" },
            { name: "Linguine Tutto Mare", description: "Shrimp, mussels, chopped clams, scallops & calamari w/light white wine sauce over linguine", price: "22.99" },
            { name: "Mussels & Shrimp Alla Diavola", description: "Mussels, shrimp, onions, garlic & basil w/spicy marinara over linguine", price: "22.99" },
            { name: "Lobster Ravioli", description: "Four lobster stuffed ravioli shells w/alla panna sauce", price: "20.99", note: "*Add 4 shrimp for $4 extra" },
            { name: "Salmon & Shrimp Amore", description: "Salmon, 3 shrimp, capers, roasted red peppers and spinach w/alfredo sauce over linguine", price: "23.99" }
        ]
    },
    {
        category: "House Specials",
        note: "Chicken $17.99 | Shrimp $18.99 | Salmon (8 oz) $22.99 | Veal $23.99 | Ribeye (8 oz) $25.99",
        items: [
            { name: "Picatta", description: "Sautéed capers w/white wine lemon sauce over angel hair", price: "15.99" },
            { name: "Alla Diavola", description: "Garlic & basil w/spicy light tomato sauce over spaghetti", price: "15.99" },
            { name: "Tortellini Modo Mio", description: "Broccoli & tomatoes w/light white wine sauce over tortellini", price: "15.99" },
            { name: "Louisiana", description: "Garlic, mushrooms & broccoli with creamy louisiana sauce over linguine", price: "15.99" },
            { name: "Fettuccine Alfredo", description: "Creamy white wine sauce served over fettuccini", price: "15.99" },
            { name: "Portofino", description: "Broccoli and tomatoes in alfredo sauce served over ziti pasta", price: "15.99" },
            { name: "Marsala", description: "Mushrooms sautéed w/garlic & basil in a marsala wine sauce over spaghetti", price: "15.99" },
            { name: "Scampi", description: "Garlic, basil in a light marinara lemon sauce over linguine", price: "15.99" },
            { name: "Tuscan", description: "Garlic, sun-dried tomatoes, artichoke hearts & spinach w/alla panna sauce over spaghetti", price: "15.99" },
            { name: "Pomodoro", description: "Fresh tomatoes, basil, sherry wine w/light marinara sauce served over ziti", price: "15.99" },
            { name: "Dama Bianca", description: "Garlic, basil & mushrooms w/alfredo over spaghetti", price: "15.99" },
            { name: "Murphy", description: "Mushrooms, artichokes & jalapeños w/alla panna sauce over spaghetti", price: "15.99" }
        ]
    },
    {
        category: "Calzone & Stromboli",
        items: [
            { name: "Calzone", description: "Choice of topping (sausage or canadian bacon), mozzarella and ricotta cheese, wrapped in pizza crust and served with marinara", price: "13.99" },
            { name: "Stromboli", description: "Pepperoni, sausage, hamburger and canadian bacon with mozzarella cheese wrapped in pizza crust and served with marinara", price: "13.99" },
            { name: "Calzone Primavera", description: "Mix of green peppers, mushrooms and onions with mozzarella and ricotta cheese, wrapped in pizza crust and served with marinara", price: "13.99" },
            { name: "Spinach Calzone", description: "Spinach with ricotta and mozzarella cheese, served with alfredo sauce", price: "13.99" }
        ]
    },
    {
        category: "Pizza",
        note: "Toppings: pepperoni, canadian bacon, hamburger, sausage, bacon, jalapeños, spinach, mushrooms, onion, green peppers, black olives, basil, tomato.",
        items: [
            { name: 'Small 10"', description: "$1 per topping", price: "8.99" },
            { name: 'Large 16"', description: "$2 per topping (*Takeaway only)", price: "14.99" }
        ]
    }
];

const MenuPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Menu</h1>
          <p className="mt-4 text-xl text-gray-500">Delightful Italian dishes made with the freshest ingredients.</p>
        </div>

        {menuData.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-3xl font-bold text-center text-red-700 mb-4 font-serif">{category.category}</h2>
            {category.note && (
              <p className="text-center text-gray-800 -mt-2 mb-6 text-base">{category.note}</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {category.items.map((item) => (
                <div key={item.name} className="py-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name} {item.icon}
                    </h3>
                    <div className="flex-grow border-b border-dashed border-gray-300 mx-2"></div>
                    <p className="text-lg font-semibold text-gray-800">${item.price}</p>
                  </div>
                  {item.description && <p className="text-gray-600 mt-1 text-sm">{item.description}</p>}
                  {item.note && <p className="text-gray-600 mt-1 text-sm italic">{item.note}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;