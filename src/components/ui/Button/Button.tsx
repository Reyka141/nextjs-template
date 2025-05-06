'use client';
import cn from 'classnames';
import { FC } from 'react';

type ButtonTheme = 'primary' | 'secondary' | 'secondary_inverted' | 'clear' | 'tertiary' | 'tertiary_inverted';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
}

const buttonThemes: Record<ButtonTheme, string> = {
    primary:
        'heading-6 sm:heading-4 text-green px-4 sm:px-8 py-2 sm:py-4  border-1 border-green rounded-3xl hover:bg-gray active:bg-transparent disabled:pointer-events-none',
    secondary: 'button bg-white text-black sm:px-16 px-8 sm:py-6 py-4 rounded-xl hover:scale-105 active:bg-white',
    secondary_inverted: 'heading-4 bg-white text-black sm:px-16 px-8 py-4 rounded-xl hover:scale-105 active:bg-white',
    tertiary:
        'heading-6  text-white px-4 sm:px-8 py-2 sm:py-4  border-1 border-green rounded-3xl hover:bg-green disabled:pointer-events-none',
    tertiary_inverted:
        'heading-4  text-white px-4 px-8 py-4  border-1 border-white rounded-xl hover:bg-green disabled:pointer-events-none',
    clear: 'heading-6 sm:heading-5  text-white',
};

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = 'primary', ...rest } = props;

    return (
        <button
            className={cn(
                className,
                'transition-all duration-100 active:scale-95 disabled:active:scale-100',
                buttonThemes[theme],
            )}
            {...rest}
        >
            {children}
        </button>
    );
};
