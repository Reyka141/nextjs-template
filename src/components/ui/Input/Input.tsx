import cn from 'classnames';
import { FC } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    isError?: boolean;
}
export const Input: FC<InputProps> = (props) => {
    const { className, maxLength = 255, isError = false, ...rest } = props;
    return (
        <input
            className={cn(className, 'rounded-lg py-4 sm:pl-6 pl-4 w-full border focus:outline-none heading-5', {
                'border-red-300 text-red-300': isError,
                'border-white': !isError,
            })}
            maxLength={maxLength}
            {...rest}
        />
    );
};
