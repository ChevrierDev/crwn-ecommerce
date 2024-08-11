import {
    BaseButton,
    GoogleSignInButton,
    invertedButton,
    ButtonSpinner
} from './button.styles';

import { FC, ButtonHTMLAttributes } from "react";

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
}

type ButtonTypeMap = {
    [BUTTON_TYPE_CLASSES.base]: typeof BaseButton;
    [BUTTON_TYPE_CLASSES.google]: typeof GoogleSignInButton;
    [BUTTON_TYPE_CLASSES.inverted]: typeof invertedButton;
};

const getButton = (buttonType: BUTTON_TYPE_CLASSES): ButtonTypeMap[BUTTON_TYPE_CLASSES] => {
    switch (buttonType) {
        case BUTTON_TYPE_CLASSES.google:
            return GoogleSignInButton;
        case BUTTON_TYPE_CLASSES.inverted:
            return invertedButton;
        case BUTTON_TYPE_CLASSES.base:
        default:
            return BaseButton;
    }
};

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType = BUTTON_TYPE_CLASSES.base, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton
            disabled={isLoading}
            className={`button-container ${buttonType}`}
            {...otherProps}
        >
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    );
}

export default Button;
