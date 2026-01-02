export default function DeviceSync() {
  const photos = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
  ]

  return (
    <section className="relative -mt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {/* Desktop */}
          <div className="relative">
            <div className="w-[500px] h-[300px] bg-gray-900 rounded-2xl p-4 shadow-2xl">
              <div className="w-full h-full bg-gray-100 rounded-lg p-6">
                <div className="grid grid-cols-4 gap-4">
                  {photos.map((photo, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: i === 1 ? 'none' : `url(${photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: i === 1 ? '#6b7280' : undefined,
                      }}
                    >
                      {i === 1 && (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-900 rounded-full"></div>
          </div>

          {/* Sync Animation */}
          <div className="flex flex-col items-center">
            <svg className="w-32 h-32" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="dashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2d5f4f" />
                  <stop offset="100%" stopColor="#3d7f6f" />
                </linearGradient>
              </defs>
              <path
                d="M 10 50 Q 50 20, 90 50"
                fill="none"
                stroke="url(#dashGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.5"
              />
              <circle cx="50" cy="35" r="15" fill="white" stroke="#2d5f4f" strokeWidth="2" />
              <path
                d="M 45 35 L 48 38 L 55 31"
                fill="none"
                stroke="#2d5f4f"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-sm font-semibold text-accent mt-2">Encrypted Sync</p>
          </div>

          {/* Mobile */}
          <div className="relative">
            <div className="w-[240px] h-[480px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                <div className="bg-gray-100 h-8 flex items-center justify-center">
                  <div className="w-24 h-6 bg-gray-900 rounded-full"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Photos</h3>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {photos.map((photo, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl overflow-hidden"
                        style={{
                          backgroundImage: i === 1 ? 'none' : `url(${photo})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundColor: i === 1 ? '#6b7280' : undefined,
                        }}
                      >
                        {i === 1 && (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
