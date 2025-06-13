import Button from "@/components/Button";

interface PriceSummaryProps {
  subtotal: number;
  onConfirm: () => void;
  disabled: boolean;
}

// Define constants for fees and taxes
const SHIPPING_FEE = 5.00;
const TAX_RATE = 0.08; // 8%

export default function PriceSummary({ subtotal, onConfirm, disabled }: PriceSummaryProps) {
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING_FEE + tax;

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 bg-white rounded-lg shadow-md p-6 lg:mt-0 lg:col-span-5 lg:sticky lg:top-24"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-slate-900">Order summary</h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-slate-600">Subtotal</dt>
          <dd className="text-sm font-medium text-slate-900">${subtotal.toFixed(2)}</dd>
        </div>
        <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
          <dt className="flex items-center text-sm text-slate-600">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium text-slate-900">${SHIPPING_FEE.toFixed(2)}</dd>
        </div>
        <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
          <dt className="text-base font-medium text-slate-600">Tax estimate</dt>
          <dd className="text-base font-medium text-slate-900">${tax.toFixed(2)}</dd>
        </div>
        <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
          <dt className="text-base font-bold text-slate-900">Order total</dt>
          <dd className="text-base font-bold text-slate-900">${total.toFixed(2)}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button
          onClick={onConfirm}
          disabled={disabled}
          className="w-full cursor-pointer bg-yellow-500 text-slate-900 hover:bg-yellow-600 font-bold disabled:bg-slate-300 disabled:text-slate-500"
        >
          Confirm Order
        </Button>
      </div>
    </section>
  );
}