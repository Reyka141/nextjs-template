import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { AnimatedElement } from '../ui/AnimatedElement/AnimatedElement';
import { Button } from '../ui/Button/Button';
import { List } from '../ui/List/List';
import { Page } from '../ui/Page/Page';
import { VStack } from '../ui/Stack';
import { Text } from '../ui/Text/Text';
interface SolutionBenefitsProps {
    className?: string;
}

const checkList = [
    'Boost retention & betting frequency',
    'Plug-and-play iframe setup',
    'Full analytics & player tracking',
    'Multilingual & mobile-first',
    'Custom leagues & branded competitions',
    'Rewards engine: free bets, spins & prizes',
];

export const SolutionBenefits: FC<SolutionBenefitsProps> = (props) => {
    const { className } = props;
    return (
        <Page
            className={cn(className, 'overflow-hidden lg:pt-[237px]')}
            animateOnScroll={true}
            threshold={0.1}
            rootMargin="-100px 0px"
            animateOnce={true}
            id="solution-benefits"
        >
            <div className="min-h-[629px] bg-green-gradient rounded-4xl p-8 sm:p-16 flex flex-col justify-between relative">
                <VStack gap="64" className="z-10">
                    <AnimatedElement animationType="fadeIn">
                        <VStack gap="32">
                            <Text title="Why It Works?" theme="secondary" />
                            <List items={checkList} />
                        </VStack>
                    </AnimatedElement>

                    <AnimatedElement animationType="fadeIn" delay="1s">
                        <Button theme="secondary">Get in Touch</Button>
                    </AnimatedElement>
                </VStack>
                <AnimatedElement
                    animationType="fadeInRightBig"
                    className="absolute bottom-0 -right-80 lg:-right-40 xl:right-16"
                >
                    <Image
                        src="/solutionBenefits/phone.png"
                        alt="hero-image"
                        className="max-w-[60%] lg:max-w-[80%] xl:max-w-full"
                        width={798}
                        height={866}
                    />
                </AnimatedElement>
            </div>
        </Page>
    );
};
