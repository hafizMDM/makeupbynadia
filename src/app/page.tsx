"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Header from "@/components/header";
import { TikTokEmbed } from "react-social-media-embed";
import { FaPhone, FaEnvelope } from "react-icons/fa";

// Form Validation Schema
const ConsultationSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  serviceType: z.string().min(1, { message: 'Please select a service type' }),
  message: z.string().optional()
});

type ConsultationFormInputs = z.infer<typeof ConsultationSchema>;

// Form Error Message Component
const FormErrorMessage = ({ message }: { message?: string }) => {
  return message ? (
    <p className="text-red-500 text-sm mt-1">{message}</p>
  ) : null;
};

// Consultation Form Component
const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm<ConsultationFormInputs>({
    resolver: zodResolver(ConsultationSchema)
  });

  const onSubmit: SubmitHandler<ConsultationFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        reset(); // Clear form
      } else {
        setSubmitError(result.error || 'Submission failed');
      }
    } catch (error) {
      setSubmitError('Network error. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-elegant space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label 
            htmlFor="firstName" 
            className="block text-brand-neutral-700 font-medium mb-2"
          >
            First Name
          </label>
          <input 
            type="text" 
            id="firstName" 
            {...register('firstName')}
            className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-brand-pink-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink-400 transition-all`}
            placeholder="Your first name"
          />
          <FormErrorMessage message={errors.firstName?.message} />
        </div>
        <div>
          <label 
            htmlFor="lastName" 
            className="block text-brand-neutral-700 font-medium mb-2"
          >
            Last Name
          </label>
          <input 
            type="text" 
            id="lastName" 
            {...register('lastName')}
            className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-brand-pink-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink-400 transition-all`}
            placeholder="Your last name"
          />
          <FormErrorMessage message={errors.lastName?.message} />
        </div>
      </div>

      <div>
        <label 
          htmlFor="email" 
          className="block text-brand-neutral-700 font-medium mb-2"
        >
          Email Address
        </label>
        <input 
          type="email" 
          id="email" 
          {...register('email')}
          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-brand-pink-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink-400 transition-all`}
          placeholder="you@example.com"
        />
        <FormErrorMessage message={errors.email?.message} />
      </div>

      <div>
        <label 
          htmlFor="serviceType" 
          className="block text-brand-neutral-700 font-medium mb-2"
        >
          Service Type
        </label>
        <select 
          id="serviceType" 
          {...register('serviceType')}
          className={`w-full px-4 py-3 border ${errors.serviceType ? 'border-red-500' : 'border-brand-pink-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink-400 transition-all`}
        >
          <option value="">Select a service</option>
          <option value="bridal">Bridal Makeup</option>
          <option value="evening">Evening Glam</option>
          <option value="photoshoot">Dramatic Transformation</option>
          <option value="other">Other</option>
        </select>
        <FormErrorMessage message={errors.serviceType?.message} />
      </div>

      <div>
        <label 
          htmlFor="message" 
          className="block text-brand-neutral-700 font-medium mb-2"
        >
          Additional Details
        </label>
        <textarea 
          id="message" 
          {...register('message')}
          rows={4} 
          className="w-full px-4 py-3 border border-brand-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-pink-400 transition-all"
          placeholder="Tell me about your makeup goals..."
        ></textarea>
      </div>

      <div>
        {submitError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            Consultation request submitted successfully!
          </div>
        )}

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full ${isSubmitting ? 'bg-brand-pink-300' : 'bg-brand-pink-500'} text-white py-4 rounded-lg hover:bg-brand-pink-600 transition-colors duration-300 font-semibold text-lg shadow-soft-pink`}
        >
          {isSubmitting ? 'Submitting...' : 'Book Consultation'}
        </button>
      </div>
    </form>
  );
};

export default function Home() {
  const tiktTokVids = [
    "https://www.tiktok.com/@makeupbynadia_/photo/7461728757754350854",
    "https://www.tiktok.com/@makeupbynadia_/photo/7461998927731166470",
    "https://www.tiktok.com/@makeupbynadia_/video/7475664846156041478",
  ];

  const services = [
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

  return (
    <div className="min-h-screen bg-white">
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
                  className="bg-brand-pink-500 text-white px-6 py-3 rounded-lg hover:bg-brand-pink-600 transition-colors font-semibold"
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
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmv-hrI2f7wK3y_ZpXv3t-LEgjlwn-il5YBEZK-SuMKVOTbD-c3lU2sru6urmH8PqmQc&usqp=CAU" 
                alt="Nadia - Professional Makeup Artist" 
                className="w-96 h-96 rounded-full shadow-elegant object-cover"
              />
            </div>
          </main>
        </div>
      </section>

      <section id="about" className="py-16 bg-brand-pink-50">
        <div className="container max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-16">
          <div className="w-full lg:w-1/2">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmv-hrI2f7wK3y_ZpXv3t-LEgjlwn-il5YBEZK-SuMKVOTbD-c3lU2sru6urmH8PqmQc&usqp=CAU" 
                alt="Nadia - Professional Makeup Artist" 
                className="w-full h-auto rounded-xl shadow-elegant object-cover"
              />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-brand-neutral-900 font-bold text-4xl md:text-5xl font-nadi mb-4">
              About Me
            </h2>
            <p className="text-brand-neutral-600 text-lg">
              Hi, I'm Nadia! With over 5 years of experience in professional makeup artistry, I specialize in creating stunning, personalized looks that highlight your unique beauty. From bridal makeup to photoshoots, I'm passionate about making you look and feel incredible.
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
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-elegant text-center">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="mx-auto mb-4 w-24 h-24 object-cover rounded-full"
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
