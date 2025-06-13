import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import type { CartItemType } from "@/app/cart/page";

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (itemId: number, newQuantity: number) => void;
  onRemove: (itemId: number) => void;
}

export default function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  return (
    <li className="flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        {/* In a real app, replace with item.image */}
        <Image src={item.image} alt={item.name} width={96} height={96} className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32 bg-slate-200"/>
      </div>

      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <a href="#" className="font-medium text-slate-700 hover:text-slate-800">{item.name}</a>
              </h3>
            </div>
            <p className="mt-1 text-sm font-medium text-slate-900">${item.price.toFixed(2)}</p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="flex items-center border border-slate-300 rounded-md w-fit">
              <button
                onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-l-md"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="px-4 text-sm font-medium text-slate-700">{item.quantity}</span>
              <button
                onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-r-md"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="absolute top-0 right-0">
              <button
                onClick={() => onRemove(item.id)}
                className="-m-2 p-2 inline-flex text-slate-400 hover:text-red-500"
                aria-label="Remove item"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}