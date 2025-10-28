'use client';

export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Dr. Sarah Johnson', 
      role: 'Cardiologist', 
      text: 'Medical AI Assist has revolutionized my practice. The diagnostic accuracy and speed have improved patient outcomes significantly.',
      avatar: '👩‍⚕️'
    },
    { 
      name: 'Michael Chen', 
      role: 'Hospital Administrator', 
      text: 'Our hospital efficiency increased by 40% after implementing Medical AI Assist. The ROI was evident within the first quarter.',
      avatar: '👨‍💼'
    },
    { 
      name: 'Dr. Emily Rodriguez', 
      role: 'Emergency Medicine', 
      text: 'In critical situations, every second counts. This AI assistant helps me make faster, more informed decisions that save lives.',
      avatar: '👩‍⚕️'
    },
    { 
      name: 'James Wilson', 
      role: 'Nurse Practitioner', 
      text: 'The user interface is intuitive and the AI suggestions are incredibly accurate. It feels like having a specialist by my side.',
      avatar: '👨‍⚕️'
    },
    { 
      name: 'Dr. Lisa Park', 
      role: 'Radiologist', 
      text: 'Image analysis that used to take hours now takes minutes. The AI catches details I might have missed, improving diagnostic confidence.',
      avatar: '👩‍⚕️'
    },
    { 
      name: 'Robert Martinez', 
      role: 'Chief Medical Officer', 
      text: 'Medical AI Assist has become an indispensable tool across our entire healthcare network. Outstanding innovation.',
      avatar: '👨‍⚕️'
    },
    { 
      name: 'Dr. Amanda Foster', 
      role: 'Pediatrician', 
      text: 'Working with children requires extra precision. This AI helps me provide the best care while keeping young patients comfortable.',
      avatar: '👩‍⚕️'
    },
    { 
      name: 'David Thompson', 
      role: 'Medical Researcher', 
      text: 'The data insights and pattern recognition capabilities have accelerated our research timeline by months.',
      avatar: '👨‍🔬'
    }
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Join thousands of medical professionals who rely on our AI-powered solutions
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative">
          <div className="flex animate-marquee space-x-8">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-96 bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 p-8 border border-blue-100/50 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed italic text-base font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays for Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>


    </section>
  );
}