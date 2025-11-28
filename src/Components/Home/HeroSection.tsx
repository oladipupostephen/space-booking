import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
          Modern Booking Experience
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Book Your Perfect Seat in{" "}
          <span className="text-blue-600">Seconds</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Experience seamless seat reservations with our intelligent booking
          system. Choose your seat, pick your time, and secure your spot
          instantly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth"
            className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold inline-block text-center">
            Get Started Now
          </Link>
          <Link
            href="#features"
            className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-lg font-semibold inline-block text-center">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
