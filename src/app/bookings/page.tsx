"use client";
import { useState } from "react";
import { Calendar, Home, BookOpen } from "lucide-react";
import NextImage from "next/image";
import { useRouter } from "next/navigation";

export default function WorkSpaceBooking() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"spaces" | "bookings">("spaces");

  const spaces = [
    {
      id: 1,
      title: "Hot Desk - Open Space",
      type: "Hot Desk",
      description: "Flexible hot desk in our vibrant coworking space with access to all common areas.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      capacity: "Up to 1",
      price: "$10/hr",
      amenities: ["WiFi", "Coffee", "Power Outlets", "Natural Light"],
    },
    {
      id: 2,
      title: "Private Office",
      type: "Private Office",
      description: "Private office space perfect for small teams, featuring modern furniture and full privacy.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      capacity: "Up to 4",
      price: "$45/hr",
      amenities: ["WiFi", "Whiteboard", "Lockable Door", "Phone Booth", "+1 more"],
    },
    {
      id: 3,
      title: "Conference Room",
      type: "Conference Room",
      description: "Private office space perfect for small teams, featuring modern furniture and full privacy.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      capacity: "Up to 4",
      price: "$45/hr",
      amenities: ["WiFi", "Whiteboard", "Lockable Door", "Phone Booth", "+1 more"],
    },
    {
      id: 4,
      title: "Meeting Room",
      type: "Meeting Room",
      description: "Private office space perfect for small teams, featuring modern furniture and full privacy.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      capacity: "Up to 4",
      price: "$45/hr",
      amenities: ["WiFi", "Whiteboard", "Lockable Door", "Phone Booth", "+1 more"],
    }
  ];

  const handleBookNow = (spaceId: number) => {
    // Navigate to booking confirmation page with space ID
    router.push(`/booking?spaceId=${spaceId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900">WorkSpace Booking</h1>
            </div>
            <nav className="flex gap-8">
              <button
                onClick={() => setActiveTab("spaces")}
                className={`flex items-center gap-2 px-1 py-2 border-b-2 transition-colors ${
                  activeTab === "spaces"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Spaces</span>
              </button>
              <button
                onClick={() => setActiveTab("bookings")}
                className={`flex items-center gap-2 px-1 py-2 border-b-2 transition-colors ${
                  activeTab === "bookings"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">My Bookings</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "spaces" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {spaces.map((space) => (
              <div
                key={space.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-64 bg-gray-200">
                  <NextImage
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                      {space.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{space.title}</h3>
                    <span className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-700">
                      {space.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{space.description}</p>

                  <div className="flex items-center gap-6 mb-4 text-sm text-gray-700">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{space.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{space.price}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {space.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleBookNow(space.id)}
                    className="w-full mt-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h3>
            <p className="text-gray-600 mb-6">
              You haven&apos;t made any bookings. Browse available spaces to get started.
            </p>
            <button
              onClick={() => setActiveTab("spaces")}
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Browse Spaces
            </button>
          </div>
        )}
      </main>
    </div>
  );
}