import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

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
