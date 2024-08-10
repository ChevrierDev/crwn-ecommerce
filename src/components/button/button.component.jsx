import { BaseButton, GoogleSignInButton, invertedButton, ButtonSpinner } from './button.styles.jsx'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: invertedButton,
    }[buttonType]
)

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} >
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton >
    )
}

export default Button