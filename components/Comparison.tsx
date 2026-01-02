export default function Comparison() {
  const features = [
    {
      name: 'End-to-end Encryption',
      description: 'Data is encrypted before leaving your device.',
      aamenn: { status: 'Always On', color: 'text-green-600' },
      others: { status: 'Rarely / Optional', color: 'text-red-600' },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      name: 'Server Access',
      description: 'Can the provider see your photos?',
      aamenn: { status: 'Zero Access', color: 'text-green-600' },
      others: { status: 'Full Access', color: 'text-red-600' },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      name: 'Ads & Tracking',
      description: 'Usage or data for advertising profiles.',
      aamenn: { status: 'None', color: 'text-green-600' },
      others: { status: 'Active Tracking', color: 'text-red-600' },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      name: 'Architecture',
      description: 'Built from the ground up for privacy.',
      aamenn: { status: 'Privacy by Design', color: 'text-green-600' },
      others: { status: 'Add-on Feature', color: 'text-red-600' },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
            Why Choose AAMENN?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how we stack up against traditional cloud storage providers. We don't just store your data; we protect your right to privacy.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-200 dark:border-gray-700 gap-4">
              <div className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Features<br className="hidden sm:block" /><span className="sm:hidden"> </span>Comparison
              </div>
              <div className="flex gap-8 sm:gap-12 lg:gap-16">
                <div className="text-center">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary dark:text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-sm sm:text-base text-primary dark:text-white">AAMENN</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Privacy First Storage</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-sm sm:text-base text-gray-700 dark:text-gray-300">Others</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Typical Cloud Services</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 sm:py-6 gap-3 sm:gap-0 ${
                    index !== features.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-1">{feature.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </div>

                  <div className="flex gap-8 sm:gap-12 lg:gap-16 ml-11 sm:ml-8">
                    <div className="w-24 sm:w-28 lg:w-32 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-xs sm:text-sm font-semibold ${feature.aamenn.color}`}>
                          {feature.aamenn.status}
                        </span>
                      </div>
                    </div>
                    <div className="w-24 sm:w-28 lg:w-32 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-xs sm:text-sm font-semibold ${feature.others.color}`}>
                          {feature.others.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 px-4 sm:px-8 py-3 sm:py-4 text-center">
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
              * Comparison based on standard free-tier offerings of major cloud providers as of Oct 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
