import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUIQwPhgaqsNnw1uiEQMXsVsPlBIivsPw",
  authDomain: "cotimer-5b23e.firebaseapp.com",
  databaseURL: "https://cotimer-5b23e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cotimer-5b23e",
  storageBucket: "cotimer-5b23e.firebasestorage.app",
  messagingSenderId: "860883491843",
  appId: "1:860883491843:web:e5e2f1c7e3d8a122aac236",
  measurementId: "G-ZYDPFS9ZFY"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);

// Analytics is only supported in browser environments
const analytics = typeof window !== 'undefined' ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;

export { app, db, rtdb, analytics };
