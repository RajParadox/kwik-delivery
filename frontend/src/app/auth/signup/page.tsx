"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, Eye, EyeOff, LoaderCircle } from "lucide-react";
import Button from "@/components/Button"; // Assuming your Button component can handle a disabled state and children

export default function SignupPage() {
  // State management
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Form validation logic
  const validateForm = () => {
    const newErrors = { name: "", email: "", password: "", confirmPassword: "" };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Full name is required.";
      isValid = false;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "A valid email is required.";
      isValid = false;
    }
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // --- MOCK API CALL ---
    // In a real app, you would make a call to your backend here
    // For example: const res = await fetch('/api/signup', { ... });
    console.log("Signing up with", name, email, password);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
    // --- END MOCK ---
    setIsLoading(false);
    
    // On success, redirect to login or dashboard
    router.push("/auth/login");
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">Create an Account</h1>
      <p className="text-gray-500 mb-8 text-center">Get started on your journey with us!</p>

      <form onSubmit={handleSignup} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

        {/* Password Input */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full border rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

        {/* Confirm Password Input */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full border rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        
        <Button type="submit" className="w-full flex items-center justify-center" disabled={isLoading}>
            {isLoading ? <LoaderCircle className="animate-spin mr-2" /> : null}
            {isLoading ? 'Creating Account...' : 'Sign Up'}
        </Button>
      </form>

      <div className="mt-6 text-center text-gray-500">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">
          Login
        </Link>
      </div>

      {/* Social Logins */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="w-full">
            {/* Add Google Icon here */}
            Google
        </Button>
        <Button variant="outline" className="w-full">
            {/* Add GitHub Icon here */}
            GitHub
        </Button>
      </div>

    </div>
  );
}