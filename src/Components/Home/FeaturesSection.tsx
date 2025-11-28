import { MapPin, Calendar, Clock, Zap, Shield, Star } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Visual Seat Selection",
    description:
      "Interactive seat map with real-time availability. Choose from Standard, Premium, or VIP seating options.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Pick any date and time slot that works for you. Our calendar makes it easy to find the perfect time.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Clock,
    title: "Custom Duration",
    description:
      "Book for 1-4 hours based on your needs. Transparent pricing with no hidden fees.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description:
      "Get your unique booking ID immediately. No waiting, no hassle - just instant confirmation.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description:
      "Your bookings are safe and secure. Each reservation comes with a unique tracking ID.",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Star,
    title: "Premium Options",
    description:
      "Upgrade to Premium or VIP seats for enhanced comfort and exclusive benefits.",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose SeatBook?
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for a perfect booking experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-3xl border border-gray-200 hover:shadow-md transition-shadow bg-white">
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
