import cn from 'classnames';
import { FC } from 'react';
import { CardsSlider } from '../ui/CardsSlider/CardsSlider';
import { Page } from '../ui/Page/Page';
import { VStack } from '../ui/Stack';
import { Text } from '../ui/Text/Text';

interface CustomerReviewsProps {
    className?: string;
}
export const CustomerReviews: FC<CustomerReviewsProps> = (props) => {
    const { className } = props;
    return (
        <Page className={cn(className)} animateOnScroll={true} id="customer-reviews">
            <VStack gap="32" align="center">
                <Text title="Testimonials" className="text-green" />
                <CardsSlider />
            </VStack>
        </Page>
    );
};
