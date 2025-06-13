import { useState, FormEvent } from "react";
import Button from "@/components/Button";
import { X, LoaderCircle } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: any) => void;
}

export default function DeliveryDetailsModal({ isOpen, onClose, onSubmit }: ModalProps) {
  const [details, setDetails] = useState({ name: "", address: "", city: "", postal: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", address: "", city: "", postal: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = { name: "", address: "", city: "", postal: "", phone: "" };
    let isValid = true;
    if (!details.name) { newErrors.name = "Full name is required."; isValid = false; }
    if (!details.address) { newErrors.address = "Street address is required."; isValid = false; }
    if (!details.city) { newErrors.city = "City is required."; isValid = false; }
    if (!details.postal) { newErrors.postal = "Postal code is required."; isValid = false; }
    if (!details.phone) { newErrors.phone = "Phone number is required."; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsLoading(true);
    await new Promise(res => setTimeout(res, 1000)); // Simulate API call
    onSubmit(details);
    setIsLoading(false);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg p-6 sm:p-8">
        <button onClick={onClose} className="absolute cursor-pointer top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Delivery Details</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} className={`mt-1 block w-full border rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.name ? 'border-red-500' : 'border-slate-300'}`} />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-slate-700">Street Address</label>
            <input type="text" name="address" id="address" onChange={handleChange} className={`mt-1 block w-full border rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.address ? 'border-red-500' : 'border-slate-300'}`} />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
              <input type="text" name="city" id="city" onChange={handleChange} className={`mt-1 block w-full border rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.city ? 'border-red-500' : 'border-slate-300'}`} />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label htmlFor="postal" className="block text-sm font-medium text-slate-700">Postal Code</label>
              <input type="text" name="postal" id="postal" onChange={handleChange} className={`mt-1 block w-full border rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.postal ? 'border-red-500' : 'border-slate-300'}`} />
              {errors.postal && <p className="text-red-500 text-xs mt-1">{errors.postal}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
            <input type="tel" name="phone" id="phone" onChange={handleChange} className={`mt-1 block w-full border rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500 ${errors.phone ? 'border-red-500' : 'border-slate-300'}`} />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div className="pt-4 flex justify-end space-x-3">
            <Button type="button" onClick={onClose} className="cursor-pointer" variant="outline">Cancel</Button>
            <Button type="submit" className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-slate-900 font-bold" disabled={isLoading}>
              {isLoading ? <LoaderCircle className="animate-spin" /> : "Place Order"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}