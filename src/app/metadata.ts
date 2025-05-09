import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://makeupbynadia.com'),
  title: {
    default: 'Makeup by Nadia - Professional Makeup Artist',
    template: '%s | Makeup by Nadia'
  },
  description: 'Professional makeup services by Nadia. Specializing in bridal, event, and photoshoot makeup. Transform your look with expert artistry.',
  keywords: [
    'makeup artist', 
    'bridal makeup', 
    'event makeup', 
    'photoshoot makeup', 
    'professional makeup services',
    'ethiopia',
    'addis ababa'
  ],
  openGraph: {
    title: 'Makeup by Nadia - Professional Makeup Artist',
    description: 'Professional makeup services by Nadia. Specializing in bridal, event, and photoshoot makeup.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makeup by Nadia - Professional Makeup Artist',
    description: 'Professional makeup services by Nadia. Specializing in bridal, event, and photoshoot makeup.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  alternates: {
    canonical: 'https://makeupbynadia.com'
  }
};
