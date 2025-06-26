// lib/dummyUser.js

export const dummyUser = {
  _id: "user_12345",
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+91 98765 43210",
  profilePicture: "/john.png", // A nice placeholder with initials
  memberSince: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(), // Member for 30 days
  addresses: [
    {
      type: "Home",
      line1: "123 Green Valley, Apt 4B",
      city: "Spring Field",
      state: "State",
      pincode: "110011",
      isDefault: true,
    },
    {
      type: "Work",
      line1: "456 Tech Park, 8th Floor",
      city: "Cyber City",
      state: "State",
      pincode: "220022",
      isDefault: false,
    },
  ],
} as const; // Using 'as const' for type safety