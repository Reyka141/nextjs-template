import cn from 'classnames';
import { FC } from 'react';

type ElipseTheme = 'primary' | 'secondary';

interface EllipseBgProps {
    className?: string;
    theme?: ElipseTheme;
}

const themeClasses: Record<ElipseTheme, string> = {
    primary: 'w-[300px] h-[300px] sm:w-[605px] sm:h-[605px]',
    secondary: 'w-[400px] h-[400px] sm:w-[979px] sm:h-[979px]',
};

export const EllipseBg: FC<EllipseBgProps> = (props) => {
    const { className, theme = 'primary' } = props;
    return (
        <div
            className={cn(
                className,
                themeClasses[theme],
                'absolute z-[-1] bg-transparent border-2 border-green rounded-full top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2',
            )}
        ></div>
    );
};
