import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// const { REACT_APP_API_KEY, REACT_APP_AUTH_DOMAIN, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MESSAGING_SENDER_ID, REACT_APP_APP_ID } = process.env

const firebaseConfig = {
  apiKey: 'AIzaSyBr-saAHDhUeoCn2yUaqc123JRbVfMHPis',
  authDomain: 'hardwarestore-2118c.firebaseapp.com',
  projectId: 'hardwarestore-2118c',
  storageBucket: 'hardwarestore-2118c.appspot.com',
  messagingSenderId: '950217898644',
  appId: '1:950217898644:web:ed8b790444fe911f98d281'
}

const app = initializeApp(firebaseConfig)

export const getDataBase = getFirestore(app)
