"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import CartItem from "@/components/cart/CartItem";
import PriceSummary from "@/components/cart/PriceSummary";
import DeliveryDetailsModal from "@/components/modals/DeliveryDetailsModal";
import Button from "@/components/Button"; // Your existing Button component
import { ShoppingCart } from "lucide-react";

// Define the type for a cart item for type safety
export interface CartItemType {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
}

// Mock data to simulate a real cart
const initialCartItems: CartItemType[] = [
  { id: 1, name: "Mix Vegetable Basket", brand: "Raj groceries", price: 120.00, quantity: 1, image: "/Grocery.jpg" },
  { id: 2, name: "Black Forest Cake", brand: "Arora Dreams", price: 99.50, quantity: 2, image: "/Restaurant.jpg" },
  { id: 3, name: "Paracetamol", brand: "Navjeevan", price: 15.00, quantity: 1, image: "/Pharmacy.jpg" },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialCartItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      handleRemoveItem(itemId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };
  
  const handlePlaceOrder = (deliveryDetails: any) => {
    console.log("ORDER PLACED!", {
      orderItems: cartItems,
      deliveryDetails,
    });
    // In a real app, you would send this to your backend
    alert("Your order has been placed successfully!");
    setIsModalOpen(false);
    setCartItems([]); // Clear the cart
    router.push('/order-confirmation'); // Redirect to a confirmation page
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <>
      <div className="bg-white min-h-screen">
        <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Shopping Cart</h1>
          
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>
              
              {cartItems.length > 0 ? (
                <ul role="list" className="border-t border-b border-slate-200 divide-y divide-slate-200">
                  {cartItems.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      onQuantityChange={handleQuantityChange} 
                      onRemove={handleRemoveItem} 
                    />
                  ))}
                </ul>
              ) : (
                <div className="text-center py-16 px-4 border-2 border-dashed border-slate-300 rounded-lg">
                  <ShoppingCart className="mx-auto h-12 w-12 text-slate-400" />
                  <h3 className="mt-2 text-sm font-medium text-slate-900">Your cart is empty</h3>
                  <p className="mt-1 text-sm text-slate-500">Start adding some products to see them here.</p>
                  <div className="mt-6">
                    <Button onClick={() => router.push('/')} className="bg-yellow-500 text-slate-900 hover:bg-yellow-600 font-bold">
                      Start Shopping
                    </Button>
                  </div>
                </div>
              )}
            </section>

            {/* Order summary */}
            <PriceSummary subtotal={subtotal} onConfirm={() => setIsModalOpen(true)} disabled={cartItems.length === 0} />
          </div>
        </main>
      </div>

      <DeliveryDetailsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePlaceOrder}
      />
    </>
  );
}