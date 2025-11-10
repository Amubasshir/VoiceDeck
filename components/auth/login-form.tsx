"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Handle login logic here
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handleGoogleSignIn = () => {
    // Handle Google OAuth here
  }

  return (
    <Card className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center">
          <svg viewBox="0 0 64 64" className="w-full h-full" fill="currentColor">
            {/* Retell AI Logo - Grid pattern */}
            <g className="text-black">
              {/* Top row */}
              <circle cx="20" cy="12" r="2.5" />
              <circle cx="32" cy="12" r="2.5" />
              <circle cx="44" cy="12" r="2.5" />

              {/* Second row */}
              <circle cx="16" cy="20" r="2.5" />
              <circle cx="20" cy="20" r="2.5" />
              <circle cx="24" cy="20" r="2.5" />
              <circle cx="28" cy="20" r="2.5" />
              <circle cx="32" cy="20" r="2.5" />
              <circle cx="36" cy="20" r="2.5" />
              <circle cx="40" cy="20" r="2.5" />
              <circle cx="44" cy="20" r="2.5" />
              <circle cx="48" cy="20" r="2.5" />

              {/* Third row */}
              <circle cx="20" cy="28" r="2.5" />
              <circle cx="24" cy="28" r="2.5" />
              <circle cx="28" cy="28" r="2.5" />
              <circle cx="32" cy="28" r="2.5" />
              <circle cx="36" cy="28" r="2.5" />
              <circle cx="40" cy="28" r="2.5" />
              <circle cx="44" cy="28" r="2.5" />

              {/* Fourth row */}
              <circle cx="20" cy="36" r="2.5" />
              <circle cx="32" cy="36" r="2.5" />
              <circle cx="44" cy="36" r="2.5" />
            </g>
          </svg>
        </div>
      </div>

      {/* Welcome Text */}
      <h1 className="text-3xl font-semibold text-center text-black mb-1">Welcome</h1>

      <p className="text-center text-sm text-blue-600 mb-4">Log in to Retell AI to continue to Retell AI.</p>

      {/* Email Input */}
      <form onSubmit={handleContinue} className="space-y-3">
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 h-12"
          required
        />

        {/* Continue Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black hover:bg-gray-900 text-white h-12 rounded-lg font-medium"
        >
          {isLoading ? "Continuing..." : "Continue"}
        </Button>
      </form>

      {/* Sign Up Link */}
      <div className="text-center mt-3">
        <p className="text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign up
          </Link>
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 my-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Google Login Button */}
      <Button
        type="button"
        onClick={handleGoogleSignIn}
        variant="outline"
        className="w-full h-12 rounded-lg border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-2 bg-transparent"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </Button>
    </Card>
  )
}
