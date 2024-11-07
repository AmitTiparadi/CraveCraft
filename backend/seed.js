// seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Recipe = require('./models/Recipe'); // Adjust the path if your models are in a different directory

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected for seeding');
    seedRecipes();
  })
  .catch((err) => console.error(err));

// Sample recipes
const recipes = [
  // North Indian Recipes
  {
    name: 'Butter Chicken',
    category: 'northindian',
    description: 'A creamy and spiced curry with tender chicken pieces.',
    ingredients: [
      '500g boneless chicken',
      '2 cups tomato puree',
      '1 cup heavy cream',
      '2 onions, chopped',
      '2 tbsp butter',
      '1 tbsp ginger-garlic paste',
      'Garam masala, turmeric, chili powder',
      'Salt to taste',
    ],
    directions:
      'Marinate chicken with spices and yogurt. Sauté onions, add tomato puree and spices, cook until thickened. Add chicken and simmer. Stir in cream and butter before serving.',
  },
  {
    name: 'Palak Paneer',
    category: 'northindian',
    description: 'Spinach-based curry with paneer cubes.',
    ingredients: [
      '200g paneer, cubed',
      '4 cups spinach leaves',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tbsp ginger-garlic paste',
      'Cumin, coriander powder, garam masala',
      '2 tbsp cream',
      'Salt to taste',
    ],
    directions:
      'Blanch spinach, puree it. Sauté onions and spices, add tomatoes, cook until soft. Add spinach and paneer, simmer for 5 minutes. Stir in cream before serving.',
  },
  {
    name: 'Chole Bhature',
    category: 'northindian',
    description: 'Spicy chickpea curry served with fried bread.',
    ingredients: [
      '2 cups chickpeas, soaked',
      '2 onions, chopped',
      '2 tomatoes, chopped',
      'Ginger-garlic paste, chole masala, chili powder',
      '2 cups flour',
      '1 cup yogurt',
      'Salt and oil for frying',
    ],
    directions:
      'Boil chickpeas, then sauté with onions, tomatoes, and spices. Mix flour, yogurt, and water, knead, and roll into discs. Deep fry for bhature.',
  },
  {
    name: 'Rajma Chawal',
    category: 'northindian',
    description: 'Kidney beans in a thick gravy served over rice.',
    ingredients: [
      '1 cup kidney beans, soaked',
      '2 onions, chopped',
      '2 tomatoes, chopped',
      'Ginger-garlic paste, spices (cumin, garam masala)',
      'Salt to taste',
      'Rice for serving',
    ],
    directions:
      'Boil kidney beans. Sauté onions, add tomatoes and spices, add beans, simmer until thick. Serve over rice.',
  },
  {
    name: 'Paneer Tikka',
    category: 'northindian',
    description: 'Grilled marinated paneer cubes served as a starter.',
    ingredients: [
      '200g paneer, cubed',
      '1 cup yogurt',
      'Ginger-garlic paste, spices (coriander, garam masala, chili powder)',
      'Lemon juice',
      'Vegetable oil',
    ],
    directions:
      'Marinate paneer cubes in yogurt, spices, and lemon juice. Grill or bake until golden brown.',
  },
  {
    name: 'Aloo Gobi',
    category: 'northindian',
    description: 'Potato and cauliflower curry with spices.',
    ingredients: [
      '2 potatoes, cubed',
      '1 cauliflower, cut into florets',
      '1 onion, chopped',
      '1 tomato, chopped',
      'Ginger-garlic paste, turmeric, cumin',
      'Salt to taste',
    ],
    directions:
      'Sauté onions, add potatoes and cauliflower with spices, cover and cook until tender.',
  },
  {
    name: 'Bhindi Masala',
    category: 'northindian',
    description: 'Stir-fried okra with onions and spices.',
    ingredients: [
      '250g okra, sliced',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      'Ginger-garlic paste, spices (turmeric, coriander powder)',
      'Salt to taste',
    ],
    directions:
      'Sauté okra until lightly browned. Remove and set aside. In the same pan, cook onions, tomatoes, and spices. Mix with okra before serving.',
  },
  {
    name: 'Kadhai Paneer',
    category: 'northindian',
    description: 'Paneer cooked in a spicy bell pepper and tomato sauce.',
    ingredients: [
      '200g paneer, cubed',
      '1 bell pepper, sliced',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      'Ginger-garlic paste, spices (kadhai masala, garam masala)',
      'Salt to taste',
    ],
    directions:
      'Sauté paneer, onions, and bell pepper with kadhai masala. Add tomatoes and simmer until thickened.',
  },
  {
    name: 'Dal Makhani',
    category: 'northindian',
    description: 'Creamy black lentil and kidney bean curry.',
    ingredients: [
      '1 cup black lentils',
      '1/4 cup kidney beans',
      '2 onions, chopped',
      '2 tomatoes, chopped',
      'Ginger-garlic paste, butter, cream',
      'Spices (garam masala, chili powder)',
      'Salt to taste',
    ],
    directions:
      'Boil lentils and beans. Sauté onions, add tomatoes and spices. Add lentils and beans, simmer with butter and cream.',
  },
  {
    name: 'Matar Paneer',
    category: 'northindian',
    description: 'Paneer and peas cooked in a spiced tomato gravy.',
    ingredients: [
      '200g paneer, cubed',
      '1 cup green peas',
      '2 onions, chopped',
      '2 tomatoes, chopped',
      'Ginger-garlic paste, garam masala, turmeric',
      'Salt to taste',
    ],
    directions:
      'Sauté onions and spices, add tomatoes and cook until thick. Add peas and paneer, simmer for 10 minutes.',
  },
    // South Indian Recipes
    {
      name: 'Masala Dosa',
      category: 'southindian',
      description: 'A crispy crepe filled with spiced potato masala.',
      ingredients: [
        '2 cups rice',
        '1 cup urad dal',
        'Potato masala (potatoes, onions, spices)',
        'Oil for cooking',
        'Salt to taste',
      ],
      directions:
        'Soak rice and dal separately for 6 hours, grind to a smooth batter, and ferment overnight. Spread batter on a hot griddle and place potato masala in the center. Fold and serve with chutney.',
    },
    {
      name: 'Idli Sambar',
      category: 'southindian',
      description: 'Steamed rice cakes served with lentil and vegetable stew.',
      ingredients: [
        '2 cups rice',
        '1 cup urad dal',
        'Sambar (toor dal, vegetables, tamarind, spices)',
        'Salt to taste',
      ],
      directions:
        'Soak rice and dal, grind to a batter, and ferment. Steam batter in idli molds for 10-12 minutes. Serve with sambar and chutney.',
    },
    {
      name: 'Vada',
      category: 'southindian',
      description: 'Deep-fried lentil doughnuts, crispy and soft.',
      ingredients: [
        '1 cup urad dal',
        'Green chilies, chopped',
        'Ginger, grated',
        'Curry leaves',
        'Oil for frying',
        'Salt to taste',
      ],
      directions:
        'Soak dal, grind to a thick batter, add spices, and shape into rounds. Deep fry until golden.',
    },
    {
      name: 'Bisi Bele Bath',
      category: 'southindian',
      description: 'Spiced rice and lentil dish with vegetables.',
      ingredients: [
        '1 cup rice',
        '1/2 cup toor dal',
        'Mixed vegetables (carrot, beans, peas)',
        'Bisi Bele Bath powder',
        'Tamarind paste',
        'Ghee for tempering',
        'Salt to taste',
      ],
      directions:
        'Cook rice and dal, boil vegetables. Mix with tamarind, spices, and temper with ghee before serving.',
    },
    {
      name: 'Pongal',
      category: 'southindian',
      description: 'Rice and dal cooked with spices, a festive dish.',
      ingredients: [
        '1 cup rice',
        '1/2 cup moong dal',
        'Pepper, cumin seeds, curry leaves',
        'Ghee',
        'Salt to taste',
      ],
      directions:
        'Roast dal, cook with rice. Temper with spices and serve hot.',
    },
    {
      name: 'Chicken Chettinad',
      category: 'southindian',
      description: 'Spicy chicken curry with Chettinad spices.',
      ingredients: [
        '500g chicken',
        'Chettinad masala (cinnamon, cloves, coriander seeds)',
        'Curry leaves',
        '2 onions, chopped',
        '2 tomatoes, chopped',
        'Salt to taste',
      ],
      directions:
        'Marinate chicken with spices. Sauté onions, add tomatoes and chicken, cook until tender.',
    },
    {
      name: 'Appam',
      category: 'southindian',
      description: 'Soft and fluffy rice pancakes, often served with stew.',
      ingredients: [
        '2 cups rice',
        '1/4 cup grated coconut',
        '1/4 cup sugar',
        '1/2 tsp yeast',
        'Salt to taste',
      ],
      directions:
        'Soak rice, grind with coconut and sugar, ferment batter with yeast. Pour in appam pan and cook until golden.',
    },
    {
      name: 'Rasam',
      category: 'southindian',
      description: 'A tangy tomato and tamarind soup with spices.',
      ingredients: [
        'Tomatoes, chopped',
        'Tamarind paste',
        'Rasam powder',
        'Curry leaves',
        'Coriander leaves',
        'Salt to taste',
      ],
      directions:
        'Boil tomatoes, add tamarind, spices, and season with curry leaves and coriander.',
    },
    {
      name: 'Puttu',
      category: 'southindian',
      description: 'Steamed rice flour and coconut dish, usually with banana.',
      ingredients: [
        '2 cups rice flour',
        '1 cup grated coconut',
        'Water',
        'Salt to taste',
      ],
      directions:
        'Mix rice flour with water, layer with coconut, steam until cooked. Serve with banana.',
    },
    {
      name: 'Fish Curry',
      category: 'southindian',
      description: 'Fish cooked in a tangy coconut and tamarind gravy.',
      ingredients: [
        '500g fish',
        'Coconut milk',
        'Tamarind paste',
        'Spices (chili powder, turmeric)',
        'Curry leaves',
        'Salt to taste',
      ],
      directions:
        'Marinate fish, cook in coconut milk, tamarind, and spices until fish is tender.',
    },
  
    // Continental Recipes
    {
      name: 'Spaghetti Bolognese',
      category: 'continental',
      description: 'A classic Italian pasta with rich meat sauce.',
      ingredients: [
        '400g spaghetti',
        '500g ground beef',
        'Onion, garlic, chopped',
        'Canned tomatoes',
        'Tomato paste, basil, oregano',
        'Olive oil, salt, pepper',
      ],
      directions:
        'Cook spaghetti. Sauté onions, add beef, tomatoes, and herbs. Simmer and serve over spaghetti.',
    },
    {
      name: 'Caesar Salad',
      category: 'continental',
      description: 'Romaine lettuce, croutons, parmesan, with creamy dressing.',
      ingredients: [
        'Romaine lettuce',
        'Croutons',
        'Parmesan cheese, grated',
        'Caesar dressing',
        'Grilled chicken (optional)',
      ],
      directions:
        'Toss lettuce with dressing, add croutons, cheese, and chicken if desired.',
    },
    {
      name: 'Fish and Chips',
      category: 'continental',
      description: 'Crispy battered fish served with fries.',
      ingredients: [
        'White fish fillets',
        'Flour, baking powder, cold water',
        'Potatoes for fries',
        'Oil for frying, salt',
      ],
      directions:
        'Coat fish in batter, fry until golden. Serve with fries.',
    },
    {
      name: 'Grilled Chicken',
      category: 'continental',
      description: 'Simple grilled chicken with herbs and garlic.',
      ingredients: [
        '4 chicken breasts',
        'Garlic, herbs (rosemary, thyme)',
        'Olive oil, salt, pepper',
      ],
      directions:
        'Marinate chicken with herbs and garlic. Grill until cooked through.',
    },
    {
      name: 'Minestrone Soup',
      category: 'continental',
      description: 'Vegetable and bean soup with pasta.',
      ingredients: [
        'Vegetable broth, tomatoes',
        'Carrot, celery, beans, pasta',
        'Herbs (basil, oregano)',
        'Salt, pepper',
      ],
      directions:
        'Sauté vegetables, add broth, beans, pasta, and herbs. Simmer until vegetables are tender.',
    },
    {
      name: 'Beef Stroganoff',
      category: 'continental',
      description: 'Beef strips in a creamy mushroom sauce, served over pasta.',
      ingredients: [
        '500g beef strips',
        'Mushrooms, sliced',
        'Onion, garlic',
        'Sour cream, beef broth',
        'Salt, pepper',
      ],
      directions:
        'Sauté beef, remove, cook mushrooms. Add broth and sour cream, return beef and simmer.',
    },
    {
      name: 'Fettuccine Alfredo',
      category: 'continental',
      description: 'Pasta in a creamy garlic and parmesan sauce.',
      ingredients: [
        'Fettuccine pasta',
        'Butter, garlic',
        'Heavy cream, parmesan cheese',
        'Salt, pepper',
      ],
      directions:
        'Cook pasta, melt butter with garlic, add cream and parmesan, toss pasta in sauce.',
    },
    {
      name: 'Roast Vegetables',
      category: 'continental',
      description: 'Mixed seasonal vegetables roasted with herbs.',
      ingredients: [
        'Carrots, potatoes, bell peppers, zucchini',
        'Olive oil, rosemary, thyme',
        'Salt, pepper',
      ],
      directions:
        'Toss vegetables with oil and herbs. Roast until tender and golden.',
    },
    {
      name: 'Lemon Garlic Shrimp',
      category: 'continental',
      description: 'Shrimp cooked in a lemon garlic butter sauce.',
      ingredients: [
        '500g shrimp',
        'Butter, garlic',
        'Lemon juice, parsley',
        'Salt, pepper',
      ],
      directions:
        'Sauté garlic in butter, add shrimp and cook until pink. Add lemon juice and parsley.',
    },
    {
      name: 'Greek Salad',
      category: 'continental',
      description: 'A fresh salad with tomatoes, cucumbers, feta cheese, and olives.',
      ingredients: [
        'Tomatoes',
        'Cucumbers',
        'Red onion',
        'Kalamata olives',
        'Feta cheese',
        'Olive oil',
        'Oregano',
        'Salt and pepper to taste',
      ],
      directions:
        'Chop tomatoes, cucumbers, and onions. Toss with olives, crumbled feta, olive oil, and oregano. Season with salt and pepper before serving.',
    },
  ];

  async function seedRecipes() {
    try {
      // Remove all existing recipes
      await Recipe.deleteMany({});
      console.log('Existing recipes removed');
  
      // Insert new recipes
      await Recipe.insertMany(recipes);
      console.log('Recipes seeded successfully');
  
      // Close the database connection
      mongoose.connection.close();
      console.log('Database connection closed');
    } catch (err) {
      console.error('Error seeding recipes:', err);
    }
  }