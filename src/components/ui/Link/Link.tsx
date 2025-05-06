'use client';
import cn from 'classnames';
import { FC } from 'react';

type LinkTheme = 'primary' | 'secondary';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    theme?: LinkTheme;
    className?: string;
    smoothScroll?: boolean;
}

const linkThemes: Record<LinkTheme, string> = {
    primary: 'heading-5 hover:scale-105 transition-all duration-100 active:scale-100',
    secondary: 'heading-5  transition-all duration-100',
};

export const Link: FC<LinkProps> = (props) => {
    const { className, children, theme = 'primary', smoothScroll = true, href, onClick, ...rest } = props;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (onClick) {
            onClick(e);
        }

        // Обрабатываем якорные ссылки и применяем плавный скролл
        if (smoothScroll && href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <a className={cn(className, linkThemes[theme])} href={href} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
};
