/* eslint-disable no-unused-vars */
import {initializeApp} from 'firebase/app'
import {getAuth, 
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK9IGZM9t7TE_byKC833wWFDVLrgMK8xE",
  authDomain: "crown-clothing-657e0.firebaseapp.com",
  projectId: "crown-clothing-657e0",
  storageBucket: "crown-clothing-657e0.appspot.com",
  messagingSenderId: "1024186198664",
  appId: "1:1024186198664:web:c224f9daf5258541218d3d"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});



export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserFromDocumentAuth = async (userAuth) =>{
    const userDoc = doc(db, 'users', userAuth.uid);

    console.log(userDoc);


    const userSnapshot = await getDoc(userDoc);

    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = await(userAuth);
        const createdAt = new Date();

       try{
            await setDoc({
                displayName,
                email,
                createdAt
            })
       }catch(err){
        console.log('Error creating user', err.message)
       }
    }

    return userDoc;
}

