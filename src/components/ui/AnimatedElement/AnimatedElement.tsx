'use client';
import cn from 'classnames';
import { FC, ReactNode } from 'react';
import { useAnimation } from '../Page/Page';

interface AnimatedElementProps {
    className?: string;
    children: ReactNode;
    animationType:
        | 'fadeIn'
        | 'fadeInLeft'
        | 'fadeInRight'
        | 'fadeInUp'
        | 'fadeInDown'
        | 'fadeInUpBig'
        | 'fadeInDownBig'
        | 'fadeInLeftBig'
        | 'fadeInRightBig'
        | 'bounce'
        | 'flash'
        | 'pulse'
        | 'rubberBand'
        | 'shake'
        | 'headShake'
        | 'swing'
        | 'tada'
        | 'wobble'
        | 'jello'
        | 'heartBeat';
    delay?: string; // CSS задержка (например: '0.3s')
    duration?: string; // CSS продолжительность (например: '1s')
}

export const AnimatedElement: FC<AnimatedElementProps> = (props) => {
    const { className, children, animationType, delay, duration } = props;
    const { isVisible } = useAnimation();

    // Формируем классы для анимации
    const animationClass = isVisible ? `animate__animated animate__${animationType}` : 'opacity-0';

    // Формируем стили для задержки и продолжительности анимации
    const animationStyle = {
        animationDelay: delay,
        animationDuration: duration,
    };

    return (
        <div className={cn(className, animationClass)} style={animationStyle}>
            {children}
        </div>
    );
};
