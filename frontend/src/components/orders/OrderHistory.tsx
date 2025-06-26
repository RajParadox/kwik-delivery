'use client';

import { useState, useMemo } from 'react';
import { Order } from '@/components/types';
import { dummyOrders } from '@/lib/DummyOrders';
import OrderCard from './OrderCard';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const STATUS_OPTIONS: Order['status'][] = ['Processing', 'Delivered', 'Cancelled'];

export default function OrderHistory() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const filteredOrders = useMemo(() => {
        return dummyOrders.filter(order => {
            // Filter by status
            const statusMatch = statusFilter === 'All' || order.status === statusFilter;

            // Filter by search term
            const searchMatch = !searchTerm.trim() ||
                order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
            
            return statusMatch && searchMatch;
        });
    }, [searchTerm, statusFilter]);

    return (
        <div className="w-full">
            {/* Controls Section */}
            <div className="bg-white p-4 rounded-xl mb-8 shadow-md border border-gray-200">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-grow">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search by Order # or Product Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    {/* Status Filters */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setStatusFilter('All')}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${statusFilter === 'All' ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                        >
                            All
                        </button>
                        {STATUS_OPTIONS.map(status => (
                             <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${statusFilter === status ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Orders List */}
            {filteredOrders.length > 0 ? (
                <div className="space-y-6">
                    {filteredOrders.map(order => (
                        <OrderCard key={order._id} order={order} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50/70 rounded-xl">
                    <h2 className="text-2xl font-semibold text-gray-700">No Orders Found</h2>
                    <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
                </div>
            )}
        </div>
    );
}