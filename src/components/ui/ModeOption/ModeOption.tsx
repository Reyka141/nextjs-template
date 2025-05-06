import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

interface ModeOptionProps {
    className?: string;
    text: string;
    theme?: optionTheme;
}

type optionTheme = 'primary' | 'secondary' | 'tertiary';

const optionClasses: Record<optionTheme, string> = {
    primary: 'bg-[radial-gradient(122.13%_52.83%_at_51.9%_100.2%,_#183A21_0%,_#262626_42.43%)]',
    secondary: 'px-6 py-8 rounded-4xl bg-gray',
    tertiary: 'px-6 py-8 rounded-4xl bg-gray',
};

export const ModeOption: FC<ModeOptionProps> = (props) => {
    const { className, text, theme = 'primary' } = props;
    return (
        <div
            className={cn(
                className,
                'sm:px-6 sm:py-8 px-2 py-4 rounded-4xl bg-gray flex items-center sm:gap-6 gap-2 z-10 relative',
                optionClasses[theme],
            )}
        >
            <Image src="/quickStartGuide/tick-circle.svg" alt="Mode Option" width={48} height={48} />
            <h3 className="heading-3">{text}</h3>
        </div>
    );
};
