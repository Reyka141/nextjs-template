'use client';
import Image from 'next/image';
import { FC } from 'react';
import { Menu } from '../Menu/Menu';
import { Button } from '../ui/Button/Button';
import { Link } from '../ui/Link/Link';

const headerLinks = [
    {
        label: 'How It Works',
        href: '#quick-start-guide',
    },
    {
        label: 'Game Modes Section',
        href: '#feature-showcase',
    },
    {
        label: 'Benefits',
        href: '#solution-benefits',
    },
    {
        label: 'Pricing',
        href: '#pricing-plans',
    },
];

export const Header: FC = () => {
    return (
        <header className={'flex items-center justify-between gap-4 h-[104px]'}>
            <div className="flex items-center gap-2">
                <Link href="#">
                    <Image src="/logo.svg" alt="logo" width={100} height={100} />
                </Link>
            </div>
            <nav className="items-center gap-8 hidden md:flex">
                {headerLinks.map((link) => (
                    <Link key={link.label} href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4">
                    <Button>Get in Touch</Button>
                </div>
                <Menu className="md:hidden" menuItems={headerLinks} />
            </div>
        </header>
    );
};
