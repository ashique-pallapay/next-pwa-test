"use client";

import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-2">
            Sign in to continue to your dashboard
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Remember me</span>
            </label>

            <a
              href="#"
              className="text-sm text-black hover:underline font-medium"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <Link href="/dashboard">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-all duration-200"
            >
              Sign in
            </button>
          </Link>
  
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-black font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
