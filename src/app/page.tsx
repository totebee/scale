import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />

      {/* Solutions Section */}
      <section id="solutions" className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Solutions
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.title} className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                <p className="mt-4 text-gray-600">{solution.description}</p>
                <a
                  href="mailto:contact@grovetools.live"
                  className="mt-6 inline-flex items-center text-primary hover:text-primary/80"
                >
                  Learn more
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Products
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <div key={product.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                <p className="mt-4 text-gray-600">{product.description}</p>
                <ul className="mt-6 space-y-4">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg className="mr-3 h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:contact@grovetools.live"
                  className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Scale
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We are a team of AI experts and data scientists dedicated to helping enterprises harness the power of artificial intelligence. Our platform combines cutting-edge technology with enterprise-grade security to deliver reliable AI solutions.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-4 text-gray-600">
                  To democratize AI technology and make it accessible to enterprises of all sizes, enabling them to build and deploy AI applications with confidence.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">Why Choose Us?</h3>
              <ul className="mt-6 space-y-4">
                {aboutFeatures.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="mr-3 h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Join the leading enterprises using Scale to power their AI initiatives.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="mailto:contact@grovetools.live"
              className="rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-50"
            >
              Contact Sales
            </a>
            <a
              href="mailto:contact@grovetools.live"
              className="rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10"
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

const solutions = [
  {
    title: 'AI Data Platform',
    description: 'Comprehensive platform for managing, processing, and analyzing AI training data at scale.',
  },
  {
    title: 'Model Training',
    description: 'End-to-end solution for training and fine-tuning AI models with enterprise-grade security.',
  },
  {
    title: 'Deployment & Monitoring',
    description: 'Seamless deployment and real-time monitoring of AI models in production environments.',
  },
]

const products = [
  {
    title: 'Scale AI Platform',
    description: 'Our flagship product that provides everything you need to build and deploy AI applications.',
    features: [
      'High-quality data labeling',
      'Model training infrastructure',
      'Deployment automation',
      'Real-time monitoring',
      'Enterprise security',
    ],
  },
  {
    title: 'Scale Data Engine',
    description: 'Powerful data processing and management system for AI applications.',
    features: [
      'Data collection & processing',
      'Quality assurance',
      'Version control',
      'Collaboration tools',
      'API integration',
    ],
  },
]

const aboutFeatures = [
  'Enterprise-grade security and compliance',
  '24/7 technical support',
  'Dedicated account management',
  'Custom integration support',
  'Regular platform updates',
  'Comprehensive documentation',
] 