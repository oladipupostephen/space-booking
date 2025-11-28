const pricingPlans = [
  {
    name: "Standard",
    price: "$20",
    description: "Starting price for 1 hour",
    features: ["Comfortable seating", "Flexible duration", "Instant booking"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$35",
    description: "Starting price for 1 hour",
    badge: "Popular",
    features: ["Priority seating", "Extra legroom", "Premium location"],
    highlighted: true,
  },
  {
    name: "VIP",
    price: "$50",
    description: "Starting price for 1 hour",
    features: ["Luxury seating", "Best location", "Exclusive access"],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the seat type and duration that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-3xl transition-all ${
                plan.highlighted
                  ? "border-2 border-blue-500 hover:shadow-lg relative"
                  : "border border-gray-200 hover:shadow-md"
              }`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">
                  {plan.price}
                </span>
              </div>
              <p className="text-gray-500 mb-8">{plan.description}</p>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-gray-900">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
