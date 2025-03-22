"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ThemeToggle } from "@/components/theme-toggle"
import { getBasePath } from "@/lib/client-utils"

export default function Register() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    agreeTerms: false,
  })

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    studentId: false,
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }))
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreeTerms: checked,
    }))

    if (errors.agreeTerms) {
      setErrors((prev) => ({
        ...prev,
        agreeTerms: false,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName.trim(),
      lastName: !formData.lastName.trim(),
      email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      studentId: !formData.studentId.trim(),
      agreeTerms: !formData.agreeTerms,
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Save user data to localStorage
      localStorage.setItem(
        "examUser",
        JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          studentId: formData.studentId,
          startTime: new Date().toISOString(),
        }),
      )

      // Navigate to instructions
      const basePath = getBasePath()
      router.push(`${basePath}/instructions`)
    }
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 shadow-none rounded-none">
        <CardHeader className="bg-[#1a4a7a] text-white p-4 rounded-none">
          <CardTitle className="text-xl font-normal">Registration</CardTitle>
          <CardDescription className="text-gray-200">Please enter your information to begin the exam</CardDescription>
          <div className="mt-2 text-sm text-gray-200">
            <p>You can toggle between light and dark mode using the button in the top right corner.</p>
            <p className="font-medium mt-1">
              Note: Light mode is recommended for the most realistic exam simulation experience.
            </p>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-black dark:text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`border ${errors.firstName ? "border-red-500" : "border-gray-300 dark:border-slate-600"} rounded-none dark:bg-slate-700 dark:text-white`}
                />
                {errors.firstName && <p className="text-red-500 text-xs">First name is required</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-black dark:text-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`border ${errors.lastName ? "border-red-500" : "border-gray-300 dark:border-slate-600"} rounded-none dark:bg-slate-700 dark:text-white`}
                />
                {errors.lastName && <p className="text-red-500 text-xs">Last name is required</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black dark:text-white">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-slate-600"} rounded-none dark:bg-slate-700 dark:text-white`}
              />
              {errors.email && <p className="text-red-500 text-xs">Valid email is required</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentId" className="text-black dark:text-white">
                Student ID / Registration Number
              </Label>
              <Input
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className={`border ${errors.studentId ? "border-red-500" : "border-gray-300 dark:border-slate-600"} rounded-none dark:bg-slate-700 dark:text-white`}
              />
              {errors.studentId && <p className="text-red-500 text-xs">Student ID is required</p>}
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={handleCheckboxChange}
                className={errors.agreeTerms ? "border-red-500" : ""}
              />
              <Label htmlFor="agreeTerms" className="text-sm text-black dark:text-white">
                I agree to the exam rules and understand that my answers will be recorded
              </Label>
            </div>
            {errors.agreeTerms && <p className="text-red-500 text-xs">You must agree to continue</p>}
          </form>
        </CardContent>
        <CardFooter className="bg-gray-100 dark:bg-slate-700 p-4 border-t border-gray-300 dark:border-slate-600">
          <Button onClick={handleSubmit} className="w-full bg-[#1a4a7a] hover:bg-[#0d3a6a] rounded-none">
            Continue to Exam
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

