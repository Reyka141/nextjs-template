'use client';
import cn from 'classnames';
import { createContext, FC, HTMLAttributes, useContext, useEffect, useRef, useState } from 'react';

// Создаем контекст для передачи состояния видимости
interface AnimationContextType {
    isVisible: boolean;
}

const AnimationContext = createContext<AnimationContextType>({ isVisible: false });

// Хук для использования контекста анимации в дочерних компонентах
export const useAnimation = () => useContext(AnimationContext);

interface PageProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children: React.ReactNode;
    animateOnScroll?: boolean; // Флаг для включения анимации
    threshold?: number; // Порог видимости для запуска анимации (от 0 до 1)
    rootMargin?: string; // Отступ для корректировки момента запуска анимации
    animateOnce?: boolean; // Анимировать только один раз или при каждом появлении
}

export const Page: FC<PageProps> = (props) => {
    const {
        className,
        children,
        animateOnScroll = false,
        threshold = 0.25,
        rootMargin = '-150px 0px',
        animateOnce = true,
        ...otherProps
    } = props;

    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Если анимация по скроллу не нужна, не настраиваем обсервер
        if (!animateOnScroll) return;

        // Сохраняем текущее значение ref в локальную переменную
        const currentRef = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Отключаем наблюдение если нужна только одна анимация
                    if (animateOnce) {
                        observer.unobserve(entry.target);
                    }
                } else if (!animateOnce) {
                    // Если нужно анимировать каждый раз при появлении
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            },
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [animateOnScroll, animateOnce, threshold, rootMargin]);

    // Передаем значение видимости через контекст
    const contextValue = { isVisible };

    return (
        <section ref={sectionRef} className={cn(className, 'relative')} {...otherProps}>
            <AnimationContext.Provider value={contextValue}>{children}</AnimationContext.Provider>
        </section>
    );
};
