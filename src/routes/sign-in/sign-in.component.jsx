import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };


    return (
        <div>
            <h1>
                Sign in page
            </h1>
            <button onClick={logGoogleUser}>
                Sign in with google Popup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn