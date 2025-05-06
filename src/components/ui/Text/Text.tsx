import cn from 'classnames';
import { FC } from 'react';

type TextTheme = 'primary' | 'secondary' | 'error';

interface TextProps {
    className?: string;
    text?: string;
    title?: string;
    theme?: TextTheme;
}

const TitleTextTheme: Record<TextTheme, string> = {
    primary: 'heading-2',
    secondary: 'heading-1',
    error: 'heading-5 text-red-300',
};

const TextTheme: Record<TextTheme, string> = {
    primary: 'text-primary',
    secondary: 'heading-5',
    error: 'heading-4 text-red-300',
};

export const Text: FC<TextProps> = (props) => {
    const { className, text, title, theme = 'primary' } = props;
    return (
        <div className={cn(className)}>
            {title && <h2 className={cn(TitleTextTheme[theme])}>{title}</h2>}
            {text && <p className={cn(TextTheme[theme])}>{text}</p>}
        </div>
    );
};
