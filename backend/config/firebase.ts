import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getDatabase } from "firebase-admin/database";

// Check for required environment variables
const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT;
const databaseURL = process.env.FIREBASE_REALTIME_DB_URL || "https://cotimer-5b23e-default-rtdb.asia-southeast1.firebasedatabase.app";

if (!serviceAccountKey) {
  console.warn("FIREBASE_SERVICE_ACCOUNT is not defined in environment variables.");
}

const serviceAccount = JSON.parse(serviceAccountKey || "{}");

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
    databaseURL: databaseURL,
  });
}

// Firestore in Native Mode
export const firestore = getFirestore();
// Firebase Realtime Database
export const db = getDatabase();
