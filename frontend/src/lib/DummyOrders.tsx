// lib/dummyOrders.js

export const dummyOrders = [
  {
    _id: "ord_1001",
    orderNumber: "KWIK-846D5",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    status: 'Delivered',
    items: [
      { name: "Fresh Organic Apples (1kg)", quantity: 2, price: 120.00 },
      { name: "Whole Wheat Bread", quantity: 1, price: 50.00 },
    ],
    totalAmount: 290.00,
    shippingAddress: "123 Green Valley, Spring Field, 110011",
  },
  {
    _id: "ord_1002",
    orderNumber: "KWIK-9B1A7",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    status: 'Processing',
    items: [
      { name: "Chicken Biryani", quantity: 1, price: 300.00 },
      { name: "Pain Relief Spray (100ml)", quantity: 1, price: 180.00 },
    ],
    totalAmount: 480.00,
    shippingAddress: "456 Tech Park, Cyber City, 220022",
  },
  {
    _id: "ord_1003",
    orderNumber: "KWIK-C3F2E",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    status: 'Cancelled',
    items: [
      { name: "Vegetable Pizza (Medium)", quantity: 1, price: 450.00 },
    ],
    totalAmount: 450.00,
    shippingAddress: "789 Lake View, West Town, 330033",
  },
  {
    _id: "ord_1004",
    orderNumber: "KWIK-E7A4B",
    date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    status: 'Delivered',
    items: [
      { name: "Paracetamol 500mg Tablets (Strip of 10)", quantity: 2, price: 15.00 },
      { name: "Hand Sanitizer (500ml)", quantity: 1, price: 150.00 },
      { name: "First Aid Kit (Basic)", quantity: 1, price: 350.00 },
    ],
    totalAmount: 530.00,
    shippingAddress: "123 Green Valley, Spring Field, 110011",
  },
] as const;