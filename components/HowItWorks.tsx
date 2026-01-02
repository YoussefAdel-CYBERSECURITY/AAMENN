export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Upload Securely',
      description: 'Drag and drop your photos. We encrypt them on your device before they ever touch our servers.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v-3m0 0V9m0 3h3m-3 0H9" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Zero-Knowledge Storage',
      description: 'Only you hold the keys. We cannot see, scan, or sell your photos. Your vault is truly yours.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Share Privately',
      description: 'Generate time-limited links with password protection to share albums with loved ones safely.',
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wider mb-2">
            SIMPLICITY
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 px-4">
            How AAMENN works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            We made security simple. You don't need to be a tech expert to protect your memories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-accent/10 dark:bg-accent/20 text-accent mb-4 sm:mb-6">
                {step.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-3">
                {step.number}. {step.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
