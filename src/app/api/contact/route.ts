import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Validate that SENDGRID_API_KEY is set
if (!process.env.SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY is not set');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic server-side validation
    const { firstName, lastName, email, serviceType, message } = body;
    
    if (!firstName || !lastName || !email || !serviceType) {
      return NextResponse.json({ 
        error: 'Missing required fields' 
      }, { status: 400 });
    }

    // Prepare email
    const msg = {
      to: process.env.VERIFIED_SENDER_EMAIL || 'nadia.makeup@example.com', // Your email
      from: process.env.VERIFIED_SENDER_EMAIL || 'website@makeupbynadia.com', // Verified sender
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: `
        <strong>Consultation Request Details:</strong><br>
        Name: ${firstName} ${lastName}<br>
        Email: ${email}<br>
        Service Type: ${serviceType}<br>
        Additional Details: ${message || 'No additional details provided'}
      `
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json({ 
      message: 'Consultation request submitted successfully!' 
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ 
      error: 'Failed to submit consultation request' 
    }, { status: 500 });
  }
}
