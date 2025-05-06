import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

type EllipseTheme = 'primary' | 'secondary';

type TitleTheme = 'primary' | 'secondary';

interface CardProps {
    className?: string;
    title: string;
    description: string;
    children?: React.ReactNode;
    isShowEllipse?: boolean;
    ellipseTheme?: EllipseTheme;
    titleTheme?: TitleTheme;
}

const ellipseThemeMap = {
    primary: 'absolute -bottom-1/3 right-[50%] translate-x-[50%] pointer-events-none',
    secondary: 'absolute top-2/4 right-0 pointer-events-none',
};

const titleThemeMap = {
    primary: 'sm:p-8 p-4',
    secondary: 'sm:p-8 p-4 pb-0 sm:pb-0',
};

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        title,
        description,
        children,
        isShowEllipse = true,
        ellipseTheme = 'primary',
        titleTheme = 'primary',
    } = props;
    return (
        <div className={cn(className, 'bg-gray rounded-4xl relative overflow-hidden h-full')}>
            <div className="h-full flex flex-col justify-between">
                <div className={cn('flex flex-col gap-3 text-left  ', titleThemeMap[titleTheme])}>
                    <h3 className="heading-3">{title}</h3>
                    <p className="heading-4">{description}</p>
                </div>
                {children}
                {isShowEllipse && (
                    <Image
                        src="/quickStartGuide/ellipse.svg"
                        alt="background"
                        width={500}
                        height={500}
                        className={ellipseThemeMap[ellipseTheme]}
                    />
                )}
            </div>
        </div>
    );
};
