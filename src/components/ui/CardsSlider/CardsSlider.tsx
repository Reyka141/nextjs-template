'use client';
import HorseIcon from '@/assets/customerReviews/horse.svg';
import cn from 'classnames';
import { FC, useState } from 'react';
import { AnimatedElement } from '../AnimatedElement/AnimatedElement';
import { HStack, VStack } from '../Stack';
import { Text } from '../Text/Text';
interface Testimonial {
    id: number;
    rating: number;
    text: string;
    author: string;
    position: string;
}

const testimonials: Record<number, Testimonial[]> = {
    0: [
        {
            id: 1,
            rating: 5,
            text: "Integrating the FHR iframe was incredibly simple, and within days we saw a noticeable uplift in user engagement during race days. It's now a core part of our acquisition funnel.",
            author: 'James T.',
            position: 'Head of Marketing, BetX',
        },
        {
            id: 2,
            rating: 4,
            text: 'This plug-and-play solution gave us exactly what we needed — a fresh, gamified way to attract and retain racing fans. Our CPA dropped significantly in the first month',
            author: 'Elena M.',
            position: 'Affiliate Manager, RacePro Partners',
        },
        {
            id: 3,
            rating: 5,
            text: 'Our players love the daily Racing Cards — it adds a collectible, fun element that keeps them coming back. The custom competition feature has also been great for VIP engagement.',
            author: 'Elena M.',
            position: 'Affiliate Manager, RacePro Partners',
        },
    ],
    1: [
        {
            id: 4,
            rating: 5,
            text: 'The FHR iframe integration has significantly improved user engagement. It has become an integral part of our marketing strategy.',
            author: 'Alex P.',
            position: 'Head of Marketing, BK "Sport"',
        },
        {
            id: 5,
            rating: 4,
            text: 'The solution helped us attract new customers and increase average order value. It works especially well on race days.',
            author: 'Maria K.',
            position: 'Development Manager, "Horse Club"',
        },
        {
            id: 6,
            rating: 4,
            text: 'Our customers love the daily racing cards. It creates additional engagement and increases time spent on the site.',
            author: 'Dmitry S.',
            position: 'Product Director, "Racing Online"',
        },
    ],
    2: [
        {
            id: 7,
            rating: 5,
            text: 'Integration was quick and seamless. We saw a 30% increase in conversion in the first month.',
            author: 'Ekaterina V.',
            position: 'Sales Director, "Betting Plus"',
        },
        {
            id: 8,
            rating: 4,
            text: 'Great solution for attracting new users. We especially like the ability to create custom tournaments.',
            author: 'Ivan M.',
            position: 'Founder, "Horse World"',
        },
        {
            id: 9,
            rating: 4,
            text: 'The service helped us significantly increase the number of active users. It is now a key element of our platform.',
            author: 'Olga R.',
            position: 'CEO, "Racing 24/7"',
        },
    ],
};

interface CardsSliderProps {
    className?: string;
}

export const CardsSlider: FC<CardsSliderProps> = (props) => {
    const { className } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <VStack gap="32" align="center" className={cn(className)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                {testimonials[activeIndex].map((testimonial) => (
                    <AnimatedElement
                        key={testimonial.id}
                        animationType="fadeIn"
                        className={cn('bg-gray rounded-4xl p-8 shadow w-full min-h-[304px] flex flex-col h-full')}
                    >
                        <VStack gap="16" justify="between" className="h-full">
                            <HStack gap="2">
                                {[...Array(5)].map((_, i) => (
                                    <HorseIcon
                                        key={i}
                                        className={cn('w-4 h-4', {
                                            'text-green': i < testimonial.rating,
                                            'text-white opacity-20': i >= testimonial.rating,
                                        })}
                                    />
                                ))}
                            </HStack>
                            <Text theme="secondary" text={`"${testimonial.text}"`} className="text-white heading-5" />
                            <p className="heading-5">
                                <span className="text-green opacity-70 mr-2">{testimonial.author}</span>
                                {testimonial.position}
                            </p>
                        </VStack>
                    </AnimatedElement>
                ))}
            </div>

            <HStack gap="24" justify="center">
                {Object.keys(testimonials).map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            'w-6 h-6 rounded-full transition-colors',
                            index === activeIndex ? 'bg-green' : 'bg-gray-500',
                        )}
                        onClick={() => handleDotClick(index)}
                        aria-label={`Перейти к отзыву ${index + 1}`}
                    />
                ))}
            </HStack>
        </VStack>
    );
};
