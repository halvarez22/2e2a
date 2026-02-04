import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}

// Singleton pattern to ensure Firebase only initializes when we have a key
// and avoids errors during SSR or static build in Vercel.
const getFirebaseApp = () => {
  if (getApps().length > 0) return getApp();
  if (clientCredentials.apiKey) return initializeApp(clientCredentials);
  return null;
}

const app = getFirebaseApp();

// Use a getter for auth to prevent immediate execution error if app is null
export const auth = app ? getAuth(app) : ({} as any);
