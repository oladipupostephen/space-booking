import Link from "next/link";
export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Your Seat?
          </h2>
          <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust SeatBook for their
            reservations. Start your booking journey today.
          </p>

          <Link
            href="/auth"
            className="inline-block px-10 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-bold shadow-lg">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
