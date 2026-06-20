import { NextResponse } from 'next/server';
import { db } from '../../config/firebase';
import { ref, push, set } from 'firebase/database';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Structured, hierarchical JSON schema for scalability
    const payload = {
      meta: {
        source: 'contact_form',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
      },
      identity: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
      },
      organization: {
        size: body.organizationSize,
        // Potential for future enrichment (industry, country, etc)
      },
      inquiry: {
        details: body.inquiryDetails,
        status: 'pending',
        priority: body.organizationSize === '500+' ? 'high' : 'normal',
      }
    };

    const contactRef = ref(db, 'inquiries');
    const newContactRef = push(contactRef);
    await set(newContactRef, payload);

    return NextResponse.json({ success: true, id: newContactRef.key });
  } catch (error: any) {
    console.error('Firebase Submission Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
