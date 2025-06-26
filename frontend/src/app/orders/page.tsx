// app/my-orders/page.tsx
import OrderHistory from "@/components/orders/OrderHistory";

export default function MyOrdersPage() {
    return (
        <main className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                        My Order History
                    </h1>
                    <p className="text-lg text-gray-600">
                        Track your past and current orders here.
                    </p>
                </div>

                <OrderHistory />
            </div>
        </main>
    );
}