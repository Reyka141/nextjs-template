'use client';
import cn from 'classnames';
import { useFormik } from 'formik';
import Image from 'next/image';
import { FC } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { AnimatedElement } from '../ui/AnimatedElement/AnimatedElement';
import { Button } from '../ui/Button/Button';
import { Input } from '../ui/Input/Input';
import { Page } from '../ui/Page/Page';
import { VStack } from '../ui/Stack';
import { Text } from '../ui/Text/Text';
interface ContactUsProps {
    className?: string;
}
export const ContactUs: FC<ContactUsProps> = (props) => {
    const { className } = props;
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            company: '',
            territory: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            company: Yup.string().required('Company is required'),
            territory: Yup.string(),
        }),
        onSubmit: async (values) => {
            const toastId = toast.loading('Submitting form...');
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/send`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                if (!response.ok) {
                    throw new Error('Failed to submit form');
                }
                toast.update(toastId, {
                    render: 'Form submitted successfully',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
            } catch (error: unknown) {
                console.error('Error submitting form:', error);
                toast.update(toastId, {
                    render: 'Error submitting form',
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                });
            }
        },
    });
    return (
        <Page
            className={cn(className, 'min-h-[629px] bg-green-gradient rounded-4xl sm:p-8 relative overflow-hidden')}
            animateOnScroll={true}
            threshold={0.1}
            rootMargin="-100px 0px"
            animateOnce={true}
            id="contact-us"
        >
            <VStack gap="64" align="center" className="sm:p-8 p-4 z-10 relative">
                <Text title="Contact Us" theme="secondary" />
                <form
                    action=""
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col sm:gap-8 gap-4 h-full w-full  md:w-[640px]"
                >
                    <div className="h-full flex flex-col md:flex-row sm:gap-8 gap-4 grow">
                        <VStack gap="24" className="h-full flex-1" justify="between" max>
                            <VStack gap="6" className="h-[120px]" max>
                                <label htmlFor="name">Name</label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your full name"
                                    maxLength={100}
                                    disabled={formik.isSubmitting}
                                    isError={!!formik.errors.name && !!formik.touched.name}
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <Text theme="error" text={formik.errors.name} />
                                )}
                            </VStack>
                            <VStack gap="6" className="h-[120px]" max>
                                <label htmlFor="email">Email</label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your email"
                                    maxLength={100}
                                    disabled={formik.isSubmitting}
                                    isError={!!formik.errors.email && !!formik.touched.email}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <Text theme="error" text={formik.errors.email} />
                                )}
                            </VStack>
                        </VStack>
                        <VStack gap="24" className="h-full flex-1" justify="between" max>
                            <VStack gap="6" className="h-[120px]" max>
                                <label htmlFor="company">Company</label>
                                <Input
                                    id="company"
                                    type="text"
                                    value={formik.values.company}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your company"
                                    maxLength={100}
                                    disabled={formik.isSubmitting}
                                    isError={!!formik.errors.company && !!formik.touched.company}
                                />
                                {formik.errors.company && formik.touched.company && (
                                    <Text theme="error" text={formik.errors.company} />
                                )}
                            </VStack>
                            <VStack gap="6" className="h-[120px]" max>
                                <label htmlFor="territory">Territory / Region</label>
                                <Input
                                    id="territory"
                                    type="text"
                                    value={formik.values.territory}
                                    onChange={formik.handleChange}
                                    placeholder="Enter your Territory / Region"
                                    maxLength={100}
                                    disabled={formik.isSubmitting}
                                    isError={!!formik.errors.territory && !!formik.touched.territory}
                                />
                                {formik.errors.territory && formik.touched.territory && (
                                    <Text theme="error" text={formik.errors.territory} />
                                )}
                            </VStack>
                        </VStack>
                    </div>
                    <VStack gap="16">
                        <Button
                            type="button"
                            theme="secondary_inverted"
                            className="w-full"
                            disabled={formik.isSubmitting}
                        >
                            Book a Demo
                        </Button>
                        <Button
                            type="submit"
                            theme="tertiary_inverted"
                            className="w-full"
                            disabled={formik.isSubmitting}
                        >
                            Request Info
                        </Button>
                    </VStack>
                </form>
            </VStack>
            <AnimatedElement animationType="fadeInLeft" className="hidden xl:block absolute bottom-3 left-0">
                <Image src="/contactUs/phone.png" alt="contactUs" className="w-full" width={245} height={506} />
            </AnimatedElement>
            <AnimatedElement animationType="fadeInRight" className="hidden xl:block absolute bottom-3 right-0">
                <Image src="/contactUs/horse.png" alt="contactUs" className="w-full" width={364} height={585} />
            </AnimatedElement>
        </Page>
    );
};
