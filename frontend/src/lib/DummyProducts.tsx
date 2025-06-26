// lib/dummyProducts.js

// Define mappings for category and subcategory IDs to names
const categoryMapping = {
  "65c3e7b0e1a1b4c5d6e7f8a1": "Groceries",
  "65c3e7b0e1a1b4c5d6e7f8a2": "Pharmacy",
  "65c3e7b0e1a1b4c5d6e7f8a3": "Food & Restaurants"
};

const subcategoryMapping = {
  "65c3e7b0e1a1b4c5d6e7f8b1": "Fruits & Vegetables",
  "65c3e7b0e1a1b4c5d6e7f8b2": "Dairy & Bakery",
  "65c3e7b0e1a1b4c5d6e7f8b3": "Medicines",
  "65c3e7b0e1a1b4c5d6e7f8b4": "Health & Wellness",
  "65c3e7b0e1a1b4c5d6e7f8b5": "Indian Cuisine",
  "65c3e7b0e1a1b4c5d6e7f8b6": "Fast Food & Snacks"
};

const dummyProducts = [
  {
    "id": "prod-001",
    "name": "Fresh Organic Apples (1kg)",
    "image": [
        "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b1"], // Replaced ID with name
    "unit": "kg",
    "stock": 150,
    "price": 120.00,
    "discount": 5,
    "description": "Crisp and juicy organic apples, perfect for snacking or baking. Sourced directly from local farms.",
    "more_details": {
      "origin": "Himachal Pradesh",
      "storage": "Refrigerate"
    },
    "published": true
  },
  {
    "id": "prod-002",
    "name": "Whole Wheat Bread",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b2"], // Replaced ID with name
    "unit": "loaf",
    "stock": 80,
    "price": 50.00,
    "discount": 0,
    "description": "Freshly baked whole wheat bread, high in fiber and perfect for a healthy breakfast.",
    "more_details": {
      "weight": "400g",
      "allergens": "Gluten"
    },
    "published": true
  },
  {
    "id": "prod-003",
    "name": "Paracetamol 500mg Tablets (Strip of 10)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b3"], // Replaced ID with name
    "unit": "strip",
    "stock": 300,
    "price": 15.00,
    "discount": 0,
    "description": "Standard pain relief and fever reducer. Consult a doctor before use.",
    "more_details": {
      "manufacturer": "XYZ Pharma",
      "dosage": "500mg"
    },
    "published": true
  },
  {
    "id": "prod-004",
    "name": "Multivitamin Tablets (Bottle of 30)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b4"], // Replaced ID with name
    "unit": "bottle",
    "stock": 120,
    "price": 250.00,
    "discount": 10,
    "description": "Daily multivitamin to support overall health and immunity.",
    "more_details": {
      "ingredients": "Vitamins A, C, D, E, B-complex",
      "usage": "Once daily after meal"
    },
    "published": true
  },
  {
    "id": "prod-005",
    "name": "Chicken Biryani",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b5"], // Replaced ID with name
    "unit": "plate",
    "stock": 50,
    "price": 300.00,
    "discount": 15,
    "description": "Aromatic basmati rice cooked with tender chicken pieces and exotic spices.",
    "more_details": {
      "spicy_level": "Medium",
      "serving_size": "1 person"
    },
    "published": true
  },
  {
    "id": "prod-006",
    "name": "Vegetable Pizza (Medium)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b6"], // Replaced ID with name
    "unit": "pizza",
    "stock": 30,
    "price": 450.00,
    "discount": 0,
    "description": "Freshly baked pizza topped with a variety of seasonal vegetables and mozzarella cheese.",
    "more_details": {
      "crust_type": "Thin Crust",
      "serves": "2-3 people"
    },
    "published": true
  },
  {
    "id": "prod-007",
    "name": "Banana (Dozen)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b1"], // Replaced ID with name
    "unit": "dozen",
    "stock": 100,
    "price": 60.00,
    "discount": 0,
    "description": "Farm-fresh ripe bananas, great for energy and smoothies.",
    "more_details": {},
    "published": true
  },
  {
    "id": "prod-008",
    "name": "Cow's Milk (1 Liter)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b2"], // Replaced ID with name
    "unit": "liter",
    "stock": 200,
    "price": 70.00,
    "discount": 0,
    "description": "Pure and fresh cow's milk, pasteurized and homogenized.",
    "more_details": {
      "fat_content": "3.5%"
    },
    "published": true
  },
  {
    "id": "prod-009",
    "name": "Cough Syrup (100ml)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b3"], // Replaced ID with name
    "unit": "bottle",
    "stock": 75,
    "price": 90.00,
    "discount": 0,
    "description": "Effective relief from cough and cold symptoms.",
    "more_details": {
      "flavor": "Honey Lemon"
    },
    "published": true
  },
  {
    "id": "prod-010",
    "name": "Band-Aids (Pack of 20)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b4"], // Replaced ID with name
    "unit": "pack",
    "stock": 180,
    "price": 40.00,
    "discount": 0,
    "description": "Sterile adhesive bandages for minor cuts and scrapes.",
    "more_details": {
      "sizes_included": "Assorted"
    },
    "published": true
  },
  {
    "id": "prod-011",
    "name": "Veg Thali",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b5"], // Replaced ID with name
    "unit": "plate",
    "stock": 40,
    "price": 220.00,
    "discount": 10,
    "description": "A complete vegetarian meal with assorted curries, rice, and bread.",
    "more_details": {
      "includes": "Dal, Paneer, Rice, Roti, Salad"
    },
    "published": true
  },
  {
    "id": "prod-012",
    "name": "Burger with Fries",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b6"], // Replaced ID with name
    "unit": "set",
    "stock": 60,
    "price": 180.00,
    "discount": 5,
    "description": "Juicy burger with fresh toppings, served with crispy french fries.",
    "more_details": {
      "patty_type": "Veggie",
      "condiments": "Ketchup, Mayonnaise"
    },
    "published": true
  },
  {
    "id": "prod-013",
    "name": "Basmati Rice (5kg)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b2"], // Replaced ID with name
    "unit": "bag",
    "stock": 90,
    "price": 550.00,
    "discount": 0,
    "description": "Premium long-grain basmati rice, ideal for biryani and pulao.",
    "more_details": {
      "grain_type": "Extra Long Grain"
    },
    "published": true
  },
  {
    "id": "prod-014",
    "name": "Detergent Powder (1kg)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b2"], // Replaced ID with name
    "unit": "pack",
    "stock": 110,
    "price": 95.00,
    "discount": 2,
    "description": "High-quality detergent powder for sparkling clean clothes.",
    "more_details": {
      "fragrance": "Lemon Fresh"
    },
    "published": true
  },
  {
    "id": "prod-015",
    "name": "Antacid Tablets (Chewable, 15 tabs)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b3"], // Replaced ID with name
    "unit": "strip",
    "stock": 140,
    "price": 25.00,
    "discount": 0,
    "description": "Fast relief from acidity and heartburn.",
    "more_details": {
      "flavor": "Mint"
    },
    "published": true
  },
  {
    "id": "prod-016",
    "name": "Hand Sanitizer (500ml)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b4"], // Replaced ID with name
    "unit": "bottle",
    "stock": 250,
    "price": 150.00,
    "discount": 5,
    "description": "Alcohol-based hand sanitizer for effective germ protection.",
    "more_details": {
      "alcohol_content": "70%"
    },
    "published": true
  },
  {
    "id": "prod-017",
    "name": "Paneer Butter Masala",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b5"], // Replaced ID with name
    "unit": "portion",
    "stock": 35,
    "price": 280.00,
    "discount": 10,
    "description": "Creamy and rich Indian curry with soft paneer cubes.",
    "more_details": {
      "serves": "1-2 people"
    },
    "published": true
  },
  {
    "id": "prod-018",
    "name": "Masala Dosa",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b6"], // Replaced ID with name
    "unit": "piece",
    "stock": 70,
    "price": 90.00,
    "discount": 0,
    "description": "Crispy South Indian crepe filled with spiced potato masala, served with sambar and chutneys.",
    "more_details": {
      "gluten_free": "No"
    },
    "published": true
  },
  {
    "id": "prod-019",
    "name": "Tomatoes (500g)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b1"], // Replaced ID with name
    "unit": "gram",
    "stock": 200,
    "price": 40.00,
    "discount": 0,
    "description": "Fresh, ripe red tomatoes, essential for Indian cooking.",
    "more_details": {
      "type": "Hybrid"
    },
    "published": true
  },
  {
    "id": "prod-020",
    "name": "Atta (Whole Wheat Flour) 1kg",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b2"], // Replaced ID with name
    "unit": "kg",
    "stock": 100,
    "price": 65.00,
    "discount": 0,
    "description": "Finely milled whole wheat flour for soft rotis and chapatis.",
    "more_details": {
      "gluten_content": "Medium"
    },
    "published": true
  },
  {
    "id": "prod-021",
    "name": "Pain Relief Spray (100ml)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b3"], // Replaced ID with name
    "unit": "bottle",
    "stock": 90,
    "price": 180.00,
    "discount": 5,
    "description": "Topical pain relief spray for muscle aches and sprains.",
    "more_details": {
      "active_ingredients": "Diclofenac, Methyl Salicylate"
    },
    "published": true
  },
  {
    "id": "prod-022",
    "name": "First Aid Kit (Basic)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b4"], // Replaced ID with name
    "unit": "kit",
    "stock": 60,
    "price": 350.00,
    "discount": 0,
    "description": "Essential items for minor injuries and emergencies.",
    "more_details": {
      "contents": "Bandages, antiseptic wipes, cotton, tape"
    },
    "published": true
  },
  {
    "id": "prod-023",
    "name": "Butter Chicken",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b5"], // Replaced ID with name
    "unit": "portion",
    "stock": 45,
    "price": 350.00,
    "discount": 10,
    "description": "Classic Indian dish with succulent chicken in a rich, creamy tomato gravy.",
    "more_details": {
      "spicy_level": "Mild"
    },
    "published": true
  },
  {
    "id": "prod-024",
    "name": "Sushi Platter (Veg)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b6"], // Replaced ID with name
    "unit": "platter",
    "stock": 25,
    "price": 600.00,
    "discount": 15,
    "description": "Assorted vegetarian sushi rolls with fresh ingredients.",
    "more_details": {
      "pieces": "8 pieces"
    },
    "published": true
  },
  {
    "id": "prod-025",
    "name": "Capsicum (250g)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b1"], // Replaced ID with name
    "unit": "gram",
    "stock": 180,
    "price": 30.00,
    "discount": 0,
    "description": "Fresh green bell peppers, great for salads and stir-fries.",
    "more_details": {
      "color": "Green"
    },
    "published": true
  },
  {
    "id": "prod-026",
    "name": "Cooking Oil (1 Liter)",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a1"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b2"], // Replaced ID with name
    "unit": "liter",
    "stock": 130,
    "price": 160.00,
    "discount": 0,
    "description": "Refined sunflower oil, suitable for all types of cooking.",
    "more_details": {
      "fat_type": "Polyunsaturated"
    },
    "published": true
  },
  {
    "id": "prod-027",
    "name": "Blood Pressure Monitor",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b4"], // Replaced ID with name
    "unit": "device",
    "stock": 40,
    "price": 1200.00,
    "discount": 50,
    "description": "Digital blood pressure monitor for home use, accurate readings.",
    "more_details": {
      "display_type": "LCD",
      "memory": "60 readings"
    },
    "published": true
  },
  {
    "id": "prod-028",
    "name": "Dental Floss",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a2"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b3"], // Replaced ID with name
    "unit": "pack",
    "stock": 200,
    "price": 70.00,
    "discount": 0,
    "description": "Mint-flavored dental floss for effective plaque removal.",
    "more_details": {
      "length": "50m"
    },
    "published": true
  },
  {
    "id": "prod-029",
    "name": "Chicken Shawarma",
    "image": [
      "/Grocery.jpg"
    ],
    "category": categoryMapping["65c3e7b0e1a1b4c5d6e7f8a3"], // Replaced ID with name
    "subcategory": subcategoryMapping["65c3e7b0e1a1b4c5d6e7f8b6"], // Replaced ID with name
    "unit": "roll",
    "stock": 55,
    "price": 200.00,
    "discount": 0,
    "description": "Delicious Middle Eastern chicken wrap with fresh vegetables and sauces.",
    "more_details": {
      "bread_type": "Pita"
    },
    "published": true
  }
];

export default dummyProducts;