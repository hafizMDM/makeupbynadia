"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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

// Services for dropdown
const services = [
  { value: 'bridal', label: 'Bridal Makeup' },
  { value: 'event', label: 'Event Makeup' },
  { value: 'photoshoot', label: 'Photoshoot Makeup' },
  { value: 'consultation', label: 'Makeup Consultation' }
];

// Consultation Form Component
export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<ConsultationFormInputs>({
    resolver: zodResolver(ConsultationSchema)
  });

  const onSubmit: SubmitHandler<ConsultationFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.message || 'An error occurred');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          Thank you! Your consultation request has been submitted successfully.
        </div>
      )}

      {submitError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          {submitError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-brand-neutral-700 mb-2">
              First Name
            </label>
            <input
              {...register('firstName')}
              id="firstName"
              type="text"
              className="w-full px-4 py-2 border border-brand-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-pink-500 text-brand-neutral-900 bg-white"
              placeholder="Your first name"
            />
            <FormErrorMessage message={errors.firstName?.message} />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-brand-neutral-700 mb-2">
              Last Name
            </label>
            <input
              {...register('lastName')}
              id="lastName"
              type="text"
              className="w-full px-4 py-2 border border-brand-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-pink-500 text-brand-neutral-900 bg-white"
              placeholder="Your last name"
            />
            <FormErrorMessage message={errors.lastName?.message} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-brand-neutral-700 mb-2">
            Email Address
          </label>
          <input
            {...register('email')}
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-brand-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-pink-500 text-brand-neutral-900 bg-white"
            placeholder="you@example.com"
          />
          <FormErrorMessage message={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-brand-neutral-700 mb-2">
            Service Type
          </label>
          <select
            {...register('serviceType')}
            id="serviceType"
            className="w-full px-4 py-2 border border-brand-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-pink-500 text-brand-neutral-900 bg-white"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          <FormErrorMessage message={errors.serviceType?.message} />
        </div>

        <div>
          <label htmlFor="message" className="block text-brand-neutral-700 mb-2">
            Additional Details (Optional)
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-brand-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-pink-500 text-brand-neutral-900 bg-white"
            placeholder="Any additional information or specific requirements"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-pink-500 text-white py-3 rounded-md hover:bg-brand-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink-500 focus:ring-opacity-50 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Book Consultation'}
          </button>
        </div>
      </form>
    </div>
  );
}
