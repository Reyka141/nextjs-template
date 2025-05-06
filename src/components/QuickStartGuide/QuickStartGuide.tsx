import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { AnimatedElement } from '../ui/AnimatedElement/AnimatedElement';
import { Card } from '../ui/Card/Card';
import { CodeSnippet } from '../ui/CodeSnippet/CodeSnippet';
import { ModeOption } from '../ui/ModeOption/ModeOption';
import { Page } from '../ui/Page/Page';

interface QuickStartGuideProps {
    className?: string;
}

export const QuickStartGuide: FC<QuickStartGuideProps> = (props) => {
    const { className } = props;

    return (
        <Page
            className={cn(className)}
            animateOnScroll={true}
            threshold={0.25}
            rootMargin="-100px 0px"
            animateOnce={true}
            id="quick-start-guide"
        >
            <div className="flex flex-col gap-8 text-center">
                <div className="flex flex-col gap-8 text-center">
                    <h2 className="heading-2">
                        Show how <span className="text-green">easy</span> it is to integrate
                    </h2>
                </div>
                <div className="flex flex-col xl:flex-row gap-6 overflow-hidden">
                    <AnimatedElement animationType="fadeInLeft" className="flex-1">
                        <Card title="1 step" description="Choose a game mode" className="h-[430px] sm:h-[550px] shadow">
                            <ModeOption
                                text="Pick 6"
                                theme="primary"
                                className="max-w-[330px] -rotate-[8deg] mb-[39px] ml-2"
                            />
                            <div className="flex justify-end sm:justify-between ml-[18px] items-center">
                                <Image
                                    src="/quickStartGuide/cup.png"
                                    alt="cup"
                                    className="h-[71px] hidden sm:block"
                                    width={70}
                                    height={70}
                                />
                                <ModeOption
                                    text="Elimination"
                                    theme="primary"
                                    className="max-w-[349px] rotate-[12deg] mb-4"
                                />
                            </div>
                            <div className="flex justify-between  items-center ml-2 mr-4">
                                <ModeOption text="Cards" theme="primary" className="max-w-[234px] -rotate-[10deg] " />

                                <Image
                                    src="/quickStartGuide/bigCheck.png"
                                    className="hidden sm:block"
                                    alt="cup"
                                    width={145}
                                    height={70}
                                />
                            </div>
                        </Card>
                    </AnimatedElement>

                    <AnimatedElement animationType="fadeInUp" className="flex-1" delay="0.2s">
                        <Card
                            title="2 step"
                            description="Embed the iframe with a single line of code"
                            className="h-[430px] sm:h-[550px] shadow"
                            isShowEllipse={false}
                        >
                            <CodeSnippet
                                textToCopy={'<iframe loading="lazy" src="https://fantasyracing.com"></iframe>'}
                                language="Html"
                            >
                                <p>
                                    {`<iframe loading=`}
                                    <span className="text-green">{`"lazy"`}</span>
                                    {` src=`}
                                    <span className="text-green">{`"https://fantasyracing.com"`}</span>
                                    {`></iframe>`}
                                </p>
                            </CodeSnippet>
                        </Card>
                    </AnimatedElement>

                    <AnimatedElement animationType="fadeInRight" className="flex-1" delay="0.4s">
                        <Card
                            title="3 step"
                            description="Start acquiring and engaging users instantly"
                            className="h-[430px] sm:h-[550px] shadow"
                        >
                            <div className="flex justify-center flex-1 mb-[200px]">
                                <Image
                                    src="/quickStartGuide/bigCheck_2.png"
                                    className="object-cover h-[135px] w-[354px] z-20"
                                    alt="start"
                                    width={354}
                                    height={135}
                                />
                            </div>
                            <div className="flex flex-col gap-9 z-10 absolute bottom-0 left-0">
                                <Image
                                    src="/quickStartGuide/circle_1.svg"
                                    alt="start"
                                    className="w-[50%] sm:w-[80%]"
                                    width={134}
                                    height={135}
                                />
                                <Image
                                    src="/quickStartGuide/circle_2.svg"
                                    alt="start"
                                    className="w-[50%] sm:w-[80%]"
                                    width={196}
                                    height={135}
                                />
                            </div>
                            <div className="flex flex-col gap-9 z-10 absolute bottom-0 right-0 scale-x-[-1]">
                                <Image
                                    src="/quickStartGuide/circle_1.svg"
                                    alt="start"
                                    className="w-[50%] sm:w-[80%]"
                                    width={134}
                                    height={135}
                                />
                                <Image
                                    src="/quickStartGuide/circle_2.svg"
                                    alt="start"
                                    className="w-[50%] sm:w-[80%]"
                                    width={196}
                                    height={135}
                                />
                            </div>
                        </Card>
                    </AnimatedElement>
                </div>
            </div>
        </Page>
    );
};
