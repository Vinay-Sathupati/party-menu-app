export const dishList = [
  // STARTERS
  {
    "categoryId": 1,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Crispy potato patties served with chutneys.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 1,
      "name": "Indian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "STARTER",
    "id": 101,
    "name": "Aloo Tikki",
    "ingredients": [
      { "name": "Potato", "quantity": "2 large" },
      { "name": "Chili", "quantity": "1 tsp" },
      { "name": "Coriander", "quantity": "1 tbsp" }
    ]
  },
  {
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Hot and spicy chicken wings glazed with sauce.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 2,
      "name": "American",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "STARTER",
    "id": 102,
    "name": "Buffalo Wings",
    "ingredients": [
      { "name": "Chicken Wings", "quantity": "10 pcs" },
      { "name": "Hot Sauce", "quantity": "3 tbsp" },
      { "name": "Butter", "quantity": "2 tbsp" }
    ]
  },
  {
    "categoryId": 3,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Golden fried vegetable spring rolls served with chili sauce.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 3,
      "name": "Asian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "STARTER",
    "id": 103,
    "name": "Spring Rolls",
    "ingredients": [
      { "name": "Cabbage", "quantity": "1 cup" },
      { "name": "Carrot", "quantity": "1/2 cup" },
      { "name": "Soy Sauce", "quantity": "2 tbsp" }
    ]
  },

  // MAIN COURSE
  {
    "categoryId": 4,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes cooked in rich, spiced tomato gravy.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 4,
      "name": "Indian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "MAIN COURSE",
    "id": 104,
    "name": "Paneer Butter Masala",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Tomato Puree", "quantity": "1 cup" },
      { "name": "Cream", "quantity": "1/2 cup" }
    ]
  },
  {
    "categoryId": 5,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Classic chicken curry with aromatic spices.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 5,
      "name": "Indian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "MAIN COURSE",
    "id": 105,
    "name": "Chicken Curry",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Onion", "quantity": "2 large" },
      { "name": "Spices", "quantity": "2 tbsp" }
    ]
  },
  {
    "categoryId": 6,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Italian pasta tossed with basil pesto sauce.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 6,
      "name": "Italian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "MAIN COURSE",
    "id": 106,
    "name": "Pesto Pasta",
    "ingredients": [
      { "name": "Pasta", "quantity": "200g" },
      { "name": "Pesto", "quantity": "4 tbsp" },
      { "name": "Parmesan", "quantity": "2 tbsp" }
    ]
  },

  // DESSERTS
  {
    "categoryId": 7,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Traditional Indian dessert made with carrots and milk.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 7,
      "name": "Indian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "DESSERT",
    "id": 107,
    "name": "Gajar Halwa",
    "ingredients": [
      { "name": "Carrot", "quantity": "500g" },
      { "name": "Milk", "quantity": "2 cups" },
      { "name": "Sugar", "quantity": "1 cup" }
    ]
  },
  {
    "categoryId": 8,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Creamy Italian dessert with mascarpone and coffee.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 8,
      "name": "Italian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "DESSERT",
    "id": 108,
    "name": "Tiramisu",
    "ingredients": [
      { "name": "Mascarpone", "quantity": "250g" },
      { "name": "Coffee", "quantity": "1 cup" },
      { "name": "Cocoa Powder", "quantity": "2 tbsp" }
    ]
  },
  {
    "categoryId": 9,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Rich chocolate cake topped with ganache.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 9,
      "name": "French",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "DESSERT",
    "id": 109,
    "name": "Chocolate Cake",
    "ingredients": [
      { "name": "Flour", "quantity": "2 cups" },
      { "name": "Cocoa Powder", "quantity": "1/2 cup" },
      { "name": "Butter", "quantity": "100g" }
    ]
  },

  // SIDES
  {
    "categoryId": 10,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Soft bread baked with garlic and butter.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 10,
      "name": "Italian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "SIDES",
    "id": 110,
    "name": "Garlic Bread",
    "ingredients": [
      { "name": "Bread", "quantity": "4 slices" },
      { "name": "Garlic", "quantity": "2 cloves" },
      { "name": "Butter", "quantity": "2 tbsp" }
    ]
  },
  {
    "categoryId": 11,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Classic French fries sprinkled with salt.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 11,
      "name": "American",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": true
    },
    "dishType": "SIDES",
    "id": 111,
    "name": "French Fries",
    "ingredients": [
      { "name": "Potato", "quantity": "2 large" },
      { "name": "Oil", "quantity": "500ml" },
      { "name": "Salt", "quantity": "to taste" }
    ]
  },
  {
    "categoryId": 12,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Steamed basmati rice, fluffy and aromatic.",
    "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757766893/image_191_kryog8.jpg",
    "category": {
      "id": 12,
      "name": "Indian",
      "image": "https://res.cloudinary.com/dxcwdueld/image/upload/v1757879774/image_207_edwnny.jpg",
      "isRecommendedForMealSuggestion": false
    },
    "dishType": "SIDES",
    "id": 112,
    "name": "Steamed Rice",
    "ingredients": [
      { "name": "Basmati Rice", "quantity": "1 cup" },
      { "name": "Water", "quantity": "2 cups" },
      { "name": "Salt", "quantity": "1 tsp" }
    ]
  }
];
