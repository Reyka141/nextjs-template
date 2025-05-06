import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { AnimatedElement } from '../ui/AnimatedElement/AnimatedElement';
import { Button } from '../ui/Button/Button';
import { EllipseBg } from '../ui/EllipseBg/EllipseBg';
import { Page } from '../ui/Page/Page';
import { HStack, VStack } from '../ui/Stack';
import { Text } from '../ui/Text/Text';
interface FeatureShowcaseProps {
    className?: string;
}
export const FeatureShowcase: FC<FeatureShowcaseProps> = (props) => {
    const { className } = props;
    return (
        <Page
            className={cn(className, 'overflow-hidden')}
            animateOnScroll={true}
            threshold={0.1}
            rootMargin="-100px 0px"
            animateOnce={true}
            id="feature-showcase"
        >
            <VStack gap="64" align="center">
                <VStack gap="32" align="center">
                    <Text title="Educate and entice with game variety" className="text-center max-w-[588px] mx-auto" />
                    <HStack gap="24">
                        <AnimatedElement animationType="fadeIn">
                            <Button theme="tertiary" disabled>
                                Elimination
                            </Button>
                        </AnimatedElement>
                        <AnimatedElement animationType="fadeIn" delay="1s">
                            <Button theme="tertiary" className="bg-green" disabled>
                                Pick 6
                            </Button>
                        </AnimatedElement>
                        <AnimatedElement animationType="fadeIn" delay="2s">
                            <Button theme="tertiary" disabled>
                                Cards
                            </Button>
                        </AnimatedElement>
                    </HStack>
                </VStack>
                <HStack gap="24" align="center" justify="center" className="relative mb-[110px] sm:mb-[207px]">
                    <AnimatedElement animationType="fadeInLeftBig">
                        <Image src="/featureShowcase/card_1.png" alt="featureShowcase" width={273} height={564} />
                    </AnimatedElement>
                    <AnimatedElement animationType="fadeInUpBig" delay="1s">
                        <Image src="/featureShowcase/card_2.png" alt="featureShowcase" width={273} height={564} />
                    </AnimatedElement>
                    <AnimatedElement animationType="fadeInRightBig" delay="2s">
                        <Image src="/featureShowcase/card_3.png" alt="featureShowcase" width={273} height={564} />
                    </AnimatedElement>
                    <EllipseBg theme="primary" />
                    <EllipseBg theme="secondary" className="opacity-20" />
                </HStack>
            </VStack>
        </Page>
    );
};
