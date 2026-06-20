"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runtime = void 0;
exports.POST = POST;
const server_1 = require("next/server");
const firebase_1 = require("../../config/firebase");
const database_1 = require("firebase/database");
exports.runtime = 'nodejs';
async function POST(request) {
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
        const contactRef = (0, database_1.ref)(firebase_1.db, 'inquiries');
        const newContactRef = (0, database_1.push)(contactRef);
        await (0, database_1.set)(newContactRef, payload);
        return server_1.NextResponse.json({ success: true, id: newContactRef.key });
    }
    catch (error) {
        console.error('Firebase Submission Error:', error);
        return server_1.NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
