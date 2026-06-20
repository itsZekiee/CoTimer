import { NextResponse } from "next/server";
import { rtdb } from "@/lib/firebase";

/**
 * Structured Schema for Form Submissions:
 * /inquiries
 *   /{timestamp_id}
 *     /sender_profile
 *       /first_name
 *       /last_name
 *       /email
 *     /organization_meta
 *       /size_category
 *     /submission_details
 *       /content
 *       /timestamp
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, organizationSize, inquiryDetails, submittedAt } = body;

    const { ref, push, set } = await import("firebase/database");
    const newInquiryRef = push(ref(rtdb, "inquiries"));

    await set(newInquiryRef, {
      sender_profile: {
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
      organization_meta: {
        size_category: organizationSize,
      },
      submission_details: {
        content: inquiryDetails,
        timestamp: submittedAt,
      },
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
