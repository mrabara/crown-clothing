/* eslint-disable no-unused-vars */
import {signInWithGooglePopUp, createUserFromDocumentAuth} from '../../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopUp();
        const userDoc = await createUserFromDocumentAuth(user);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    );
}

export default SignIn;
