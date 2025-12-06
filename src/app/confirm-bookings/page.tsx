"use client";

import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import NextImage from "next/image";
import React from "react";

interface Space {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
  capacity: string;
  price: string;
  hourlyRate: number;
  dailyRate: number;
  amenities: string[];
}

export default function BookingConfirmation() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({
    date: "",
    startTime: "",
    endTime: "",
    name: "",
    email: "",
  });

  // Sample space data - in real app, this would come from router params or props
  const space: Space = {
    id: 1,
    title: "Hot Desk - Open Space",
    type: "Hot Desk",
    description: "Flexible hot desk in our vibrant coworking space with access to all common areas.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    capacity: "1 person",
    price: "$10/hour",
    hourlyRate: 10,
    dailyRate: 50,
    amenities: ["WiFi", "Coffee", "Power Outlets", "Natural Light"],
  };

  // Generate calendar for current month
  const generateCalendar = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  
  const currentMonth = monthNames[new Date().getMonth()];
  const currentYear = new Date().getFullYear();

  const handleDateClick = (date: Date | null) => {
    if (date && !isPastDate(date)) {
      setSelectedDate(date);
      // Clear date error when a date is selected
      setErrors(prev => ({ ...prev, date: "" }));
    }
  };

  const handleSubmit = () => {
    // Reset errors
    const newErrors = {
      date: "",
      startTime: "",
      endTime: "",
      name: "",
      email: "",
    };

    // Validate all fields
    if (!selectedDate) {
      newErrors.date = "Please select a date";
    }
    if (!startTime) {
      newErrors.startTime = "Please select a start time";
    }
    if (!endTime) {
      newErrors.endTime = "Please select an end time";
    }
    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Check if end time is after start time
    if (startTime && endTime && startTime >= endTime) {
      newErrors.endTime = "End time must be after start time";
    }

    setErrors(newErrors);

    // If there are any errors, don't proceed
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    // All validations passed - show success modal
    console.log({ selectedDate, startTime, endTime, name, email });
    setShowSuccessModal(true);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    // Optionally redirect to bookings page or reset form
  };

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  const isSameDate = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const isPastDate = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Spaces</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Space Details */}
          <div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-64 bg-gray-200">
                <NextImage
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{space.title}</h2>
                <p className="text-gray-600 mb-4">{space.description}</p>
                
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Capacity: {space.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{space.price}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {space.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-1 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Hourly Rate</h3>
                  <p className="text-2xl font-bold text-gray-900">${space.hourlyRate}</p>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 mt-4">Daily Rate (8+ hours)</h3>
                  <p className="text-2xl font-bold text-gray-900">${space.dailyRate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Book This Space</h2>
              <p className="text-gray-600 mb-6">Select your preferred date and time</p>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Select Date
                </label>
                
                <div className={`border rounded-lg p-4 ${errors.date ? "border-red-500" : ""}`}>
                  <div className="flex items-center justify-between mb-4">
                    <button type="button" className="p-1 hover:bg-gray-100 rounded">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="font-semibold text-gray-900">
                      {currentMonth} {currentYear}
                    </span>
                    <button type="button" className="p-1 hover:bg-gray-100 rounded">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {generateCalendar().map((date, index) => {
                      const isSelected = selectedDate && date && isSameDate(selectedDate, date);
                      const isTodayDate = date && isToday(date);
                      const isPast = date && isPastDate(date);
                      
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleDateClick(date)}
                         disabled={Boolean(!date || isPast)}
                          className={`
                            aspect-square flex items-center justify-center rounded-lg text-sm transition-colors
                            ${!date ? "invisible" : ""}
                            ${isPast ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}
                            ${isSelected ? "bg-gray-900 text-white font-semibold hover:bg-gray-800" : ""}
                            ${!isSelected && isTodayDate ? "border-2 border-gray-900 font-semibold" : ""}
                            ${!isSelected && !isTodayDate && !isPast ? "text-gray-700" : ""}
                          `}
                        >
                          {date ? date.getDate() : ""}
                        </button>
                      );
                    })}
                  </div>
                </div>
                {errors.date && (
                  <p className="mt-2 text-sm text-red-600">{errors.date}</p>
                )}
              </div>

              {/* Time Selection */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Start Time
                  </label>
                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.startTime ? "ring-2 ring-red-500" : ""
                    }`}
                  >
                    <option value="">Select</option>
                    <option value="08:00">08:00 AM</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                  </select>
                  {errors.startTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.startTime}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    End Time
                  </label>
                  <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.endTime ? "ring-2 ring-red-500" : ""
                    }`}
                  >
                    <option value="">Select</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">01:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                    <option value="18:00">06:00 PM</option>
                  </select>
                  {errors.endTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.endTime}</p>
                  )}
                </div>
              </div>

              {/* Personal Information */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "ring-2 ring-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            {/* Success Icon with Animation */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                <svg className="w-12 h-12" viewBox="0 0 52 52">
                  <circle
                    className="checkmark-circle"
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  <path
                    className="checkmark-check"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 27l7 7 16-16"
                  />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600 text-center mb-6">
              You&apos;ve successfully booked your space. A confirmation email has been sent to{" "}
              <span className="font-semibold text-gray-900">{email}</span>
            </p>

            {/* Booking Details */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Booking Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium text-gray-900">
                    {selectedDate?.toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium text-gray-900">
                    {startTime} - {endTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Space:</span>
                  <span className="font-medium text-gray-900">{space.title}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                View My Bookings
              </button>
              <button
                onClick={closeModal}
                className="flex-1 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>

          {/* CSS Animation Styles */}
          <style jsx>{`
            @keyframes scale-in {
              0% {
                transform: scale(0);
                opacity: 0;
              }
              50% {
                transform: scale(1.1);
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }

            @keyframes draw-circle {
              0% {
                stroke-dashoffset: 157;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }

            @keyframes draw-check {
              0% {
                stroke-dashoffset: 48;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }

            .animate-scale-in {
              animation: scale-in 0.3s ease-out;
            }

            .checkmark-circle {
              stroke-dasharray: 157;
              stroke-dashoffset: 157;
              animation: draw-circle 0.6s ease-out 0.2s forwards;
            }

            .checkmark-check {
              stroke-dasharray: 48;
              stroke-dashoffset: 48;
              animation: draw-check 0.4s ease-out 0.8s forwards;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
