export interface Product {
  id: string;
  name: string;
  image: string[];
  category: string;
  subcategory: string;
  unit: string;
  stock: number;
  price: number;
  discount: number;
  description: string;
  more_details: Record<string, any>;
  published: boolean;
}

export interface OrderItem {
  readonly name: string;     
  readonly quantity: number; 
  readonly price: number;    
}

export interface Order {
  readonly _id: string;                      
  readonly orderNumber: string;              
  readonly date: string;                     
  readonly status: 'Processing' | 'Delivered' | 'Cancelled';
  readonly items: readonly OrderItem[];      
  readonly totalAmount: number;              
  readonly shippingAddress: string;          
}

// types/index.ts

// ... (your existing Product and Order interfaces) ...

// --- ADD THESE NEW INTERFACES ---

export interface Address {
  readonly type: 'Home' | 'Work' | 'Other';
  readonly line1: string;
  readonly city: string;
  readonly state: string;
  readonly pincode: string;
  readonly isDefault: boolean;
}

export interface User {
  readonly _id: string;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly profilePicture: string;
  readonly memberSince: string; // ISO date string
  readonly addresses: readonly Address[];
}