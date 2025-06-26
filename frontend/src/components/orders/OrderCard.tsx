'use client'; // This component now uses state, so it must be a client component

import { useState } from 'react';
import { Order } from '@/components/types';
import { 
    CheckCircleIcon, 
    XCircleIcon, 
    ArrowPathIcon, 
    ChevronDownIcon,
    ChevronUpIcon
} from '@heroicons/react/24/solid';

// The StatusBadge component remains unchanged
const StatusBadge = ({ status }: { status: Order['status'] }) => {
    const statusStyles = {
        Delivered: { icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />, text: 'text-green-700', bg: 'bg-green-100' },
        Processing: { icon: <ArrowPathIcon className="w-5 h-5 text-blue-500" />, text: 'text-blue-700', bg: 'bg-blue-100' },
        Cancelled: { icon: <XCircleIcon className="w-5 h-5 text-red-500" />, text: 'text-red-700', bg: 'bg-red-100' },
    };
    const style = statusStyles[status];
    return (
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${style.bg} ${style.text}`}>
            {style.icon}
            <span>{status}</span>
        </div>
    );
};

export default function OrderCard({ order }: { order: Order }) {
    // STATE to manage the expanded view
    const [isExpanded, setIsExpanded] = useState(false);

    const orderDate = new Date(order.date).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
    });

    const subtotal = order.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    // Assuming shipping is free for this example
    const shippingCost = 0;

    return (
        <div className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
            {/* Clickable summary part */}
            <div className="p-6 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">Order #{order.orderNumber}</h3>
                        <p className="text-sm text-gray-500">Placed on {orderDate}</p>
                    </div>
                    <StatusBadge status={order.status} />
                </div>

                {/* Short Items Summary (only visible when collapsed) */}
                {!isExpanded && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                        <p className="text-sm text-gray-600">
                            {order.items.length} item(s) • Total: <span className="font-bold">₹{order.totalAmount.toFixed(2)}</span>
                        </p>
                    </div>
                )}
            </div>

            {/* EXPANDABLE DETAILS SECTION */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        {/* Left Column: Full Item List */}
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-3">Items in this order</h4>
                            <ul className="space-y-3">
                                {order.items.map((item, index) => (
                                    <li key={index} className="flex justify-between items-start text-sm">
                                        <div>
                                            <p className="font-medium text-gray-800">{item.name}</p>
                                            <p className="text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <span className="font-medium text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Right Column: Pricing & Shipping */}
                        <div className="space-y-6">
                            {/* Price Summary */}
                            <div>
                                <h4 className="font-semibold text-gray-700 mb-3">Price Summary</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between"><span className="text-gray-600">Subtotal:</span> <span className="font-medium">₹{subtotal.toFixed(2)}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Shipping:</span> <span className="font-medium">{shippingCost > 0 ? `₹${shippingCost.toFixed(2)}` : 'Free'}</span></div>
                                    <div className="flex justify-between border-t border-gray-200 pt-2 mt-2 font-bold text-base"><span className="text-gray-800">Total:</span> <span className="text-yellow-600">₹{order.totalAmount.toFixed(2)}</span></div>
                                </div>
                            </div>
                            {/* Shipping Address */}
                            <div>
                                <h4 className="font-semibold text-gray-700 mb-2">Shipping Address</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">{order.shippingAddress}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER with the toggle button */}
            <div className="bg-gray-50/70 px-6 py-3 rounded-b-xl border-t border-gray-200">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)} 
                    className="w-full flex justify-center items-center gap-2 text-yellow-600 font-bold text-sm"
                >
                    {isExpanded ? 'Hide Details' : 'View Details'}
                    {isExpanded ? <ChevronUpIcon className="w-5 h-5"/> : <ChevronDownIcon className="w-5 h-5"/>}
                </button>
            </div>
        </div>
    );
};