export default function CTA() {
  return (
    <section id="early-access" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-accent/80 dark:bg-gray-800/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to reclaim your digital privacy?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
          We are launching soon to a limited number of users. Reserve your username and get early bird pricing.
        </p>
        <button className="px-8 sm:px-10 py-3 sm:py-4 bg-gray-600 text-white rounded-xl hover:bg-gray-500 transition font-bold text-base sm:text-lg shadow-xl">
          Get Early Access
        </button>
      </div>
    </section>
  )
}
