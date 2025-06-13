"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, LoaderCircle } from "lucide-react";
import Button from "@/components/Button"; // Assuming your Button component

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setIsLoading(true);
    // --- MOCK API CALL ---
    // In a real app, you would make a call to your backend here
    // and check if the credentials are valid.
    console.log("Logging in with", email, password);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // Example of handling a failed login
    // if (!response.ok) {
    //   setError("Invalid email or password. Please try again.");
    //   setIsLoading(false);
    //   return;
    // }
    // --- END MOCK ---
    setIsLoading(false);

    // On success, redirect to the main app page
    router.push("/");
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">Welcome Back!</h1>
      <p className="text-gray-500 mb-8 text-center">Log in to continue to YourApp.</p>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
        <span className="block sm:inline">{error}</span>
      </div>}

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-shadow"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"/>
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
                <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500">Forgot your password?</a>
            </div>
        </div>

        <Button type="submit" className="w-full flex items-center justify-center" disabled={isLoading}>
            {isLoading ? <LoaderCircle className="animate-spin mr-2" /> : null}
            {isLoading ? 'Logging In...' : 'Login'}
        </Button>
      </form>

      <div className="mt-6 text-center text-gray-500">
        Don't have an account?{" "}
        <Link href="/auth/signup" className="text-yellow-600 hover:underline font-medium">
          Sign Up
        </Link>
      </div>
    </div>
  );
}