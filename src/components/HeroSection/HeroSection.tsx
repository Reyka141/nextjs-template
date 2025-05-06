'use client';
import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { AnimatedElement } from '../ui/AnimatedElement/AnimatedElement';
import { Button } from '../ui/Button/Button';
import { Page } from '../ui/Page/Page';
import { Text } from '../ui/Text/Text';

interface HeroSectionProps {
    className?: string;
}
export const HeroSection: FC<HeroSectionProps> = (props) => {
    const { className } = props;
    return (
        <Page
            className={cn(
                className,
                'min-h-[693px] bg-green-gradient rounded-4xl p-8 flex flex-col justify-between relative overflow-hidden',
            )}
            animateOnScroll={true}
            threshold={0.1}
            rootMargin="-100px 0px"
            animateOnce={true}
            id="hero-section"
        >
            <AnimatedElement animationType="fadeIn" className="flex flex-col gap-8 z-10">
                <h1 className="max-w-[948px] text-[36px] sm:text-[60px] lg:text-[80px]  leading-[100%] font-bold">
                    Launch Free-to-Play Horse Racing Games{' '}
                    <span className="relative">
                        in Minutes{' '}
                        <Image
                            src="/heroSection/line.svg"
                            priority
                            alt="arrow-down"
                            width={434}
                            height={24}
                            className="absolute bottom-0 left-0"
                        />
                    </span>
                </h1>
                <Text
                    text="Engage users, boost betting volume, and increase retention with our plug-and-play iframe solution for sportsbooks & affiliates."
                    theme="secondary"
                    className="max-w-[439px] sm:bg-inherit bg-green/50 rounded-3xl p-1"
                />
            </AnimatedElement>

            <AnimatedElement animationType="fadeIn" className="z-10" delay="0.3s">
                <Button theme="secondary">Get in Touch</Button>
            </AnimatedElement>

            <AnimatedElement
                animationType="fadeInUpBig"
                className="absolute bottom-0 right-[130px] lg:right-[300px] xl:right-[513px] sm:block hidden"
            >
                <Image
                    src="/heroSection/iPhone_1.png"
                    alt="hero-image"
                    className="max-w-[60%] lg:max-w-[80%] xl:max-w-full"
                    width={422}
                    height={479}
                />
            </AnimatedElement>

            <AnimatedElement
                animationType="fadeInRightBig"
                className="absolute bottom-0 -right-30  sm:-right-[180px] lg:-right-[100px] xl:right-[19px] "
                delay="0.2s"
            >
                <Image
                    src="/heroSection/iPhone_2.png"
                    alt="hero-image"
                    className="max-w-[80%] sm:max-w-[60%] lg:max-w-[80%] xl:max-w-full"
                    width={481}
                    height={661}
                />
            </AnimatedElement>
        </Page>
    );
};
