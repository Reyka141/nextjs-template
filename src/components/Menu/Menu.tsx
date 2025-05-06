'use client';
import { MenuButton, Menu as MenuComponent, MenuItem, MenuItems, Transition } from '@headlessui/react';
import cn from 'classnames';
import Image from 'next/image';
import { FC, Fragment } from 'react';
import { Link } from '../ui/Link/Link';

interface MenuProps {
    className?: string;
    menuItems: { label: string; href: string }[];
}

export const Menu: FC<MenuProps> = (props) => {
    const { className, menuItems } = props;
    return (
        <div className={cn(className)}>
            <MenuComponent>
                <MenuButton className="p-2 data-[focus]:bg-gray/10 data-[hover]:bg-gray/100 rounded-xl transition-all duration-100 focus:outline-none">
                    <Image src="/burger-menu.svg" alt="Menu" width={24} height={24} />
                </MenuButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <MenuItems
                        anchor="bottom end"
                        className="flex flex-col gap-1 shadow bg-gray z-50 min-w-60 rounded-xl origin-top-right focus:outline-none p-2"
                    >
                        {menuItems.map((item) => (
                            <MenuItem key={item.label}>
                                <Link
                                    href={item.href}
                                    theme="secondary"
                                    className="p-2 data-[focus]:bg-white/10 data-[hover]:bg-white/100 rounded-xl "
                                >
                                    {item.label}
                                </Link>
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Transition>
            </MenuComponent>
        </div>
    );
};
