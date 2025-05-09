"use client";

import Header from '@/components/header';
import ConsultationForm from '@/components/ConsultationForm';
import Image from 'next/image';
import { TikTokEmbed } from "react-social-media-embed";
import { FaPhone, FaEnvelope } from "react-icons/fa";
// Metadata now handled in layout.tsx


const tiktTokVids = [
  "https://www.tiktok.com/@makeupbynadia_/photo/7461728757754350854",
  "https://www.tiktok.com/@makeupbynadia_/photo/7461998927731166470",
  "https://www.tiktok.com/@makeupbynadia_/video/7475664846156041478",
];
const servicesType = [
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmv-hrI2f7wK3y_ZpXv3t-LEgjlwn-il5YBEZK-SuMKVOTbD-c3lU2sru6urmH8PqmQc&usqp=CAU",
    title: "Bridal Makeup",
    description: "Transform your wedding day look with our expert bridal makeup services, ensuring you shine on your most special day."
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmv-hrI2f7wK3y_ZpXv3t-LEgjlwn-il5YBEZK-SuMKVOTbD-c3lU2sru6urmH8PqmQc&usqp=CAU",
    title: "Evening Glam",
    description: "Elevate your evening with a stunning, sophisticated makeup look that turns heads and boosts confidence."
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmv-hrI2f7wK3y_ZpXv3t-LEgjlwn-il5YBEZK-SuMKVOTbD-c3lU2sru6urmH8PqmQc&usqp=CAU",
    title: "Dramatic Transformation",
    description: "Create a bold, artistic makeup look perfect for photoshoots, special events, or making a statement."
  }
];
// Define the Home component
export default function Home() {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Makeup by Nadia',
    'description': 'Professional makeup services specializing in bridal, event, and photoshoot makeup',
    'image': 'https://makeupbynadia.com/logo.jpeg',
    'url': 'https://makeupbynadia.com',
    'telephone': '+1-XXX-XXX-XXXX', // Replace with actual phone number
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Your City',
      'addressRegion': 'Your State',
      'postalCode': 'Your Zip',
      'addressCountry': 'US'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 0, // Replace with actual latitude
      'longitude': 0 // Replace with actual longitude
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      'opens': '09:00',
      'closes': '18:00'
    }
  };


  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup)
        }}
      />
      <section key="hero" className="py-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Header className="mb-24" />

          <main className="flex flex-col lg:flex-row justify-between items-center lg:mb-20 space-y-10 lg:space-y-0">
            <div className="text-center lg:text-left max-w-xl space-y-6">
              <h1 className="text-brand-neutral-900 font-bold text-4xl md:text-5xl font-nadi !leading-[60px]">
                Makeup Artistry by Nadia
              </h1>
              <p className="text-brand-neutral-600 text-lg">
                Transforming beauty, one brushstroke at a time. Professional makeup services tailored to your unique style.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a 
                  href="#contact" 
                  className="bg-brand-pink-600 text-white px-6 py-3 rounded-lg hover:bg-brand-pink-500 transition-colors font-semibold"
                >
                  Book Consultation
                </a>
                <a 
                  href="#services" 
                  className="border border-brand-pink-500 text-brand-pink-500 px-6 py-3 rounded-lg hover:bg-brand-pink-50 transition-colors font-semibold"
                >
                  View Services
                </a>
              </div>
            </div>

            <div className="w-full max-w-md">
              <Image 
                src="https://media.istockphoto.com/id/1072376428/photo/model-getting-a-touch-up.jpg?s=612x612&w=0&k=20&c=UBiku_BkAGwi5i7r-HD3Y4WbEZvbg3az7X71obVg6_E=" 
                alt="Nadia - Professional Makeup Artist" 
                width={800}
                height={600}
                className="w-96 h-96 rounded-full shadow-elegant object-cover"
                priority
              />
            </div>
          </main>
        </div>
      </section>

      <section id="about" className="py-16 bg-brand-pink-50">
        <div className="container max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-16">
          <div className="w-full lg:w-1/2">
              <Image 
                src="https://img.freepik.com/premium-photo/makeup-artist-smiling-throwing-up-brushes-tools_73169-414.jpg" 
                alt="Nadia - Professional Makeup Artist" 
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-elegant object-cover"
                priority
              />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-brand-neutral-900 font-bold text-4xl md:text-5xl font-nadi mb-4">
              About Me
            </h2>
            <p className="text-brand-neutral-600 text-lg">
              Hi, I&apos;m Nadia! With over 5 years of experience in professional makeup artistry, I specialize in creating stunning, personalized looks that highlight your unique beauty. From bridal makeup to photoshoots, I&apos;m passionate about making you look and feel incredible.
            </p>
            <p className="text-brand-neutral-600 text-lg">
              My approach is all about understanding your vision and bringing it to life with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      <section id="works" className="py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-brand-neutral-900 font-bold text-4xl md:text-5xl font-nadi mb-4">
              My Work
            </h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto text-lg">
              A glimpse into the transformative power of makeup
            </p>
          </div>
       
       <div className='flex items-center justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiktTokVids.map((url, index) => (
                <TikTokEmbed
                  key={index}
                  url={url}
                  width={325}
                  height={560}
                  className="bg-transparent"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-brand-pink-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-brand-neutral-900 font-bold text-4xl md:text-5xl font-nadi mb-4">
              Our Services
            </h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto text-lg">
              Discover personalized makeup experiences tailored to enhance your unique beauty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesType.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-elegant text-center">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={96}
                  height={96}
                  className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
                  unoptimized
                />
                <h3 className="text-brand-neutral-900 font-bold text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-brand-neutral-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-brand-neutral-900 font-bold text-4xl md:text-5xl font-nadi mb-4">
              Contact Me
            </h2>
            <p className="text-brand-neutral-600 max-w-2xl mx-auto text-lg">
              Ready to discuss your makeup goals? Let&apos;s connect!
            </p>
          </div>

          <ConsultationForm />
        </div>
      </section>

      <footer className="bg-brand-neutral-50 py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <p className="text-brand-neutral-600 mb-6">
              Ready to transform your look? Book a consultation today!
            </p>

            <div className="mt-12 flex flex-col items-center space-y-4">
              <div className="flex flex-col md:flex-row items-center space-x-4">
                <a 
                  href="tel:+1234567890" 
                  className="text-brand-pink-500 hover:text-brand-pink-600 transition-colors flex items-center"
                >
                  <FaPhone className="mr-2" /> +1 (234) 567-890
                </a>
                <a 
                  href="mailto:nadia.makeup@example.com" 
                  className="text-brand-pink-500 hover:text-brand-pink-600 transition-colors flex items-center"
                >
                  <FaEnvelope className="mr-2" /> nadia.makeup@example.com
                </a>
              </div>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
