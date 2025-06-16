'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              The AI Data Platform for Enterprise AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Scale helps enterprises build and deploy AI applications with high-quality data. Our platform provides the tools and infrastructure needed to train, validate, and deploy AI models at scale.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="mailto:contact@grovetools.live"
                className="btn-primary"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="btn-secondary"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero-ai.svg"
                  alt="AI Platform Visualization"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 