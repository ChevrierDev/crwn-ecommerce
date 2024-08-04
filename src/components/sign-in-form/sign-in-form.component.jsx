import { useContext, useState } from "react";


import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import './sign-in-from.styles.scss';


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            )
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                default:
                    console.log(error)
            }
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({ ...formFields, [name]: value })
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();

    };


    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label='Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div >
    )
};

export default SignInForm;