import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { AnimatedElement } from '../ui/AnimatedElement/AnimatedElement';
import { Card } from '../ui/Card/Card';
import { Page } from '../ui/Page/Page';
import { HStack, VStack } from '../ui/Stack';

interface PricingPlansProps {
    className?: string;
}
export const PricingPlans: FC<PricingPlansProps> = (props) => {
    const { className } = props;
    return (
        <Page
            animateOnScroll={true}
            threshold={0.1}
            rootMargin="-100px 0px"
            animateOnce={true}
            className={cn(className)}
            id="pricing-plans"
        >
            <VStack gap="32" align="center">
                <div className="flex flex-col gap-8 text-center">
                    <h2 className="heading-2">
                        <span className="text-green">Flexible pricing</span> that fits your growth
                    </h2>
                </div>
                <div className="flex gap-4 w-full md:flex-row flex-col">
                    <AnimatedElement animationType="fadeIn" className="flex-1">
                        <Card
                            title="CPA Model"
                            description="Pay per acquisition"
                            ellipseTheme="secondary"
                            titleTheme="secondary"
                        >
                            <HStack justify="between" max>
                                <Image
                                    src="/pricingPlans/dollar-circle.svg"
                                    className="-rotate-30 max-w-1/5"
                                    alt="free"
                                    width={109}
                                    height={109}
                                />
                                <Image src="/pricingPlans/dollar-circle.svg" className="max-w-1/2" alt="free" width={227} height={227} />
                                <Image
                                    src="/pricingPlans/dollar-circle.svg"
                                    className="rotate-21 max-w-1/5"
                                    alt="free"
                                    width={109}
                                    height={109}
                                />
                            </HStack>
                        </Card>
                    </AnimatedElement>
                    <AnimatedElement animationType="fadeIn" className="flex-1" delay="0.5s">
                        <Card
                            title="Revenue Share"
                            description="up to 13% of NGR"
                            ellipseTheme="secondary"
                            titleTheme="secondary"
                        >
                            <HStack justify="between" max>
                                <Image
                                    src="/pricingPlans/percentage-circle.svg"
                                    className="-rotate-15 max-w-1/5"
                                    alt="free"
                                    width={109}
                                    height={109}
                                />
                                <Image src="/pricingPlans/chart-square.svg" className="max-w-1/2" alt="free" width={227} height={227} />
                                <Image
                                    src="/pricingPlans/percentage-circle.svg"
                                    className="rotate-15 max-w-1/5"
                                    alt="free"
                                    width={109}
                                    height={109}
                                />
                            </HStack>
                        </Card>
                    </AnimatedElement>
                    <AnimatedElement animationType="fadeIn" className="flex-1 " delay="1s">
                        <Card
                            title="Hybrid"
                            description="low base + performance-based rewards"
                            ellipseTheme="secondary"
                            titleTheme="secondary"
                        >
                            <HStack justify="between" max>
                                <Image
                                    src="/pricingPlans/dollar-circle.svg"
                                    className="-rotate-30 max-w-1/5"
                                    alt="free"
                                    width={109}
                                    height={109}
                                />
                                <Image src="/pricingPlans/convert-card.svg" className="max-w-1/2" alt="free" width={227} height={227} />
                                <Image
                                    src="/pricingPlans/percentage-circle.svg"
                                    className="rotate-21 max-w-1/5"
                                    alt="free"
                                    width={109}
                                    height={109}
                                />
                            </HStack>
                        </Card>
                    </AnimatedElement>
                </div>
            </VStack>
        </Page>
    );
};
