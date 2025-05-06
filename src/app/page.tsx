import { ContactUs } from '@/components/ContactUs/ContactUs';
import { CustomerReviews } from '@/components/CustomerReviews/CustomerReviews';
import { FeatureShowcase } from '@/components/FeatureShowcase/FeatureShowcase';
import { Header } from '@/components/Header/Header';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { PricingPlans } from '@/components/PricingPlans/PricingPlans';
import { QuickStartGuide } from '@/components/QuickStartGuide/QuickStartGuide';
import { SolutionBenefits } from '@/components/SolutionBenefits/SolutionBenefits';

export default function Home() {
    return (
        <div className="min-h-screen max-w-[1496px] px-2 sm:px-4 mx-auto mb-40">
            <Header />
            <main className="flex flex-col gap-20 md:gap-40">
                <HeroSection />
                <QuickStartGuide />
                <FeatureShowcase />
                <SolutionBenefits />
                <PricingPlans />
                <CustomerReviews />
                <ContactUs />
            </main>
            {/* Footer */}
        </div>
    );
}
